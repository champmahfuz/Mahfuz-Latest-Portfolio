export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  role: string;
  confidentialNotice?: string;
  github?: string;
  liveUrl?: string;
  badge?: string;
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  status: "current" | "past";
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  result: string;
  field: string;
  details?: string;
}

export const portfolioData = {
  personal: {
    name: "Md Mahfuz Rahman",
    title: "Full Stack Web Developer",
    subtitle: "React.js • Next.js • Node.js • TypeScript Specialist",
    tagline:
      "Building high-performance, pixel-perfect and scalable web applications with around 4 years of hands-on experience.",
    shortBio:
      "Passionate Web Application Developer with around 4 years of experience crafting pixel-perfect, secure, and user-centric web applications using cutting-edge technologies like JavaScript, TypeScript, React JS, Next.js, and Node.js. Skilled in leading technical architecture, delivering scalable systems, and collaborating with cross-functional teams.",
    location: "Dhaka, Bangladesh",
    email: "mahfuzrahman517@gmail.com",
    phone: "+8801771192517",
    whatsapp: "+8801771192517",
    status: "Available for Full-time & High-Impact Roles",
    cvDownloadUrl: "/Mahfuz_Cv.pdf",
    avatar: "/profile.jpg", // Users can drop their image into public/profile.jpg
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      email: "mailto:mahfuzrahman517@gmail.com",
    },
    metrics: [
      { label: "Years of Experience", value: "4+" },
      { label: "Enterprise Projects", value: "10+" },
      { label: "Core Technologies", value: "15+" },
      { label: "Code Quality & Uptime", value: "99.9%" },
    ],
  },

  skills: {
    frontend: [
      { name: "React JS", level: 95, icon: "react" },
      { name: "Next.js (App Router)", level: 90, icon: "nextjs" },
      { name: "TypeScript", level: 88, icon: "typescript" },
      { name: "JavaScript (ES6+)", level: 95, icon: "javascript" },
      { name: "Redux / State Management", level: 85, icon: "redux" },
      { name: "React Router", level: 90, icon: "react" },
      { name: "Tailwind CSS", level: 92, icon: "tailwind" },
      { name: "Bootstrap / React Bootstrap", level: 90, icon: "bootstrap" },
      { name: "Ant Design", level: 85, icon: "antdesign" },
      { name: "HTML5 & CSS3", level: 95, icon: "html5" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "nodejs" },
      { name: "Express.js", level: 90, icon: "express" },
      { name: "RESTful API Design", level: 92, icon: "api" },
      { name: "JWT Auth & Session Mgmt", level: 90, icon: "shield" },
      { name: "Firebase (Auth / Realtime)", level: 85, icon: "firebase" },
      { name: "Payment Gateway Integration", level: 88, icon: "creditcard" },
    ],
    databases: [
      { name: "MongoDB & Mongoose", level: 90, icon: "mongodb" },
      { name: "PostgreSQL", level: 80, icon: "postgres" },
      { name: "Database Modeling & Indexing", level: 85, icon: "database" },
    ],
    devopsAndTools: [
      { name: "Git & GitHub", level: 92, icon: "git" },
      { name: "VS Code", level: 95, icon: "vscode" },
      { name: "Vercel", level: 90, icon: "vercel" },
      { name: "Render", level: 88, icon: "render" },
      { name: "Netlify", level: 88, icon: "netlify" },
      { name: "Postman API Testing", level: 90, icon: "postman" },
    ],
  },

  experiences: [
    {
      id: "symbolic-team",
      role: "Full Stack Web Developer",
      company: "Symbolic Team",
      location: "Shewrapara, Dhaka",
      period: "01/2026 – Present",
      type: "Full-Time",
      status: "current",
      summary:
        "Directly partnering with executive leadership to architect, monitor, and scale modern web applications and drive technology innovation.",
      responsibilities: [
        "Monitoring and ensuring optimal uptime and performance across mission-critical web applications.",
        "Partnered directly with the CTO to define product architecture and UI/UX design, ensuring seamless technical feasibility and user satisfaction.",
        "Conducted comprehensive technology research and presented strategic technical recommendations to leadership for cutting-edge product roadmaps.",
        "Engineered scalable microservices and integrated state-of-the-art developer workflows.",
      ],
      technologies: [
        "Next.js",
        "React JS",
        "TypeScript",
        "Node.js",
        "REST APIs",
        "Modern Cloud Tools",
      ],
    },
    {
      id: "othooy-international",
      role: "Full Stack Web Developer",
      company: "Othooy International Ltd",
      location: "Gulshan 1, Dhaka",
      period: "15/05/2022 – 30/11/2025",
      type: "Full-Time (3.5 Years)",
      status: "past",
      summary:
        "Built mission-critical analytics dashboards, self-service data querying portals, and contributed to PaaS deployment prototypes.",
      responsibilities: [
        "Designed and implemented a user-centric dashboard with dynamic interactive charts to monitor server node usage, boosting operational efficiency and faster decision-making.",
        "Developed an intuitive self-service dashboard allowing business users to query complex databases and visualize live data with zero technical bottlenecks.",
        "Collaborated closely with Back-End and DevOps teams to explore, design, and prototype a Heroku-like automated deployment platform for internal developers.",
        "Architected and maintained REST APIs and real-time backend communication protocols for high-concurrency client workloads.",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express JS",
        "MongoDB",
        "Data Visualization",
        "DevOps Concepts",
        "Render",
        "JWT",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "othooy-ota",
      title: "Othooy OTA (Online Travel Agency)",
      subtitle: "Enterprise Flight Search & Real-time Booking Engine",
      category: "Full Stack Web Application",
      badge: "Commercial Platform",
      role: "Lead Full Stack Developer",
      description:
        "A full-fledged Online Travel Agency platform designed to handle complex airline search, instant seat reservations, dynamic passenger ticketing, and secure multi-channel financial transactions.",
      features: [
        "Real-time flight search across multi-carrier databases with instant fare calculation.",
        "Interactive passenger management with customizable seating and luggage options.",
        "Seamless BRAC Bank online payment gateway integration for automated instant invoice generation.",
        "Secure JWT authentication, role-based dashboards, and Firebase push notifications for booking confirmations.",
      ],
      techStack: [
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Material UI",
        "React Router",
        "Real-time API",
        "BRAC Bank Payment Gateway",
        "JWT Token",
        "Firebase",
        "Render",
      ],
      stats: [
        { label: "Architecture", value: "MERN Stack" },
        { label: "Payment", value: "BRAC Bank Gateway" },
        { label: "Auth", value: "JWT + Firebase" },
      ],
      confidentialNotice:
        "Proprietary enterprise project engineered for Othooy International Ltd.",
      liveUrl: "https://othooy.com/",
    },
    {
      id: "bengalio-ecommerce",
      title: "Bengalio E-Commerce",
      subtitle: "Scalable Multi-Vendor Online Marketplace Platform",
      category: "Full Stack E-Commerce",
      badge: "Commercial Platform",
      role: "Full Stack Engineer",
      description:
        "A modern, robust full-stack online retail platform engineered for high-speed browsing, optimized inventory workflows, secure checkout, and real-time order tracking.",
      features: [
        "Full-featured online store with responsive catalog, instant search filter, and category hierarchies.",
        "Complete user registration, JWT-based secure session management, and password recovery.",
        "Scalable Node.js/Express RESTful backend supporting complex product variants, carts, and order workflows.",
        "Polished, mobile-first interface crafted with Tailwind CSS and Ant Design UI system.",
      ],
      techStack: [
        "React JS",
        "Node.js",
        "Express JS",
        "MongoDB",
        "Tailwind CSS",
        "Ant Design",
        "JWT Token",
        "Firebase",
      ],
      stats: [
        { label: "Performance", value: "Lightning Fast" },
        { label: "UI System", value: "Tailwind + Ant Design" },
        { label: "Security", value: "JWT Auth" },
      ],
      confidentialNotice:
        "Proprietary enterprise solution engineered for company operations.",
      liveUrl: "https://bengalio.com/",
    },
    {
      id: "othooy-eshop",
      title: "Othooy E-Shop",
      subtitle: "Online Retail & Product Discovery Platform",
      category: "Full Stack E-Commerce",
      badge: "Commercial Platform",
      role: "Full Stack Developer",
      description:
        "A full-featured e-commerce storefront for browsing authentic products, discovering product categories, and delivering a streamlined customer shopping experience.",
      features: [
        "Fully responsive catalog with instant search, filtering, and hierarchical categories.",
        "Complete registration, JWT-based session management, and password recovery.",
        "Scalable Node.js/Express REST API supporting product variants, carts, and order workflows.",
        "Mobile-first design built with Tailwind CSS and Ant Design.",
      ],
      techStack: [
        "React JS",
        "Node.js",
        "Express JS",
        "MongoDB",
        "E-Commerce",
        "REST API",
      ],
      liveUrl: "https://shop.othooy.com/",
      confidentialNotice:
        "Commercial e-commerce platform engineered for Othooy.",
    },
    {
      id: "champlex",
      title: "Champlex",
      subtitle: "Modern Online Learning Platform",
      category: "E-Learning Web Application",
      badge: "Education Platform",
      role: "Front-End Developer",
      description:
        "A responsive e-learning platform that helps learners discover courses, explore popular categories, and connect with instructors in one focused learning experience.",
      features: [
        "Course discovery across design, development, business, and science categories.",
        "Popular-course experience with lesson, rating, learner, and pricing information.",
        "Instructor onboarding, FAQ, and newsletter sections for a complete learning journey.",
      ],
      techStack: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://meek-malasada-233c23.netlify.app/",
      github: "https://github.com/champmahfuz/Education-Website-Frontend",
      stats: [
        { label: "Type", value: "E-Learning" },
        { label: "Focus", value: "Course Discovery" },
        { label: "Experience", value: "Responsive UI" },
      ],
    },
    {
      id: "champ-education",
      title: "Champ Education",
      subtitle: "Responsive Education & Course Portal",
      category: "Education Web Application",
      badge: "Learning Portal",
      role: "Front-End Developer",
      description:
        "A polished education portal designed for browsing popular courses, learning about instructors, and connecting with an education provider from any screen size.",
      features: [
        "Course catalog with pricing, ratings, duration, and module details.",
        "Dedicated sections for the platform story, expert teachers, and contact details.",
        "Mobile-friendly navigation and layouts for an accessible learning experience.",
      ],
      techStack: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
      liveUrl: "https://champ-education-ui.vercel.app/",
      github: "https://github.com/champmahfuz/Champ-Education-Ui",
      stats: [
        { label: "Type", value: "Education" },
        { label: "Courses", value: "Popular Catalog" },
        { label: "Experience", value: "Responsive UI" },
      ],
    },
  ] as Project[],

  education: [
    {
      id: "bsc-cse",
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Daffodil International University",
      year: "Completed (Passing Year: 2019)",
      result: "CGPA: 2.83 / 4.00",
      field: "Computer Science & Engineering",
      details:
        "Comprehensive coursework in Data Structures, Algorithms, Software Architecture, Database Systems, and Web Engineering.",
    },
    {
      id: "hsc",
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Collectorate School & College, Rangpur",
      year: "Passing Year: 2013",
      result: "GPA: 4.30 / 5.00",
      field: "Science",
      details: "Mathematics, Physics, Chemistry.",
    },
    {
      id: "ssc",
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Rangpur Zilla School, Rangpur",
      year: "Passing Year: 2011",
      result: "GPA: 4.75 / 5.00",
      field: "Science",
      details: "General Science, Mathematics, and Higher Mathematics.",
    },
  ] as Education[],

  extracurricular: {
    role: "Assistant Rover Mate",
    organization: "Daffodil International University Air Rover Scout Group",
    baseId: "AA4569",
    highlights: [
      "Led scout team initiatives and organized community emergency support and university safety drills.",
      "Developed leadership, rapid crisis resolution, cross-team communication, and event management abilities.",
    ],
  },
};
