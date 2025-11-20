'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/i18n';

export default function ObjetivosPage() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <>
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      
      <main style={{ paddingTop: '80px' }}>
        <section style={{
          padding: 'var(--space-20) 0',
          background: '#ffffff'
        }}>
          <div className="max-w-7xl">
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              marginBottom: 'var(--space-16)'
            }}>
              <div className="section-badge">
                {t.objectives.subtitle}
              </div>
              <h1 style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-text)'
              }}>
                {t.objectives.title}
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)'
              }}>
                {t.objectives.description}
              </p>
            </div>

            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 'var(--space-8)'
            }}>
              {t.objectives.items.map((item, index) => (
                <div key={index} className="card">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: 'var(--space-5)'
                  }}>
                    {index + 1}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
