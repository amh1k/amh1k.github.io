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
  visual: "monitor" | "algorithms" | "api" | "dsl" | "go" | "llm";
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
  role: "Full-stack developer and backend-focused CS student",
  tagline:
    "I build scalable web apps, APIs, distributed systems, and ML experiments with a bias for clean engineering and measurable results.",
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
  { value: "700+", label: "DSA problems solved" },
  { value: "3rd", label: "Coders Cup 2025" },
  { value: "0.986", label: "F1 in AI Got Talent" },
  { value: "5x", label: "Dean's List Honor" },
];

export const aboutCards = [
  {
    icon: Server,
    title: "Backend and systems",
    text: "Node.js, Express, Go, Redis, BullMQ, PostgreSQL, MongoDB, auth, queues, and production-minded APIs.",
  },
  {
    icon: Code2,
    title: "Frontend craft",
    text: "Next.js, React, TypeScript, Tailwind CSS, state management, and responsive interfaces built for clarity.",
  },
  {
    icon: BrainCircuit,
    title: "ML and algorithms",
    text: "PyTorch, NumPy, scikit-learn, XGBoost, transformer fundamentals, DSA, and competitive programming.",
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
    visual: "algorithms",
  },
  {
    name: "StormShelf",
    repo: "StormShelf",
    description:
      "Backend-only REST API for book catalogs, reviews, favorites, media uploads, and protected user workflows.",
    impact: [
      "Built 15+ modular endpoints across 4 Mongoose models.",
      "Secured sensitive routes with dual-token JWT auth, Bcrypt, cookies, and middleware.",
      "Integrated Cloudinary and Multer for scalable book cover uploads.",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary"],
    sourceUrl: "https://github.com/amh1k/StormShelf",
    visual: "api",
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
    visual: "go",
  },
  {
    name: "MiniGPT / LLM From Scratch",
    repo: "llm-from-scratch",
    description:
      "From-scratch transformer and LLM experiments covering attention, positional encodings, and fine-tuning ideas.",
    impact: [
      "Implemented decoder-only transformer fundamentals in PyTorch.",
      "Explored causal multi-head attention, RoPE, and tensor shape verification.",
      "Studied supervised fine-tuning and instruction-following behavior.",
    ],
    tags: ["Python", "PyTorch", "Transformers", "LLMs", "NumPy"],
    sourceUrl: "https://github.com/amh1k/llm-from-scratch",
    visual: "llm",
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
    icon: Code2,
    title: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "Go"],
  },
  {
    icon: BrainCircuit,
    title: "AI and ML",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "NumPy", "XGBoost"],
  },
  {
    icon: Database,
    title: "Development",
    items: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    icon: Server,
    title: "Tools",
    items: ["Git", "Docker", "Vitest", "BullMQ", "Linux", "Redis"],
  },
];
