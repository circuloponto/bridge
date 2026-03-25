'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactosPage() {
  const [language, setLanguage] = useLanguage();
  const t = getTranslation(language);

  return (
    <>
      <ParallaxBackground />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />

      <main style={{ paddingTop: '80px' }}>
        <section style={{
          padding: 'var(--space-20) 0',
          background: 'var(--color-bg)'
        }}>
          <div className="max-w-7xl">
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              marginBottom: 'var(--space-16)'
            }}>
              <div className="section-badge">
                {t.contacts.subtitle}
              </div>
              <h1 style={{
                fontSize: 'clamp(48px, 6vw, 72px)',
                fontWeight: '700',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-text)'
              }}>
                {t.contacts.title}
              </h1>
              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)'
              }}>
                {t.contacts.description}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-12)'
            }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <Mail size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3>Email</h3>
                <p><a href="mailto:info@bridge-project.eu">info@bridge-project.eu</a></p>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <Phone size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3>Phone</h3>
                <p><a href="tel:+351210000000">+351 210 000 000</a></p>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <MapPin size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3>Address</h3>
                <p>Lisboa, Portugal<br />Rua Exemplo, 123</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
