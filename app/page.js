'use client';

import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import ParallaxBackground from '@/components/ParallaxBackground';
import ScrollReveal from '@/components/ScrollReveal';
import { getTranslation } from '@/lib/i18n';
import { ArrowRight, Scale, DollarSign, Truck, BookOpen } from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useLanguage();
  const t = getTranslation(language);

  return (
    <>
      <ParallaxBackground />
      <CursorFollower />
      <Navigation t={t} currentLang={language} onLanguageChange={setLanguage} />

      <main id="main-content">
        {/* Hero Section - World-Class Design */}
        <section id="inicio" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--color-bg)',
          position: 'relative'
        }}>
          <div className="max-w-7xl">
            <ScrollReveal immediate={true}>
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
                      color: 'var(--color-text-inverse)',
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
                      background: 'var(--color-bg)',
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
            </ScrollReveal>
          </div>
        </section>

        {/* Overview Section */}
        <section style={{
          padding: 'var(--space-20) 0',
          background: 'var(--color-cream)'
        }}>
          <div className="max-w-7xl">
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
                <h2 style={{
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--color-text)'
                }}>
                  {t.overview.title}
                </h2>
                <p style={{
                  fontSize: 'var(--text-xl)',
                  lineHeight: '1.8',
                  color: 'var(--color-text-secondary)',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}>
                  {t.overview.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-8)'
            }}>
              {[
                { icon: Scale, href: '/objetivos' },
                { icon: DollarSign, href: '/grupos-alvo' },
                { icon: Truck, href: '/atividades' },
                { icon: BookOpen, href: '/resultados' }
              ].map((item, index) => {
                const Icon = item.icon;
                const service = t.overview.services[index];
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="card">
                      <div style={{ marginBottom: 'var(--space-4)' }}>
                        <Icon size={32} color="var(--color-primary)" strokeWidth={1.5} />
                      </div>
                      <h3 style={{ marginBottom: 'var(--space-3)' }}>{service.title}</h3>
                      <p>{service.description}</p>
                      <a href={item.href} style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'var(--space-3)' }}>
                        {service.link} <ArrowRight size={16} />
                      </a>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
