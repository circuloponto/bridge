'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function NewsModal({ article, onClose, t }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Focus close button when modal opens
    closeBtnRef.current?.focus();

    // Handle ESC key and focus trap
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      // Focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
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

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        backdropFilter: 'blur(4px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--color-bg)',
          borderRadius: 'var(--radius-2xl)',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '95vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: 'var(--space-3) var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-1)'
            }}>
              <div style={{
                padding: '2px 8px',
                background: 'var(--color-cream)',
                color: 'var(--color-secondary)',
                borderRadius: '100px',
                fontSize: '11px',
                fontWeight: '600'
              }}>
                {article.category}
              </div>
              <span style={{
                fontSize: '11px',
                color: 'var(--color-text-tertiary)'
              }}>
                {article.date}
              </span>
            </div>
            <h2 id="modal-title" style={{
              fontSize: 'var(--text-lg)',
              fontWeight: '600',
              color: 'var(--color-primary)',
              lineHeight: '1.3'
            }}>
              {article.title}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: 'none',
              background: 'var(--color-cream)',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.color = 'var(--color-bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-cream)';
              e.currentTarget.style.color = 'var(--color-primary)';
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{
          padding: 'var(--space-6)',
          overflowY: 'auto',
          flex: 1
        }}>
          {/* Featured Image */}
          <img
            src="/photo background.jpg"
            alt={article.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-6)',
              objectFit: 'cover',
              maxHeight: '400px'
            }}
          />

          {/* Article Content */}
          <div style={{
            fontSize: 'var(--text-base)',
            lineHeight: '1.8',
            color: 'var(--color-text-light)'
          }}>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              {article.excerpt}
            </p>

            <p style={{ marginBottom: 'var(--space-4)' }}>
              {article.fullContent || article.excerpt}
            </p>

            {/* Additional content sections */}
            <h3 style={{
              fontSize: 'var(--text-xl)',
              fontWeight: '600',
              color: 'var(--color-primary)',
              marginTop: 'var(--space-8)',
              marginBottom: 'var(--space-4)'
            }}>
              {t.news.moreDetails || 'Mais Detalhes'}
            </h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
