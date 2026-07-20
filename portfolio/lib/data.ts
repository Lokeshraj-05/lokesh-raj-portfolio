export const profile = {
  name: "Lokesh Raj J",
  title: "AI & Data Science Engineer",
  tagline: "Building practical AI systems that solve real-world challenges.",
  location: "Kolathur, Chennai, India",
  email: "lokeshrajbalaji@gmail.com",
  phone: "+91 7358295250",
  status: "B.Tech Student specializing in Artificial Intelligence and Data Science",
  summary:
    "I am a passionate Artificial Intelligence and Data Science student with strong interests in Machine Learning, Computer Vision, Generative AI, Data Analytics, and Software Development. I enjoy building real-world intelligent systems that solve practical problems and continuously explore emerging technologies. My goal is to contribute to impactful AI innovations while continuously expanding my technical expertise and industry experience.",
};

export const socials = {
  linkedin: "https://www.linkedin.com/in/lokesh1527",
  github: "https://github.com/Lokeshraj-05",
  instagram: "https://www.instagram.com/itz__me___loki",
};

export const education = [
  {
    id: "btech",
    institution: "Rajalakshmi Institute of Technology",
    degree: "Bachelor of Technology",
    department: "Artificial Intelligence and Data Science",
    duration: "2023 – 2027",
    metric: "8.3 CGPA",
  },
  {
    id: "school",
    institution: "Everwin Vidhyashram School",
    degree: "Higher Secondary Education",
    department: "Senior Secondary (XII)",
    duration: "Completed",
    metric: "87.2%",
  },
];

export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    skills: ["Python", "JavaScript", "React", "HTML"],
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    skills: ["Machine Learning", "Computer Vision", "YOLOv8", "OpenCV", "Data Preprocessing", "PySpark"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Flask", "FastAPI", "REST APIs"],
  },
  {
    id: "databases",
    label: "Databases",
    skills: ["SQLite", "MySQL"],
  },
  {
    id: "analytics",
    label: "Data Analytics",
    skills: ["Excel", "Power BI"],
  },
  {
    id: "tools",
    label: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook", "Overleaf (LaTeX)"],
  },
];

export const experience = [
  {
    id: "cai",
    role: "CAI Research Intern",
    org: "Rajalakshmi Institute of Technology",
    duration: "Nov 2025 – Jan 2026",
    points: [
      "Fine-tuned YOLOv8 models on fisheye datasets.",
      "Built a real-time hazard scoring system.",
      "Developed geometry-based risk classification.",
      "Worked on computer vision safety systems.",
      "Improved model performance using augmentation and evaluation techniques.",
    ],
  },
];

export const projects = [
  {
    id: "resage-ai",
    featured: true,
    name: "ReSage AI",
    tag: "AI Resume Screener",
    description:
      "An AI-powered resume analysis platform that parses, scores, and evaluates resumes with actionable AI suggestions — built to help candidates understand exactly where they stand.",
    features: [
      "Resume parsing",
      "Grammar analysis",
      "Resume scoring",
      "AI suggestions",
      "SageScore generation",
      "Interactive evaluation system",
      "Professional dashboard",
    ],
    tech: ["Python", "Flask", "Gemini API", "PDFPlumber", "Textract", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "halo",
    featured: false,
    name: "HALO",
    tag: "Vision-Based Hazard Detection System",
    description:
      "A real-time hazard detection system built on YOLOv8 and fisheye camera feeds to keep construction vehicle operators aware of blind-spot risks as they happen.",
    features: [
      "Object detection",
      "Fisheye image processing",
      "Hazard scoring",
      "Risk classification",
      "Real-time prediction",
      "Construction safety monitoring",
    ],
    tech: ["YOLOv8", "Python", "OpenCV", "Computer Vision", "Machine Learning"],
  },
];

export const publication = {
  title: "ReSage AI",
  venue: "IEEE Conference Proceedings",
  badge: "IEEE",
  description:
    "A peer-reviewed publication detailing the architecture and evaluation of the ReSage AI resume screening platform, covering the scoring methodology and AI-driven feedback pipeline.",
  href: "https://ieeexplore.ieee.org/document/11448669",
};
