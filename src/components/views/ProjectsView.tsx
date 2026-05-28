'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioData, Project } from '@/app/data';
import { FilterTag } from '@/types';
import { ProjectCardV2 } from '@/components/ui/ProjectCardV2';
import { ProjectModal } from '@/components/ui/ProjectModal';

const filterTabs: FilterTag[] = ['TODOS', 'WEB APPS', 'HERRAMIENTAS', 'IOT/CLOUD', 'DISEÑO'];

export function ProjectsView() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('TODOS');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = portfolioData.projects.filter(p => {
    if (activeFilter === 'TODOS') return true;
    return p.filterTags.includes(activeFilter);
  });

  return (
    <div className="projects-view-v3">
      {/* Compact Hero */}
      <div className="hero-panel" style={{ minHeight: 'auto', flexShrink: 0 }}>
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
        <div className="hero-content" style={{ padding: '18px 24px 14px' }}>
          <p className="hero-hello" style={{ margin: 0 }}>¡HOLA, SOY</p>
          <h1 className="hero-name" style={{ fontSize: '22px', margin: '4px 0 0' }}>MARCOS PACHECO</h1>
          <p className="hero-role" style={{ fontSize: '10px', margin: '4px 0 0' }}>FULL STACK ENGINEER</p>
        </div>
      </div>

      {/* Header + Filter tabs */}
      <div style={{ padding: '14px 20px 12px', flexShrink: 0, borderBottom: '1px solid var(--color-border)' }}>
        <div className="section-header" style={{ marginBottom: '6px' }}>
          <span className="section-title">🗂️ PROYECTOS</span>
        </div>
        <p className="projects-view-desc" style={{ marginBottom: '12px' }}>
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
      </div>

      {/* Grid scrollable area */}
      <div className="projects-view-scroll">
        <div className="projects-grid-v2" style={{ padding: '0', marginTop: '0' }}>
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
    </div>
  );
}
