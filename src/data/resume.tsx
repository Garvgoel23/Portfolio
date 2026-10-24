import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Dart } from "@/components/ui/svgs/dart";
import { Vite } from "@/components/ui/svgs/vite";
import { Redux } from "@/components/ui/svgs/redux";
import { Firebase } from "@/components/ui/svgs/firebase";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { MySQL } from "@/components/ui/svgs/mysql";
import { SQLite } from "@/components/ui/svgs/sqlite";
import { Bun } from "@/components/ui/svgs/bun";
import { Express } from "@/components/ui/svgs/express";
import { Firestore } from "@/components/ui/svgs/firestore";
import { AstraDB } from "@/components/ui/svgs/astradb";
import { Jira } from "@/components/ui/svgs/jira";

export const DATA = {
  name: "Garv Goel",
  initials: "GG",
  url: "https://garvgoel.vercel.app",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Information Technology and Engineering student and Software Engineer focused on full-stack web development using the MERN stack, Next.js, and TypeScript.",
  summary:
    "I'm pursuing a B.Tech in Information Technology and Engineering at Maharaja Agrasen Institute of Technology with a CGPA of 8.96. I have hands-on experience building full-stack products with React.js, Next.js, Node.js, Express.js, TypeScript, PostgreSQL, and MongoDB. I enjoy solving DSA problems in Java, have participated in and won national-level hackathons.",
  avatarUrl: "/Profile.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "C", icon: Csharp },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vite.js", icon: Vite },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "Firebase", icon: Firebase },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "SQLite", icon: SQLite },
    { name: "MySQL", icon: MySQL },
    { name: "Firestore", icon: Firestore },
    { name: "RAG", icon: Icons.openai },
    { name: "Git/GitHub", icon: Icons.github },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "goelgarv99@gmail.com",
    tel: "+919810085872",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Garvgoel23",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/garv-goel/",
        icon: Icons.linkedin,
        navbar: true,
      },
      /*  LeetCode: {
          name: "LeetCode",
          url: "https://leetcode.com/u/Parthsaarthie1909/",
          icon: Icons.leetcode,
          navbar: true,
        }, */
      X: {
        name: "X",
        url: "https://x.com/goelgarv99",
        icon: Icons.x,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1ecWKr1HlR6gdhTPe9nI10-56C2WI5xXM/view?usp=sharing",
        icon: FileTextIcon,
        navbar: true,
      },
      Phone: {
        name: "Call",
        url: "tel:+919810085872",
        icon: Icons.phone,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://rishabh-tripathi-xi.vercel.app/",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:goelgarv99@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

 /**  work: [
    {
      company: "Aaptatt - Innovation at forefront!",
      href: "https://www.aaptatt.com/",
      badges: [],
      location: "Gurugram, Haryana",
      title: "Software Engineer Intern",
      logoUrl: "/Aaptatt-logo.png",
      start: "June 2026",
      end: "Present",
      description:
        "Worked on AI-powered productivity and knowledge management applications as part of the development team. Developed and optimized intelligent features for content analysis, information retrieval, and workflow automation to improve usability, responsiveness, and overall user experience. Also contributed to applications involving resume analysis, content summarization, and decision-support systems through iterative development, testing, and optimization.",
    },
    {
      company: "Nebel Infotech",
      href: "https://nebel.co.in/",
      badges: [],
      location: "Gurugram, Haryana",
      title: "Mobile App Dev Intern",
      logoUrl: "/nebel-logo.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Worked on Syndico, a facility management system, as part of the development team. Developed and optimized Flutter-based mobile features to improve workflow management, responsiveness, and user experience. Also contributed to an Android-based cryptocurrency mobile application by integrating APIs, improving UI rendering, and enhancing real-time market data visualization.",
    },
    {
      company: "CSI-Innowave, MAIT",
      href: "https://www.csiinnowave.com/",
      badges: [],
      location: "Delhi, India",
      title: "Logistics and Hospitality Head",
      logoUrl: "/CSI.png",
      start: "December 2023",
      end: "Present",
      description:
        "Led logistics and hospitality operations for flagship events including Zypher, Uncharted, internship fairs, and a hackathon at the Microsoft Gurgaon Office. Coordinated activities for 1000+ students while collaborating across teams to ensure smooth event execution over three years.",
    },
  ],*/
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://www.mait.ac.in/",
      degree: "Bachelor of Technology in Information Technology and Engineering - CGPA: 8.96",
      logoUrl: "/mait.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Jaspal Kaur Public School",
      href: "https://www.snsidheshwar.com/",
      degree: "Senior Secondary (CBSE) - 87.2%",
      logoUrl: "/logo-326x329.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Jaspal Kaur Public School",
      href: "https://www.jkps.org/",
      degree: "Secondary (CBSE) - 92.6%",
      logoUrl: "/logo-326x329.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "SmartSplit Pro",
      href: "https://smartsplit-pro.vercel.app/",
      dates: "October 2026",
      active: true,
      description:
        "SmartSplit takes the hassle out of shared finances. AI-powered group expense sharing platform that scans receipts, splits costs flexibly, minimizes debts, and keeps every member in sync in real time. Upload a receipt and Gemini Vision extracts the merchant, tax, and line items, or describe an expense in plain English and Groq and Gemini NLP turn it into a structured entry. Perceptual hashing blocks duplicate receipts, a graph-based algorithm reduces group IOUs to the fewest settlements, and Socket.IO syncs balances, chat, and notifications live across all members.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TypeScript",
        "Gemini AI",
        "Socket.IO",
        "groq",
      ],
      links: [
        {
          type: "Website",
          href: "https://smartsplit-pro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Garvgoel23/SmartSplit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/SmartSplit.jpeg",
      video: "",
    },
    {
      title: "Grid AI",
      href: "https://traffic-gridai.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A next-generation automated traffic intelligence and violation processing frontend that visualizes real-time data from CCTV detection and OCR pipelines to enforce city traffic protocols autonomously. Features a 3-phase enforcement pipeline (CCTV Detection, OCR Recognition, Audit & Ticketing), interactive telemetry dashboards for monitoring inference times and violation logs, a Clerk-authenticated officer dashboard, and hardware-accelerated custom WebGL shader backgrounds with a glassmorphic UI.",
      technologies: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "Framer Motion",
        "Clerk",
        "Recharts",
        "WebGL",
        "React Icons",
      ],
      links: [
        
        {
          type: "Website",
          href: "https://traffic-gridai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Garvgoel23/Grid-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/GridAI.png",
      video: "",
    },
   {
      title: "SkillMatch",
      href: "https://skill--match.vercel.app",
      dates: "2026",
      active: true,
      description:
        "An intelligent HR automation platform that leverages Google's Gemini API to streamline resume screening, candidate ranking, and hiring decisions, reducing manual screening effort by over 80%. Automatically parses unstructured PDF resumes into structured data, computes weighted match scores against a job description across skills, experience, education, and certifications, and presents results on an interactive dashboard with medal-based candidate rankings, radial score charts, and AI-generated hiring insights.",
      technologies: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Google Gemini API",
        "Recharts",
        "Multer",
        "pdf-parse",
      ],
      links: [
        {
          type: "Website",
          href: "https://skill--match.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Garvgoel23/SkillMatch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/SkillMatch.png",
      video: "",
    },
    {
      title: "Netflix GPT",
      href: "https://net-flix-gpt-amber.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "A Netflix-inspired movie browsing app that combines a TMDB-powered content catalog with Google's Gemini API for AI-driven recommendations, letting users get personalized movie suggestions based on natural language prompts alongside a familiar Netflix-style browsing experience.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
        "TMDB API",
        "Google Gemini API",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://net-flix-gpt-amber.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Garvgoel23/NetFlix-GPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/NetFlix-GPT.png",
      video: "",
    }
  ],
 hackathons: [
  {
      title: "FlipkartGrid 8.0",
      dates: "July 2026",
      location: "National Level Competition, India",
      description:
        "Reached the Semi-Finals of FlipkartGrid 8.0, ranking among the top 2,000 participants out of over 1.6 lakh registrations nationwide. Cleared the Resume Screening and Online Assessment rounds (Data Framing, SQL, and DSA questions) before advancing to the Semi-Finals, which featured advanced DSA and Data Framing challenges testing algorithmic problem-solving, optimization, and system design skills.",
      image: "/Flipkart-Grid-Social-Banner.jpg",
    },
    {
      title: "InnerveHacks",
      dates: "March 2026",
      location: "Indira Gandhi Delhi Technical University for Women, Delhi",
      description:
        "Won 1st place out of 80+ teams in a 24-hour inter-college hackathon organized by Techneeds, IGDTUW, for building an AI-powered solution. Awarded a cash prize and certificate of excellence.",
      image: "/igdtuw_logo.png",
    },
    {
      title: "Apocalypse 3.0",
      dates: "February 2026",
      location: "Maharaja Agrasen Institute of Technology, Delhi",
      description:
        "Received a Special Mention for the most innovative idea in an internal college hackathon organized by Tech Vision Alliance and IEEE Smart Cities. Awarded an Appreciation Certificate for innovative problem-solving and technical proficiency.",
      image: "/mait.png",
    },
    {
      title: "Apocalypse 2.0",
      dates: "February 2025",
      location: "Maharaja Agrasen Institute of Technology, Delhi",
      description:
        "Secured the Second Runner-Up position in an internal college hackathon organized by Tech Vision Alliance and IEEE Smart Cities. Awarded a cash prize and an Appreciation Certificate for innovative problem-solving and technical proficiency.",
      image: "/mait.png",
    },
  ],
} as const;
 