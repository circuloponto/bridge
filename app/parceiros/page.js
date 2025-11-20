'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/i18n';

export default function ParceirosPage() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <>
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />
      <main style={{ paddingTop: '80px' }}>
        <section style={{ padding: 'var(--space-20) 0' }}>
          <div className="max-w-7xl">
            <div className="section-header">
              <div className="section-badge">{t.partners.subtitle}</div>
              <h1>{t.partners.title}</h1>
              <p>{t.partners.description}</p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="card" style={{ textAlign: 'center', aspectRatio: '1' }}>
                  <div style={{ fontSize: 'var(--text-5xl)', fontWeight: '700', color: 'var(--color-primary)' }}>
                    Logo
                  </div>
                  <p>Partner {i}</p>
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
