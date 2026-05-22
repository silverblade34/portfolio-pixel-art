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
  profile: `Full Stack Developer especializado en arquitecturas backend escalables, microservicios y soluciones cloud sobre AWS.

Experiencia desarrollando plataformas OMS/WMS, sistemas logísticos, soluciones IoT y productos SaaS enfocados en rendimiento, escalabilidad y experiencia de usuario.

Con experiencia en diseño de APIs, optimización de sistemas de alta concurrencia y desarrollo de aplicaciones web y móviles para entornos empresariales.`,
  techStack: {
    backend: ["Node.js", "NestJS", "Java", "Spring Boot", "Python", ".NET"],
    frontendMobile: ["Next.js", "Vue.js", "Flutter"],
    cloudDevOps: [
      "AWS (ECS, ECR, EC2, Lambda, API Gateway, S3, RDS)",
      "Azure",
      "Docker",
    ],
    databases: ["PostgreSQL", "MySQL", "DynamoDB"],
    others: [
      "Microservices",
      "REST APIs",
      "WebSockets",
      "IoT",
      "Caching",
      "CI/CD",
    ],
  },
  skillsForChart: [
    { name: "JAVASCRIPT", pips: 9, color: "gold" },
    { name: "TYPESCRIPT", pips: 9, color: "blue" },
    { name: "NODE.JS", pips: 8, color: "green" },
    { name: "AWS", pips: 8, color: "orange" },
    { name: "JAVA", pips: 8, color: "gold" },
    { name: "DOCKER", pips: 8, color: "blue" },
  ],
  stats: [
    { label: "PROYECTOS COMPLETADOS", value: "12", icon: "⭐" },
    { label: "AÑOS DE EXPERIENCIA", value: "5+", icon: "🏆" },
    { label: "LÍNEAS DE CÓDIGO", value: "100K+", icon: "⟨⟩" },
    { label: "PASIÓN", value: "100%", icon: "❤" },
  ],
  projects: [
    {
      title: "OMS / WMS PLATFORM",
      desc: "Sistema de gestión de órdenes y almacén con microservicios en AWS para SOKSO.",
      icon: "🏢",
    },
    {
      title: "IOT INDOOR TRACKING",
      desc: "Monitoreo con beacons, gateways y app logística con Flutter y AWS Lambda.",
      icon: "📡",
    },
    {
      title: "ENERGY OPTIMIZATION",
      desc: "Plataforma de distribución energética en tiempo real con Spring Boot e IA.",
      icon: "⚡",
    },
  ],
  experience: [
    {
      company: "SOKSO",
      role: "Full Stack Developer",
      date: "Julio 2025 – Actualidad | Lima, Perú",
      achievements: [
        "Desarrollo y optimización de un OMS (Order Management System) y WMS (Warehouse Management System) sobre arquitectura de microservicios en AWS.",
        "Lideré el desarrollo de los microservicios de devoluciones y artículos.",
        "Implementé desde cero el microservicio de devoluciones, asegurando integración y escalabilidad.",
        "Optimicé el servicio de artículos para soportar hasta 6× más usuarios concurrentes y mantener stock en tiempo real.",
        "Desarrollé funcionalidades de Picking y Packing para optimizar procesos logísticos y trazabilidad en almacén.",
        "Implementé mejoras de rendimiento mediante caching, optimización de consultas y desacoplamiento de servicios.",
      ],
    },
    {
      company: "SYS & NET DEL PERÚ",
      role: "Full Stack Developer",
      date: "Junio 2024 – Julio 2025 | Lima, Perú",
      achievements: [
        "Participé en el diseño e implementación de un sistema de monitoreo indoor basado en IoT utilizando beacons y gateways.",
        "Construí infraestructura backend utilizando Java, Node.js y servicios AWS como Lambda y API Gateway.",
        "Desarrollé aplicaciones móviles logísticas integradas con dispositivos Bluetooth para automatizar tickets y guías electrónicas en tiempo real.",
        "Implementé soluciones enfocadas en alta disponibilidad, tiempo real y procesamiento escalable.",
      ],
    },
    {
      company: "D&A Intelligent Solutions",
      role: "Analista de Sistemas",
      date: "Abril 2025 – Junio 2025 | Lima, Perú",
      achievements: [
        "Desarrollo de plataforma de distribución energética utilizando Spring Boot, MySQL y Amazon S3.",
        "Integración de servicios de IA para optimización de consumo energético.",
        "Diseño de arquitectura escalable para procesamiento de datos en tiempo real.",
        "Desarrollo de APIs RESTful para comunicación entre dispositivos IoT y plataforma central.",
      ],
    },
    {
      company: "Universidad César Vallejo",
      role: "Mobile Developer",
      date: "Enero 2025 – Marzo 2025 | Lima, Perú",
      achievements: [
        "Desarrollo de módulo social para aplicativo móvil universitario utilizando Flutter.",
        "Implementación de comunidades, posts, foros y sistema de contactos.",
        "Optimización de rendimiento para soportar alto volumen de usuarios concurrentes.",
      ],
    },
    {
      company: "Mantra Consultores",
      role: "Analista de Sistemas",
      date: "Febrero 2024 – Junio 2024 | Lima, Perú",
      achievements: [
        "Optimización de sistemas .NET para gestión aduanera.",
        "Migración de aplicación Ionic 3 hacia Flutter, mejorando estabilidad y rendimiento.",
        "Desarrollo de funcionalidades para ERP móvil enfocado en operaciones logísticas.",
        "Automatización de procesos mediante AWS Lambda, S3 y scripts en Python.",
      ],
    },
    {
      company: "SYS & NET DEL PERÚ",
      role: "Full Stack Developer",
      date: "Diciembre 2022 – Febrero 2024 | Lima, Perú",
      achievements: [
        "Desarrollo de plataformas de rastreo GPS y sistemas de seguridad en tiempo real.",
        "Implementación de WebSockets, API Gateway, AWS Lambda, EC2 y S3 para procesamiento y visualización de datos.",
        "Participación en plataformas multiusuario orientadas a logística y operaciones.",
        "Desarrollo de aplicaciones móviles para monitoreo y gestión operativa.",
      ],
    },
    {
      company: "PRESTACLUB",
      role: "Programador Junior",
      date: "Agosto 2022 – Noviembre 2022 | Lima, Perú",
      achievements: [
        "Desarrollo backend utilizando JavaScript, TypeScript, Express y NestJS.",
        "Construcción de APIs REST y lógica de negocio.",
        "Soporte en tareas frontend e integración full stack.",
      ],
    },
    {
      company: "Opseli",
      role: "Desarrollador Web",
      date: "Diciembre 2021 – Mayo 2022 | Lima, Perú",
      achievements: [
        "Implementación de sistema de cotizaciones utilizando Vue.js y Express.",
        "Desarrollo de funcionalidades orientadas a automatizar procesos comerciales.",
      ],
    },
  ],
  education: [
    {
      institution: "UTP Universidad Tecnológica del Perú",
      degree: "Bachiller en Ingeniería de Software",
      period: "2018 – 2024",
    },
  ],
};
