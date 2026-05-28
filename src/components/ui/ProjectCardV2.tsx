import React from 'react';
import Image from 'next/image';
import { Project } from '@/app/data';
import { rarityLabel } from '@/lib/utils';

export function ProjectCardV2({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const imgExists = ['/khipu-craft.png', '/khipu-forms.png', '/qhatupe.png'].includes(project.img);
  const isHighlighted = project.tags.includes('⭐ DESTACADO');

  return (
    <div
      className={`project-card-v2 rarity-${project.rarity}`}
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div className="project-thumb-v2" style={{ position: 'relative' }}>
        {imgExists ? (
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="400px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <div className="project-thumb-placeholder">{project.emoji}</div>
        )}
        {/* Badge row */}
        <div className="card-badges-row">
          <span className={`card-rarity-badge rarity-${project.rarity}`}>
            {rarityLabel(project.rarity)}
          </span>
          {isHighlighted && (
            <span className="card-highlight-badge">⭐ DESTACADO</span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-body-v2">
        <div className="project-category-tag">{project.categoryTag}</div>
        <div className="project-title-v2">{project.title}</div>
        <p className="project-desc-v2">{project.desc}</p>
        <div className="project-tech-row-v2">
          {project.techStack.slice(0, 4).map(t => (
            <span key={t} className="tech-pill-v2">{t}</span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tech-pill-v2">+{project.techStack.length - 4}</span>
          )}
        </div>
        <div className="project-footer-v2">
          <div className="project-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="project-star" style={{ opacity: i < project.stars ? 1 : 0.2 }}>★</span>
            ))}
          </div>
          <button className="btn-details" onClick={e => { e.stopPropagation(); onOpen(project); }}>
            Ver detalles →
          </button>
        </div>
      </div>
    </div>
  );
}
