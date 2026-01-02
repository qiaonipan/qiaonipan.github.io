export const siteConfig = {
  name: "Qiaoni Pan",
  title: "Backend & AI Engineer",
  description:
    "Platform-focused software engineer with experience building production systems at scale. Interested in reliability, observability, and understanding where AI systems break in real-world environments.",

  accentColor: "#1d4ed8",

  social: {
    email: "qiaonipan99@gmail.com",
    linkedin: "https://www.linkedin.com/in/qiaoni-pan",
    twitter: "https://x.com/PanQiaoni72078",
    github: "https://github.com/qiaonipan",
  },

  aboutMe: `
I am a backend and AI engineer with hands-on experience building and operating large-scale cloud systems and production-style AI pipelines.

My background is platform-focused: I enjoy working at the intersection of backend services, infrastructure, and developer experience. I care deeply about system reliability, observability, and making complex systems easier to reason about and operate.

Recently, I have been exploring AI-assisted diagnostics in distributed systems, especially where semantic search and LLMs help — and where they fail — due to state-heavy, causality-sparse production data.
  `,

  skills: [
    "Backend Engineering (Python, Go, Java)",
    "APIs & Services (FastAPI, REST)",
    "Cloud & Infrastructure (AWS, OCI, Kubernetes, Docker)",
    "Observability (Grafana, Prometheus)",
    "Data & Storage (PostgreSQL, Data Modeling)",
    "AI Systems (RAG, Vector Databases, Semantic Search)",
  ],

  projects: [
    {
      name: "90 Days: AI Backend Reborn",
      description:
        "Open-source self-learning project: daily building AI + backend systems from local semantic search to production-style RAG with Oracle 26ai vector database and OpenAI embeddings. " +
        "Focused on observability in distributed systems (HDFS logs).",
      link: "https://github.com/qiaonipan/90-days-ai-backend-reborn",
      tags: ["RAG", "Oracle 26ai", "FastAPI", "Python", "OpenAI"],
    },
  ],
  experience: [
    {
      role: "Full-Stack Software Engineer",
      company: "OU Health",
      location: "Norman, OK",
      period: "Oct 2025 – Present",
      description: [
        "Engineered secure backend systems with FastAPI and Node.js for anonymous incident workflows",
        "Redesigned PostgreSQL schemas with RBAC & encryption → 50% query latency reduction",
        "Collaborated on AI-driven analysis using VR eye-tracking and behavioral data",
      ],
    },
    {
      role: "Software Engineer IC2",
      company: "Oracle America, Inc.",
      location: "Broomfield, CO",
      period: "Feb 2024 – Aug 2025",
      description: [
        "Designed resilient cloud-native services processing 50%+ of global Oracle service requests",
        "Re-platformed legacy tools to Python/OCI → eliminated 4,000+ monthly manual tickets",
        "Authored 15+ onboarding documents → reduced onboarding time by ~50%",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Oracle",
      location: "Broomfield, CO",
      period: "May 2023 – Aug 2023",
      description: [
        "Built cloud data extraction pipelines across 49+ OCI instances → 90% throughput increase",
        "Designed ERD and data models for ML analytics → reduced downstream failures by 30%",
      ],
    },
  ],
  education: [
    {
      degree: "M.Eng. in Computer Engineering",
      school: "University of Virginia",
      period: "Aug 2022 – Dec 2023",
      gpa: "GPA: 3.61/4.0",
      focus: "Machine Learning, Distributed Systems, Cloud Computing",
    },
    {
      degree: "B.Eng. in Software Engineering",
      school: "Zhejiang Normal University",
      period: "Sep 2018 – May 2022",
      gpa: "CGPA: 89/100",
      award: "Zhejiang Provincial Government Scholarship (top 3%)",
    },
  ],
};
