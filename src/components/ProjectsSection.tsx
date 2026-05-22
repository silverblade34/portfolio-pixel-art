'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Khipu Craft",
    description: "Editor CAD 2D de precisión para diseño y fabricación de mobiliario. Medidas milimétricas, listas de corte automáticas y exportación de planos. 100% gratuito y offline.",
    image: "/khipu-craft.png",
    tags: ["Next.js 14", "HTML5 Canvas", "Zustand", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Khipu Forms",
    description: "Smart SaaS Form Engine & Gamified Quiz Platform. Convierte encuestas en experiencias interactivas tipo Duolingo con vidas, rachas y explicaciones pedagógicas.",
    image: "/khipu-forms.png",
    tags: ["Next.js 16", "Supabase", "Zod", "Tailwind CSS v4"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "QhatuPE",
    description: "E-commerce conversacional para emprendedores. Catálogos ultra-rápidos, variantes complejas, cupones dinámicos y checkout directo hacia WhatsApp.",
    image: "/qhatupe.png",
    tags: ["Next.js 16", "React Hook Form", "Turnstile", "Tailwind CSS v4"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "RenderStudio",
    description: "Suite de 7 herramientas visuales offline para transformar respuestas de IA en PDF, código estilizado y diagramas Mermaid sin servidores intermedios.",
    image: null,
    tags: ["Next.js 16", "jsPDF", "html2canvas", "Mermaid"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "ScreenForge",
    description: "Suite premium de diseño de producto y animación 3D. Incluye Mockup Studio para composiciones estáticas y Device Animation para secuencias multicámara.",
    image: null,
    tags: ["React", "Framer Motion", "html2canvas", "FFmpeg.wasm"],
    links: {
      demo: "#",
      github: "#"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-widest uppercase">
            Seleccionar Nivel
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-2" />
          <div className="h-1 w-16 bg-white mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="pixel-box-black flex flex-col group relative overflow-hidden"
            >
              <div className="h-48 w-full border-b-4 border-white relative bg-gray-900 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                ) : (
                  <div className="text-white font-pixel uppercase tracking-widest text-xl">
                    [ NO SIGNAL ]
                  </div>
                )}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display text-white mb-4 uppercase tracking-widest leading-normal">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg font-pixel mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-white text-black font-pixel uppercase text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a href={project.links.demo} className="pixel-btn text-xs px-4 py-2 text-center w-full">
                    START
                  </a>
                  <a href={project.links.github} className="pixel-btn text-xs px-4 py-2 text-center w-full" style={{ backgroundColor: '#444', color: '#fff' }}>
                    SOURCE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
