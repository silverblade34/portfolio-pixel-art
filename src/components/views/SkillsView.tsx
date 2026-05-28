'use client';

import Image from 'next/image';

// Size constants for badge images
const BADGE_LEVEL_SIZE = { width: 42, height: 18 };
const LEGEND_ICON_SIZE = { width: 42, height: 18 };

export function SkillsView() {
  const stats = [
    { label: 'TOTAL DE TECNOLOGÍAS', value: '32', sub: 'tecnologías', sprite: '/assets/sprites/iconos-estadisticas-total-tecnologias.png' },
    { label: 'DOMINIO GENERAL', value: 'Avanzado', sub: 'en constante evolución', sprite: '/assets/sprites/iconos-estadistica-dominio-general.png' },
    { label: 'CATEGORÍAS', value: '4', sub: 'áreas principales', sprite: '/assets/sprites/iconos-estadistica-categoria.png' },
    { label: 'FILOSOFÍA', value: 'Aprender, construir', sub: 'y compartir', sprite: '/assets/sprites/iconos-estadistica-filosofia.png' },
  ];

  const categories = [
    {
      id: 'backend',
      title: 'BACKEND',
      subtitle: 'El núcleo de mis aplicaciones.',
      colorClass: 'color-red',
      iconUrl: '/assets/sprites/icono-backend.png',
      techs: [
        { name: 'NestJS', desc: 'APIs escalables, microservicios', sprite: '/assets/sprites/tecnologias-backend-nestjs.png', level: 'LEGENDARY', badges: [] },
        { name: 'Node.js', desc: 'APIs, servicios y herramientas', sprite: '/assets/sprites/tecnologias-backend-nodejs.png', level: 'LEGENDARY', badges: [] },
        { name: 'Java', desc: 'Aplicaciones empresariales', sprite: '/assets/sprites/tecnologias-backend-java.png', level: 'EPIC', badges: [] },
        { name: 'Spring Boot', desc: 'APIs REST, servicios robustos', sprite: '/assets/sprites/tecnologias-backend-spring-boot.png', level: 'EPIC', badges: [] },
        { name: '.NET', desc: 'APIs y servicios', sprite: '/assets/sprites/tecnologias-backend-net.png', level: 'RARE', badges: [] },
        { name: 'GraphQL', desc: 'APIs flexibles y eficientes', sprite: '/assets/sprites/tecnologias-backend-graphql.png', level: 'RARE', badges: [] },
      ],
      footerSprite: '/assets/sprites/elementos-detalle-usado-en-rojo.png'
    },
    {
      id: 'frontend',
      title: 'FRONTEND & MOBILE',
      subtitle: 'Interfaces y experiencias.',
      colorClass: 'color-cyan',
      iconUrl: '/assets/sprites/icono-frontend.png',
      techs: [
        { name: 'Next.js', desc: 'Web apps modernas y rápidas', sprite: '/assets/sprites/tecnologias-frontend-nextjs.png', level: 'LEGENDARY', badges: ['PRODUCCIÓN'] },
        { name: 'TypeScript', desc: 'Código más seguro y mantenible', sprite: '/assets/sprites/tecnologias-frontend-typescript.png', level: 'LEGENDARY', badges: [] },
        { name: 'Vue.js', desc: 'Interfaces reactivas', sprite: '/assets/sprites/tecnologias-frontend-vuejs.png', level: 'EPIC', badges: [] },
        { name: 'Flutter', desc: 'Apps móviles multiplataforma', sprite: '/assets/sprites/tecnologias-frontend-flutter.png', level: 'EPIC', badges: [] },
        { name: 'Tailwind CSS', desc: 'UI utility-first', sprite: '/assets/sprites/tecnologias-frontend-tailwind.png', level: 'RARE', badges: [] },
        { name: 'PWA', desc: 'Apps rápidas y confiables', sprite: '/assets/sprites/tecnologias-frontend-pwa.png', level: 'RARE', badges: [] },
      ],
      footerSprite: '/assets/sprites/elementos-detalle-usado-en-celeste.png'
    },
    {
      id: 'cloud',
      title: 'CLOUD & DEVOPS',
      subtitle: 'Infraestructura y automatización.',
      colorClass: 'color-green',
      iconUrl: '/assets/sprites/icono-cloud.png',
      techs: [
        { name: 'AWS', desc: 'ECS, Lambda, API Gateway, S3, RDS', sprite: '/assets/sprites/tecnologias-cloud-aws.png', level: 'LEGENDARY', badges: ['PRODUCCIÓN'] },
        { name: 'Docker', desc: 'Containers y orquestación', sprite: '/assets/sprites/tecnologias-cloud-docker.png', level: 'LEGENDARY', badges: ['PRODUCCIÓN'] },
        { name: 'Git', desc: 'Control de versiones', sprite: '/assets/sprites/tecnologias-cloud-git.png', level: 'EPIC', badges: [] },
        { name: 'CI/CD', desc: 'Pipelines y automatizaciones', sprite: '/assets/sprites/tecnologias-cloud-ci-cd.png', level: 'EPIC', badges: [] },
        { name: 'Linux', desc: 'Administración y scripting', sprite: '/assets/sprites/tecnologias-cloud-linux.png', level: 'RARE', badges: [] },
      ],
      footerSprite: '/assets/sprites/elementos-detalle-usado-en-verde.png'
    },
    {
      id: 'databases',
      title: 'DATABASES & OTROS',
      subtitle: 'Datos, mensajería y tecnologías extra.',
      colorClass: 'color-gold',
      iconUrl: '/assets/sprites/icono-database.png',
      techs: [
        { name: 'PostgreSQL', desc: 'Datos relacionales y complejos', sprite: '/assets/sprites/tecnologias-databases-postgresql.png', level: 'LEGENDARY', badges: ['PRODUCCIÓN'] },
        { name: 'Redis', desc: 'Caché y sesiones', sprite: '/assets/sprites/tecnologias-databases-redis.png', level: 'LEGENDARY', badges: [] },
        { name: 'MongoDB', desc: 'Datos no relacionales', sprite: '/assets/sprites/tecnologias-databases-mongodb.png', level: 'EPIC', badges: [] },
        { name: 'WebSockets', desc: 'Comunicación en tiempo real', sprite: '/assets/sprites/tecnologias-databases-websockets.png', level: 'RARE', badges: [] },
        { name: 'RabbitMQ', desc: 'Mensajería y colas', sprite: '/assets/sprites/tecnologias-databases-rabbitmq.png', level: 'RARE', badges: [] },
        { name: 'FFmpeg', desc: 'Procesamiento multimedia', sprite: '/assets/sprites/tecnologias-databases-ffmpeg.png', level: 'RARE', badges: [] },
      ],
      footerSprite: '/assets/sprites/elementos-detalle-usado-en-amarillo.png'
    }
  ];

  return (
    <div className="skills-view-container">
      {/* Header section */}
      <div className="skills-header-area">
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
            <span className="skills-bolt">⚡</span>
            <h2>HABILIDADES</h2>
          </div>
          <p className="skills-main-desc">
            Mi arsenal técnico. Tecnologías y herramientas que uso para construir<br />
            soluciones robustas, escalables y de alto impacto.
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="skills-stats-row">
        {stats.map((stat, i) => (
          <div key={i} className="skill-stat-card">
            <div className="skill-stat-icon">
              <Image src={stat.sprite} alt={stat.label} width={32} height={32} style={{ imageRendering: 'pixelated' }} />
            </div>
            <div className="skill-stat-info">
              <div className="skill-stat-label">{stat.label}</div>
              <div className="skill-stat-value">{stat.value}</div>
              <div className="skill-stat-sub">{stat.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid of categories */}
      <div className="skills-categories-grid">
        {categories.map(cat => (
          <div key={cat.id} className={`skill-cat-box ${cat.colorClass}`}>
            <div className="skill-cat-header">
              <div className="skill-cat-title-row">
                <Image src={cat.iconUrl} alt={cat.title} width={24} height={24} style={{ imageRendering: 'pixelated' }} />
                <h3>{cat.title}</h3>
              </div>
              <Image src="/assets/sprites/elementos-generales-ver-detalle.png" alt="Ver detalle" width={60} height={18} className="btn-ver-detalle-img" style={{ imageRendering: 'pixelated' }} />
            </div>
            <p className="skill-cat-subtitle">{cat.subtitle}</p>

            <div className="skill-cat-tech-list">
              {cat.techs.map(tech => (
                <div key={tech.name} className="tech-item-row">
                  <div className="tech-item-icon">
                    <Image src={tech.sprite} alt={tech.name} width={24} height={24} style={{ imageRendering: 'pixelated' }} />
                  </div>
                  <div className="tech-item-info">
                    <div className="tech-item-title-row">
                      <span className="tech-item-name">{tech.name}</span>
                      <Image src={`/assets/sprites/badges-nivel-${tech.level.toLowerCase()}.png`} alt={tech.level} width={BADGE_LEVEL_SIZE.width} height={BADGE_LEVEL_SIZE.height} style={{ imageRendering: 'pixelated', width: 'auto', height: `${BADGE_LEVEL_SIZE.height}px` }} />
                      {tech.badges.map(b => (
                        <span key={b} className="tech-item-extra-badge">{b}</span>
                      ))}
                    </div>
                    <div className="tech-item-desc">{tech.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-cat-footer">
              <Image src={cat.footerSprite} alt="Usado en" width={220} height={40} style={{ width: '100%', height: 'auto', imageRendering: 'pixelated' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="skills-bottom-grid">
        <div className="loadout-box">
          <div className="loadout-left">
            <div className="loadout-header">
              <span className="loadout-icon">⚔️</span>
              <h4>LOADOUT ACTUAL (STACK PRINCIPAL)</h4>
            </div>
            <p className="loadout-desc">Tecnologías que más utilizo actualmente<br />en mis proyectos.</p>
          </div>

          <div className="loadout-content">
            <div className="loadout-col color-red">
              <div className="loadout-label color-red">BACKEND</div>
              <div className="loadout-items">
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-backend-nestjs.png" alt="NestJS" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>NestJS</span></div>
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-backend-nodejs.png" alt="Node.js" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>Node.js</span></div>
              </div>
            </div>

            <div style={{ color: 'var(--color-silver)', fontSize: '18px', fontWeight: 'bold' }}>+</div>

            <div className="loadout-col color-gold">
              <div className="loadout-label color-gold">DATABASE</div>
              <div className="loadout-items">
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-databases-postgresql.png" alt="PostgreSQL" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>PostgreSQL</span></div>
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-databases-redis.png" alt="Redis" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>Redis</span></div>
              </div>
            </div>

            <div className="loadout-col color-cyan">
              <div className="loadout-label color-cyan">FRONTEND</div>
              <div className="loadout-items">
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-frontend-nextjs.png" alt="Next.js" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>Next.js</span></div>
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-frontend-tailwind.png" alt="Tailwind CSS" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>Tailwind CSS</span></div>
              </div>
            </div>

            <div className="loadout-col color-green">
              <div className="loadout-label color-green">DEPLOY</div>
              <div className="loadout-items">
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-cloud-aws.png" alt="AWS" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>AWS ECS</span></div>
                <div className="loadout-item"><Image src="/assets/sprites/tecnologias-cloud-docker.png" alt="Docker" width={16} height={16} style={{ imageRendering: 'pixelated' }} /> <span>Docker</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="principios-box">
          <h4>MIS PRINCIPIOS</h4>
          <ul className="principios-list">
            <li>Código limpio y mantenible</li>
            <li>Escalabilidad desde el diseño</li>
            <li>Automatizar para liberar tiempo</li>
            <li>Aprender, compartir, mejorar</li>
          </ul>
          <Image src="/assets/sprites/icono-mis-principios.png" alt="Principios" width={48} height={48} className="principios-icon" style={{ imageRendering: 'pixelated' }} />
        </div>
      </div>

      {/* Legend */}
      <div className="skills-legend-box">
        <div className="legend-title">LEYENDA DE MAESTRÍA</div>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-item-title color-gold">
              <Image src="/assets/sprites/badges-nivel-legendary.png" alt="Icon" width={LEGEND_ICON_SIZE.width} height={LEGEND_ICON_SIZE.height} style={{ imageRendering: 'pixelated' }} />
              LEGENDARY
            </div>
            <span>Dominio sólido y experiencia comprobada en producción</span>
          </div>
          <div className="legend-item">
            <div className="legend-item-title color-purple">
              <Image src="/assets/sprites/badges-nivel-epic.png" alt="Icon" width={LEGEND_ICON_SIZE.width} height={LEGEND_ICON_SIZE.height} style={{ imageRendering: 'pixelated' }} />
              EPIC
            </div>
            <span>Amplia experiencia y proyectos importantes</span>
          </div>
          <div className="legend-item">
            <div className="legend-item-title color-cyan">
              <Image src="/assets/sprites/badges-nivel-rare.png" alt="Icon" width={LEGEND_ICON_SIZE.width} height={LEGEND_ICON_SIZE.height} style={{ imageRendering: 'pixelated' }} />
              RARE
            </div>
            <span>Conocimientos sólidos y proyectos menores</span>
          </div>
          <div className="legend-item">
            <div className="legend-item-title color-silver">
              <Image src="/assets/sprites/badges-nivel-common.png" alt="Icon" width={LEGEND_ICON_SIZE.width} height={LEGEND_ICON_SIZE.height} style={{ imageRendering: 'pixelated' }} />
              COMMON
            </div>
            <span>Conocimientos básicos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
