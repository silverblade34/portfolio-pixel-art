'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "SOKSO",
    period: "Julio 2025 – Actual",
    dialogue: "¡Hey! Aquí me encargo de que los pedidos vuelen. Aprendí a dominar la arquitectura de microservicios en AWS y a escalar sistemas para miles de usuarios. ¡Es pura adrenalina!"
  },
  {
    role: "Full Stack Developer",
    company: "SYS & NET",
    period: "Jun 2024 – Jul 2025",
    dialogue: "En este nivel combiné el mundo físico con el digital. Integrar sensores IoT con AWS Lambda fue un reto increíble donde aprendí muchísimo sobre procesamiento en tiempo real."
  },
  {
    role: "Analista de Sistemas",
    company: "D&A Intelligent",
    period: "Abr 2025 – Jun 2025",
    dialogue: "Aquí me enfrenté a la Inteligencia Artificial. Optimizar la distribución energética usando IA y Spring Boot me dio +10 en mis stats de Backend."
  },
  {
    role: "Mobile Developer",
    company: "Universidad CV",
    period: "Ene 2025 – Mar 2025",
    dialogue: "Equipé mi framework móvil favorito: Flutter. Construir una red social para la universidad me enseñó a manejar grandes volúmenes de interacciones concurrentes."
  },
  {
    role: "Analista de Sistemas",
    company: "Mantra Consultores",
    period: "Feb 2024 – Jun 2024",
    dialogue: "Un nivel clásico de consultoría: optimizar sistemas Legacy y migrar a nuevas tecnologías. Fue una gran misión de refactorización."
  },
  {
    role: "Full Stack Developer",
    company: "SYS & NET",
    period: "Dic 2022 – Feb 2024",
    dialogue: "¡Misión de rastreo completada! Aquí implementé WebSockets para ver la ubicación en tiempo real. Mis habilidades de socket networking subieron al máximo."
  },
  {
    role: "Programador Junior",
    company: "PRESTACLUB",
    period: "Ago 2022 – Nov 2022",
    dialogue: "Aquí empezó la aventura. Mis primeras misiones fuertes en el backend usando el poder de NestJS y TypeScript."
  },
  {
    role: "Desarrollador Web",
    company: "Opseli",
    period: "Dic 2021 – May 2022",
    dialogue: "El tutorial del juego. Senté las bases del desarrollo web con Vue.js y Express. ¡Qué tiempos!"
  }
];

export function ExperienceSection() {
  const [activeDialogue, setActiveDialogue] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (activeDialogue !== null) {
      setDisplayedText("");
      const fullText = experiences[activeDialogue].dialogue;
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(prev => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 30); // Typewriter speed
      return () => clearInterval(timer);
    }
  }, [activeDialogue]);

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 relative bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-widest uppercase">
            Quest Log
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-2" />
          <div className="h-1 w-16 bg-white mx-auto" />
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="pixel-box-black p-6 relative group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-display text-yellow-400 uppercase tracking-widest mb-2">{exp.company}</h3>
                  <h4 className="text-lg text-white font-pixel uppercase tracking-widest">{exp.role}</h4>
                </div>
                <div className="text-white font-pixel bg-blue-900 px-3 py-1 border-2 border-white">
                  {exp.period}
                </div>
              </div>

              <button 
                onClick={() => setActiveDialogue(activeDialogue === index ? null : index)}
                className="pixel-btn mt-4 text-xs"
              >
                HABLAR
              </button>

              <AnimatePresence>
                {activeDialogue === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="mt-6 pixel-box p-6 relative"
                  >
                    <button 
                      onClick={() => setActiveDialogue(null)}
                      className="absolute top-2 right-4 text-white font-display text-xl hover:text-red-500"
                    >
                      x
                    </button>
                    <div className="flex gap-4">
                      <div className="hidden sm:block w-16 h-16 bg-black border-2 border-white shrink-0 relative overflow-hidden">
                        <img src="/perfil-modo-videojuego.png" alt="Avatar" className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] max-w-none object-cover" style={{ objectPosition: 'center 10%' }}/>
                      </div>
                      <p className="font-pixel text-xl leading-relaxed">
                        {displayedText}
                        <span className="animate-pulse">_</span>
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
