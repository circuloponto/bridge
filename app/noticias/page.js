'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';

export default function NoticiasPage() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <>
      <ParallaxBackground />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="max-w-7xl">
            <div className="section-header">
              <div className="section-badge">{t.news.subtitle}</div>
              <h1>{t.news.title}</h1>
              <p>{t.news.description}</p>
            </div>
            <div className="grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card">
                  <div style={{ 
                    height: '200px', 
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    borderRadius: 'var(--radius-xl)',
                    marginBottom: 'var(--space-4)'
                  }}></div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
                    {new Date().toLocaleDateString(language === 'pt' ? 'pt-PT' : language === 'gb' ? 'en-GB' : 'fr-FR')}
                  </p>
                  <h3>News Title {i}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{t.news.readMore} →</a>
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
