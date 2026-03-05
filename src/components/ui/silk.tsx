"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CrystalProps {
  position: [number, number, number];
  size: number;
  color: string;
  rotationSpeed: number;
  floatSpeed: number;
  floatRange: number;
  motionAmount: number;
  wireframe?: boolean;
  geometryType: "icosahedron" | "octahedron";
}

function Crystal({
  position,
  size,
  color,
  rotationSpeed,
  floatSpeed,
  floatRange,
  motionAmount,
  wireframe = false,
  geometryType,
}: CrystalProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const baseY = position[1];
  const smoothedPointer = useRef(new THREE.Vector2(0, 0));

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();

    smoothedPointer.current.lerp(pointer, 0.03);
    const px = smoothedPointer.current.x;
    const py = smoothedPointer.current.y;

    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.005 * motionAmount;
      meshRef.current.rotation.y += rotationSpeed * 0.008 * motionAmount;
      meshRef.current.position.y =
        baseY +
        Math.sin(t * floatSpeed) * floatRange * motionAmount +
        py * 0.3 * motionAmount;
      meshRef.current.position.x =
        position[0] +
        Math.sin(t * floatSpeed * 0.7 + 1.5) * floatRange * 0.3 * motionAmount +
        px * 0.4 * motionAmount;
    }
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
      wireRef.current.position.copy(meshRef.current.position);
    }
  });

  const Geometry =
    geometryType === "icosahedron" ? (
      <icosahedronGeometry args={[size, 1]} />
    ) : (
      <octahedronGeometry args={[size, 0]} />
    );

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        {Geometry}
        <meshStandardMaterial
          color={color}
          flatShading
          roughness={0.5}
          metalness={0.4}
          transparent
          opacity={0.85}
        />
      </mesh>
      {wireframe && (
        <mesh ref={wireRef} position={position}>
          {geometryType === "icosahedron" ? (
            <icosahedronGeometry args={[size * 1.02, 1]} />
          ) : (
            <octahedronGeometry args={[size * 1.02, 0]} />
          )}
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>
      )}
    </group>
  );
}

interface FloatingCrystalsProps {
  speed: number;
  color: string;
  motionAmount: number;
  scale: number;
}

function FloatingCrystals({
  speed,
  color,
  motionAmount,
  scale,
}: FloatingCrystalsProps) {
  const crystals: Omit<CrystalProps, "motionAmount">[] = [
    {
      position: [-2.5 * scale, 0.5, -1],
      size: 0.8 * scale,
      color,
      rotationSpeed: speed * 0.8,
      floatSpeed: speed * 0.3,
      floatRange: 0.4,
      wireframe: true,
      geometryType: "icosahedron",
    },
    {
      position: [2 * scale, -0.3, -0.5],
      size: 0.6 * scale,
      color: "#06b6d4",
      rotationSpeed: speed * 1.2,
      floatSpeed: speed * 0.4,
      floatRange: 0.3,
      wireframe: false,
      geometryType: "octahedron",
    },
    {
      position: [0, 0.8, -2],
      size: 1.1 * scale,
      color,
      rotationSpeed: speed * 0.5,
      floatSpeed: speed * 0.2,
      floatRange: 0.5,
      wireframe: true,
      geometryType: "icosahedron",
    },
    {
      position: [-1 * scale, -0.6, 0.5],
      size: 0.45 * scale,
      color: "#7c3aed",
      rotationSpeed: speed * 1.5,
      floatSpeed: speed * 0.5,
      floatRange: 0.25,
      wireframe: false,
      geometryType: "octahedron",
    },
    {
      position: [3 * scale, 0.4, -1.5],
      size: 0.55 * scale,
      color,
      rotationSpeed: speed * 0.9,
      floatSpeed: speed * 0.35,
      floatRange: 0.35,
      wireframe: true,
      geometryType: "icosahedron",
    },
    {
      position: [-3.2 * scale, -0.2, -2.5],
      size: 0.7 * scale,
      color: "#06b6d4",
      rotationSpeed: speed * 0.6,
      floatSpeed: speed * 0.25,
      floatRange: 0.45,
      wireframe: false,
      geometryType: "octahedron",
    },
  ];

  return (
    <>
      {crystals.map((c, i) => (
        <Crystal key={i} {...c} motionAmount={motionAmount} />
      ))}
    </>
  );
}

interface SilkProps {
  speed?: number;
  color?: string;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
}

const Silk = ({
  speed = 5,
  color = "#a855f7",
  noiseIntensity = 1.5,
  scale = 1,
}: SilkProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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

  const canAnimate = isInView && isDocumentVisible && !prefersReducedMotion;
  const motionAmount = canAnimate ? noiseIntensity : 0;

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.25]}
        frameloop={canAnimate ? "always" : "never"}
        gl={{
          antialias: false,
          preserveDrawingBuffer: false,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[3, 4, 5]} intensity={0.6} />
        <directionalLight
          position={[-2, -1, 3]}
          intensity={0.3}
          color="#7c3aed"
        />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#a855f7" />
        <FloatingCrystals
          speed={speed}
          color={color}
          motionAmount={motionAmount}
          scale={scale}
        />
      </Canvas>
    </div>
  );
};

export default Silk;
