import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import images1 from "../assets/achievements/images1.jpg";
import images2 from "../assets/achievements/images2.jpg";
import images3 from "../assets/achievements/images3.jpg";

export const HERO_CONTENT = `I'm a Software Engineer specializing in Full-Stack Development, Backend Engineering, and AI-powered applications. I build scalable web platforms using Next.js, NestJS, TypeScript, PostgreSQL, and MongoDB while integrating Large Language Models through LangChain, LangGraph, Retrieval-Augmented Generation (RAG), and agentic workflows. My passion lies in developing intelligent, production-ready systems that combine modern software engineering with AI to solve real-world problems.`;

export const ABOUT_TEXT = `I'm a Software Engineer with a strong foundation in backend architecture, full-stack web development, and AI application engineering. My experience spans building scalable APIs, collaborative web platforms, and LLM-powered applications using technologies such as NestJS, Next.js, React, PostgreSQL, MongoDB, and AWS. I enjoy designing clean system architectures, integrating AI capabilities with existing applications, and continuously exploring emerging technologies in the GenAI ecosystem. I'm passionate about writing maintainable code, solving challenging engineering problems, and building products that create real value for users.`;

export const EXPERIENCES = [
  {
    year: "March 2026 - June 2026",
    role: "Programmer Analyst Intern",
    company: "Cognizant Technology Solutions",
    description:
      "Engineered enterprise-scale data warehouse solutions using AWS Redshift and developed event-driven ETL pipelines with AWS Glue, Lambda, and S3 to automate large-scale data ingestion, transformation, and analytics workflows.",
    technologies: [
      "AWS Redshift",
      "AWS Glue",
      "AWS Lambda",
      "AWS S3",
      "SQL",
      "Python",
    ],
  },
  {
    year: "July 2025 - Dec 2025",
    role: "Software Development Engineer Intern",
    company: "ADRIG AI Technologies Pvt. Ltd.",
    description:
      "Built scalable backend services, integrated Microsoft Graph and Shopify APIs, optimized database performance, and developed intelligent OCR and document-processing systems for enterprise automation.",
    technologies: [
      "NestJS",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Microsoft Graph API",
      "Shopify API",
      "Azure",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI Workspace",
    image: project1,
    description:
      "A collaborative AI-powered workspace where users can chat with documents, manage projects, build AI agents, and perform intelligent document processing using RAG, LangChain, and OpenAI.",
    technologies: [
      "Next.js",
      "NestJS",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "BullMQ",
      "PostgreSQL",
    ],
  },
  {
    title: "RAG-Based Document Q&A Assistant",
    image: project2,
    description:
      "Built a Retrieval-Augmented Generation pipeline that processes PDFs and documents, stores embeddings in pgvector, retrieves relevant context, and generates grounded AI responses with citations.",
    technologies: [
      "LangChain",
      "OpenAI API",
      "pgvector",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "Code-Sync",
    image: project3,
    description:
      "A real-time collaborative code editor supporting multiple users with synchronized editing, operational-transform-style conflict resolution, WebSocket communication, and live presence indicators.",
    technologies: [
      "React",
      "Node.js",
      "Socket.IO",
      "Express",
      "MongoDB",
    ],
  },
  {
    title: "Enterprise OCR & Document Processing Platform",
    image: project4,
    description:
      "Designed and developed an intelligent OCR-based document processing system capable of extracting, validating, and processing enterprise documents using AI-assisted parsing pipelines.",
    technologies: [
      "Python",
      "OpenCV",
      "OCR",
      "NestJS",
      "PostgreSQL",
    ],
  },
];

export const ACHIVEMENTS = [
  {
    title: "DATA-THON",
    image: images1,
    description:
      "Won - II price for developing supply chain using prediction and allocation for farmer network",
      technologies: ["Keras", "Sci-Kit Learn", "Matplotlib", "ML Algorithms"],
  },
  {
    title: "Hack-a-Bot",
    image: images2,
    description:
      "Build a bot for voice-letter for Bank loan Approval automation using the UiPath tool.",
    technologies: ["Studio", "Orchestrator", "Robot", "Process Mining"],
  },
  
];

export const CONTACT = {
  address: "124, Vanjinathan St, Manikandhan Nagar, Kundrathur, Chennai - 69 ",
  phoneNo: "+91 85548 17390 ",
  email: "vmsugrish2004@gmail.com",
};
