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
  { value: "5", labelKey: "stats.languages" },
  { value: "1", labelKey: "stats.brand" },
];

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "AI & Backend",
    skills: [
      "Python",
      "AI API Integration",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
    ],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing"],
  },
  { category: "Tools", skills: ["Git", "GitHub", "Docker", "Vercel", "Linux"] },
  {
    category: "Languages",
    skills: ["Persian", "English", "German", "French", "Chinese"],
  },
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
    description:
      "Personal brand portfolio website built with Next.js 15, Three.js 3D and Framer Motion.",
    descriptionFa:
      "وبسایت پورتفولیو برند شخصی با Next.js 15، Three.js سه‌بعدی و Framer Motion.",
    descriptionZh:
      "使用 Next.js 15、Three.js 3D 和 Framer Motion 构建的个人品牌作品集网站。",
    descriptionFr:
      "Site portfolio de marque personnelle construit avec Next.js 15, Three.js 3D et Framer Motion.",
    descriptionDe:
      "Persönliche Portfolio-Website mit Next.js 15, Three.js 3D und Framer Motion.",
    stack: ["Next.js", "TypeScript", "Three.js", "Framer Motion"],
    live: "https://aliore.ir",
    github: "https://github.com/alioredev/aliore-portfolio",
  },
  {
    id: "02",
    title: "AI Chatbot Widget",
    description:
      "Embeddable multilingual chatbot for small businesses powered by AI API integration.",
    descriptionFa:
      "چت‌بات چندزبانه قابل جاسازی برای کسب‌وکارهای کوچک با یکپارچه‌سازی AI API.",
    descriptionZh: "通过 AI API 集成为小型企业提供的可嵌入多语言聊天机器人。",
    descriptionFr:
      "Chatbot multilingue intégrable pour les petites entreprises via l'intégration d'API IA.",
    descriptionDe:
      "Einbettbarer mehrsprachiger Chatbot für kleine Unternehmen mit KI-API-Integration.",
    stack: ["Python", "FastAPI", "React", "AI API"],
    live: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Smart Dashboard",
    description:
      "Real-time data visualization dashboard with live API integration.",
    descriptionFa: "داشبورد تجسم داده‌های زمان‌واقعی با یکپارچه‌سازی API زنده.",
    descriptionZh: "实时数据可视化仪表板，具有实时 API 集成。",
    descriptionFr:
      "Tableau de bord de visualisation de données en temps réel avec intégration API en direct.",
    descriptionDe:
      "Echtzeit-Datenvisualisierungs-Dashboard mit Live-API-Integration.",
    stack: ["React", "Recharts", "Tailwind", "REST API"],
    live: "#",
    github: "#",
  },
  {
    id: "04",
    title: "AI Portfolio Builder",
    description:
      "Generate a complete portfolio page from your skills using AI language models.",
    descriptionFa:
      "ساخت صفحه پورتفولیو کامل از مهارت‌های شما با مدل‌های زبانی هوش مصنوعی.",
    descriptionZh: "使用 AI 语言模型根据您的技能生成完整的作品集页面。",
    descriptionFr:
      "Générez une page portfolio complète à partir de vos compétences avec des modèles de langage IA.",
    descriptionDe:
      "Erstellen Sie eine vollständige Portfolio-Seite aus Ihren Fähigkeiten mit KI-Sprachmodellen.",
    stack: ["Next.js", "AI API", "Tailwind", "Vercel"],
    live: "#",
    github: "#",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string; // initials fallback
  rating: number;
  text: string;
  textFa?: string;
  textZh?: string;
  textFr?: string;
  textDe?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "01",
    name: "Sarah Mitchell",
    role: "Startup Founder, UK",
    avatar: "SM",
    rating: 5,
    text: "Ali delivered a product that exceeded every expectation. The attention to detail and the AI integration were flawless. Our conversion rate increased by 40% after launch.",
    textFa:
      "علی محصولی ارائه داد که فراتر از هر انتظاری بود. توجه به جزئیات و یکپارچه‌سازی هوش مصنوعی بی‌نقص بود.",
    textFr:
      "Ali a livré un produit qui a dépassé toutes les attentes. L'attention aux détails et l'intégration IA étaient parfaites.",
    textDe:
      "Ali lieferte ein Produkt, das alle Erwartungen übertraf. Die Liebe zum Detail und die KI-Integration waren makellos.",
    textZh: "Ali 交付的产品超出了所有预期。对细节的关注和 AI 集成都无可挑剔。",
  },
  {
    id: "02",
    name: "Marcus Weber",
    role: "CTO, Berlin",
    avatar: "MW",
    rating: 5,
    text: "Exceptional frontend engineering. The 3D interactions he built are the best I've seen on a portfolio site. Hired him for our main product immediately.",
    textFa:
      "مهندسی فرانت‌اند استثنایی. تعاملات سه‌بعدی که ساخت بهترین چیزی بود که در یک سایت پورتفولیو دیده‌ام.",
    textFr:
      "Ingénierie frontend exceptionnelle. Les interactions 3D qu'il a créées sont les meilleures que j'aie vues.",
    textDe:
      "Außergewöhnliches Frontend-Engineering. Die 3D-Interaktionen sind das Beste, was ich je auf einer Portfolio-Site gesehen habe.",
    textZh: "卓越的前端工程。他构建的 3D 交互是我在作品集网站上见过的最好的。",
  },
  {
    id: "03",
    name: "Yuki Tanaka",
    role: "Product Designer, Tokyo",
    avatar: "YT",
    rating: 5,
    text: "Working with Ali felt like collaborating with a senior engineer from a top-tier company. Clean code, fast delivery, and a design eye that's rare to find.",
    textFa:
      "کار با علی مثل همکاری با یک مهندس ارشد از یک شرکت برتر بود. کد تمیز، تحویل سریع.",
    textFr:
      "Travailler avec Ali ressemblait à une collaboration avec un ingénieur senior d'une entreprise de premier rang.",
    textDe:
      "Mit Ali zu arbeiten fühlte sich an wie die Zusammenarbeit mit einem Senior-Engineer aus einem Top-Unternehmen.",
    textZh:
      "与 Ali 合作感觉就像与顶级公司的高级工程师合作。代码整洁，交付迅速。",
  },
  {
    id: "04",
    name: "Lena Hoffmann",
    role: "E-Commerce Manager, Vienna",
    avatar: "LH",
    rating: 5,
    text: "The AI chatbot Ali built for our store handles 300+ customer queries daily. Support costs dropped by 60%. Absolutely worth every cent.",
    textFa:
      "چت‌بات هوش مصنوعی که علی برای فروشگاه ما ساخت روزانه ۳۰۰+ سوال مشتری را پاسخ می‌دهد.",
    textFr:
      "Le chatbot IA qu'Ali a créé pour notre boutique gère plus de 300 requêtes clients par jour.",
    textDe:
      "Der KI-Chatbot, den Ali für unseren Shop entwickelt hat, beantwortet täglich 300+ Kundenanfragen.",
    textZh: "Ali 为我们商店构建的 AI 聊天机器人每天处理 300 多个客户查询。",
  },
  {
    id: "05",
    name: "Reza Ahmadi",
    role: "Tech Lead, Tehran",
    avatar: "RA",
    rating: 5,
    text: "Ali is one of the best developers I have worked with. Clean code, thoughtful architecture, and an exceptional design mindset.",
    textFa:
      "علی یکی از بهترین توسعه‌دهندگانی است که باهاش کار کردم. کد تمیز، معماری فکرشده.",
    textFr:
      "Ali est l'un des meilleurs développeurs avec qui j'ai travaillé. Code propre, architecture réfléchie.",
    textDe:
      "Ali ist einer der besten Entwickler, mit denen ich je zusammengearbeitet habe.",
    textZh: "Ali 是我合作过的最优秀的开发者之一。代码整洁，架构经过深思熟虑。",
  },
  {
    id: "06",
    name: "Claire Dubois",
    role: "Creative Director, Paris",
    avatar: "CD",
    rating: 5,
    text: "Rare to find someone who combines technical depth with genuine aesthetic sensibility. Ali's work is both engineered and beautiful — exactly what we needed.",
    textFa:
      "کمیاب است کسی را بیابید که عمق فنی را با حس زیبایی‌شناختی واقعی ترکیب کند.",
    textFr:
      "Rare de trouver quelqu'un qui combine profondeur technique et sensibilité esthétique authentique.",
    textDe:
      "Selten findet man jemanden, der technische Tiefe mit echtem ästhetischem Gespür verbindet.",
    textZh:
      "很难找到一个将技术深度与真正美学感结合起来的人。Ali 的工作既有工程之美。",
  },
];

