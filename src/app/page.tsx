'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { portfolioData, type Project } from './data';

type TabName = 'INICIO' | 'SOBRE MÍ' | 'HABILIDADES' | 'PROYECTOS' | 'EXPERIENCIA' | 'CONTACTO';
type FilterTag = 'TODOS' | 'WEB APPS' | 'HERRAMIENTAS' | 'IOT/CLOUD' | 'DISEÑO';

const menuItems: { tab: TabName; icon: string }[] = [
  { tab: 'INICIO', icon: '🏠' },
  { tab: 'PROYECTOS', icon: '🗂️' },
  { tab: 'EXPERIENCIA', icon: '📜' },
  { tab: 'HABILIDADES', icon: '⚡' },
  { tab: 'SOBRE MÍ', icon: '👤' },
  { tab: 'CONTACTO', icon: '✉️' },
];

const techBadges = ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Microservicios', 'Docker', 'Next.js', 'Flutter'];
const filterTabs: FilterTag[] = ['TODOS', 'WEB APPS', 'HERRAMIENTAS', 'IOT/CLOUD', 'DISEÑO'];

const TERMINAL_MESSAGES = [
  'Siempre aprendiendo. Siempre construyendo. Siempre mejorando.',
  'root@marcos-pacheco:~$ full-stack --mode=pro --cloud=aws --lang=typescript',
  'Construyendo el futuro, un microservicio a la vez.',
  'root@marcos-pacheco:~$ git push origin main --force-with-lease',
];

// ─── TERMINAL TYPING ────────────────────────────────────────
function TerminalTyping() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const msg = TERMINAL_MESSAGES[msgIdx];
    if (charIdx < msg.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(msg.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 36);
    } else {
      timeoutRef.current = setTimeout(() => {
        setMsgIdx(i => (i + 1) % TERMINAL_MESSAGES.length);
        setDisplayed('');
        setCharIdx(0);
      }, 3000);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIdx, msgIdx]);

  return (
    <footer className="terminal-footer">
      <span className="terminal-prompt">❯ marcos@portfolio:~$</span>
      <span className="terminal-text">{displayed}</span>
      <span className="terminal-cursor" />
    </footer>
  );
}

// ─── RARITY HELPERS ────────────────────────────────────────
function rarityLabel(r: string) {
  if (r === 'LEGENDARY') return '★ LEGENDARY';
  if (r === 'EPIC') return '◆ EPIC';
  if (r === 'RARE') return '● RARE';
  return r;
}

// ─── PROJECT MODAL ─────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
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

