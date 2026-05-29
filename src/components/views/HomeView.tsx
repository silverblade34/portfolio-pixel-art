'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/app/data';
import { TabName } from '@/types';

const techBadges = ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Microservicios', 'Docker', 'Next.js', 'Flutter'];

const statsCards = [
  { sprite: '/assets/sprites/home/card-logros-estadisticas-proyectos-construidos.png', alt: 'Proyectos construidos', width: 165 },
  { sprite: '/assets/sprites/home/card-logros-estadisticas-anos-experiencia.png', alt: 'Años de experiencia', width: 165 },
  { sprite: '/assets/sprites/home/card-logros-estadisticas-usuarios-impactados.png', alt: 'Usuarios impactados', width: 165 },
  { sprite: '/assets/sprites/home/card-logros-estadisticas-aprendizaje-constante.png', alt: 'Aprendizaje constante', width: 165 },
  { sprite: '/assets/sprites/home/card-logros-estadisticas-proyectos-produccion.png', alt: 'Proyectos en producción', width: 160 },
  { sprite: '/assets/sprites/home/card-logros-estadisticas-desafios-superados.png', alt: 'Desafíos superados', width: 160 },
];

const FAUNO_FULL_TEXT = 'Te invito a escuchar una composición mía. 🎵';
const TYPEWRITER_SPEED_MS = 70;

export function HomeView({
  onTabChange,
  onPlayMusic,
}: {
  onTabChange: (t: TabName) => void;
  onPlayMusic?: () => void;
}) {
  // Dialog state only — fauno is always visible
  const [dialogOpen, setDialogOpen] = useState(false);  // controls render
  const [dialogFading, setDialogFading] = useState(false);  // controls fade-out CSS
  const [typedText, setTypedText] = useState('');
  const [textDone, setTextDone] = useState(false);

  /* ── Delayed dialog entrance (1.8s after mount) ── */
  useEffect(() => {
    const showId = setTimeout(() => setDialogOpen(true), 1200);
    return () => clearTimeout(showId);
  }, []);

  /* ── Typewriter — runs once dialog opens ── */
  useEffect(() => {
    if (!dialogOpen || dialogFading) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTypedText(FAUNO_FULL_TEXT.slice(0, i));
      if (i >= FAUNO_FULL_TEXT.length) {
        clearInterval(id);
        setTextDone(true);
      }
    }, TYPEWRITER_SPEED_MS);
    return () => clearInterval(id);
  }, [dialogOpen, dialogFading]);

  /* ── Smooth dialog close ── */
  const closeDialog = (playMusic: boolean) => {
    if (playMusic) onPlayMusic?.();
    setDialogFading(true);
    setTimeout(() => {
      setDialogOpen(false);
      setDialogFading(false);
    }, 400);
  };

  return (
    <div className="home-view-root">

      {/* ── Hero ── */}
      <div className="hero-panel">
        <div className="hero-bg">
          <Image
            src="/assets/personaje-mirando-ciudad.png"
            alt="Marcos mirando la ciudad"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%', imageRendering: 'pixelated' }}
            priority
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-hello">¡HOLA, SOY</p>
          <h1 className="hero-name">MARCOS<br />PACHECO</h1>
          <p className="hero-role">FULL STACK ENGINEER</p>
          <p className="hero-desc">
            Construyo sistemas escalables, robustos y eficientes<br />que resuelven problemas reales de negocio.
          </p>
          <div className="tech-badges">
            {techBadges.map(b => <span key={b} className="tech-badge">{b}</span>)}
          </div>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => onTabChange('PROYECTOS')}>
              VER PROYECTOS →
            </button>
            <a
              href={portfolioData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              DESCARGAR CV ↓
            </a>
          </div>
        </div>
      </div>

      {/* ── Stats + Fauno row ── */}
      <div className="home-stats-section">
        <div className="home-stats-header">
          <span className="home-stats-title">🏆 LOGROS &amp; ESTADÍSTICAS</span>
          <p className="home-stats-sub">Hitos alcanzados en este viaje épico como desarrollador</p>
        </div>

        {/* cards + fauno in the same flex row */}
        <div className="home-stats-row">

          {/* 6 stat cards */}
          <div className="home-stats-grid">
            {statsCards.map((card, i) => (
              <div key={i} className="home-stat-card" style={{ width: card.width }}>
                <Image
                  src={card.sprite}
                  alt={card.alt}
                  width={card.width}
                  height={170}
                  style={{ width: '100%', height: 'auto', imageRendering: 'pixelated', display: 'block' }}
                />
              </div>
            ))}
          </div>

          {/* Fauno — always visible, dialog is the only thing that toggles */}
          <div className="fauno-column">

            {/* Dialog bubble — only shown when dialogOpen */}
            {dialogOpen && (
              <div className={`fauno-dialog${dialogFading ? ' fauno-dialog-fading' : ''}`}>
                <div className="fauno-dialog-bg">
                  <Image
                    src="/assets/sprites/home/dialogo-fauno-en-blanco.png"
                    alt="Dialog bubble"
                    fill
                    sizes="260px"
                    style={{ objectFit: 'fill', imageRendering: 'pixelated' }}
                  />
                </div>
                <div className="fauno-dialog-content">
                  <button
                    className="fauno-dialog-close"
                    onClick={() => closeDialog(false)}
                    aria-label="Cerrar"
                  >
                    ×
                  </button>
                  <p className="fauno-dialog-text">
                    {typedText}
                    {!textDone && <span className="fauno-cursor">▋</span>}
                  </p>
                  {textDone && (
                    <button className="fauno-dialog-btn" onClick={() => closeDialog(true)}>
                      <span className="fauno-dialog-play">▶</span>
                      ESCUCHAR AHORA
                      <span className="fauno-dialog-wave">▂▃▅▇▅▃▂</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Fauno character — permanent */}
            <div className="fauno-character">
              <Image
                src="/assets/sprites/home/fauno.png"
                alt="Fauno – Compositor"
                width={130}
                height={170}
                style={{ imageRendering: 'pixelated', width: '130px', height: 'auto' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