export const testimonialsAlt: Testimonial[] = [
  {
    id: "07",
    name: "Mina Patel",
    role: "Growth Lead, Dubai",
    avatar: "MP",
    rating: 5,
    text: "Ali rebuilt our landing page with precision and speed. The UX improvements drove a 32% lift in signups within two weeks.",
    textFa:
      "علی صفحه فرود ما را با دقت و سرعت بازسازی کرد. بهبود تجربه کاربری باعث افزایش ۳۲٪ ثبت‌نام شد.",
    textFr:
      "Ali a reconstruit notre landing page avec précision et rapidité. Les améliorations UX ont généré +32% d'inscriptions.",
    textDe:
      "Ali hat unsere Landingpage präzise und schnell überarbeitet. Die UX-Verbesserungen führten binnen zwei Wochen zu 32 % mehr Anmeldungen.",
    textZh:
      "Ali 以精准和快速完成了我们的登录页面重建。UX 改进在两周内带来了 32% 的注册增长。",
  },
  {
    id: "08",
    name: "Carlos Rivera",
    role: "Founder, Mexico City",
    avatar: "CR",
    rating: 5,
    text: "The mobile-first animations and performance tuning Ali delivered transformed our product feel. Customers now stay on the site longer than ever.",
    textFa:
      "انیمیشن‌های اول موبایل و بهینه‌سازی عملکردی که علی ارائه داد، تجربه محصول ما را متحول کرد.",
    textFr:
      "Les animations mobile-first et l'optimisation de performance d'Ali ont transformé notre produit.",
    textDe:
      "Die mobil-fokussierten Animationen und Performance-Optimierungen von Ali haben unser Produktgefühl verändert.",
    textZh:
      "Ali 提供的移动优先动画和性能调优改变了我们的产品体验。用户在网站上的停留时间创纪录。",
  },
  {
    id: "09",
    name: "Aisha Khan",
    role: "Marketing Director, Lahore",
    avatar: "AK",
    rating: 5,
    text: "Ali's AI recommendations were a game-changer. We can now personalize website content automatically for every visitor.",
    textFa:
      "پیشنهادات هوش مصنوعی علی تحول‌آفرین بود. اکنون می‌توانیم محتوا را برای هر بازدیدکننده به‌صورت خودکار شخصی‌سازی کنیم.",
    textFr:
      "Les recommandations IA d'Ali ont changé la donne. Nous personnalisons désormais automatiquement le contenu.",
    textDe:
      "Alis KI-Empfehlungen waren ein Game-Changer. Wir personalisieren jetzt automatisch Inhalte für jeden Besucher.",
    textZh:
      "Ali 的 AI 推荐功能改变了游戏规则。我们现在可以为每位访问者自动个性化网站内容。",
  },
  {
    id: "10",
    name: "Luc Morel",
    role: "Agency Partner, Lyon",
    avatar: "LM",
    rating: 5,
    text: "Working with Ali was smooth from kickoff to launch. His delivery documentation and handoff were exceptional.",
    textFa:
      "کار با علی از شروع تا تحویل به‌نرمی پیش رفت. مستندسازی و تحویل او استثنایی بود.",
    textFr:
      "Travailler avec Ali était fluide du lancement à la mise en ligne. La documentation et le transfert étaient exceptionnels.",
    textDe:
      "Die Zusammenarbeit mit Ali lief von Beginn bis zum Launch reibungslos. Die Übergabe war herausragend.",
    textZh: "与 Ali 的合作从启动到发布都很顺利。他的交付文档和交接非常出色。",
  },
  {
    id: "11",
    name: "Hamid Karimi",
    role: "Operations Lead, Tehran",
    avatar: "HK",
    rating: 5,
    text: "Ali made our back office dashboard feel modern and intuitive. The new analytics view is already saving our team hours each week.",
    textFa:
      "علی داشبورد پشتیبانی ما را مدرن و شهودی کرد. نمای جدید تحلیل، هر هفته ساعت‌ها برای تیم ما ذخیره می‌کند.",
    textFr:
      "Ali a rendu notre tableau de bord back-office moderne et intuitif. La nouvelle vue analytics nous fait gagner des heures.",
    textDe:
      "Ali hat unser Backoffice-Dashboard modern und intuitiv gemacht. Die neue Analytics-Ansicht spart uns bereits wöchentlich Stunden.",
    textZh:
      "Ali 让我们的后台仪表盘变得现代且直观。新的分析视图每周为我们节省数小时。",
  },
  {
    id: "12",
    name: "Jia Li",
    role: "Product Manager, Shanghai",
    avatar: "JL",
    rating: 5,
    text: "From ideation to launch, Ali was proactive, communicative, and technically on point. We launched faster with fewer revisions.",
    textFa:
      "از ایده تا عرضه، علی پیش‌قدم، ارتباط‌گرا و فنی بود. با بازبینی کمتر، سریع‌تر راه‌اندازی کردیم.",
    textFr:
      "De l'idéation au lancement, Ali était proactif, communicatif et techniquement irréprochable.",
    textDe:
      "Von der Ideenfindung bis zum Launch war Ali proaktiv, kommunikativ und technisch treffsicher.",
    textZh:
      "从构思到发布，Ali 都很主动、沟通顺畅、技术准确。我们更快上线，修改更少。",
  },
];
