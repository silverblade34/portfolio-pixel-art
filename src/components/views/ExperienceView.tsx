'use client';

import React from 'react';
import { portfolioData } from '@/app/data';

export function ExperienceView() {
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
