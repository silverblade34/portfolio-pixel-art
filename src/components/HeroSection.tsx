'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-12 overflow-hidden bg-checkerboard">
      <div className="z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left Side - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-[350px] md:w-[450px] md:h-[600px] shrink-0 drop-shadow-[0_15px_0_rgba(0,0,0,0.6)]"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image 
              src="/perfil-modo-videojuego.png" 
              alt="Marcos Pacheco Avatar" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority 
            />
          </motion.div>
        </motion.div>

        {/* Right Side - Text & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left flex-grow"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 tracking-widest drop-shadow-[4px_4px_0_#0000aa] leading-tight">
            MARCOS
            <br /> 
            PACHECO
          </h1>

          <div className="pixel-box-black inline-block px-6 py-3 mb-8">
            <h2 className="text-lg md:text-xl text-yellow-400 font-pixel uppercase tracking-widest">
              LVL 99 Full Stack Developer
            </h2>
          </div>
          
          <p className="text-gray-300 font-pixel text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
            Especializado en arquitecturas backend escalables, microservicios y soluciones cloud sobre AWS. Construyendo experiencias web de alto rendimiento.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="#projects" className="pixel-btn px-8 py-4 text-sm flex items-center justify-center gap-2 w-full sm:w-auto">
              ▶ Iniciar Partida
            </a>
            
            <a href="#experience" className="pixel-btn px-8 py-4 text-sm text-center w-full sm:w-auto" style={{ backgroundColor: '#111', color: '#fff' }}>
              ⚙ Cargar Datos
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
