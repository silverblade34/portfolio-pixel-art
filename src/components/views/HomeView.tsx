'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/app/data';
import { TabName, FilterTag } from '@/types';
import { rarityLabel } from '@/lib/utils';
import { ProjectCardV2 } from '@/components/ui/ProjectCardV2';
import { ProjectModal } from '@/components/ui/ProjectModal';

const techBadges = ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Microservicios', 'Docker', 'Next.js', 'Flutter'];
const filterTabs: FilterTag[] = ['TODOS', 'WEB APPS', 'HERRAMIENTAS', 'IOT/CLOUD', 'DISEÑO'];

export function HomeView({ onTabChange }: { onTabChange: (t: TabName) => void }) {
  const { achievements } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<FilterTag>('TODOS');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = portfolioData.projects.filter(p => {
    if (activeFilter === 'TODOS') return true;
    return p.filterTags.includes(activeFilter);
  });

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

      {/* PROYECTOS COMPLETOS */}
      <div className="projects-section">
        <div className="section-header" style={{ marginBottom: '8px' }}>
          <span className="section-title">🗂️ PROYECTOS</span>
        </div>
        <p className="projects-view-desc" style={{ marginBottom: '14px' }}>
          Explora mis proyectos personales. Cada uno demuestra diferentes habilidades y tecnologías.
        </p>

        <div className="filter-tabs">
          {filterTabs.map(f => (
            <button
              key={f}
              className={`filter-tab${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid-v2" style={{ padding: '0', marginTop: '16px' }}>
          {filtered.map(p => (
            <ProjectCardV2 key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
          {/* New Project Card */}
          <div className="project-card-new">
            <div className="project-card-new-icon">+ </div>
            <div className="project-card-new-title">Nuevo Proyecto</div>
            <div className="project-card-new-desc">
              Siempre construyendo algo genial...
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--color-border-hl)' }}>{'</>'}</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
