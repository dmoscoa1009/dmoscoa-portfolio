export interface Project {
  id: string;
  name: string;
  year: string;
  link: string;
  description: string;
  technologies: string[];
  role: string;
}

export const projects: Project[] = [
  {
    id: "01",
    name: "REAL-TIME MANUFACTURING APP",
    year: "2019",
    link: "/projects/manufacturing-app",
    description:
      "Android application for manufacturing efficiency tracking. Developed for Logics, enabling workers to register clock-in/out events, breaks, and production package scanning. Implemented real-time efficiency calculations per worker, task, and department, supporting production optimization and performance-based bonuses.",
    technologies: ["Android", "Java", "SQLite", "REST APIs"],
    role: "Mobile Developer",
  },
  {
    id: "02",
    name: "JPS LOTTERY",
    year: "2020",
    link: "/projects/jps-lottery",
    description:
      "React-based web platform for Costa Rica's national lottery (JPS). Developed during COVID-19 to enable digital ticket sales during lockdowns. Modernized the public-facing lottery service with secure online ticket browsing and purchasing capabilities.",
    technologies: ["React", "TypeScript", "Node.js", "Payment Integration"],
    role: "Front-End Developer",
  },
  {
    id: "03",
    name: "SPECIAL TICKET",
    year: "2021",
    link: "/projects/special-ticket",
    description:
      "Comprehensive event ticketing platform for Special Ticket. Features include interactive seat selection, secure payment processing, QR-based entry validation, and real-time sales analytics dashboard for event organizers.",
    technologies: ["React", "JavaScript", "Node.js", "Vite", "Material UI"],
    role: "Front-End Developer",
  },
  {
    id: "04",
    name: "DANTIO",
    year: "2024",
    link: "/projects/dantio",
    description:
      "Payment integration platform for Costa Rican businesses. Enables centralized management of SINPE Móvil and Worldcoin payments through QR codes. Features real-time payment confirmation, business dashboard with analytics, and ongoing Binance integration for expanded crypto support.",
    technologies: [
      "React",
      "Node.js",
      "Web3",
      "Blockchain",
      "Vite",
      "Tailwind CSS",
    ],
    role: "Lead Developer",
  },
  {
    id: "05",
    name: "TWOWALLET",
    year: "2024",
    link: "/projects/twowallet",
    description:
      "SaaS platform for digital wallet pass management. Enables businesses to create and manage various Google Wallet and Apple Wallet passes including gift cards, loyalty programs, and event tickets. Features real-time usage tracking, customer data collection, and marketing capabilities through push notifications.",
    technologies: [
      "React",
      "Node.js",
      "Google Wallet API",
      "Apple Wallet API",
      "NestJS",
      "Vite",
      "Tailwind CSS",
    ],
    role: "Lead Developer",
  },
];
