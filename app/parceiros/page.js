'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollReveal from '@/components/ScrollReveal';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';

export default function ParceirosPage() {
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
                <div className="section-badge">{t.partners.subtitle}</div>
                <h1>{t.partners.title}</h1>
                <p>{t.partners.description}</p>
              </div>
            </ScrollReveal>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[1, 2, 3].map((i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="card" style={{ textAlign: 'center', aspectRatio: '1' }}>
                  <div style={{ fontSize: 'var(--text-5xl)', fontWeight: '700', color: 'var(--color-primary)' }}>
                    Logo
                  </div>
                  <p>Partner {i}</p>
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
