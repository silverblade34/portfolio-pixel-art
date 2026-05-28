'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/app/data';

type ExpTab = 'MAPA' | 'LINEA' | 'LOGROS';

// Map node positions (% of container width/height)
const mapNodes = [
  { id: 1, x: 18, y: 65 }, // PRESTACLUB
  { id: 2, x: 40, y: 85 }, // SYS & NET Full Stack
  { id: 3, x: 65, y: 65 }, // MANTRA
  { id: 4, x: 45, y: 45 }, // SYS & NET second
  { id: 5, x: 25, y: 30 }, // D&A
  { id: 6, x: 55, y: 18 }, // UCV
  { id: 7, x: 80, y: 35 }, // SOKSO (current)
  { id: 8, x: 92, y: 15 }, // PRÓXIMA (locked)
];

const characterPos = { x: 4, y: 85 };

// node id → experience array index
const nodeExpMap: Record<number, number> = {
  1: 6, // PRESTACLUB
  2: 5, // SYS & NET Full Stack
  3: 4, // MANTRA
  4: 1, // SYS & NET second
  5: 2, // D&A
  6: 3, // UCV
  7: 0, // SOKSO (current)
};

const connectorPoints = `${characterPos.x},${characterPos.y} ` + mapNodes.map(n => `${n.x},${n.y}`).join(' ');

const statsData = [
  { sprite: '/assets/sprites/experiencia/estadisticas-aventura-aventuras-completadas.png', value: '2+', label: 'Aventuras\ncompletadas' },
  { sprite: '/assets/sprites/experiencia/estadisticas-aventura-experiencia-profesional.png', value: '5+', label: 'Años de\nexperiencia' },
  { sprite: '/assets/sprites/experiencia/estadisticas-aventura-proyectos-construidos.png', value: '10+', label: 'Proyectos\nconstruidos' },
  { sprite: '/assets/sprites/experiencia/estadisticas-aventura-usuarios-impactados.png', value: '6K+', label: 'Usuarios\nimpactados' },
  { sprite: '/assets/sprites/experiencia/estadisticas-aventura-aprendizaje-constante.png', value: '∞', label: 'Aprendizaje\nconstante' },
];

const unlockedAchievements = [
  { color: 'gold', text: 'Sistema de distribución energética con Spring Boot' },
  { color: 'gold', text: 'IA para optimización energética' },
  { color: 'gold', text: 'APIs REST de alto rendimiento' },
];

