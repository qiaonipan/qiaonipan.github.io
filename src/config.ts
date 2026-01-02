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
      name: "Production-Style RAG System over HDFS Logs",
      description:
        "Designed and built a semantic search + RAG system over real HDFS production logs. The system retrieves semantically relevant logs and generates evidence-backed summaries, while exposing the limitations of state-oriented logs for causal diagnosis.",
      techStack: [
        "OpenAI Embeddings",
        "Oracle 26ai Vector Search",
        "FastAPI",
        "Python",
      ],
      highlights: [
        "End-to-end RAG pipeline: embedding, vector search, and generation",
        "Built over real HDFS production logs (not synthetic data)",
        "Identified state-vs-cause gaps in AI-assisted system diagnosis",
      ],
      link: "https://github.com/qiaonipan/90-days-ai-backend-reborn",
    },
    {
      name: "Cloud Automation & Platform Tooling",
      description:
        "Worked on backend automation and platform tooling for large-scale cloud environments, focusing on operational reliability and developer onboarding efficiency.",
      techStack: [
        "Python",
        "CI/CD",
        "Cloud Infrastructure",
        "Internal Tooling",
      ],
      highlights: [
        "Improved operational workflows through automation",
        "Focused on production readiness and system reliability",
      ],
    },
  ],
};
