'use client';

import { useState } from 'react';
import Image from 'next/image';
import { portfolioData } from '@/app/data';



export function ContactView() {
  const { personalInfo } = portfolioData;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, completa todos los campos obligatorios (*).');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      // Usar variables de entorno de Next.js (puedes definirlas en un archivo .env.local)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default';

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: name,
            from_email: email,
            subject: subject || 'Mensaje de Contacto del Portafolio',
            message: message,
            to_name: 'Marcos Pacheco',
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const resText = await response.text();
        console.error('EmailJS Error Response:', resText);
        setStatus('error');
        setErrorMessage(`Fallo al enviar (Código ${response.status}). Asegúrate de configurar tus credenciales de EmailJS en tu archivo .env.local.`);
      }
    } catch (error) {
      console.error('EmailJS Connection Error:', error);
      setStatus('error');
      setErrorMessage('Error de red. Por favor, comprueba tu conexión de red e inténtalo de nuevo.');
    }
  };

  const channels = [
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-correo.png',
      label: 'CORREO',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      badge: 'RESPUESTA < 24H',
      subLabel: 'Respuesta garantizada',
      theme: 'blue'
    },
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-telefono.png',
      label: 'TELEFONO',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      badge: 'DISPONIBLE',
      subLabel: 'Lima, Perú',
      theme: 'green'
    },
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-ubicacion.png',
      label: 'UBICACIÓN',
      value: 'Lima, Perú',
      href: null,
      badge: 'GMT-5',
      subLabel: 'Zona horaria',
      theme: 'purple'
    },
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-linkedin.png',
      label: 'LINKEDIN',
      value: 'marcos-pacheco-tacay',
      href: personalInfo.linkedin,
      badge: 'CONECTADOS',
      subLabel: 'Conecta conmigo',
      theme: 'blue'
    },
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-portafolio.png',
      label: 'PORTAFOLIO',
      value: 'marcospacheco.online',
      href: personalInfo.portfolio,
      badge: 'ACTUALIZADO',
      subLabel: 'Visita mi trabajo',
      theme: 'green'
    },
    {
      icon: '/assets/sprites/contacto/otra-forma-conectar-disponibilidad.png',
      label: 'DISPONIBILIDAD',
      value: 'Full-time / Remoto',
      href: null,
      badge: 'ESTADO',
      subLabel: 'Disponibilidad inmediata',
      theme: 'purple'
    }
  ];

  return (
    <div className="contact-view-root">

      {/* ── HERO SECTION ── */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <div className="contact-hero-title-container">
            <div className="contact-hero-icon">
              <Image
                src="/assets/sprites/experiencia/card-leyenda.png"
                alt="Scroll Icon"
                fill
                style={{ objectFit: 'contain', imageRendering: 'pixelated' }}
              />
            </div>
            <h2>CONTACTO</h2>
          </div>
          <p className="contact-hero-desc">
            Iniciemos una aventura juntos.<br />
            ¿Tienes un proyecto en mente o quieres colaborar?<br />
            ¡Envíame un mensaje! Estoy listo para crear<br />
            soluciones mágicas y épicas.
          </p>
        </div>
        <div className="contact-hero-bg">
          <Image
            src="/assets/sprites/contacto/background-hero.png"
            alt="Wizard Desk Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'right center', imageRendering: 'pixelated' }}
            priority
          />
        </div>
      </div>

      {/* ── TWO COLUMNS ── */}
      <div className="contact-content-grid">

        {/* LEFT COLUMN: FORM */}
        <div className="contact-form-col">
          <form className="contact-form-frame" onSubmit={handleSubmit}>
            <h3 className="contact-col-title">ENVIAME UN MENSAJE</h3>

            {/* RPG Quest Completed Success Overlay */}
            {status === 'success' && (
              <div className="contact-status-dialog-overlay">
                <div className="contact-status-dialog">
                  <div className="contact-status-icon">
                    <Image
                      src="/assets/sprites/iconos-estadisticas-total-tecnologias.png"
                      alt="Trophy Sprite"
                      width={48}
                      height={48}
                      style={{ objectFit: 'contain', imageRendering: 'pixelated', display: 'block' }}
                    />
                  </div>
                  <h4 className="contact-status-title">¡MISIÓN CUMPLIDA!</h4>
                  <p className="contact-status-text">
                    Tu mensaje ha sido enviado con éxito al mensajero. ¡Hablaremos muy pronto!
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="contact-status-btn"
                  >
                    ACEPTAR
                  </button>
                </div>
              </div>
            )}

            <div className="contact-form-group">
              <label className="contact-form-label">Tu nombre *</label>
              <div className="contact-form-input-wrap">
                <div className="contact-form-icon">
                  <Image src="/assets/sprites/contacto/enviame-mensaje-icono-nombre.png" alt="Name Icon" fill style={{ objectFit: 'contain', imageRendering: 'pixelated' }} />
                </div>
                <input
                  type="text"
                  placeholder="Ej: Marcos Pacheco"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Tu correo *</label>
              <div className="contact-form-input-wrap">
                <div className="contact-form-icon">
                  <Image src="/assets/sprites/contacto/enviame-mensaje-correo.png" alt="Email Icon" fill style={{ objectFit: 'contain', imageRendering: 'pixelated' }} />
                </div>
                <input
                  type="email"
                  placeholder="Ej: tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Asunto</label>
              <div className="contact-form-input-wrap">
                <div className="contact-form-icon">
                  <Image src="/assets/sprites/contacto/enviame-mensaje-asunto.png" alt="Subject Icon" fill style={{ objectFit: 'contain', imageRendering: 'pixelated' }} />
                </div>
                <input
                  type="text"
                  placeholder="Ej: Hablemos sobre un proyecto"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-form-label">Mensaje *</label>
              <div className="contact-form-input-wrap" style={{ alignItems: 'flex-start' }}>
                <div className="contact-form-icon" style={{ marginTop: '4px' }}>
                  <Image src="/assets/sprites/contacto/enviame-mensaje-mensaje.png" alt="Message Icon" fill style={{ objectFit: 'contain', imageRendering: 'pixelated' }} />
                </div>
                <textarea
                  placeholder="Cuéntame sobre tu proyecto, idea o colaboración..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="contact-status-alert error">
                ⚠️ {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span>✨ ENVIANDO HECHIZO...</span>
              ) : (
                <>
                  <div className="contact-btn-icon">
                    <Image src="/assets/sprites/contacto/enviame-mensaje-correo.png" alt="Send Icon" fill style={{ objectFit: 'contain', imageRendering: 'pixelated' }} />
                  </div>
                  ENVIAR MENSAJE
                </>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: OTHER WAYS */}
        <div className="contact-other-col">
          <div className="contact-other-frame">
            <h3 className="contact-channels-title">✦ CANALES DE COMUNICACIÓN ✦</h3>

            <div className="contact-channels-grid">
              {channels.map((item, i) => {
                return (
                  <div key={i} className={`contact-channel-card theme-${item.theme}`}>
                    {/* Top Row: Icon + Badge/Label */}
                    <div className="contact-channel-header">
                      <div className="contact-channel-icon-wrap">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={26}
                          height={26}
                          style={{ objectFit: 'contain', imageRendering: 'pixelated' }}
                        />
                      </div>
                      <div className="contact-channel-header-text">
                        <span className="contact-channel-badge">{item.badge}</span>
                        <h4 className="contact-channel-label">{item.label}</h4>
                      </div>
                    </div>

                    {/* Bottom part: Value + SubLabel */}
                    <div className="contact-channel-value">
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.value}
                        </a>
                      ) : (
                        <span>{item.value}</span>
                      )}
                    </div>
                    <div className="contact-channel-desc">{item.subLabel}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="contact-footer-character">
            {/* Left: Wizard character */}
            <div className="contact-footer-left-img">
              <Image
                src="/assets/sprites/contacto/contacto-inferior-derecha-personaje.png"
                alt="Wizard Character"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom center', imageRendering: 'pixelated' }}
              />
            </div>

            {/* Center: Quote */}
            <p className="contact-footer-quote">
              "Cada conexión es el inicio de algo increíble."<br />
              <span>¡Hagamos magia juntos!</span>
            </p>

            {/* Right: Candles */}
            <div className="contact-footer-right-img">
              <Image
                src="/assets/sprites/contacto/contacto-inferior-derecha-velas.png"
                alt="Candles & Potions"
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom center', imageRendering: 'pixelated' }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
