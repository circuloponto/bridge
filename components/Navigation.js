'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation({ t, currentLang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const pathname = usePathname();
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const previousPath = useRef(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
        background: scrolled ? 'rgba(255, 255, 255, 0.48)' : 'rgba(255, 255, 255, 0)',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(39.9px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(9.9px)' : 'none',
        border: 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px',
        position: 'relative'
      }}>
        {/* Logo */}
        <Link
          href="/"
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
            src="/logo.svg"
            alt="BRIDGE Logo"
            style={{
              height: '70px',
              width: 'auto',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <span style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--color-primary)',
            letterSpacing: '-0.5px'
          }}>
            BRIDGE
          </span>
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
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Language Switcher */}
        <div style={{
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
              style={{
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s',
                background: currentLang === lang.code ? 'var(--color-primary)' : 'transparent',
                color: currentLang === lang.code ? '#ffffff' : 'var(--color-text-secondary)'
              }}
              aria-label={`Switch to ${lang.label}`}
              aria-pressed={currentLang === lang.code}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: 'var(--space-4) 0',
          zIndex: 1001,
          overflowY: 'auto'
        }}>
          <div className="max-w-7xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'block',
                    padding: 'var(--space-2) var(--space-4)',
                    fontSize: 'var(--text-base)',
                    fontWeight: '600',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    textDecoration: 'none',
                    borderLeft: isActive ? '3px solid var(--color-primary)' : '3px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'var(--color-cream)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
