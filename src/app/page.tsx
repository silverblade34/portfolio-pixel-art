'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { portfolioData } from './data';

import { TabName } from '@/types';
import { TerminalTyping } from '@/components/ui/TerminalTyping';
import { HomeView } from '@/components/views/HomeView';
import { AboutView } from '@/components/views/AboutView';
import { SkillsView } from '@/components/views/SkillsView';
import { ProjectsView } from '@/components/views/ProjectsView';
import { ExperienceView } from '@/components/views/ExperienceView';
import { ContactView } from '@/components/views/ContactView';

const menuItems: { tab: TabName; icon: string }[] = [
  { tab: 'INICIO', icon: '🏠' },
  { tab: 'PROYECTOS', icon: '🗂️' },
  { tab: 'EXPERIENCIA', icon: '📜' },
  { tab: 'HABILIDADES', icon: '⚡' },
  { tab: 'SOBRE MÍ', icon: '👤' },
  { tab: 'CONTACTO', icon: '✉️' },
];

const assetsToPreload = [
  // Backgrounds & Heroes
  '/assets/personaje-mirando-ciudad-alargado.png',
  '/assets/sprites/experiencia/fondo-mapa-experiencia.png',
  '/assets/sprites/experiencia/card-leyenda.png',
  '/assets/sprites/experiencia/card-proxima-aventura.png',
  '/assets/sprites/experiencia/personaje-inicio-aventura.png',
  
  // Experience Nodes/Flags
  '/assets/sprites/experiencia/experiencia-bandera-1.png',
  '/assets/sprites/experiencia/experiencia-bandera-2.png',
  '/assets/sprites/experiencia/experiencia-bandera-3.png',
  '/assets/sprites/experiencia/experiencia-bandera-4.png',
  '/assets/sprites/experiencia/experiencia-bandera-5.png',
  '/assets/sprites/experiencia/experiencia-bandera-6.png',
  '/assets/sprites/experiencia/experiencia-bandera-7.png',
  '/assets/sprites/experiencia/experiencia-bandera-8.png',

  // Stats Sprites
  '/assets/sprites/experiencia/estadisticas-aventura-aventuras-completadas.png',
  '/assets/sprites/experiencia/estadisticas-aventura-experiencia-profesional.png',
  '/assets/sprites/experiencia/estadisticas-aventura-proyectos-construidos.png',
  '/assets/sprites/experiencia/estadisticas-aventura-usuarios-impactados.png',
  '/assets/sprites/experiencia/estadisticas-aventura-aprendizaje-constante.png',

  // Skills Categories
  '/assets/sprites/icono-backend.png',
  '/assets/sprites/icono-frontend.png',
  '/assets/sprites/icono-cloud.png',
  '/assets/sprites/icono-database.png',
  '/assets/sprites/elementos-generales-ver-detalle.png',

  // Skills Stats & Legend Badges
  '/assets/sprites/iconos-estadisticas-total-tecnologias.png',
  '/assets/sprites/iconos-estadistica-dominio-general.png',
  '/assets/sprites/iconos-estadistica-categoria.png',
  '/assets/sprites/iconos-estadistica-filosofia.png',
  '/assets/sprites/icono-mis-principios.png',
  '/assets/sprites/badges-nivel-legendary.png',
  '/assets/sprites/badges-nivel-epic.png',
  '/assets/sprites/badges-nivel-rare.png',
  '/assets/sprites/badges-nivel-common.png',
];

// ─── MAIN COMPONENT ────────────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabName>('INICIO');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    // Preload image assets asynchronously on client mount
    if (typeof window !== 'undefined') {
      assetsToPreload.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const handleTabChange = (tab: TabName) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const renderCenter = () => {
    switch (activeTab) {
      case 'INICIO': return <HomeView onTabChange={handleTabChange} />;
      case 'SOBRE MÍ': return <AboutView />;
      case 'HABILIDADES': return <SkillsView />;
      case 'PROYECTOS': return <ProjectsView />;
      case 'EXPERIENCIA': return <ExperienceView />;
      case 'CONTACTO': return <ContactView />;
      default: return <HomeView onTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="portfolio-root">
      <div className="portfolio-columns">

        {/* ── LEFT COLUMN ── */}
        {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}
        <aside className={`col-left${mobileMenuOpen ? ' mobile-open' : ''}`}>
          {/* Character card */}
          <div className="char-card">
            <Image
              src="/assets/card-presentacion-personaje.png"
              alt="Marcos Pacheco – Full Stack Engineer"
              width={200}
              height={200}
              style={{ width: '100%', height: 'auto', display: 'block', imageRendering: 'pixelated' }}
              priority
            />
          </div>

          {/* Menu */}
          <div className="menu-section-title">MENÚ PRINCIPAL</div>
          <nav>
            {menuItems.map(({ tab, icon }) => (
              <div
                key={tab}
                className={`menu-item${activeTab === tab ? ' active' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                <span className="menu-icon">{icon}</span>
                {tab}
              </div>
            ))}
          </nav>

          <div style={{ flex: 1 }} />

          {/* Status box */}
          <div className="status-box">
            <div className="menu-section-title" style={{ padding: '0 0 7px', fontSize: '6px' }}>ESTADO</div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '5px' }}>
              <span className="status-dot" style={{ marginTop: '3px' }} />
              <span className="status-label">Disponible para nuevos desafíos</span>
            </div>
            <div className="status-sub">• Abierto a oportunidades<br />  Full-time / Remoto</div>
          </div>

          {/* Footer branding */}
          <div style={{ padding: '10px 14px', borderTop: '1px solid var(--color-border)', flexShrink: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '5.5px', color: 'var(--color-text-dim)', lineHeight: 2 }}>
              © 2026 Marcos Pacheco
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '5.5px', color: '#ff5555' }}>
              HECHO CON PASIÓN ❤
            </div>
          </div>
        </aside>

        {/* ── CENTER COLUMN ── */}
        <main className="col-center">
          {/* Top bar */}
          <div className="top-bar">
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>☰</button>
            <button onClick={toggleMute} className="top-bar-item" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', color: 'inherit' }}>
              <span className="icon">{isMuted ? '🔇' : '🔊'}</span> {isMuted ? 'Play Música' : 'Mute Música'}
            </button>
            <a href="#" className="top-bar-item">
              <span className="icon">📍</span> Lima, Perú
            </a>
            <a href={`mailto:${portfolioData.personalInfo.email}`} className="top-bar-item">
              <span className="icon">✉</span> {portfolioData.personalInfo.email}
            </a>
            <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="top-bar-item">
              <span className="icon">in</span> marcos-pacheco-tacay
            </a>
            <a href={portfolioData.personalInfo.portfolio} target="_blank" rel="noreferrer" className="top-bar-item">
              <span className="icon">🌐</span> maquiadev.com
            </a>
          </div>

          <div style={{ flex: 1, overflow: activeTab === 'EXPERIENCIA' ? 'hidden' : 'auto', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            {renderCenter()}
          </div>
        </main>

      </div>

      <TerminalTyping />
      <div className="crt-overlay" />
      <audio ref={audioRef} src="/musica-fondo-medieval.mp3" loop />
    </div>
  );
}
