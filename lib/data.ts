export const siteConfig = {
  name: "Ali Gholami",
  brand: "aliore",
  brandFull: "Aliore",
  role: "Web Designer & AI Specialist",
  tagline: "Building intelligent digital experiences",
  email: "aliore.dev@gmail.com",
  github: "https://github.com/alioredev",
  githubHandle: "github.com/alioredev",
  linkedin: "https://www.linkedin.com/in/ali-gholami-8809x",
  linkedinHandle: "linkedin.com/in/ali-gholami-8809x",
  telegram: "https://t.me/aliore_dev",
  telegramHandle: "t.me/aliore_dev",
  rubika: "https://rubika.ir/aliore_dev",
  rubikaHandle: "@aliore_dev",
  location: "Based in Iran · Open to remote opportunities worldwide",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://aliore.ir",
};

export const stats = [
  { value: "1+", labelKey: "stats.years" },
  { value: "4+", labelKey: "stats.projects" },
  { value: "2",  labelKey: "stats.languages" },
  { value: "1",  labelKey: "stats.brand" },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Frontend",     skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "AI & Backend", skills: ["Python", "AI API Integration", "FastAPI", "LangChain", "PostgreSQL"] },
  { category: "Design",       skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing"] },
  { category: "Tools",        skills: ["Git", "GitHub", "Docker", "Vercel", "Linux"] },
  { category: "Languages",    skills: ["Persian", "English", "German", "French", "Chinese"] },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionFa: string;
  descriptionZh: string;
  descriptionFr: string;
  descriptionDe: string;
  stack: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Aliore Portfolio",
    description: "Personal brand portfolio website built with Next.js 15, Three.js 3D and Framer Motion.",
    descriptionFa: "وبسایت پورتفولیو برند شخصی با Next.js 15، Three.js سه‌بعدی و Framer Motion.",
    descriptionZh: "使用 Next.js 15、Three.js 3D 和 Framer Motion 构建的个人品牌作品集网站。",
    descriptionFr: "Site portfolio de marque personnelle construit avec Next.js 15, Three.js 3D et Framer Motion.",
    descriptionDe: "Persönliche Portfolio-Website mit Next.js 15, Three.js 3D und Framer Motion.",
    stack: ["Next.js", "TypeScript", "Three.js", "Framer Motion"],
    live: "https://aliore.ir",
    github: "https://github.com/alioredev/aliore-portfolio",
  },
  {
    id: "02",
    title: "AI Chatbot Widget",
    description: "Embeddable multilingual chatbot for small businesses powered by AI API integration.",
    descriptionFa: "چت‌بات چندزبانه قابل جاسازی برای کسب‌وکارهای کوچک با یکپارچه‌سازی AI API.",
    descriptionZh: "通过 AI API 集成为小型企业提供的可嵌入多语言聊天机器人。",
    descriptionFr: "Chatbot multilingue intégrable pour les petites entreprises via l'intégration d'API IA.",
    descriptionDe: "Einbettbarer mehrsprachiger Chatbot für kleine Unternehmen mit KI-API-Integration.",
    stack: ["Python", "FastAPI", "React", "AI API"],
    live: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Smart Dashboard",
    description: "Real-time data visualization dashboard with live API integration.",
    descriptionFa: "داشبورد تجسم داده‌های زمان‌واقعی با یکپارچه‌سازی API زنده.",
    descriptionZh: "实时数据可视化仪表板，具有实时 API 集成。",
    descriptionFr: "Tableau de bord de visualisation de données en temps réel avec intégration API en direct.",
    descriptionDe: "Echtzeit-Datenvisualisierungs-Dashboard mit Live-API-Integration.",
    stack: ["React", "Recharts", "Tailwind", "REST API"],
    live: "#",
    github: "#",
  },
  {
    id: "04",
    title: "AI Portfolio Builder",
    description: "Generate a complete portfolio page from your skills using AI language models.",
    descriptionFa: "ساخت صفحه پورتفولیو کامل از مهارت‌های شما با مدل‌های زبانی هوش مصنوعی.",
    descriptionZh: "使用 AI 语言模型根据您的技能生成完整的作品集页面。",
    descriptionFr: "Générez une page portfolio complète à partir de vos compétences avec des modèles de langage IA.",
    descriptionDe: "Erstellen Sie eine vollständige Portfolio-Seite aus Ihren Fähigkeiten mit KI-Sprachmodellen.",
    stack: ["Next.js", "AI API", "Tailwind", "Vercel"],
    live: "#",
    github: "#",
  },
];
