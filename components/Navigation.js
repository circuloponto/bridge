'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function Navigation({ t, currentLang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const previousPath = useRef(pathname);
  const mobileMenuRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open + keyboard accessibility
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Handle Escape key to close menu
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          menuBtnRef.current?.focus();
        }
        // Focus trap within mobile menu
        if (e.key === 'Tab' && mobileMenuRef.current) {
          const focusable = mobileMenuRef.current.querySelectorAll('a, button');
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      // Focus first menu link when opened
      setTimeout(() => {
        const firstLink = mobileMenuRef.current?.querySelector('a');
        firstLink?.focus();
      }, 100);

      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const updatePill = () => {
      const activeLink = linkRefs.current[pathname];
      const nav = navRef.current;

      if (activeLink && nav) {
        const navRect = nav.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        const newLeft = linkRect.left - navRect.left;
        const newWidth = linkRect.width;

        // Get the pill element
        const pillElement = nav.querySelector('.pill-indicator');
        if (pillElement) {
          // Get current computed values
          const currentLeft = parseFloat(getComputedStyle(pillElement).left) || 0;
          const currentWidth = parseFloat(getComputedStyle(pillElement).width) || 0;

          // If this is the first time or values are at 0, set without transition
          if (currentLeft === 0 && currentWidth === 0) {
            pillElement.style.transition = 'none';
            pillElement.style.left = `${newLeft}px`;
            pillElement.style.width = `${newWidth}px`;
            // Force reflow
            pillElement.offsetHeight;
            // Re-enable transition
            pillElement.style.transition = 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          } else {
            // Normal transition
            pillElement.style.left = `${newLeft}px`;
            pillElement.style.width = `${newWidth}px`;
          }
        }
      }
    };

    setTimeout(updatePill, 50);
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [pathname]);


  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/objetivos', label: t.nav.objectives },
    { href: '/grupos-alvo', label: t.nav.targetGroups },
    { href: '/atividades', label: t.nav.activities },
    { href: '/resultados', label: t.nav.results },
    { href: '/parceiros', label: t.nav.partners },
    { href: '/noticias', label: t.nav.news },
    { href: '/contactos', label: t.nav.contacts },
  ];

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'gb', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'var(--color-bg-subtle)' : 'transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
          backdropFilter: scrolled ? 'blur(39.9px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(9.9px)' : 'none',
          border: 'none',
          borderBottom: scrolled ? '1px solid var(--color-border-light)' : '1px solid transparent',
          transition: 'all 0.3s ease'
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <style jsx>{`
        .nav-container {
          height: 80px;
        }
        .logo-img {
          height: 70px;
          width: auto;
          transition: transform 0.3s;
        }
        .logo-text {
          font-size: 28px;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.5px;
        }
        .lang-btn {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.25s;
        }
        
        @media (max-width: 640px) {
          .nav-container {
            height: 60px !important;
          }
          .logo-link {
            height: 60px !important;
          }
          .logo-img {
            height: 40px !important;
          }
          .logo-text {
            font-size: 20px !important;
          }
          .lang-switcher {
            padding: 4px !important;
          }
          .lang-btn {
            padding: 6px 10px !important;
            font-size: 12px !important;
          }
        }
      `}</style>
        <div className="max-w-7xl nav-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Logo */}
          <Link
            href="/"
            className="logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              textDecoration: 'none',
              height: '80px'
            }}
            aria-label="BRIDGE Home"
          >
            <img
              src="/bridge.png"
              alt="BRIDGE Logo"
              className="logo-img"
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div
            ref={navRef}
            style={{
              display: 'none',
              gap: '4px',
              alignItems: 'center',
              flexWrap: 'nowrap',
              flexShrink: 1,
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.5)',
              padding: '4px',
              borderRadius: '12px'
            }}
            className="desktop-nav">
            {/* Sliding Pill Background */}
            <span
              className="pill-indicator"
              style={{
                position: 'absolute',
                left: '0',
                width: '0',
                height: 'calc(100% - 8px)',
                background: 'var(--color-cream)',
                borderRadius: '10px',
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
                zIndex: 0,
                top: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}></span>

            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(el) => (linkRefs.current[item.href] = el)}
                  style={{
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    transition: 'color 0.25s',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.color = 'var(--color-text-secondary)';
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuBtnRef}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--color-text)'
            }}
            className="mobile-menu-btn"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Language Switcher & Theme Toggle */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'var(--color-cream)',
                  color: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border-light)',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  transition: 'all 0.2s'
                }}
                aria-label="Toggle theme"
              >
                {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            <div className="lang-switcher" style={{
              display: 'flex',
              gap: '4px',
              background: 'var(--color-cream)',
              padding: '6px',
              borderRadius: '12px',
              border: '1px solid var(--color-border-light)'
            }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className="lang-btn"
                  style={{
                    background: currentLang === lang.code ? 'var(--color-primary)' : 'transparent',
                    color: currentLang === lang.code ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)'
                  }}
                  aria-label={`Switch to ${lang.label}`}
                  aria-pressed={currentLang === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          role="menu"
          aria-label="Mobile navigation"
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'var(--color-bg)',
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            padding: 'var(--space-4) 0',
            zIndex: 1001,
            overflowY: 'auto'
          }}>
          <style jsx>{`
            @keyframes slideInFromLeft {
              from {
                opacity: 0;
                transform: translateX(-30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes blink {
              0% { opacity: 1; transform: scale(1); }
              50% { opacity: 0.4; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1); }
            }
          `}</style>
          <ul className="max-w-7xl" style={{ listStyle: 'none' }}>
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} role="menuitem" style={{
                  animation: `slideInFromLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`
                }}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      menuBtnRef.current?.focus();
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: 'var(--space-2) var(--space-4)',
                      fontSize: 'var(--text-base)',
                      fontWeight: '600',
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                      textDecoration: 'none',
                      borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'translateX(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(90deg, var(--color-cream) 0%, transparent 100%)';
                      e.currentTarget.style.transform = 'translateX(12px)';
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.color = isActive ? 'var(--color-primary)' : 'var(--color-text)';
                    }}
                  >
                    {isActive && (
                      <span aria-hidden="true" style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        marginRight: '12px',
                        animation: 'blink 2s infinite ease-in-out'
                      }}></span>
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
