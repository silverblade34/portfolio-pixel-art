export type ProjectRarity = 'LEGENDARY' | 'EPIC' | 'RARE' | 'UNCOMMON';
export type ProjectCategory = 'WEB APP' | 'HERRAMIENTA' | 'IOT/CLOUD' | 'DISEÑO';

export interface ProjectFeature {
  icon: string;
  text: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  color?: 'cyan' | 'gold' | 'green' | 'purple' | 'red';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  category: ProjectCategory;
  categoryTag: string;
  rarity: ProjectRarity;
  desc: string;
  longDesc: string;
  img: string;
  techStack: string[];
  features: ProjectFeature[];
  metrics: ProjectMetric[];
  demoUrl?: string;
  repoUrl?: string;
  tags: string[];
  stars: number; // 1-5
  filterTags: string[];
}

export const portfolioData = {
  personalInfo: {
    name: "Marcos Pacheco Tacay",
    role: "Full Stack Developer | Backend & Cloud Specialist",
    location: "Perú",
    phone: "917695853",
    email: "mpacheco.tacay@gmail.com",
    linkedin: "https://www.linkedin.com/in/marcos-pacheco-tacay-674206249",
    portfolio: "https://maquiadev.com/",
    level: 99,
    hp: 999,
    mp: 999,
    status: "DISPONIBLE PARA NUEVOS DESAFÍOS",
  },

  profile: `Full Stack Developer especializado en arquitecturas backend escalables, microservicios y soluciones cloud sobre AWS.\n\nExperiencia desarrollando plataformas OMS/WMS, sistemas logísticos, soluciones IoT y productos SaaS enfocados en rendimiento, escalabilidad y experiencia de usuario.\n\nCon experiencia en diseño de APIs, optimización de sistemas de alta concurrencia y desarrollo de aplicaciones web y móviles para entornos empresariales.`,

  techStack: {
    backend: ["Node.js", "NestJS", "Java", "Spring Boot", "Python", ".NET"],
    frontendMobile: ["Next.js", "Vue.js", "Flutter"],
    cloudDevOps: ["AWS (ECS, ECR, EC2, Lambda, API Gateway, S3, RDS)", "Azure", "Docker"],
    databases: ["PostgreSQL", "MySQL", "DynamoDB"],
    others: ["Microservices", "REST APIs", "WebSockets", "IoT", "Caching", "CI/CD"],
  },

  achievements: [
    { icon: '🚀', title: '100K+ Órdenes Procesadas', desc: 'Sistemas logísticos OMS/WMS en producción', rarity: 'LEGENDARY' as const },
    { icon: '⚡', title: 'APIs < 10ms de Latencia', desc: 'Optimización con Redis y caching agresivo', rarity: 'LEGENDARY' as const },
    { icon: '☁️', title: 'Sistemas en AWS', desc: 'ECS, ECR, Lambda, S3, RDS en producción', rarity: 'EPIC' as const },
    { icon: '🔄', title: 'Arquitectura Microservicios', desc: '6× mejora de concurrencia optimizando servicios', rarity: 'EPIC' as const },
    { icon: '📡', title: 'Real-time con WebSockets', desc: 'Cupones en vivo, tracking y notificaciones', rarity: 'EPIC' as const },
    { icon: '🎮', title: 'Motor CAD 60 FPS', desc: 'Canvas API para diseño milimétrico de muebles', rarity: 'RARE' as const },
    { icon: '🎥', title: 'Exportación MP4 Local', desc: 'FFmpeg.wasm frame-by-frame sin servidores', rarity: 'LEGENDARY' as const },
    { icon: '📦', title: 'Sistemas WMS/OMS Enterprise', desc: 'Picking, packing y trazabilidad de almacén', rarity: 'EPIC' as const },
  ],

  projects: [
    {
      id: 'screenforge',
      title: 'ScreenForge',
      subtitle: '3D Mockup & Cinematic Device Animation Studio',
      emoji: '🛠️',
      category: 'HERRAMIENTA' as ProjectCategory,
      categoryTag: 'HERRAMIENTA • DISEÑO',
      rarity: 'LEGENDARY' as ProjectRarity,
      desc: 'Suite premium de mockups 3D y animación cinematográfica de dispositivos.',
      longDesc: 'Suite premium de diseño de producto que combina Mockup Studio (composiciones estáticas 3D con cámara virtual) y Device Animation (línea de tiempo multicapa, exportación de video MP4 local frame-by-frame sin servidores). Soporte hasta 4K, múltiples dispositivos y temas.',
      img: '/screenforge.png',
      techStack: ['Next.js 15', 'Framer Motion', 'html2canvas', 'FFmpeg.wasm', 'TypeScript', 'Tailwind CSS'],
      features: [
        { icon: '📷', text: 'Cámara 3D virtual con controles precisos (Tilt, Zoom, Rotación)' },
        { icon: '🎬', text: 'Línea de tiempo con escenas, textos y animaciones avanzadas' },
        { icon: '🎥', text: 'Exportación de video local usando FFmpeg.wasm (sin servidores)' },
        { icon: '📱', text: 'Soporte para múltiples dispositivos y layouts premium' },
        { icon: '💾', text: 'Persistencia local en LocalStorage (estado + assets Base64)' },
        { icon: '🔲', text: 'Resolución de hasta 4K (3840×2160)' },
      ],
      metrics: [
        { label: 'Performance', value: 'S+', color: 'cyan' as const },
        { label: 'Architecture', value: 'S', color: 'gold' as const },
        { label: 'UX', value: 'S+', color: 'green' as const },
        { label: 'FPS Export', value: '30/60', color: 'purple' as const },
      ],
      tags: ['⭐ DESTACADO', 'WEB APP', 'HERRAMIENTA'],
      stars: 5,
      filterTags: ['HERRAMIENTAS', 'DISEÑO'],
    },
    {
      id: 'render-gpt',
      title: 'RenderGPT',
      subtitle: 'Client-Side AI Rendering Toolkit',
      emoji: '⚡',
      category: 'HERRAMIENTA' as ProjectCategory,
      categoryTag: 'HERRAMIENTA • WEB APP',
      rarity: 'EPIC' as ProjectRarity,
      desc: '7 herramientas de render y conversión 100% client-side para IA.',
      longDesc: 'Ecosistema de utilidades premium de renderizado y conversión 100% local (client-side). Transforma salidas de LLMs (markdown, JSON, código, tablas, diagramas) en documentos y assets visuales de producción. Sin servidores, sin API keys, cero transmisión de datos.',
      img: '/rendergpt.png',
      techStack: ['Next.js 16', 'React 19', 'jsPDF', 'Mermaid', 'Tailwind v4', 'Framer Motion'],
      features: [
        { icon: '📄', text: 'Markdown to PDF con múltiples temas (Notion, GitHub, Modern Dark)' },
        { icon: '📊', text: 'Table Beautifier: CSV/markdown → tablas interactivas exportables' },
        { icon: '📸', text: 'Code Screenshot con fondos de gradientes y marcos macOS' },
        { icon: '🌿', text: 'Mermaid Diagram Renderer: exporta SVG vectorial y PNG' },
        { icon: '🔍', text: 'JSON Visualizer con árbol expandible y filtrado en tiempo real' },
        { icon: '✨', text: 'AI Beautifier para estructurar respuestas de LLMs' },
      ],
      metrics: [
        { label: 'Privacy', value: '100%', color: 'green' as const },
        { label: 'Performance', value: 'S', color: 'cyan' as const },
        { label: 'Tools', value: '7', color: 'gold' as const },
        { label: 'Offline', value: '✓', color: 'purple' as const },
      ],
      tags: ['WEB APP', 'HERRAMIENTA'],
      stars: 5,
      filterTags: ['WEB APPS', 'HERRAMIENTAS'],
    },
    {
      id: 'khipu-forms',
      title: 'Khipu Forms',
      subtitle: 'Gamified SaaS Form Engine & Quiz Platform',
      emoji: '🦙',
      category: 'WEB APP' as ProjectCategory,
      categoryTag: 'SaaS • WEB APP',
      rarity: 'EPIC' as ProjectRarity,
      desc: 'SaaS de formularios y quizzes gamificados con AI insights y mascota animada.',
      longDesc: 'Motor SaaS de formularios de última generación con gamificación estilo Duolingo. Sistema de vidas, rachas, mascota Llama Khipu animada, fundamentación pedagógica, 3 modos de presentación (Clásico, Secuencial, Interactivo Pro) y AI Insights para análisis de respuestas.',
      img: '/khipu-forms.png',
      techStack: ['Next.js 16', 'React 19', 'Supabase', 'Zustand', 'Tailwind v4', 'Zod'],
      features: [
        { icon: '🎮', text: 'Motor de gamificación estilo Duolingo con vidas y rachas' },
        { icon: '🦙', text: 'Mascota "Llama Khipu" reactiva a las acciones del usuario' },
        { icon: '📊', text: 'Dashboard analítico con AI Insights y exportación CSV' },
        { icon: '⏱️', text: 'Temporizadores por pregunta y pistas desbloqueables' },
        { icon: '🔒', text: 'Seguridad: consentimiento, validación por email, códigos de acceso' },
        { icon: '🎨', text: '3 modos de presentación: Clásico, Cards Secuencial, Interactivo Pro' },
      ],
      metrics: [
        { label: 'Engagement', value: 'S+', color: 'cyan' as const },
        { label: 'UX', value: 'S', color: 'gold' as const },
        { label: 'Modos', value: '3', color: 'green' as const },
        { label: 'Auth', value: 'SSR', color: 'purple' as const },
      ],
      tags: ['WEB APP', 'SaaS'],
      stars: 5,
      filterTags: ['WEB APPS'],
    },
    {
      id: 'qhatupe',
      title: 'QhatuPE',
      subtitle: 'Conversational E-commerce Platform',
      emoji: '🛍️',
      category: 'WEB APP' as ProjectCategory,
      categoryTag: 'E-COMMERCE • FULLSTACK',
      rarity: 'LEGENDARY' as ProjectRarity,
      desc: 'E-commerce conversacional con checkout a WhatsApp y notificaciones en tiempo real.',
      longDesc: 'Suite completa de comercio electrónico para emprendedores de redes sociales (TikTok, Instagram, WhatsApp). Frontend mobile-first con checkout directo a WhatsApp y Backend NestJS enterprise con WebSockets, pipeline de imágenes HEIC→Sharp→S3 y caching Redis.',
      img: '/qhatupe.png',
      techStack: ['Next.js 16', 'NestJS', 'PostgreSQL', 'Redis', 'WebSockets', 'AWS S3', 'Prisma'],
      features: [
        { icon: '💬', text: 'Checkout conversacional directo a WhatsApp con mensaje estructurado' },
        { icon: '📡', text: 'Notificaciones en tiempo real con WebSockets (Socket.io)' },
        { icon: '🖼️', text: 'Pipeline HEIC→Sharp→AWS S3 para imágenes de iPhone' },
        { icon: '⚡', text: 'Caching Redis con respuestas < 10ms en endpoints críticos' },
        { icon: '🎟️', text: 'Cupones en vivo con temporizadores FOMO para lives' },
        { icon: '🛡️', text: 'Cloudflare Turnstile anti-spam + JWT + Google OAuth' },
      ],
      metrics: [
        { label: 'Latency', value: '<10ms', color: 'green' as const },
        { label: 'Architecture', value: 'S', color: 'cyan' as const },
        { label: 'Realtime', value: 'WS', color: 'gold' as const },
        { label: 'Cloud', value: 'AWS', color: 'purple' as const },
      ],
      tags: ['⭐ DESTACADO', 'WEB APP'],
      stars: 5,
      filterTags: ['WEB APPS', 'IOT/CLOUD'],
    },
    {
      id: 'khipu-craft',
      title: 'Khipu Craft',
      subtitle: '2D CAD Editor for Furniture & Woodworking',
      emoji: '📐',
      category: 'HERRAMIENTA' as ProjectCategory,
      categoryTag: 'CAD • HERRAMIENTA',
      rarity: 'RARE' as ProjectRarity,
      desc: 'Editor CAD 2D para carpintería con lista de corte automática y vista ortogonal.',
      longDesc: 'Aplicación web CAD de precisión milimétrica para planificación de proyectos de carpintería, melamina y diseño industrial. Motor de render en Canvas API a 60 FPS, cotas en tiempo real, 3 vistas ortogonales, estimación de planchas y exportación de lista de corte a CSV.',
      img: '/khipu-craft.png',
      techStack: ['Next.js 14', 'Canvas API', 'Zustand', 'Tailwind CSS', 'TypeScript'],
      features: [
        { icon: '⚙️', text: 'Render en Canvas API a 60 FPS con snap milimétrico' },
        { icon: '📏', text: 'Cotas dinámicas en tiempo real sobre el lienzo' },
        { icon: '📋', text: 'Lista de corte automatizada con estimación de planchas' },
        { icon: '🔭', text: '3 vistas ortogonales: Frontal, Lateral, Superior/Planta' },
        { icon: '↩️', text: 'Historial de 50 pasos (Undo/Redo)' },
        { icon: '📦', text: 'Biblioteca de plantillas de muebles paramétricos' },
      ],
      metrics: [
        { label: 'FPS', value: '60', color: 'green' as const },
        { label: 'Precision', value: 'mm', color: 'cyan' as const },
        { label: 'Views', value: '3', color: 'gold' as const },
        { label: 'Offline', value: '✓', color: 'purple' as const },
      ],
      tags: ['HERRAMIENTA', 'DISEÑO'],
      stars: 4,
      filterTags: ['HERRAMIENTAS', 'DISEÑO'],
    },
  ] as Project[],

  experience: [
    {
      company: "SOKSO",
      companyInitial: "S",
      companyColor: "#ff5555",
      role: "Desarrollador Full Stack",
      date: "jul. 2025 – actualidad",
      isActive: true,
      achievements: [
        "Desarrollo y optimización de un OMS/WMS sobre arquitectura de microservicios en AWS.",
        "Lideré el microservicio de devoluciones desde cero.",
        "Optimicé el servicio de artículos para soportar 6× más usuarios concurrentes.",
        "Desarrollé funcionalidades de Picking y Packing para trazabilidad en almacén.",
        "Mejoras de rendimiento mediante caching, optimización de queries y desacoplamiento.",
      ],
      tech: ['NestJS', 'Node.js', 'AWS', 'PostgreSQL', 'Redis'],
    },
    {
      company: "SYS & NET DEL PERÚ",
      companyInitial: "S",
      companyColor: "#00d9ff",
      role: "Desarrollador Full Stack",
      date: "jun. 2024 – jul. 2025",
      isActive: false,
      achievements: [
        "Sistema indoor tracking IoT con beacons y gateways.",
        "Backend Java y Node.js con AWS Lambda y API Gateway.",
        "Apps móviles logísticas con Bluetooth para tickets en tiempo real.",
      ],
      tech: ['Java', 'Node.js', 'AWS Lambda', 'Flutter'],
    },
    {
      company: "D&A Intelligent Solutions",
      companyInitial: "D",
      companyColor: "#f2c94c",
      role: "Analista de Sistemas",
      date: "abr. 2025 – jun. 2025",
      isActive: false,
      achievements: [
        "Sistema de distribución energética con Spring Boot.",
        "IA para optimización energética y APIs REST.",
      ],
      tech: ['Spring Boot', 'MySQL', 'AWS S3'],
    },
    {
      company: "Universidad César Vallejo",
      companyInitial: "U",
      companyColor: "#bd93f9",
      role: "Mobile Developer",
      date: "ene. 2025 – mar. 2025",
      isActive: false,
      achievements: [
        "Módulo red social Flutter para comunidades universitarias.",
        "Posts, foros y optimización para alto tráfico.",
      ],
      tech: ['Flutter', 'Dart'],
    },
    {
      company: "Mantra Consultores",
      companyInitial: "M",
      companyColor: "#27c93f",
      role: "Analista de Sistemas",
      date: "feb. 2024 – jun. 2024",
      isActive: false,
      achievements: [
        "Optimización sistemas .NET y migración Ionic → Flutter.",
        "ERP móvil y automatización con AWS Lambda y Python.",
      ],
      tech: ['.NET', 'Flutter', 'Python', 'AWS'],
    },
    {
      company: "SYS & NET DEL PERÚ",
      companyInitial: "S",
      companyColor: "#00d9ff",
      role: "Full Stack Developer",
      date: "dic. 2022 – feb. 2024",
      isActive: false,
      achievements: [
        "GPS y seguridad en tiempo real con WebSockets.",
        "API Gateway, AWS Lambda, S3, EC2 y plataformas multiusuario.",
      ],
      tech: ['Node.js', 'WebSockets', 'AWS'],
    },
    {
      company: "PRESTACLUB",
      companyInitial: "P",
      companyColor: "#ff5555",
      role: "Programador Junior",
      date: "ago. 2022 – nov. 2022",
      isActive: false,
      achievements: [
        "APIs REST con Express, NestJS y TypeScript.",
      ],
      tech: ['NestJS', 'TypeScript', 'Express'],
    },
    {
      company: "Opseli",
      companyInitial: "O",
      companyColor: "#f2c94c",
      role: "Desarrollador Web",
      date: "dic. 2021 – may. 2022",
      isActive: false,
      achievements: [
        "Sistema de cotizaciones con Vue.js y Express.",
      ],
      tech: ['Vue.js', 'Express'],
    },
  ],

  education: [
    {
      institution: "UTP Universidad Tecnológica del Perú",
      degree: "Bachiller en Ingeniería de Software",
      period: "2018 – 2024",
    },
  ],

  profileStats: [
    { value: '12+', label: 'Proyectos', icon: '🗂️' },
    { value: '3+', label: 'Años Exp.', icon: '⚡' },
    { value: '20+', label: 'Tecnologías', icon: '🔧' },
    { value: '∞', label: 'Curiosidad', icon: '🚀' },
  ],
};
