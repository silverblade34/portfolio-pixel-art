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
      {/* Hero identical to Skills */}
      <div className="skills-header-area" style={{ margin: 0, padding: '30px 44px' }}>
        <Image 
          src="/assets/personaje-mirando-ciudad-alargado.png" 
          alt="Hero Background" 
          fill 
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0, opacity: 0.8, imageRendering: 'pixelated' }} 
          priority
        />
        {/* Overlays to blend into the main background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(8,11,16,1) 0%, rgba(8,11,16,0.6) 40%, transparent 80%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(8,11,16,1) 0%, transparent 50%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(8,11,16,1) 0%, transparent 20%)', zIndex: 1 }} />
        
        <div className="skills-header-content">
          <div className="skills-main-title">
            <span className="skills-bolt">🗂️</span>
            <h2>PROYECTOS</h2>
          </div>
          <p className="skills-main-desc">
            Explora mis proyectos personales. Cada uno demuestra diferentes habilidades y tecnologías.
          </p>
        </div>
      </div>

      {/* Filter tabs moved outside the hero */}
      <div className="filter-tabs" style={{ padding: '0 22px 16px', borderBottom: '1px solid var(--color-border)' }}>
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
