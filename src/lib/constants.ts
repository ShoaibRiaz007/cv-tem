export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shoaibriaz.com";

export const techStack = [
  { name: "Unity" },
  { name: "Unreal Engine" },
  { name: "C#" },
  { name: "C++" },
  { name: "Firebase" },
  { name: "Google Analytics" },
  { name: "Blender" },
  { name: "Git" },
  { name: "Android SDK" },
  { name: "PHP" },
  { name: "Laravel" },
  { name: "MEAN Stack" },
];

export const services = [
  {
    id: 1,
    icon: "Gamepad2",
    title: "Game Development",
    description:
      "Building immersive gaming experiences across mobile, PC, and console platforms using Unity and Unreal Engine. From concept to deployment, I craft engaging gameplay mechanics, optimized rendering pipelines, and polished user experiences that captivate players.",
    includes: [
      "Unity 2D/3D game development",
      "Unreal Engine projects",
      "Cross-platform builds (iOS, Android, PC)",
      "Gameplay mechanics & physics systems",
      "Game UI/UX design and implementation",
    ],
  },
  {
    id: 2,
    icon: "Glasses",
    title: "AR/VR & Metaverse",
    description:
      "Developing cutting-edge AR/VR experiences and metaverse projects that push the boundaries of immersive technology. From spatial computing to virtual worlds, I build interactive experiences that blend digital and physical realities.",
    includes: [
      "AR applications (ARKit, ARCore, Vuforia)",
      "VR experiences (Oculus, SteamVR)",
      "Metaverse world building",
      "Spatial interaction design",
      "3D asset integration & optimization",
    ],
  },
  {
    id: 3,
    icon: "Gauge",
    title: "Game Optimization & Performance",
    description:
      "Ensuring smooth gameplay through deep technical optimization. I profile, diagnose, and resolve performance bottlenecks across rendering, physics, memory, and networking layers to deliver 60+ FPS experiences on target hardware.",
    includes: [
      "Frame rate optimization & profiling",
      "Memory management & asset streaming",
      "Shader & rendering pipeline optimization",
      "Platform-specific performance tuning",
      "Bug fixing & QA processes",
    ],
  },
  {
    id: 4,
    icon: "Users",
    title: "Technical Game Leadership",
    description:
      "Leading game development teams from concept to launch with clear technical direction and collaborative project management. I bridge the gap between creative vision and technical execution, ensuring projects deliver on time and exceed expectations.",
    includes: [
      "Technical architecture & code reviews",
      "Client communication & requirement gathering",
      "Sprint planning & agile game development",
      "Team mentorship & knowledge sharing",
      "Cross-functional coordination",
    ],
  },
];

export const navItems = [
  { label: "Experience", href: "/#experience" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
