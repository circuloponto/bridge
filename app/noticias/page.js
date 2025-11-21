'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import NewsModal from '@/components/NewsModal';
import ScrollReveal from '@/components/ScrollReveal';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';

export default function NoticiasPage() {
  const [language, setLanguage] = useLanguage();
  const t = getTranslation(language);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <>
      <ParallaxBackground />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      
      {selectedArticle && (
        <NewsModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)}
          t={t}
        />
      )}
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="max-w-7xl">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-badge">{t.news.subtitle}</div>
                <h1>{t.news.title}</h1>
                <p>{t.news.description}</p>
              </div>
            </ScrollReveal>
            <div className="grid">
              {t.news.items.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.15}>
                  <div className="card">
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 16px',
                    background: 'var(--color-cream)',
                    borderRadius: '100px',
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    color: 'var(--color-primary)'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: 'var(--color-secondary)',
                      borderRadius: '50%'
                    }}></div>
                    {item.category}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
                    {item.date}
                  </p>
                  <h3 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h3>
                  <p style={{ marginBottom: 'var(--space-4)' }}>{item.excerpt}</p>
                  <button
                    onClick={() => setSelectedArticle(item)}
                    style={{ 
                      color: 'var(--color-primary)', 
                      fontWeight: '600', 
                      textDecoration: 'none',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: 'var(--text-base)',
                      padding: 0,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {t.news.readMore} →
                  </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
