import TwoWalletSignIn from "@/assets/images/two-wallet/TwoWallet-SignIn.png";
import TwoWalletCardPreviewer from "@/assets/images/two-wallet/TwoWallet_CardPreviewer.png";
import TwoWalletShowcase from "@/assets/images/two-wallet/TwoWallet_Showcase.png";
import TwoWalletHome from "@/assets/images/two-wallet/TwoWallet_Home.png";

import DantioDashboard from "@/assets/images/dantio/Dantio_Dashboard.png";
import DantioCreateTransaction from "@/assets/images/dantio/Dantio_Create_Transaction.png";
import DantioMobile from "@/assets/images/dantio/Dantio_Mobile.png";
import DantioShowcase from "@/assets/images/dantio/Dantio_Showcase.png";

import SpecialTicketShowcase from "@/assets/images/special-ticket/STS_Showcase.png";

export interface Project {
  id: string;
  name: string;
  year: string;
  link: string;
  externalLink?: string;
  description: string;
  technologies: string[];
  role: string;
  features: string[];
  showcaseImage?: string;
  galleryImages?: { image: string; name: string }[];
}

export const projects: Project[] = [
  {
    id: "01",
    name: "REAL-TIME APP",
    year: "2019",
    link: "/projects/manufacturing-app/01",
    description:
      "Android application for manufacturing efficiency tracking. Developed for Logics, enabling workers to register clock-in/out events, breaks, and production package scanning. Implemented real-time efficiency calculations per worker, task, and department, supporting production optimization and performance-based bonuses.",
    technologies: ["Android", "Java", "SQLite", "REST APIs"],
    role: "Mobile Developer",
    features: [
      "Clock-in/out events",
      "Break registration",
      "Production package scanning",
      "Real-time efficiency calculations",
      "Performance-based bonuses",
    ],
  },
  {
    id: "02",
    name: "JPS LOTTERY",
    year: "2020",
    link: "/projects/jps-lottery/02",
    description:
      "React-based web platform for Costa Rica's national lottery (JPS). Developed during COVID-19 to enable digital ticket sales during lockdowns. Modernized the public-facing lottery service with secure online ticket browsing and purchasing capabilities.",
    technologies: ["React", "TypeScript", "Node.js", "Payment Integration"],
    role: "Front-End Developer",
    features: [
      "Online ticket browsing",
      "Secure digital ticket sales",
      "COVID-19 lockdown adaptation",
    ],
  },
  {
    id: "03",
    name: "SPECIAL TICKET",
    year: "2021",
    link: "/projects/special-ticket/03",
    externalLink: "https://www.specialticket.net/",
    description:
      "Comprehensive event ticketing platform for Special Ticket. Features include interactive seat selection, secure payment processing, QR-based entry validation, and real-time sales analytics dashboard for event organizers.",
    technologies: ["React", "JavaScript", "Node.js", "Vite", "Material UI"],
    role: "Front-End Developer",
    features: [
      "Interactive seat selection",
      "Secure payment processing",
      "QR-based entry validation",
      "Real-time sales analytics dashboard",
    ],
    showcaseImage: SpecialTicketShowcase,
  },
  {
    id: "04",
    name: "YUPLON",
    year: "2021",
    link: "/projects/yuplon/04",
    externalLink: "https://www.yuplon.com/",
    description:
      "Comprehensive event ticketing platform for Special Ticket. Features include interactive seat selection, secure payment processing, QR-based entry validation, and real-time sales analytics dashboard for event organizers.",
    technologies: ["React", "JavaScript", "Node.js", "Vite", "Material UI"],
    role: "Front-End Developer",
    features: [
      "Interactive seat selection",
      "Secure payment processing",
      "QR-based entry validation",
      "Real-time sales analytics dashboard",
    ],
  },
  {
    id: "05",
    name: "DANTIO",
    year: "2024",
    link: "/projects/dantio/05",
    externalLink: "https://landing.dantio.app/",
    description:
      "Payment integration platform for Costa Rican businesses. Enables centralized management of SINPE Móvil and Worldcoin payments through QR codes. Features real-time payment confirmation, business dashboard with analytics, and ongoing Binance integration for expanded crypto support.",
    technologies: [
      "React",
      ".NET",
      "Blockchain",
      "Vite",
      "Tailwind CSS",
      "Material UI",
    ],
    role: "Lead Developer & Founder",
    features: [
      "QR payments",
      "Analytics",
      "Multi-wallet",
      "Real-time confirmation",
      "Business dashboard",
      "Binance integration",
      "SINPE Móvil integration",
      "Worldcoin integration",
    ],
    showcaseImage: DantioShowcase,
    galleryImages: [
      { image: DantioDashboard, name: "Dashboard" },
      { image: DantioCreateTransaction, name: "Create Transaction" },
      { image: DantioMobile, name: "Mobile" },
    ],
  },
  {
    id: "06",
    name: "TWO WALLET",
    year: "2024",
    link: "/projects/twowallet/06",
    externalLink: "https://www.add2wallet.com/",
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
      "Shadcn UI",
      "PostgreSQL",
      "Prisma",
    ],
    role: "Lead Developer & Founder",
    features: [
      "Pass creation",
      "Analytics",
      "Segmentation",
      "Push notifications",
      "Multi-wallet",
      "Real-time usage tracking",
      "Customer data collection",
      "Marketing capabilities",
    ],
    showcaseImage: TwoWalletShowcase,
    galleryImages: [
      { image: TwoWalletCardPreviewer, name: "Card Previewer" },
      { image: TwoWalletHome, name: "Home" },
      { image: TwoWalletSignIn, name: "Sign In" },
    ],
  },
];
