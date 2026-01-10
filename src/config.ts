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
    "Backend & AI Engineer building reliable, scalable systems and AI infrastructure."
  ],
  skills: [
    "Python/Go",
    "Backend APIs (FastAPI/REST)",
    "Kubernetes",
    "Cloud Architecture",
    "RAG/Vector DB",
    "Scalable Systems"
  ],
  projects: [
    {
    name: "AI-Powered Log Intelligence Platform (Oracle 26ai RAG)",
    description: "Built a production-oriented AI log intelligence platform enabling engineers to diagnose failures via natural-language queries over large-scale system logs.",
    link: "https://github.com/qiaonipan/90-days-ai-backend-reborn/blob/main/Day12-successful-deploy/README.md",
    skills: [
      "RAG System Design",
      "Vector & Hybrid Search",
      "LLM Integration (OpenAI)",
      "Production Log Analysis",
      "AI-Assisted Troubleshooting"
    ]
    },
    {
      name: "90 Days: AI Backend Reborn",
      description: "A structured engineering deep-dive documenting the design, iteration, and trade-offs behind building production-style AI backend systems—from semantic search to full RAG pipelines. ",
      link: "https://github.com/qiaonipan/90-days-ai-backend-reborn",
      skills: [
        "AI Backend Architecture",
        "System Design Trade-offs",
        "Iterative Engineering",
        "FastAPI",
        "Python"
      ]
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
        "Developed cloud-based data extraction pipelines across 49+ OCI instances, accelerating throughput by 90%.",
        "Innovated ERD and data models for ML analytics; integrated 20+ metadata types, reducing downstream failures by 30%",
      ],
    },
    {
      company: "Education Without Barriers",
      title: "Website Team Lead",
      dateRange: "June 2021 - Oct 2022",
      bullets: [
        "Led 25+ global developers building scalable educational platforms serving 1,000+ left-behind children as technical bridge.",
      ],
    },
    {
      company: "Iflytek Co., Ltd",
      title: "Junior Technical Support Engineer Intern",
      dateRange: "July 2021 - Sep 2021",
      bullets: [
        "Built Python + Selenium automated testing tools, increasing throughput 89% and cutting manual QA effort.",
        "Analyzed AI scoring accuracy on 5,000 education assignments, reducing bugs by 30%.",
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
      ],
    },
    {
      school: "Zhejiang Normal University",
      degree: "Bachelor of Engineering in Software Engineering",
      dateRange: "Sep 2018 – May 2022",
      achievements: [
        "Award: Zhejiang Provincial Government Scholarship (top 3% of 1.258 million)",
        "Focus: Object-Oriented Programming, Data Structures, Database Systems",
      ],
    },
  ],
};
