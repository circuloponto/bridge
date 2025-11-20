'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';

export default function ResultadosPage() {
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
              <div className="section-badge">{t.results.subtitle}</div>
              <h1>{t.results.title}</h1>
              <p>{t.results.description}</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {t.results.stats.map((stat, index) => (
                <div key={index} className="card" style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: 'var(--text-6xl)', 
                    fontWeight: '700', 
                    color: 'var(--color-primary)', 
                    marginBottom: 'var(--space-2)',
                    lineHeight: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {stat.value}
                  </div>
                  <p style={{ 
                    fontSize: 'var(--text-lg)', 
                    fontWeight: '600', 
                    margin: 0,
                    padding: 0,
                    textAlign: 'center',
                    width: '100%'
                  }}>{stat.label}</p>
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
