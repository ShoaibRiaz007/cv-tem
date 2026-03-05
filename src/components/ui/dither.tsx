"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

interface LowPolyTerrainProps {
  waveSpeed: number;
  waveAmplitude: number;
  colorA: string;
  colorB: string;
  disableAnimation: boolean;
  scrollOffset: number;
}

function LowPolyTerrain({
  waveSpeed,
  waveAmplitude,
  colorA,
  colorB,
  disableAnimation,
  scrollOffset,
}: LowPolyTerrainProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const smoothedScroll = useRef(0);

  const { geometry, basePositions } = useMemo(() => {
    const aspect = viewport.width / viewport.height;
    const segsX = Math.round(48 * Math.min(aspect, 2));
    const segsY = 32;
    const geo = new THREE.PlaneGeometry(
      viewport.width * 1.2,
      viewport.height * 1.2,
      segsX,
      segsY,
    );

    const pos = geo.attributes.position;
    const basePos = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = (Math.random() - 0.5) * waveAmplitude * 2;
      pos.setZ(i, z);
      basePos[i * 3] = x;
      basePos[i * 3 + 1] = y;
      basePos[i * 3 + 2] = z;
    }

    const colA = new THREE.Color(colorA);
    const colB = new THREE.Color(colorB);
    const colors = new Float32Array(pos.count * 3);
    const halfH = viewport.height * 0.6;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const t = THREE.MathUtils.clamp((y + halfH) / (halfH * 2), 0, 1);
      const zInfluence = THREE.MathUtils.clamp(
        (z + waveAmplitude) / (waveAmplitude * 2),
        0,
        1,
      );
      const blend = t * 0.7 + zInfluence * 0.3;
      const col = colA.clone().lerp(colB, blend);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    geo.computeVertexNormals();
    pos.needsUpdate = true;

    return { geometry: geo, basePositions: basePos };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewport.width, viewport.height]);

  useFrame(({ clock }) => {
    if (disableAnimation || !meshRef.current) return;

    smoothedScroll.current += (scrollOffset - smoothedScroll.current) * 0.05;
    const parallaxRotation = smoothedScroll.current * 0.1;
    meshRef.current.rotation.set(
      -0.5 + parallaxRotation * 0.3,
      parallaxRotation * 0.15,
      0,
    );

    const t = clock.getElapsedTime() * waveSpeed;
    const pos = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];
      pos.setZ(
        i,
        bz +
          Math.sin(bx * 0.8 + t) * waveAmplitude * 0.3 +
          Math.cos(by * 0.6 + t * 0.7) * waveAmplitude * 0.2,
      );
    }
    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-0.5, 0, 0]}>
      <meshStandardMaterial
        vertexColors
        flatShading
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

interface DitherProps {
  waveSpeed?: number;
  waveAmplitude?: number;
  colorA?: string;
  colorB?: string;
  disableAnimation?: boolean;
}

export default function Dither({
  waveSpeed = 0.5,
  waveAmplitude = 0.6,
  colorA = "#0a0515",
  colorB = "#a855f7",
  disableAnimation = false,
}: DitherProps = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleVisibility = () =>
      setIsDocumentVisible(document.visibilityState === "visible");
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === "undefined")
      return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const viewH = window.innerHeight;
    const progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
    setScrollOffset(THREE.MathUtils.clamp(progress, 0, 1));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion) return;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, prefersReducedMotion]);

  const canAnimate =
    !disableAnimation && isInView && isDocumentVisible && !prefersReducedMotion;

  return (
    <div ref={containerRef} className="dither-container invert dark:invert-0">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 2, 5], fov: 60 }}
        dpr={[1, 1.25]}
        frameloop={canAnimate ? "always" : "never"}
        gl={{
          antialias: false,
          preserveDrawingBuffer: false,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight
          position={[-3, 2, -2]}
          intensity={0.3}
          color="#7c3aed"
        />
        <LowPolyTerrain
          waveSpeed={waveSpeed}
          waveAmplitude={waveAmplitude}
          colorA={colorA}
          colorB={colorB}
          disableAnimation={!canAnimate}
          scrollOffset={scrollOffset}
        />
      </Canvas>
    </div>
  );
}
