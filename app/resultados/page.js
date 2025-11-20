'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/i18n';

export default function ResultadosPage() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <>
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="max-w-7xl">
            <div className="section-header">
              <div className="section-badge">{t.results.subtitle}</div>
              <h1>{t.results.title}</h1>
              <p>{t.results.description}</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {t.results.stats.map((stat, index) => (
                <div key={index} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'var(--text-6xl)', fontWeight: '700', color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                    {stat.value}
                  </div>
                  <p style={{ fontSize: 'var(--text-lg)', fontWeight: '600' }}>{stat.label}</p>
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
