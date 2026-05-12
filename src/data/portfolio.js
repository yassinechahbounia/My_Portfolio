// ── Portfolio Data ── Yassine Chahbounia

export const personal = {
  name: "Yassine Chahbounia",
  title: "Full Stack Developer",
  subtitle: "& DevOps Engineer",
  location: "Kénitra, Morocco",
  email: "ychahbounia@gmail.com",
  phone: "+212 637 287 550",
  github: "https://github.com/yassinechahbounia",
  linkedin: "https://linkedin.com/in/yassine-chahbounia",
  summary: "State Engineer in Computer Science (SUPMTI, 2025) building scalable web applications and cloud-native architectures. From Angular SPAs to AWS EKS deployments — I own the full stack.",
  taglines: [
    "Full Stack Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Angular Specialist",
    "Laravel Developer",
  ],
};

export const skills = [
  // Frontend
  { name: "Angular", level: 90, category: "Frontend" },
  { name: "React.js", level: 78, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 82, category: "Frontend" },
  // Backend
  { name: "Laravel (PHP)", level: 90, category: "Backend" },
  { name: "Node.js / Express", level: 75, category: "Backend" },
  { name: "Spring Boot (Java)", level: 68, category: "Backend" },
  { name: "REST API Design", level: 90, category: "Backend" },
  // DevOps & Cloud
  { name: "Docker", level: 88, category: "DevOps" },
  { name: "Kubernetes (EKS)", level: 80, category: "DevOps" },
  { name: "Terraform", level: 78, category: "DevOps" },
  { name: "AWS (ECS, EKS, S3, RDS...)", level: 82, category: "DevOps" },
  { name: "GitLab CI / GitHub Actions", level: 85, category: "DevOps" },
  // Databases
  { name: "MySQL / PostgreSQL", level: 85, category: "Database" },
  { name: "MongoDB", level: 65, category: "Database" },
];

export const projects = [
  {
    id: 1,
    title: "MagicFit — Cloud-Native Platform",
    description: "Smart sports & nutrition coaching platform with an interactive Magic Mirror, real-time dashboard and AI-powered recommendations. Deployed on AWS EKS with full DevOps pipeline.",
    longDescription: "Full cloud-native deployment with Terraform IaC, multi-stage Docker builds, HPA autoscaling, External Secrets Operator for AWS Secrets Manager, and CloudWatch + FluentBit monitoring.",
    tech: ["Angular 19", "Laravel 10", "MySQL", "Docker", "Kubernetes", "Terraform", "AWS EKS", "GitHub Actions"],
    github: "https://github.com/yassinechahbounia/MagicFit",
    githubDevops: "https://github.com/yassinechahbounia/MagicFit_Docker",
    featured: true,
    category: "Full Stack + DevOps",
    year: "2026",
    highlight: "Production on AWS EKS",
  },
  {
    id: 2,
    title: "DevOps Project — AWS ECS Fargate",
    description: "Complete CI/CD pipeline deploying a Full Stack application on AWS ECS Fargate with multi-AZ VPC, RDS MySQL, SQS + Lambda and a 9-stage GitLab CI pipeline.",
    longDescription: "Team project with Khadija Makkaoui. Infrastructure as Code with Terraform modules for DEV and PROD environments. ALB load balancing, private RDS, async processing via SQS/Lambda.",
    tech: ["GitLab CI", "Terraform", "AWS ECS Fargate", "ALB", "ECR", "RDS", "SQS", "Lambda", "VPC"],
    github: "https://github.com/yassinechahbounia/devops-project",
    featured: true,
    category: "DevOps & Cloud",
    year: "2026",
    highlight: "9-stage CI/CD",
  },
  {
    id: 3,
    title: "GestionProjet — Java EE App",
    description: "Enterprise web application for managing projects, teams, tasks and user roles. MVC architecture with Java EE, Hibernate ORM and MySQL deployed on Tomcat.",
    longDescription: "Academic team project implementing a full project management system with role-based access control (admin, project manager, member), task assignment and tracking.",
    tech: ["Java EE", "Hibernate", "MySQL", "Tomcat", "Bootstrap", "MVC"],
    github: "https://github.com/yassinechahbounia/Gestion_de_Projet",
    featured: false,
    category: "Full Stack",
    year: "2024",
    highlight: "Team project",
  },
  {
    id: 4,
    title: "Train Ticket Booking",
    description: "Monolithic PHP/MySQL application for managing train routes, bookings and payments with PDF ticket generation.",
    longDescription: "Full authentication system, reservation management, simulated online payment and PDF ticket generation using Bootstrap UI.",
    tech: ["PHP", "MySQL", "Bootstrap", "PDF generation"],
    github: "https://github.com/yassinechahbounia/Reservation-des-Billets",
    featured: false,
    category: "Full Stack",
    year: "2023",
    highlight: "PDF tickets",
  },
  {
    id: 5,
    title: "Keeper App — React Notes",
    description: "Google Keep-inspired note-taking application built with React hooks and real-time state management.",
    longDescription: "Reusable component architecture, conditional rendering, local storage persistence, and real-time add/delete notes with smooth animations.",
    tech: ["React.js", "JavaScript", "Vite", "CSS"],
    github: "https://github.com/yassinechahbounia",
    featured: false,
    category: "Frontend",
    year: "2025",
    highlight: "React hooks",
  },
  {
    id: 6,
    title: "Mini CI/CD Pipeline",
    description: "Lightweight CI/CD pipeline with GitHub Actions and Docker. Automated build and image publishing on every push.",
    longDescription: "Demonstrates CI/CD fundamentals: Docker containerization, automated builds triggered by git push, image publishing to container registry.",
    tech: ["GitHub Actions", "Docker", "CI/CD"],
    github: "https://github.com/yassinechahbounia/mini-ci-cd-project",
    featured: false,
    category: "DevOps",
    year: "2026",
    highlight: "Auto-deploy",
  },
];

