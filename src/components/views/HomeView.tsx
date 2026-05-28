'use client';

import Image from 'next/image';
import { portfolioData } from '@/app/data';
import { TabName } from '@/types';
import { rarityLabel } from '@/lib/utils';

const techBadges = ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Microservicios', 'Docker', 'Next.js', 'Flutter'];

export function HomeView({ onTabChange }: { onTabChange: (t: TabName) => void }) {
  const { achievements } = portfolioData;


  return (
    <>
      {/* Hero */}
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

      {/* LOGROS / Achievements */}
      <div className="achievements-section">
        <div className="section-header">
          <span className="section-title">🏆 LOGROS</span>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`achievement-card rarity-${a.rarity}`}>
              <span className="achievement-icon">{a.icon}</span>
              <span className={`achievement-rarity rarity-${a.rarity}`}>{rarityLabel(a.rarity)}</span>
              <span className="achievement-title">{a.title}</span>
              <span className="achievement-desc">{a.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
