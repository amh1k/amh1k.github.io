import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Server,
  Trophy,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  name: string;
  repo: string;
  description: string;
  impact: string[];
  tags: string[];
  sourceUrl: string;
  demoUrl?: string;
  image?: string;
  visual: "mithril" | "monitor" | "algorithms" | "api" | "dsl" | "go" | "llm";
};

export type Achievement = {
  title: string;
  label: string;
  metric: string;
  description: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Abdul Moiz Hussain",
  initials: "AM",
  role: "Full-stack engineer with a backend focus",
  tagline:
    "I build full-stack products from the database and API layer through to responsive interfaces, with a bias for reliable backend systems, tested code, and measurable results.",
  email: "abdulmoizx97@gmail.com",
  phone: "+92 314 3559910",
  location: "Karachi, Pakistan",
  github: "https://github.com/amh1k",
  linkedin: "https://www.linkedin.com/in/abdulmoizhussain",
  resume: "/full_stack-2.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
];

export const stats = [
  { value: "700+", label: "Algorithmic problems solved" },
  { value: "5x", label: "Dean's List honors" },
  { value: "3rd", label: "Coders Cup 2025" },
  { value: "3.68", label: "Current GPA" },
];

export const aboutCards = [
  {
    icon: Server,
    title: "Backend engineering",
    text: "Node.js, Express, Go, Redis, BullMQ, PostgreSQL, MongoDB, authentication, queues, and production-minded APIs.",
  },
  {
    icon: Code2,
    title: "Full-stack delivery",
    text: "Next.js, React, and TypeScript interfaces connected to real data, tested workflows, and clear product boundaries.",
  },
  {
    icon: Database,
    title: "Systems foundations",
    text: "Database design, distributed workers, caching, testing, Docker, Linux, algorithms, and performance analysis.",
  },
];

export const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "Go",
  "Next.js",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Prisma",
  "BullMQ",
  "Redis",
  "Docker",
  "Vitest",
  "PyTorch",
  "TensorFlow",
  "Scikit-Learn",
  "NumPy",
  "Git",
  "Linux",
];