export const experience = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "MagicFit — Final Year Project",
    period: "Feb 2025 – Jul 2025",
    location: "Kénitra, Morocco",
    description: [
      "Designed and built a complete Angular SPA + Laravel REST API architecture from scratch",
      "Implemented JWT authentication, role-based access control and interactive Magic Mirror dashboard",
      "Containerized the application with Docker and deployed cloud-native on AWS EKS with Terraform",
      "Set up full CI/CD pipeline (GitHub Actions / GitLab CI) with automated rollback",
    ],
    stack: ["Angular", "Laravel", "MySQL", "Docker", "AWS EKS", "Terraform"],
  },
  {
    type: "work",
    title: "IT Intern — Network & Security",
    company: "OCP (Office Chérifien des Phosphates)",
    period: "May – Jun 2019",
    location: "El Jadida, Morocco",
    description: [
      "Installed and configured Cisco network equipment: switches, routers, Wi-Fi access points",
      "Configured Firewall rules and IDS/IPS to secure the internal network",
      "Collaborated with systems teams on network infrastructure optimization",
      "Provided Tier-1/2 technical support to end users",
    ],
    stack: ["Cisco", "Firewall", "IDS/IPS", "TCP/IP"],
  },
];

export const education = [
  {
    degree: "State Engineer — Computer Science",
    school: "SUPMTI, Rabat",
    period: "2023 – 2025",
    highlight: "Ingénieur d'État",
  },
  {
    degree: "Bachelor's — Information Systems Engineering",
    school: "SUPMTI, Rabat",
    period: "2022 – 2023",
    highlight: "Licence",
  },
  {
    degree: "Diploma — Industrial Maintenance Technician",
    school: "OFPPT, Bejaad",
    period: "2019 – 2022",
    highlight: "Industrial Maintenance",
  },
  {
    degree: "Diploma — Computer Networks",
    school: "ISTA NTIC, Bejaad",
    period: "2017 – 2019",
    highlight: "DTS · CCNA 1–4",
  },
  {
    degree: "Baccalaureate (Sciences)",
    school: "Lycée El Farabi, Bejaad",
    period: "2016 – 2017",
    highlight: "BAC SVT",
  },
];

export const certifications = [
  {
    title: "DevOps & Cloud AWS",
    issuer: "Simplon Maghreb",
    date: "Mar 2026",
    description: "AWS architecture, Docker, Kubernetes (EKS), Terraform, CI/CD, CloudWatch",
    badge: "AWS",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2026",
    description: "HTML5, CSS3, JavaScript, React, Node.js, PostgreSQL, Web3",
    badge: "UDEMY",
  },
  {
    title: "Network Security",
    issuer: "Cisco / CCNA",
    date: "2024",
    description: "Network security, firewall, IDS/IPS, protocols",
    badge: "CISCO",
  },
  {
    title: "CCNA 1, 2, 3 & 4",
    issuer: "Cisco",
    date: "2019",
    description: "TCP/IP, routing, switching, VPN, OSPF, EIGRP, VLANs",
    badge: "CISCO",
  },
  {
    title: "Python — Programming Basics",
    issuer: "OpenClassrooms",
    date: "2023",
    description: "Python fundamentals, scripting, data structures",
    badge: "OC",
  },
  {
    title: "Relational Databases with SQL",
    issuer: "OpenClassrooms",
    date: "2023",
    description: "SQL, PostgreSQL, database design, normalization",
    badge: "OC",
  },
];

export const techMarquee = [
  "Angular", "Laravel", "React", "Node.js", "Docker", "Kubernetes",
  "Terraform", "AWS", "TypeScript", "MySQL", "PostgreSQL", "Spring Boot",
  "GitLab CI", "GitHub Actions", "Linux", "Redis", "MongoDB", "JWT",
];
