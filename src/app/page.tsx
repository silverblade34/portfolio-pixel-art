'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from './data';

type TabName = 'INICIO' | 'SOBRE MÍ' | 'HABILIDADES' | 'PROYECTOS' | 'EXPERIENCIA' | 'CONTACTO';

export default function StaticHUDPortfolio() {
  const [activeTab, setActiveTab] = useState<TabName>('INICIO');

  const renderContent = () => {
    switch (activeTab) {
      case 'INICIO':
        return (
          <>
            {/* Center Top: Welcome Panel */}
            <div className="rpg-panel flex-1 relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image src="/assets/personaje-caminando-castillo.png" alt="Landscape" fill sizes="100vw" className="object-cover object-bottom" priority />
              </div>
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f19]/90 via-[#0a0f19]/70 to-transparent" />
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-lg">
                <h1 className="font-display text-[22px] leading-relaxed text-white-shadow mb-6">
                  ¡BIENVENIDO A<br/>MI PORTAFOLIO!
                </h1>
                <p className="text-sm text-silver text-white-shadow leading-relaxed mb-8">
                  {portfolioData.profile.split('\n')[0]}
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveTab('PROYECTOS')} className="rpg-btn-gold">VER PROYECTOS ❯</button>
                  <a href="#" className="rpg-btn-dark inline-flex items-center">DESCARGAR CV 📥</a>
                </div>
              </div>
            </div>

            {/* Center Bottom: Projects Grid */}
            <div className="rpg-panel h-56 shrink-0 p-5 flex flex-col">
              <div className="font-display text-[10px] text-silver tracking-widest mb-4">
                PROYECTOS DESTACADOS
              </div>
              <div className="flex-1 grid grid-cols-3 gap-4">
                {portfolioData.projects.map((p, i) => (
                  <div key={i} className="hud-project-card p-4 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-xl">{p.icon}</div>
                      <span className="font-display text-[8px] text-silver leading-snug">{p.title}</span>
                    </div>
                    <p className="text-xs text-[#7a8b9c] leading-relaxed mt-auto">{p.desc}</p>
                    <button onClick={() => setActiveTab('PROYECTOS')} className="rpg-btn-dark w-full mt-3 mt-auto !py-2" style={{ fontSize: '7px' }}>VER PROYECTO</button>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-3">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <div className="w-2 h-2 bg-[#334455] rounded-full" />
                <div className="w-2 h-2 bg-[#334455] rounded-full" />
              </div>
            </div>
          </>
        );

      case 'SOBRE MÍ':
        return (
          <div className="rpg-panel flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <h2 className="font-display text-gold text-lg border-b border-[#334455] pb-4">PERFIL PROFESIONAL</h2>
            <div className="flex flex-col gap-4 text-silver text-sm leading-relaxed">
              {portfolioData.profile.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <h2 className="font-display text-gold text-lg border-b border-[#334455] pb-4 mt-4">EDUCACIÓN</h2>
            <div className="flex flex-col gap-4">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="bg-[#0a0f19] p-4 border border-[#334455] rounded flex flex-col gap-2">
                  <h3 className="font-display text-[10px] text-white">{edu.institution}</h3>
                  <p className="text-[#4488ff] text-xs font-bold">{edu.degree}</p>
                  <p className="text-[#7a8b9c] text-xs font-pixel">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'HABILIDADES':
        return (
          <div className="rpg-panel flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <h2 className="font-display text-gold text-lg border-b border-[#334455] pb-4">TECH STACK</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#0a0f19] p-5 border border-[#334455] rounded">
                <h3 className="font-display text-[10px] text-[#ff4444] mb-4">BACKEND</h3>
                <ul className="flex flex-col gap-3">
                  {portfolioData.techStack.backend.map(tech => (
                    <li key={tech} className="text-silver text-sm flex items-center gap-2"><span className="text-gold">▹</span> {tech}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0a0f19] p-5 border border-[#334455] rounded">
                <h3 className="font-display text-[10px] text-[#4488ff] mb-4">FRONTEND & MOBILE</h3>
                <ul className="flex flex-col gap-3">
                  {portfolioData.techStack.frontendMobile.map(tech => (
                    <li key={tech} className="text-silver text-sm flex items-center gap-2"><span className="text-gold">▹</span> {tech}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0a0f19] p-5 border border-[#334455] rounded">
                <h3 className="font-display text-[10px] text-[#44ff44] mb-4">CLOUD & DEVOPS</h3>
                <ul className="flex flex-col gap-3">
                  {portfolioData.techStack.cloudDevOps.map(tech => (
                    <li key={tech} className="text-silver text-sm flex items-center gap-2"><span className="text-gold">▹</span> {tech}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0a0f19] p-5 border border-[#334455] rounded">
                <h3 className="font-display text-[10px] text-gold mb-4">DATABASES & OTROS</h3>
                <ul className="flex flex-col gap-3">
                  {[...portfolioData.techStack.databases, ...portfolioData.techStack.others].map(tech => (
                    <li key={tech} className="text-silver text-sm flex items-center gap-2"><span className="text-gold">▹</span> {tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'PROYECTOS':
        return (
          <div className="rpg-panel flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <h2 className="font-display text-gold text-lg border-b border-[#334455] pb-4">MIS PROYECTOS</h2>
            <div className="grid grid-cols-2 gap-6">
              {portfolioData.projects.map((p, i) => (
                <div key={i} className="bg-[#0a0f19] p-5 border border-[#334455] rounded flex flex-col h-full group hover:border-[#8294a6] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl bg-[#151e2b] p-3 rounded border border-[#334455]">{p.icon}</div>
                    <h3 className="font-display text-[11px] text-white leading-snug">{p.title}</h3>
                  </div>
                  <p className="text-silver text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <button className="rpg-btn-dark w-full">EXPLORAR ❯</button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'EXPERIENCIA':
        return (
          <div className="rpg-panel flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6">
            <h2 className="font-display text-gold text-lg border-b border-[#334455] pb-4 flex items-center gap-3">
              <span>⚔️</span> QUEST LOG (EXPERIENCIA)
            </h2>
            <div className="relative border-l-2 border-[#334455] ml-4 pl-6 py-2 flex flex-col gap-8">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 bg-gold rounded-full shadow-[0_0_8px_#f2cc79]" />
                  <div className="bg-[#0a0f19] p-5 border border-[#334455] rounded">
                    <div className="flex flex-col mb-3">
                      <h3 className="font-display text-[12px] text-white">{exp.role}</h3>
                      <p className="text-gold font-bold text-sm mt-1">{exp.company}</p>
                      <p className="text-[#7a8b9c] text-xs font-pixel mt-1">{exp.date}</p>
                    </div>
                    <ul className="flex flex-col gap-2 mt-4">
                      {exp.achievements.map((achieve, i) => (
                        <li key={i} className="text-silver text-xs flex items-start gap-2 leading-relaxed">
                          <span className="text-[#4488ff] shrink-0 mt-[2px]">▹</span> {achieve}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'CONTACTO':
        return (
          <div className="rpg-panel flex-1 p-8 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10">
               <Image src="/assets/background-portfolio.png" alt="Background" fill className="object-cover" />
            </div>
            <div className="relative z-10 bg-[#0a0f19]/90 border border-[#8294a6] p-8 w-full max-w-md flex flex-col gap-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <h2 className="font-display text-gold text-center text-xl mb-4">ENVIAR MENSAJE</h2>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-[#151e2b] p-3 border border-[#334455]">
                  <span className="text-xl">✉️</span>
                  <div className="flex flex-col">
                    <span className="font-display text-[7px] text-[#7a8b9c] mb-1">CORREO ELECTRÓNICO</span>
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-white text-sm hover:text-gold transition-colors">{portfolioData.personalInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#151e2b] p-3 border border-[#334455]">
                  <span className="text-xl">📱</span>
                  <div className="flex flex-col">
                    <span className="font-display text-[7px] text-[#7a8b9c] mb-1">TELÉFONO</span>
                    <span className="text-white text-sm">{portfolioData.personalInfo.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#151e2b] p-3 border border-[#334455]">
                  <span className="text-xl">📍</span>
                  <div className="flex flex-col">
                    <span className="font-display text-[7px] text-[#7a8b9c] mb-1">UBICACIÓN</span>
                    <span className="text-white text-sm">{portfolioData.personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#151e2b] p-3 border border-[#334455]">
                  <span className="text-xl">🔗</span>
                  <div className="flex flex-col">
                    <span className="font-display text-[7px] text-[#7a8b9c] mb-1">LINKEDIN</span>
                    <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-white text-sm hover:text-gold transition-colors break-all">Visitar Perfil</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden text-white font-pixel relative flex flex-col justify-between" style={{ backgroundColor: '#111' }}>
      
      {/* Background Layer: Tilemap */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: "url('/assets/background-portfolio.png')",
          backgroundSize: '300px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          imageRendering: 'pixelated'
        }} 
      />

      {/* Main Container - Added padding to mimic safe area */}
      <div className="relative z-10 w-full h-full p-4 flex flex-col gap-4 max-w-[1600px] mx-auto">
        
        {/* ── TOP ROW ─────────────────────────────────────────────── */}
        <div className="flex justify-between items-start h-28 shrink-0">
          
          {/* Character Panel (Replaced with the uploaded card image) */}
          <div className="relative w-80 h-full drop-shadow-xl hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => setActiveTab('SOBRE MÍ')}>
            <Image 
              src="/assets/card-presentacion-personaje.png" 
              alt="Character Card" 
              fill 
              sizes="320px" 
              className="object-contain object-left" 
              priority 
            />
          </div>

          {/* Top Right Map & Icons */}
          <div className="flex items-center gap-4 h-full">
            <div className="rpg-panel flex items-center justify-center gap-3 px-4 h-12">
              <span onClick={() => setActiveTab('INICIO')} className="text-xl cursor-pointer hover:scale-110 transition-transform text-white-shadow" title="Inicio">🏠</span>
              <span onClick={() => setActiveTab('PROYECTOS')} className="text-xl cursor-pointer hover:scale-110 transition-transform text-white-shadow" title="Proyectos">🧰</span>
              <span onClick={() => setActiveTab('EXPERIENCIA')} className="text-xl cursor-pointer hover:scale-110 transition-transform text-white-shadow" title="Experiencia">🏆</span>
              <span onClick={() => setActiveTab('CONTACTO')} className="text-xl cursor-pointer hover:scale-110 transition-transform text-white-shadow" title="Contacto">✉️</span>
            </div>
            
            <div className="rpg-panel w-40 h-full p-1 cursor-pointer" onClick={() => setActiveTab('INICIO')}>
              <div className="w-full h-full relative bg-[#111] overflow-hidden border border-[#334455]">
                <Image src="/assets/background-portfolio.png" alt="Map" fill sizes="160px" className="object-cover scale-[2.5] origin-top-right" style={{ imageRendering: 'pixelated' }} />
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* ── MIDDLE ROW ──────────────────────────────────────────── */}
        <div className="flex justify-between flex-1 gap-4 min-h-0">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 w-64 shrink-0 h-full">
            <div className="rpg-panel flex-1 flex flex-col py-2">
              <div className="px-4 py-3 border-b border-[#334455] mb-2 font-display text-[9px] text-silver tracking-widest">
                MENÚ PRINCIPAL
              </div>
              {(['INICIO', 'SOBRE MÍ', 'HABILIDADES', 'PROYECTOS', 'EXPERIENCIA', 'CONTACTO'] as TabName[]).map((tab, idx) => (
                <div 
                  key={tab}
                  className={`left-menu-item relative ${activeTab === tab ? 'active' : ''} ${idx === 5 ? 'border-b-0' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab} 
                  <span className="ml-auto text-lg leading-none opacity-80">
                    {tab === 'INICIO' && '🗡️'}
                    {tab === 'SOBRE MÍ' && '👤'}
                    {tab === 'HABILIDADES' && '📖'}
                    {tab === 'PROYECTOS' && '🧰'}
                    {tab === 'EXPERIENCIA' && '📜'}
                    {tab === 'CONTACTO' && '✉️'}
                  </span>
                </div>
              ))}
            </div>

            <div className="rpg-panel h-24 p-4 flex flex-col justify-center">
              <div className="font-display text-[8px] text-silver tracking-widest mb-3">
                ESTADO DE DESARROLLADOR
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-[#44ff44] rounded-full shadow-[0_0_8px_#44ff44] animate-pulse" />
                <span className="font-display text-[8px] text-[#44ff44] leading-snug">{portfolioData.personalInfo.status}</span>
              </div>
            </div>
          </div>

          {/* Center Column: DYNAMIC CONTENT */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {renderContent()}
          </div>

          {/* Right Column: Always visible or dynamic? Let's keep it visible on INICIO, but maybe hide or adapt on other tabs? 
              Actually, the reference layout usually keeps the right column persistent for Skills & Stats, 
              or we can conditionally hide it so the center panel has more room for Experiences! 
              Let's make it conditional: only visible on INICIO, SOBRE MÍ, and CONTACTO to give more width to EXPERIENCIA and PROYECTOS if needed, 
              or just keep it fixed. I'll keep it fixed so the layout doesn't jump around. */}
          <div className={`flex flex-col gap-4 w-72 shrink-0 h-full ${activeTab === 'EXPERIENCIA' || activeTab === 'PROYECTOS' ? 'hidden xl:flex' : 'flex'}`}>
            <div className="rpg-panel flex-1 p-5 overflow-hidden flex flex-col">
              <div className="font-display text-[10px] text-silver tracking-widest mb-6 border-b border-[#334455] pb-3 shrink-0">
                TOP HABILIDADES
              </div>
              <div className="flex flex-col gap-5 flex-1 justify-center">
                {portfolioData.skillsForChart.map(s => (
                  <div key={s.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 w-28">
                      <div className="w-5 h-5 bg-[#1a2533] border border-[#334455] rounded flex items-center justify-center font-display text-[8px] text-gold shrink-0">
                        {s.name.substring(0, 2)}
                      </div>
                      <span className="font-display text-[8px] text-white-shadow truncate">{s.name}</span>
                    </div>
                    <div className="skill-pip-track shrink-0">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className={`skill-pip ${i < s.pips ? `filled ${s.color}` : ''}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rpg-panel h-56 p-5 flex flex-col justify-center shrink-0">
              <div className="font-display text-[10px] text-silver tracking-widest mb-6 border-b border-[#334455] pb-3">
                ESTADÍSTICAS
              </div>
              <div className="space-y-5">
                {portfolioData.stats.map(s => (
                  <div key={s.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-sm">{s.icon}</span>
                      <span className="font-display text-[7px] text-silver">{s.label}</span>
                    </div>
                    <span className="font-display text-[9px] text-gold-shadow">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ROW ──────────────────────────────────────────── */}
        <div className="h-10 shrink-0 rpg-panel flex justify-between items-center px-6">
          <div className="flex items-center gap-6 font-display text-[8px] text-silver tracking-widest">
            <span>{portfolioData.personalInfo.name.toUpperCase()} © 2026</span>
            <span className="text-[#ff4444]">❤ HECHO CON PASIÓN</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="font-display text-[8px] text-silver hover:text-white cursor-pointer">LINKEDIN</a>
            <a href={portfolioData.personalInfo.portfolio} target="_blank" rel="noreferrer" className="font-display text-[8px] text-silver hover:text-white cursor-pointer">PORTFOLIO</a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="font-display text-[8px] text-silver hover:text-white cursor-pointer">CORREO</a>
          </div>
        </div>
      </div>

      <div className="crt-overlay" />
    </div>
  );
}
