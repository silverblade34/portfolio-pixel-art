'use client';

import React from 'react';
import { portfolioData } from '@/app/data';

export function AboutView() {
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