// ─── PROJECT CARD V2 ───────────────────────────────────────
function ProjectCardV2({
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

// ─── HOME VIEW ─────────────────────────────────────────────
function HomeView({ onTabChange }: { onTabChange: (t: TabName) => void }) {
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

// ─── PROJECT DETAIL PANEL ──────────────────────────────────
function ProjectDetailPanel({ project }: { project: Project }) {
  const [imgIdx, setImgIdx] = useState(0);
  const imgExists = ['/khipu-craft.png', '/khipu-forms.png', '/qhatupe.png'].includes(project.img);
  const images = imgExists ? [project.img, project.img, project.img] : [];

  return (
    <div className="proj-detail-panel">
      <div className="proj-detail-header">
        <div className="proj-detail-title-row">
          <span className="proj-detail-emoji">{project.emoji}</span>
          <div>
            <div className="proj-detail-title">{project.title}</div>
            <div className="proj-detail-subtitle">{project.subtitle}</div>
          </div>
        </div>
        <div className="modal-tag-row" style={{ marginTop: '8px' }}>
          {project.tags.map(t => (
            <span key={t} className="modal-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="proj-detail-carousel">
        <div className="proj-detail-img-main" style={{ position: 'relative' }}>
          {images.length > 0 ? (
            <>
              <Image src={images[imgIdx]} alt={project.title} fill sizes="600px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
              {images.length > 1 && (
                <>
                  <button className="proj-carousel-btn left" onClick={() => setImgIdx(i => (i - 1 + images.length) % images.length)}>&#8249;</button>
                  <button className="proj-carousel-btn right" onClick={() => setImgIdx(i => (i + 1) % images.length)}>&#8250;</button>
                </>
              )}
            </>
          ) : (
            <div className="modal-image-placeholder">
              <div className="modal-image-placeholder-icon">{project.emoji}</div>
              <div className="modal-image-placeholder-text">{project.title.toUpperCase()}</div>
            </div>
          )}
        </div>
        {images.length > 1 && (
          <div className="proj-detail-thumbs">
            {images.map((img, i) => (
              <div key={i} className={`proj-detail-thumb${imgIdx === i ? ' active' : ''}`} style={{ position: 'relative' }} onClick={() => setImgIdx(i)}>
                <Image src={img} alt={`${project.title} ${i + 1}`} fill sizes="80px" style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="proj-detail-body">
        <div className="modal-section-label">▸ DESCRIPCIÓN</div>
        <p className="modal-desc">{project.longDesc}</p>
        <div className="modal-section-label" style={{ marginTop: '14px' }}>▸ CARACTERÍSTICAS CLAVE</div>
        <div className="modal-features-list">
          {project.features.map((f, i) => (
            <div key={i} className="modal-feature-item">
              <span className="modal-feature-check">✓</span>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
        <div className="modal-section-label" style={{ marginTop: '14px' }}>▸ STACK TECNOLÓGICO</div>
        <div className="modal-tech-row">
          {project.techStack.map(t => (
            <span key={t} className="tech-badge-neon">{t}</span>
          ))}
        </div>
      </div>

      <div className="modal-footer">
        <a href={project.repoUrl ?? 'https://github.com/'} target="_blank" rel="noreferrer" className="modal-btn-secondary">🐙 Ver Repositorio</a>
        <a href={project.demoUrl ?? project.repoUrl ?? '#'} target="_blank" rel="noreferrer" className="modal-btn-primary">🚀 Ver Demo en Vivo</a>
      </div>
    </div>
  );
}

// ─── PROJECT LIST CARD ─────────────────────────────────────
function ProjectListCard({ project, isSelected, onSelect }: { project: Project; isSelected: boolean; onSelect: () => void }) {
  const imgExists = ['/khipu-craft.png', '/khipu-forms.png', '/qhatupe.png'].includes(project.img);
  return (
    <div className={`proj-list-card${isSelected ? ' selected' : ''} rarity-${project.rarity}`} onClick={onSelect}>
      {imgExists && isSelected && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
          <Image src={project.img} alt="" fill sizes="400px" style={{ objectFit: 'cover', objectPosition: 'top', opacity: 0.12 }} />
        </div>
      )}
      <div className="proj-list-card-inner">
        <div className="proj-list-card-top">
          <span className="proj-list-emoji">{project.emoji}</span>
          <span className={`card-rarity-badge rarity-${project.rarity}`}>{rarityLabel(project.rarity)}</span>
        </div>
        <div className="proj-list-title">{project.title}</div>
        <p className="proj-list-desc">{project.desc}</p>
        <div className="project-tech-row-v2" style={{ marginTop: '8px' }}>
          {project.techStack.slice(0, 3).map(t => <span key={t} className="tech-pill-v2">{t}</span>)}
          {project.techStack.length > 3 && <span className="tech-pill-v2">+{project.techStack.length - 3}</span>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <span className="btn-details">Ver detalles →</span>
        </div>
      </div>
    </div>
  );
}

// ─── PROJECTS VIEW ─────────────────────────────────────────
function ProjectsView() {
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

// ─── ABOUT VIEW ────────────────────────────────────────────
function AboutView() {
  return (
    <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <div>
        <div className="about-label">👤 PERFIL PROFESIONAL</div>
        <div className="about-section-card">
          {portfolioData.profile.split('\n\n').map((p, i) => (
            <p key={i} className="about-paragraph">{p}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="about-label">🎓 EDUCACIÓN</div>
        <div className="about-section-card">
          {portfolioData.education.map((edu, i) => (
            <div key={i}>
              <div className="about-edu-inst">{edu.institution}</div>
              <div className="about-edu-degree">{edu.degree}</div>
              <div className="about-edu-period">{edu.period}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SKILLS VIEW ───────────────────────────────────────────
function SkillsView() {
  const categories = [
    { name: 'BACKEND', items: portfolioData.techStack.backend, color: '#ff5555' },
    { name: 'FRONTEND & MOBILE', items: portfolioData.techStack.frontendMobile, color: '#00d9ff' },
    { name: 'CLOUD & DEVOPS', items: portfolioData.techStack.cloudDevOps, color: '#27c93f' },
    { name: 'DATABASES & OTROS', items: [...portfolioData.techStack.databases, ...portfolioData.techStack.others], color: '#f2c94c' },
  ];

  return (
    <div style={{ padding: '22px' }}>
      <div className="section-title" style={{ marginBottom: '18px' }}>⚡ ARSENAL TÉCNICO</div>
      <div className="skills-grid">
        {categories.map(cat => (
          <div key={cat.name} className="skill-category-card">
            <div className="skill-category-name" style={{ color: cat.color }}>{cat.name}</div>
            {cat.items.map(item => (
              <div key={item} className="skill-item">
                <span className="skill-bullet" style={{ color: cat.color }}>▹</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── EXPERIENCE VIEW ───────────────────────────────────────
function ExperienceView() {
  return (
    <div style={{ padding: '22px' }}>
      <div className="section-title" style={{ marginBottom: '18px' }}>📜 QUEST LOG — EXPERIENCIA</div>
      <div className="exp-full-timeline">
        {portfolioData.experience.map((exp, idx) => (
          <div key={idx} className="exp-full-item">
            <div
              className="exp-full-dot"
              style={{
                background: idx === 0 ? 'var(--color-cyan)' : 'var(--color-border-hl)',
                border: `2px solid ${idx === 0 ? 'var(--color-cyan)' : 'var(--color-border)'}`,
                boxShadow: idx === 0 ? '0 0 8px rgba(0,217,255,0.5)' : 'none',
              }}
            />
            <div className={`exp-full-card ${idx === 0 ? 'active' : ''}`}>
              <div className="exp-full-role">{exp.role}</div>
              <div className="exp-full-company">{exp.company}</div>
              <div className="exp-full-date">
                {exp.date}
                {exp.isActive && (
                  <span className="exp-active-badge" style={{ marginLeft: '8px' }}>Actual</span>
                )}
              </div>
              <ul className="exp-full-list">
                {exp.achievements.map((a, ai) => (
                  <li key={ai}>
                    <span>▹</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CONTACT VIEW ──────────────────────────────────────────
function ContactView() {
  const { personalInfo } = portfolioData;
  const items = [
    { icon: '✉️', label: 'CORREO', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: '📱', label: 'TELÉFONO', value: personalInfo.phone, href: null },
    { icon: '📍', label: 'UBICACIÓN', value: 'Lima, Perú', href: null },
    { icon: '🔗', label: 'LINKEDIN', value: 'Ver perfil →', href: personalInfo.linkedin },
    { icon: '🌐', label: 'PORTFOLIO', value: 'maquiadev.com →', href: personalInfo.portfolio },
  ];

  return (
    <div style={{ padding: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
      <div className="contact-box">
        <div className="contact-title">INICIAR CONTACTO</div>
        {items.map(item => (
          <div key={item.label} className="contact-item">
            <span className="contact-icon">{item.icon}</span>
            <div>
              <div className="contact-label">{item.label}</div>
              {item.href
                ? <a href={item.href} target="_blank" rel="noreferrer" className="contact-value-link">{item.value}</a>
                : <span className="contact-value-text">{item.value}</span>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabName>('INICIO');

  const renderCenter = () => {
    switch (activeTab) {
      case 'INICIO': return <HomeView onTabChange={setActiveTab} />;
      case 'SOBRE MÍ': return <AboutView />;
      case 'HABILIDADES': return <SkillsView />;
      case 'PROYECTOS': return <ProjectsView />;
      case 'EXPERIENCIA': return <ExperienceView />;
      case 'CONTACTO': return <ContactView />;
      default: return <HomeView onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-root">
      <div className="portfolio-columns">

        {/* ── LEFT COLUMN ── */}
        <aside className="col-left">
          {/* Character card */}
          <div className="char-card">
            <Image
              src="/assets/card-presentacion-personaje.png"
              alt="Marcos Pacheco – Full Stack Engineer"
              width={420}
              height={420}
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
                onClick={() => setActiveTab(tab)}
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

          {/* Quote box */}
          <div className="quote-box">
            <span className="quote-text">
              "Construyo soluciones escalables que resuelven problemas reales y generan impacto."
            </span>
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

          <div style={{ flex: 1, overflow: activeTab === 'PROYECTOS' ? 'hidden' : 'auto', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            {renderCenter()}
          </div>
        </main>

      </div>

      <TerminalTyping />
      <div className="crt-overlay" />
    </div>
  );
}
