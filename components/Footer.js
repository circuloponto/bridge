'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function Footer({ t }) {
  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/objetivos', label: t.nav.objectives },
    { href: '/grupos-alvo', label: t.nav.targetGroups },
    { href: '/atividades', label: t.nav.activities },
    { href: '/resultados', label: t.nav.results },
    { href: '/parceiros', label: t.nav.partners },
    { href: '/noticias', label: t.nav.news },
    { href: '/contactos', label: t.nav.contacts },
  ];

  return (
    <footer style={{
      background: 'var(--color-footer-bg)',
      color: 'var(--color-text-inverse)',
      padding: 'var(--space-12) 0 var(--space-6)',
      position: 'relative',
      zIndex: 10
    }} role="contentinfo">
      <div className="max-w-7xl">
        <ScrollReveal direction="down">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-8)',
            marginBottom: 'var(--space-8)'
          }}>
            {/* Brand */}
            <div>
              <Link href="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                marginBottom: 'var(--space-4)'
              }}>
                <img
                  src="/logo-white.svg"
                  alt="BRIDGE Logo"
                  style={{
                    height: '70px',
                    width: 'auto'
                  }}
                />
                <span style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'var(--color-text-inverse)',
                  letterSpacing: '-0.5px'
                }}>
                  BRIDGE
                </span>
              </Link>
              <p style={{
                fontSize: 'var(--text-sm)',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '300px'
              }}>
                {t.footer.description}
              </p>
            </div>

            {/* Quick Links - Two columns side by side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-8)'
            }}>
              <div>
                <h3 style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text-inverse)'
                }}>{t.footer.quickLinks}</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {quickLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: 'var(--text-sm)',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-text-inverse)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <ChevronRight size={14} style={{ color: '#e8a05d' }} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: '600',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text-inverse)',
                  opacity: 0
                }}>.</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {quickLinks.slice(4, 8).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: 'var(--text-sm)',
                          color: 'rgba(255, 255, 255, 0.7)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--color-text-inverse)';
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <ChevronRight size={14} style={{ color: '#e8a05d' }} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{
                fontSize: 'var(--text-base)',
                fontWeight: '600',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-text-inverse)'
              }}>{t.nav.contacts}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <li>
                  <a href="mailto:info@bridge-project.eu" style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-text-inverse)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                    info@bridge-project.eu
                  </a>
                </li>
                <li>
                  <a href="tel:+351210000000" style={{
                    fontSize: 'var(--text-sm)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-text-inverse)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
                    +351 210 000 000
                  </a>
                </li>
                <li style={{
                  fontSize: 'var(--text-sm)',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  Lisboa, Portugal
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal direction="down" delay={0.2}>
          <div style={{
            marginTop: 'var(--space-8)',
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-4)'
            }}>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                © {new Date().getFullYear()} BRIDGE. {t.footer.rights}
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--text-sm)' }}>
                <Link href="/privacidade" style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-text-inverse)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}>
                  {t.footer.privacy}
                </Link>
                <Link href="/acessibilidade" style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-text-inverse)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}>
                  {t.footer.terms}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
