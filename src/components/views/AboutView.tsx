import React from 'react';
import Image from 'next/image';

const meDefineCards = [
  '/assets/sprites/sobre-mi/me-define-compromiso.png',
  '/assets/sprites/sobre-mi/me-define-orientado-resultados.png',
  '/assets/sprites/sobre-mi/me-define-adapatabilidad.png',
  '/assets/sprites/sobre-mi/me-define-trabajo-equipo.png',
];

const enfoqueItems = [
  { src: '/assets/sprites/sobre-mi/enfoque-1.png', text: 'Crear soluciones que generen impacto real y valor medible.' },
  { src: '/assets/sprites/sobre-mi/enfoque-2.png', text: 'Código limpio, escalable y mantenible.' },
  { src: '/assets/sprites/sobre-mi/enfoque-3.png', text: 'Automatización y optimización de procesos.' },
  { src: '/assets/sprites/sobre-mi/enfoque-4.png', text: 'Aprendizaje continuo y mejora constante.' },
  { src: '/assets/sprites/sobre-mi/enfoque-5.png', text: 'Colaboración, comunicación y trabajo en equipo.' },
];

const hobbiesItems = [
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-lectura.png', text: 'LECTURA' },
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-ejercicio.png', text: 'EJERCICIO' },
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-videojuegos.png', text: 'VIDEOJUEGOS' },
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-fotografia.png', text: 'FOTOGRAFÍA' },
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-musica.png', text: 'MÚSICA' },
  { src: '/assets/sprites/sobre-mi/fuera-del-codigo-viajar.png', text: 'VIAJAR' },
];

const statsItems = [
  { src: '/assets/sprites/sobre-mi/estadisticas-anos-experiencia.png', text: 'AÑOS DE EXPERIENCIA', value: '4+' },
  { src: '/assets/sprites/sobre-mi/estadisticas-proyectos-completados.png', text: 'PROYECTOS COMPLETADOS', value: '15+' },
  { src: '/assets/sprites/sobre-mi/estadisticas-tecnologias-dominadas.png', text: 'TECNOLOGÍAS DOMINADAS', value: '20+' },
  { src: '/assets/sprites/sobre-mi/estadisticas-cafes-consumidos.png', text: 'CAFÉS CONSUMIDOS', value: '∞' },
];

export function AboutView() {
  return (
    <div className="about-layout">
      {/* ── Left Column ── */}
      <div className="about-col-left">

        {/* SOBRE MI */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">👤</span> SOBRE MÍ
          </div>
          <div className="about-card about-intro-card">
            <div className="about-intro-image" style={{ position: 'relative' }}>
              <Image
                src="/assets/sprites/sobre-mi/personaje-mirando-ciudad.png"
                alt="Personaje mirando ciudad"
                fill
                style={{ objectFit: 'cover', imageRendering: 'pixelated', objectPosition: 'left center' }}
              />
            </div>
            <div className="about-intro-text">
              <p>Desarrollador Full Stack con 4 años de experiencia sólida desde 2021 en la creación de soluciones tecnológicas innovadoras para logística, monitoreo e instituciones educativas.</p>
              <p>Especializado en arquitecturas de microservicios con <span className="highlight-blue">TypeScript</span>, <span className="highlight-green">Node.js</span> y <span className="highlight-yellow">Python</span>, he desarrollado plataformas web y móviles usando NestJS, Spring Boot y servicios serverless en AWS Lambda.</p>
              <p>Tengo experiencia comprobada en integración con <span className="highlight-blue">APIs de IA</span> para análisis de datos, así como en automatización de procesos críticos.</p>
              <p>Comprometido con la entrega de productos robustos, eficientes y centrados en el usuario, con amplia experiencia colaborando en equipos multidisciplinarios.</p>
            </div>
          </div>
        </div>

        {/* LO QUE ME DEFINE */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">🌟</span> LO QUE ME DEFINE
          </div>
          <div className="about-define-grid">
            {meDefineCards.map((src, i) => (
              <div key={i} className="about-define-card">
                <Image src={src} alt="Lo que me define" width={100} height={100} style={{ width: '100%', height: 'auto', imageRendering: 'pixelated', display: 'block' }} />
              </div>
            ))}
          </div>
        </div>

        {/* MI MISIÓN */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">⭐</span> MI MISIÓN
          </div>
          <div className="about-card about-mission-card">
            <div className="about-mission-text">
              Usar la tecnología como una herramienta para resolver problemas reales, mejorar procesos y facilitar la vida de las personas, construyendo soluciones con propósito y pasión.
            </div>
            <div className="about-mission-image">
              <div className="about-mission-fade"></div>
              <Image
                src="/assets/sprites/sobre-mi/mi-mision-personaje.png"
                alt="Mi misión personaje"
                fill
                style={{ objectFit: 'cover', objectPosition: 'right center', imageRendering: 'pixelated' }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── Right Column ── */}
      <div className="about-col-right">

        {/* ENFOQUE */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">✨</span> ENFOQUE
          </div>
          <div className="about-card about-focus-card">
            {enfoqueItems.map((item, i) => (
              <div key={i} className="about-focus-item">
                <Image src={item.src} alt={item.text} width={30} height={30} style={{ imageRendering: 'pixelated', flexShrink: 0 }} />
                <span className="about-focus-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FUERA DEL CÓDIGO */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">🎮</span> FUERA DEL CODIGO
          </div>
          <div className="about-card about-hobbies-card">
            {hobbiesItems.map((item, i) => (
              <div key={i} className="about-hobbies-item">
                <div className="about-hobby-icon">
                  <Image src={item.src} alt={item.text} width={50} height={50} style={{ width: '100%', height: 'auto', imageRendering: 'pixelated', display: 'block' }} />
                </div>
                <span className="about-hobby-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="about-section">
          <div className="about-section-header">
            <span className="about-icon">🏆</span> ESTADÍSTICAS
          </div>
          <div className="about-card about-stats-card">
            {statsItems.map((item, i) => (
              <div key={i} className="about-stats-item">
                <div className="about-stats-icon">
                  <Image src={item.src} alt={item.text} width={28} height={28} style={{ imageRendering: 'pixelated', display: 'block' }} />
                </div>
                <span className="about-stats-text">{item.text}</span>
                <span className="about-stats-value">{item.value}</span>
              </div>
            ))}
            <div className="about-stats-footer">
              <span>DESDE</span>
              <Image src="/assets/sprites/sobre-mi/logo-escudo.png" alt="Escudo" width={20} height={24} style={{ imageRendering: 'pixelated' }} />
              <span>2021</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
