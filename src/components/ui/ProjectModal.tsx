'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/app/data';

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const imgExists = ['/khipu-craft.png', '/khipu-forms.png', '/qhatupe.png'].includes(project.img);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-box rarity-${project.rarity}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <div className="modal-title-row">
              <span className="modal-emoji">{project.emoji}</span>
              <span className="modal-title">{project.title}</span>
            </div>
            <div className="modal-subtitle">{project.subtitle}</div>
            <div className="modal-tag-row">
              {project.tags.map(t => (
                <span key={t} className="modal-tag">{t}</span>
              ))}
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        {/* Image area */}
        <div className="modal-image-area" style={{ position: 'relative' }}>
          {imgExists ? (
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="700px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          ) : (
            <div className="modal-image-placeholder">
              <div className="modal-image-placeholder-icon">{project.emoji}</div>
              <div className="modal-image-placeholder-text">{project.title.toUpperCase()}</div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="modal-body">
          {/* Description */}
          <div>
            <div className="modal-section-label">▸ DESCRIPCIÓN</div>
            <p className="modal-desc">{project.longDesc}</p>
          </div>

          {/* Features */}
          <div>
            <div className="modal-section-label">▸ CARACTERÍSTICAS CLAVE</div>
            <div className="modal-features-list">
              {project.features.map((f, i) => (
                <div key={i} className="modal-feature-item">
                  <span className="modal-feature-check">✓</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div>
            <div className="modal-section-label">▸ STACK TECNOLÓGICO</div>
            <div className="modal-tech-row">
              {project.techStack.map(t => (
                <span key={t} className="tech-badge-neon">{t}</span>
              ))}
            </div>
          </div>

          {/* Perf metrics */}
          <div>
            <div className="modal-section-label">▸ MÉTRICAS</div>
            <div className="modal-metrics-row">
              {project.metrics.map((m, i) => (
                <div key={i} className="modal-metric">
                  <div className={`modal-metric-value ${m.color ?? 'cyan'}`}>{m.value}</div>
                  <div className="modal-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <a
            href={project.repoUrl ?? 'https://github.com/'}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-secondary"
          >
            🐙 Ver Repositorio
          </a>
          <a
            href={project.demoUrl ?? project.repoUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-primary"
          >
            🚀 Ver Demo en Vivo
          </a>
        </div>
      </div>
    </div>
  );
}
