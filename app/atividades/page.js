'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollReveal from '@/components/ScrollReveal';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';

export default function AtividadesPage() {
  const [language, setLanguage] = useLanguage();
  const t = getTranslation(language);

  return (
    <>
      <ParallaxBackground />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="max-w-7xl">
            <ScrollReveal>
              <div className="section-header">
                <div className="section-badge">{t.activities.subtitle}</div>
                <h1>{t.activities.title}</h1>
                <p>{t.activities.description}</p>
              </div>
            </ScrollReveal>
            <div className="grid">
              {t.activities.items.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div
                    key={index}
                    className="card"
                    style={{
                      position: 'relative',
                      borderLeft: '4px solid var(--color-secondary)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-3)',
                      marginBottom: 'var(--space-3)'
                    }}>
                      <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: 'var(--color-secondary)',
                        flexShrink: 0
                      }}></div>
                      <h3 style={{ margin: 0 }}>{item.title}</h3>
                    </div>
                    <p style={{ marginLeft: 'calc(12px + var(--space-3))' }}>{item.description}</p>
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
