'use client';

import React from 'react';
import { portfolioData } from '@/app/data';

export function ContactView() {
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
