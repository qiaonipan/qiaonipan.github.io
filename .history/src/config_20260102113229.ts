export const siteConfig = {
  name: "Qiaoni Pan",
  title: "Backend & AI Engineer",
  description: "Portfolio website of Qiaoni Pan",
  accentColor: "#1d4ed8",
  social: {
    email: "qiaonipan99@gmail.com",
    linkedin: "https://linkedin.com/in/qiaoni-pan",
    twitter: "https://x.com/PanQiaoni72078",
    github: "https://github.com/qiaonipan",
  },
  aboutMe: [
    "Backend & AI Engineer building production AI systems where reliability actually matters.",
    "Currently building production-style AI systems for log analysis and failure diagnostics using RAG and vector databases."
  ],
  skills: [
    "Python",
    "Go",
    "Backend APIs (FastAPI, REST)",
    "Cloud & Kubernetes",
    "RAG / Vector Databases",
  ],
  projects: [
    {
      name: "90 Days: AI Backend Reborn",
      description:
        "Open-source self-learning project: daily building AI + backend systems from local semantic search to production-style RAG with Oracle 26ai vector database and OpenAI embeddings. " +
        "Focused on observability in distributed systems (HDFS logs).",
      link: "https://github.com/qiaonipan/90-days-ai-backend-reborn",
      skills: ["RAG", "Oracle 26ai", "FastAPI", "Python", "OpenAI"],
    },
  ],
  experience: [
    {
      company: "OU Health",
      title: "Full-Stack Software Engineer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Engineered secure backend systems with FastAPI and Node.js for anonymous incident workflows",
        "Redesigned PostgreSQL schemas with RBAC & encryption → 50% query latency reduction",
        "Collaborated on AI-driven analysis using VR eye-tracking and behavioral data",
      ],
    },
    {
      company: "Oracle America, Inc.",
      title: "Software Engineer IC2",
      dateRange: "Feb 2024 – Aug 2025",
      bullets: [
        "Designed resilient cloud-native services processing 50%+ of global Oracle service requests",
        "Re-platformed legacy tools to Python/OCI → eliminated 4,000+ monthly manual tickets",
        "Authored 15+ onboarding documents → reduced onboarding time by ~50%",
      ],
    },
    {
      company: "Oracle America, Inc.",
      title: "Software Engineer Intern",
      dateRange: "May 2023 – Aug 2023",
      bullets: [
        "Led a team of 25+ developers to build scalable education platforms serving 1,000+ underprivileged children.",
      ],
    },
    {
      company: "Education Without Barriers",
      title: "Website Team Lead",
      dateRange: "June 2021 - Oct 2022",
      bullets: [
        "Built cloud data extraction pipelines across 49+ OCI instances → 90% throughput increase",
        "Designed ERD and data models for ML analytics → reduced downstream failures by 30%",
      ],
    },
      {
      company: "Iflytek Co., Ltd",
      title: "Junior Technical Support Engineer Intern",
      dateRange: "July 2021 - Sep 2021",
      bullets: [
        "Built cloud data extraction pipelines across 49+ OCI instances → 90% throughput increase",
        "Designed ERD and data models for ML analytics → reduced downstream failures by 30%",
      ],
    },
  ],
  education: [
    {
      school: "University of Virginia",
      degree: "Master of Engineering in Computer Engineering",
      dateRange: "Aug 2022 – Dec 2023",
      achievements: [
        "Focus: Machine Learning, Distributed Systems, Algorithms, Cloud Computing",
        "Graduated with GPA: 3.61/4.0",
      ],
    },
    {
      school: "Zhejiang Normal University",
      degree: "Bachelor of Engineering in Software Engineering",
      dateRange: "Sep 2018 – May 2022",
      achievements: [
        "Award: Zhejiang Provincial Government Scholarship (top 3%)",
        "Focus: Object-Oriented Programming, Data Structures, Database Systems",
        "Graduated with CGPA: 89/100",
      ],
    },
  ],
};