export const projects: Project[] = [
  {
    name: "Mithril Tiles",
    repo: "mithril-tiles",
    description:
      "Real-time multiplayer drawing and guessing game with a Go WebSocket backend, PostgreSQL persistence, and a TypeScript frontend.",
    impact: [
      "Used Go room actors for authoritative player, round, score, and game-lifecycle state.",
      "Built an authenticated Next.js BFF flow with HttpOnly session cookies and single-use WebSocket tickets.",
      "Persisted games, participants, rounds, and final scores in PostgreSQL.",
    ],
    tags: ["Go", "WebSockets", "PostgreSQL", "Next.js", "TypeScript"],
    sourceUrl: "https://github.com/amh1k/mithril-tiles",
    demoUrl: "https://mithril-tiles.vercel.app/",
    image: "/images/mithriltiles.png",
    visual: "mithril",
  },
  {
    name: "Uptime Monitor",
    repo: "keepalive-monitoring",
    description:
      "Distributed uptime monitoring system with a decoupled producer-consumer architecture for scalable heartbeat jobs.",
    impact: [
      "Processed 10+ heartbeats/sec per worker with auto-retries and failure handling.",
      "Designed queue orchestration for 3,000+ concurrent jobs.",
      "Covered heartbeat and Redis flows with 30+ Vitest unit and integration tests.",
    ],
    tags: ["TypeScript", "Node.js", "BullMQ", "Redis", "Vitest"],
    sourceUrl: "https://github.com/amh1k/keepalive-monitoring",
    image: "/images/uptime-monitoring.png",
    visual: "monitor",
  },
  {
    name: "Algorithmic Analysis and Visualization",
    repo: "Daa-Project",
    description:
      "High-performance divide-and-conquer toolkit with C++ implementations and a Next.js visualization layer.",
    impact: [
      "Built 13+ algorithms including Karatsuba and Closest Pair.",
      "Visualized recursive state changes with a TypeScript dashboard.",
      "Validated complexity with 40+ automated benchmarks on 1k+ datasets.",
    ],
    tags: ["C++", "TypeScript", "Next.js", "Framer Motion", "Algorithms"],
    sourceUrl: "https://github.com/amh1k/Daa-Project",
    demoUrl: "https://huggingface.co/spaces/amh1k/daa-algorithm-visualizer",
    image: "/images/algo-project.png",
    visual: "algorithms",
  },
  {
    name: "Durin's Code",
    repo: "DurinsCode",
    description:
      "A C++ DSL that compiles interactive text adventures into playable game engines.",
    impact: [
      "Designed language rules for rooms, actions, inventory, and branching game states.",
      "Built a compiler-style pipeline for parsing adventure definitions.",
      "Published an interactive project page through GitHub Pages.",
    ],
    tags: ["C++", "DSL", "Compiler Design", "Game Engines"],
    sourceUrl: "https://github.com/amh1k/DurinsCode",
    demoUrl: "https://amh1k.github.io/DurinsCode/",
    image: "/images/durinsCode.png",
    visual: "dsl",
  },
  {
    name: "ScadrialAPI",
    repo: "ScadrialAPI",
    description:
      "Production-minded Go REST API with PostgreSQL, token auth, RBAC, Swagger docs, migrations, and E2E tests.",
    impact: [
      "Structured a Go service around clear API boundaries and database-backed workflows.",
      "Added token authentication and role-based authorization.",
      "Documented endpoints with Swagger and migration-driven database setup.",
    ],
    tags: ["Go", "PostgreSQL", "REST API", "RBAC", "Swagger"],
    sourceUrl: "https://github.com/amh1k/ScadrialAPI",
    image: "/images/scadrial.png",
    visual: "go",
  },
];

export const achievements: Achievement[] = [
  {
    title: "Competitive Programming",
    label: "Codeforces + LeetCode + AtCoder",
    metric: "700+",
    description:
      "Achieved Pupil rank on Codeforces and solved 700+ algorithmic problems across major judges.",
    icon: Code2,
  },
  {
    title: "ICPC and Coders Cup",
    label: "Regional qualification",
    metric: "3rd",
    description:
      "Qualified for ICPC Regionals and secured 3rd place in Coders Cup 2025 through algorithmic optimization.",
    icon: Trophy,
  },
  {
    title: "AI Grand Prix",
    label: "Procom 2026",
    metric: "Champion",
    description:
      "Led EDA and feature engineering, then built an auto-tuned XGBoost pipeline that outperformed 50+ teams.",
    icon: Award,
  },
  {
    title: "AI Got Talent",
    label: "DevDay 2026",
    metric: "0.986 F1",
    description:
      "Built a sentiment analysis ensemble with class-imbalance handling and secured 4th place.",
    icon: BrainCircuit,
  },
  {
    title: "Dean's List of Honor",
    label: "FAST NUCES",
    metric: "5x",
    description:
      "Awarded Dean's List of Honor for five semesters while maintaining a 3.68 GPA.",
    icon: BadgeCheck,
  },
];

export const education = {
  icon: GraduationCap,
  school: "FAST NUCES",
  degree: "Bachelor of Science in Computer Science",
  period: "Expected Graduation: 2027",
  details: [
    "6th semester",
    "GPA: 3.68",
    "Dean's List of Honor for 5 semesters",
  ],
};

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Resume", href: profile.resume },
];

export const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "Go", "PostgreSQL", "MongoDB", "Redis", "BullMQ"],
  },
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    icon: Database,
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Python", "C++", "SQL"],
  },
  {
    icon: BrainCircuit,
    title: "Engineering tools",
    items: ["Git", "Docker", "Linux", "Vitest", "Swagger", "Prisma", "Algorithms"],
  },
];
