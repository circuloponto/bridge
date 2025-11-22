'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ParallaxBackground';
import { getTranslation } from '@/lib/i18n';
import { useLanguage } from '@/hooks/useLanguage';
import { Eye, Keyboard, Users, MessageCircle } from 'lucide-react';

export default function AccessibilityPage() {
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
                {language === 'pt' ? 'Acessibilidade' : 'Accessibility'}
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                marginBottom: 'var(--space-6)',
                color: 'var(--color-primary)'
              }}>
                {t.accessibility.title}
              </h1>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-light)',
                lineHeight: '1.8'
              }}>
                {t.accessibility.commitmentText}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gap: 'var(--space-8)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {/* Standards */}
              <div className="card">
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--color-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Eye size={24} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--color-primary)'
                    }}>
                      {t.accessibility.standards}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      lineHeight: '1.8'
                    }}>
                      {t.accessibility.standardsText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="card">
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--color-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Users size={24} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-4)',
                      color: 'var(--color-primary)'
                    }}>
                      {t.accessibility.features}
                    </h3>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                      {t.accessibility.featuresList.map((feature, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}>
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--color-secondary)',
                            marginTop: '8px',
                            flexShrink: 0
                          }} />
                          <span style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.8'
                          }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Keyboard Navigation */}
              <div className="card">
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--color-cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Keyboard size={24} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--color-primary)'
                    }}>
                      {t.accessibility.keyboard}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {t.accessibility.keyboardText}
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                      {t.accessibility.keyboardList.map((item, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px'
                        }}>
                          <kbd style={{
                            padding: '4px 12px',
                            background: 'var(--color-cream)',
                            border: '2px solid var(--color-secondary)',
                            borderRadius: '6px',
                            color: 'var(--color-primary)',
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            fontWeight: '600',
                            flexShrink: 0
                          }}>
                            {item.split(' - ')[0]}
                          </kbd>
                          <span style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.8',
                            paddingTop: '4px'
                          }}>
                            {item.split(' - ')[1]}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="card" style={{
                background: 'var(--color-primary)',
                color: '#ffffff'
              }}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MessageCircle size={24} style={{ color: 'var(--color-text-inverse)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: '600',
                      marginBottom: 'var(--space-3)',
                      color: 'var(--color-text-inverse)'
                    }}>
                      {t.accessibility.feedback}
                    </h3>
                    <p style={{
                      fontSize: 'var(--text-base)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: '1.8',
                      marginBottom: 'var(--space-4)'
                    }}>
                      {t.accessibility.feedbackText}
                    </p>
                    <Link
                      href="/contactos"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        background: '#ffffff',
                        color: 'var(--color-primary)',
                        borderRadius: '100px',
                        fontSize: 'var(--text-base)',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {t.nav.contacts}
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div style={{
                padding: 'var(--space-8)',
                background: 'var(--color-cream)',
                borderRadius: 'var(--radius-2xl)'
              }}>
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-6)',
                  color: 'var(--color-primary)'
                }}>
                  {language === 'pt' ? 'Especificações Técnicas' : 'Technical Specifications'}
                </h3>
                <dl style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  <div>
                    <dt style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {language === 'pt' ? 'Padrão:' : 'Standard:'}
                    </dt>
                    <dd style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      marginLeft: 'var(--space-4)'
                    }}>
                      WCAG 2.1 Level AA
                    </dd>
                  </div>
                  <div>
                    <dt style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {language === 'pt' ? 'Contraste de Cores:' : 'Color Contrast:'}
                    </dt>
                    <dd style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      marginLeft: 'var(--space-4)'
                    }}>
                      {language === 'pt'
                        ? 'Mínimo 4.5:1 para texto normal, 3:1 para texto grande'
                        : 'Minimum 4.5:1 for normal text, 3:1 for large text'}
                    </dd>
                  </div>
                  <div>
                    <dt style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {language === 'pt' ? 'Leitores de Ecrã:' : 'Screen Readers:'}
                    </dt>
                    <dd style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      marginLeft: 'var(--space-4)'
                    }}>
                      {language === 'pt'
                        ? 'Compatível com NVDA, JAWS, VoiceOver'
                        : 'Compatible with NVDA, JAWS, VoiceOver'}
                    </dd>
                  </div>
                  <div>
                    <dt style={{
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: 'var(--space-2)'
                    }}>
                      {language === 'pt' ? 'Última Atualização:' : 'Last Updated:'}
                    </dt>
                    <dd style={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--color-text-light)',
                      marginLeft: 'var(--space-4)'
                    }}>
                      {new Date().toLocaleDateString(language === 'pt' ? 'pt-PT' : language === 'gb' ? 'en-GB' : 'fr-FR')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
