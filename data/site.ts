// Edit this file to personalise the whole site.
export interface Stat { value: string; label: string }
export interface Profile {
  name: string; role: string; tagline: string; intro: string; location: string; status: string;
  email: string; resume: string; links: { label: string; href: string }[]; skills: string[];
  stats: Stat[];
  images: { hero: string; about: string; gallery: string[] };
}
export interface Project {
  slug: string; title: string; year: string; type: string; summary: string;
  role: string; highlights: string[]; stack: string[]; demo?: string; code?: string;
}
export interface Principle { title: string; text: string }

export const profile: Profile = {
  name: "Christian Raven Flores",
  role: "Web Developer",
  tagline: "I build fast, bold websites and web apps that people remember.",
  intro: "I design and build clear, fast websites and web apps. I like simple interfaces that are easy to use and easy to maintain.",
  location: "Davao City, PH",
  status: "Open for work",
  email: "rvflores45@gmail.com",
  resume: "/resume.pdf", // put your file at public/resume.pdf
  links: [
    { label: "GitHub", href: "https://github.com/its-rashi" },
    { label: "Facebook", href: "https://www.facebook.com/NotNow29" },
  ],
  skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS", "Tailwind", "Figma"],
  stats: [
    { value: "5+", label: "Years experience" },
    { value: "30+", label: "Projects shipped" },
    { value: "100%", label: "Responsive builds" },
    { value: "24h", label: "Reply time" },
  ],
  // Replace these with your own photos in /public/images (jpg, png or webp all work)
  images: {
    hero: "/images/IMG_0705.jpg",
    about: "/images/IMG_0870.JPG",
    gallery: ["/images/IMG_0681.jpg", "/images/IMG_0636.jpg", "/images/IMG_0870.JPG"],
  },
};

export const projects: Project[] = [
  { slug: "task-board", title: "Task Board", year: "2026", type: "Web app",
    summary: "A drag-and-drop task manager for small teams, with shared boards and live updates.",
    role: "Design and full-stack development",
    highlights: ["Real-time updates across devices", "Drag-and-drop boards and lists", "Team accounts with shared access"],
    stack: ["Next.js", "PostgreSQL", "WebSockets"], demo: "#", code: "https://github.com/yourname/task-board" },
  { slug: "local-market", title: "Local Market", year: "2025", type: "E-commerce",
    summary: "An online storefront for local sellers with inventory tracking and simple checkout.",
    role: "Front-end and payments integration",
    highlights: ["Simple checkout in three steps", "Inventory tracking for sellers", "Fast on slow mobile connections"],
    stack: ["React", "Node.js", "Stripe"], demo: "#", code: "https://github.com/yourname/local-market" },
  { slug: "weather-notes", title: "Weather Notes", year: "2025", type: "Mobile-first site",
    summary: "A forecast journal that lets people log how the weather affected their day.",
    role: "Solo project",
    highlights: ["Daily forecast from a public API", "Journal entries saved per day", "Designed phone-first"],
    stack: ["Next.js", "REST API", "CSS"], demo: "#", code: "https://github.com/yourname/weather-notes" },
  { slug: "studio-site", title: "Studio Site", year: "2024", type: "Website",
    summary: "A fast marketing site for a design studio, built for accessibility and SEO.",
    role: "Development and performance tuning",
    highlights: ["Top scores in Lighthouse audits", "Content written in MDX", "Fully keyboard accessible"],
    stack: ["Next.js", "MDX"], demo: "#" },
];

export const principles: Principle[] = [
  { title: "Start simple", text: "I begin with the smallest version that works, then improve it with real feedback." },
  { title: "Build for everyone", text: "Pages should load fast, work on any screen size and be usable with a keyboard." },
  { title: "Keep it maintainable", text: "Clear names and small components make code easy for the next person to change." },
];
