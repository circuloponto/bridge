'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTranslation } from '@/lib/i18n';

export default function AccessibilityPage() {
  const [language, setLanguage] = useState('pt');
  const t = getTranslation(language);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-[var(--color-primary)]">BRIDGE</span>
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-1 bg-[var(--color-bg-light)] rounded-lg p-1">
              {[
                { code: 'pt', label: 'PT' },
                { code: 'gb', label: 'EN' },
                { code: 'fr', label: 'FR' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    language === lang.code
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-light)] hover:text-[var(--color-primary)]'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-[var(--color-primary)] hover:text-[var(--color-secondary)] mb-8 font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t.nav.home}
        </Link>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-8">
          {t.accessibility.title}
        </h1>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Commitment */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              {t.accessibility.commitment}
            </h2>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
              {t.accessibility.commitmentText}
            </p>
          </section>

          {/* Standards */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              {t.accessibility.standards}
            </h2>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
              {t.accessibility.standardsText}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              {t.accessibility.features}
            </h2>
            <ul className="space-y-3">
              {t.accessibility.featuresList.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-lg text-[var(--color-text-light)]">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Keyboard Navigation */}
          <section className="bg-[var(--color-bg-light)] p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              {t.accessibility.keyboard}
            </h2>
            <p className="text-lg text-[var(--color-text-light)] leading-relaxed mb-6">
              {t.accessibility.keyboardText}
            </p>
            <ul className="space-y-3">
              {t.accessibility.keyboardList.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <kbd className="px-3 py-1 bg-white border-2 border-[var(--color-primary)] rounded text-[var(--color-primary)] font-mono text-sm font-semibold flex-shrink-0">
                    {item.split(' - ')[0]}
                  </kbd>
                  <span className="text-lg text-[var(--color-text-light)] pt-0.5">
                    {item.split(' - ')[1]}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Feedback */}
          <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-burgundy)] text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">
              {t.accessibility.feedback}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              {t.accessibility.feedbackText}
            </p>
            <Link
              href="/#contactos"
              className="inline-flex items-center px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-bg-light)] transition-all transform hover:scale-105"
            >
              {t.nav.contacts}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </section>

          {/* WCAG Compliance Details */}
          <section>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              Technical Specifications
            </h2>
            <div className="bg-[var(--color-bg-light)] p-6 rounded-xl">
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-[var(--color-text)] text-lg">Standard:</dt>
                  <dd className="text-[var(--color-text-light)] ml-4">WCAG 2.1 Level AA</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-text)] text-lg">Color Contrast:</dt>
                  <dd className="text-[var(--color-text-light)] ml-4">Minimum 4.5:1 for normal text, 3:1 for large text</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-text)] text-lg">Screen Readers:</dt>
                  <dd className="text-[var(--color-text-light)] ml-4">Compatible with NVDA, JAWS, VoiceOver</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[var(--color-text)] text-lg">Last Updated:</dt>
                  <dd className="text-[var(--color-text-light)] ml-4">{new Date().toLocaleDateString(language === 'pt' ? 'pt-PT' : language === 'gb' ? 'en-GB' : 'fr-FR')}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-primary)] text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} BRIDGE. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