export function ExperienceView() {
  const [activeTab, setActiveTab] = useState<ExpTab>('MAPA');
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<number>(7);

  const currentExp = portfolioData.experience[nodeExpMap[selectedNodeId]];
  const currentNodeLevel = selectedNodeId;

  return (
    <div className="exp-view-root">

      {/* ── Hero ── */}
      <div className="skills-header-area exp-hero-area">
        <Image
          src="/assets/personaje-mirando-ciudad-alargado.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0, opacity: 0.7, imageRendering: 'pixelated' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,11,16,1) 0%, rgba(8,11,16,0.6) 40%, transparent 80%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,16,1) 0%, transparent 50%)', zIndex: 1 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(8,11,16,1) 0%, transparent 20%)', zIndex: 1 }} />
        <div className="skills-header-content">
          <div className="skills-main-title">
            <Image
              src="/assets/sprites/experiencia/mapa-icono.png"
              alt="Mapa"
              width={32}
              height={32}
              style={{ imageRendering: 'pixelated', width: '32px', height: 'auto' }}
            />
            <h2>EXPERIENCIA</h2>
          </div>
          <p className="skills-main-desc">
            Cada aventura suma. Cada desafío me hizo más fuerte.<br />
            Este es mi camino como desarrollador.
          </p>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div className="exp-tab-bar">
        {(['MAPA', 'LINEA', 'LOGROS'] as ExpTab[]).map(tab => (
          <button
            key={tab}
            className={`exp-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'MAPA' ? 'MAPA DE EXPERIENCIA' : tab === 'LINEA' ? 'LÍNEA DE TIEMPO' : 'LOGROS'}
          </button>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="exp-main-body">

        {/* ━━━━  MAPA  ━━━━ */}
        {activeTab === 'MAPA' && (
          <div className="exp-map-layout">

            {/* Left: legend + map + stats */}
            <div className="exp-map-left">

              {/* Map */}
              <div className="exp-map-container">
                <Image
                  src="/assets/sprites/experiencia/fondo-mapa-experiencia.png"
                  alt="Mapa de Experiencia"
                  fill
                  style={{ objectFit: 'cover', imageRendering: 'pixelated', zIndex: 0 }}
                />

                {/* Legend Image Overlay */}
                <div className="exp-legend-img-wrapper">
                  <Image
                    src="/assets/sprites/experiencia/card-leyenda.png"
                    alt="Leyenda"
                    width={130}
                    height={100}
                    style={{ width: '130px', height: 'auto', imageRendering: 'pixelated' }}
                  />
                </div>

                {/* SVG connectors */}
                <svg className="exp-map-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline
                    points={connectorPoints}
                    fill="none"
                    stroke="rgba(242,201,76,0.8)"
                    strokeWidth="0.6"
                    strokeDasharray="2,1.5"
                  />
                </svg>

                {/* Starting Character */}
                <div
                  className="exp-map-character"
                  style={{ left: `${characterPos.x}%`, top: `${characterPos.y}%`, zIndex: 10 }}
                >
                  <Image
                    src="/assets/sprites/experiencia/personaje-inicio-aventura.png"
                    alt="Inicio"
                    width={44}
                    height={44}
                    style={{ imageRendering: 'pixelated', width: '44px', height: 'auto' }}
                  />
                </div>

                {/* Nodes 1–7 */}
                {Object.entries(nodeExpMap).map(([nodeIdStr, expIdx]) => {
                  const nodeId = Number(nodeIdStr);
                  const mapNode = mapNodes[nodeId - 1];
                  const exp = portfolioData.experience[expIdx];
                  const isHovered = hoveredNode === nodeId;
                  const isCurrent = exp.isActive;

                  return (
                    <div
                      key={nodeId}
                      className={`exp-map-node${isCurrent ? ' node-current' : ''}${selectedNodeId === nodeId ? ' selected' : ''}`}
                      style={{ left: `${mapNode.x}%`, top: `${mapNode.y}%` }}
                      onMouseEnter={() => setHoveredNode(nodeId)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setSelectedNodeId(nodeId)}
                    >
                      <Image
                        src={`/assets/sprites/experiencia/experiencia-bandera-${nodeId}.png`}
                        alt={`Nodo ${nodeId}`}
                        width={36}
                        height={36}
                        style={{ imageRendering: 'pixelated', width: '36px', height: 'auto' }}
                      />
                      <div className="exp-node-tooltip">
                        <div className="exp-tooltip-role">{exp.role}</div>
                        <div className="exp-tooltip-company">{exp.company}</div>
                        <div className="exp-tooltip-date">{exp.date}</div>
                      </div>
                    </div>
                  );
                })}

                {/* Node 8 – locked */}
                <div
                  className="exp-map-node node-locked"
                  style={{ left: `${mapNodes[7].x}%`, top: `${mapNodes[7].y}%` }}
                >
                  <Image
                    src="/assets/sprites/experiencia/experiencia-bandera-8.png"
                    alt="Próxima aventura"
                    width={36}
                    height={36}
                    style={{ imageRendering: 'pixelated', width: '36px', height: 'auto' }}
                  />
                  <div className="exp-node-tooltip" style={{ padding: '2px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
                    <Image
                      src="/assets/sprites/experiencia/card-proxima-aventura.png"
                      alt="Próxima Aventura"
                      width={90}
                      height={36}
                      style={{ imageRendering: 'pixelated', width: '90px', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>

              {/* Stats bar */}
              <div className="exp-stats-bar">
                <div className="exp-stats-title">📊 ESTADÍSTICAS DE AVENTURA</div>
                <div className="exp-stats-row">
                  {statsData.map((s, i) => (
                    <div key={i} className="exp-stat-item">
                      <Image
                        src={s.sprite}
                        alt={s.label}
                        width={32}
                        height={32}
                        style={{ imageRendering: 'pixelated', width: '32px', height: 'auto' }}
                      />
                      <div className="exp-stat-text-group">
                        <div className="exp-stat-value">{s.value}</div>
                        <div className="exp-stat-label">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="exp-sidebar">
              {/* Current adventure */}
              <div className="exp-sidebar-section exp-current-card">
                <div className="exp-sidebar-label">DETALLE DE AVENTURA</div>
                <div className="exp-current-header">
                  <Image
                    src={`/assets/sprites/experiencia/experiencia-bandera-${currentNodeLevel}.png`}
                    alt={`Bandera ${currentExp.company}`}
                    width={40}
                    height={40}
                    style={{ imageRendering: 'pixelated', width: '40px', height: 'auto', flexShrink: 0 }}
                  />
                  <div>
                    <div className="exp-current-company">{currentExp.company}</div>
                    <div className="exp-current-role">{currentExp.role}</div>
                    {currentExp.isActive && (
                      <div className="exp-current-status">
                        <span className="exp-dot dot-green" style={{ width: 7, height: 7 }} /> ACTUAL
                      </div>
                    )}
                  </div>
                </div>
                <div className="exp-current-meta">
                  <span>📅 {currentExp.date}</span>
                  <span>📍 Remoto</span>
                </div>
              </div>

              {/* Mission */}
              <div className="exp-sidebar-section">
                <div className="exp-sidebar-label">MISIÓN ACTUAL</div>
                <p className="exp-mission-text">
                  Desarrollo y optimización de un OMS/WMS sobre arquitectura de microservicios en AWS, liderando soluciones escalables.
                </p>
              </div>

              {/* Technologies */}
              <div className="exp-sidebar-section">
                <div className="exp-sidebar-label">TECNOLOGÍAS UTILIZADAS</div>
                <div className="exp-tech-tags">
                  {currentExp.tech.map(t => (
                    <span key={t} className="exp-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Unlocked achievements */}
              <div className="exp-sidebar-section">
                <div className="exp-sidebar-label">⭐ LOGROS DESBLOQUEADOS</div>
                <ul className="exp-achievements-list">
                  {unlockedAchievements.map((a, i) => (
                    <li key={i}>
                      <span className={`exp-ach-star star-${a.color}`}>★</span>
                      {a.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* XP */}
              <div className="exp-sidebar-section exp-xp-section">
                <div className="exp-sidebar-label">EXPERIENCIA OBTENIDA</div>
                <div className="exp-xp-value">+1200 XP</div>
                <div className="exp-xp-bar-wrap">
                  <div className="exp-xp-bar-fill" style={{ width: '90%' }} />
                </div>
                <div className="exp-xp-meta"><span>Nivel 99</span><span>MAX</span></div>
                <p className="exp-quote">"Cada línea de código es un paso más en esta gran aventura."</p>
                <Image
                  src="/assets/sprites/experiencia/personaje-inicio-aventura.png"
                  alt="Personaje"
                  width={48}
                  height={48}
                  style={{ imageRendering: 'pixelated', width: '48px', height: 'auto', alignSelf: 'flex-end' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ━━━━  TIMELINE  ━━━━ */}
        {activeTab === 'LINEA' && (
          <div className="exp-timeline-wrap">
            <div className="exp-timeline">
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className={`exp-tl-item${exp.isActive ? ' active' : ''}`}>
                  <div className="exp-tl-left">
                    <div className={`exp-tl-dot${exp.isActive ? ' active' : ''}`} />
                    {idx < portfolioData.experience.length - 1 && <div className="exp-tl-line" />}
                  </div>
                  <div className="exp-tl-card">
                    <div className="exp-tl-header">
                      <div>
                        <div className="exp-tl-role">{exp.role}</div>
                        <div className="exp-tl-company" style={{ color: exp.companyColor }}>{exp.company}</div>
                      </div>
                      <div className="exp-tl-date">{exp.date}</div>
                    </div>
                    <ul className="exp-tl-list">
                      {exp.achievements.map((a, ai) => (
                        <li key={ai}><span>▹</span>{a}</li>
                      ))}
                    </ul>
                    <div className="exp-tl-tech">
                      {exp.tech.map(t => <span key={t} className="exp-tech-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ━━━━  LOGROS  ━━━━ */}
        {activeTab === 'LOGROS' && (
          <div className="exp-logros-wrap">
            {portfolioData.achievements.map((a, i) => (
              <div key={i} className={`achievement-card rarity-${a.rarity} exp-logro-card`}>
                <span className="achievement-icon">{a.icon}</span>
                <span className={`achievement-rarity rarity-${a.rarity}`}>{a.rarity}</span>
                <span className="achievement-title">{a.title}</span>
                <span className="achievement-desc">{a.desc}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
