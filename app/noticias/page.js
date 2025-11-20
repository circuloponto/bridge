'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';

export default function NoticiasPage() {
  const [language, setLanguage] = useLanguage();
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
              {t.news.items.map((item, index) => (
                <div key={index} className="card">
                  <div style={{ 
                    height: '200px', 
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    borderRadius: 'var(--radius-xl)',
                    marginBottom: 'var(--space-4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: '600'
                  }}>
                    {item.category}
                  </div>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-2)' }}>
                    {item.date}
                  </p>
                  <h3 style={{ marginBottom: 'var(--space-3)' }}>{item.title}</h3>
                  <p style={{ marginBottom: 'var(--space-4)' }}>{item.excerpt}</p>
                  <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}>{t.news.readMore} →</a>
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
