'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getTranslation } from '@/lib/i18n';
import { ArrowRight, Scale, DollarSign, Truck, BookOpen } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <>
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />

      <main id="main-content">
        {/* Hero Section - World-Class Design */}
        <section id="inicio" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#ffffff',
          position: 'relative'
        }}>
          <div className="max-w-7xl">
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center'
            }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'var(--color-cream)',
                borderRadius: '100px',
                marginBottom: '48px',
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--color-primary)'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--color-secondary)',
                  borderRadius: '50%'
                }}></div>
                Caregiver Support Project
              </div>
              
              {/* Hero Title - MASSIVE & BOLD */}
              <h1 style={{
                fontSize: 'clamp(48px, 8vw, 96px)',
                fontWeight: '700',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                color: 'var(--color-text)',
                marginBottom: '32px',
                textWrap: 'balance'
              }}>
                {t.hero.title}
              </h1>
              
              {/* Description - Large & Readable */}
              <p style={{
                fontSize: 'clamp(18px, 2vw, 24px)',
                lineHeight: '1.7',
                color: 'var(--color-text-secondary)',
                marginBottom: '64px',
                maxWidth: '700px',
                margin: '0 auto 64px'
              }}>
                {t.hero.description}
              </p>
              
              {/* CTAs - Prominent & Clear */}
              <div style={{
                display: 'flex',
                gap: '16px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="/objetivos"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: 'clamp(14px, 3vw, 20px) clamp(24px, 5vw, 40px)',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontWeight: '600',
                    color: '#ffffff',
                    background: 'var(--color-primary)',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t.hero.cta}
                  <ArrowRight size={20} />
                </a>
                <a
                  href="/contactos"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'clamp(14px, 3vw, 20px) clamp(24px, 5vw, 40px)',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontWeight: '600',
                    color: 'var(--color-primary)',
                    background: '#ffffff',
                    border: '2px solid var(--color-border)',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section style={{
          padding: 'var(--space-20) 0',
          background: 'var(--color-cream)'
        }}>
          <div className="max-w-7xl">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: '700',
                lineHeight: '1.2',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-text)'
              }}>
                What We Do
              </h2>
              <p style={{
                fontSize: 'var(--text-xl)',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                BRIDGE provides comprehensive legal, financial, and logistical support to home caregivers, helping them provide better care for their loved ones.
              </p>
            </div>
            
            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-8)'
            }}>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <Scale size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Legal Support</h3>
                <p>Guidance on caregiver rights, contracts, insurance, and legal matters</p>
                <a href="/objetivos" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'var(--space-3)' }}>
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <DollarSign size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Financial Aid</h3>
                <p>Information on subsidies, government support, and budget management</p>
                <a href="/grupos-alvo" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'var(--space-3)' }}>
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <Truck size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Logistics Help</h3>
                <p>Resources for care organization, medical equipment, and support services</p>
                <a href="/atividades" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'var(--space-3)' }}>
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
              <div className="card">
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <BookOpen size={32} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-3)' }}>Training</h3>
                <p>Workshops on care techniques, stress management, and caregiver wellbeing</p>
                <a href="/resultados" style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'var(--space-3)' }}>
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
