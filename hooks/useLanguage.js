import { useState, useEffect } from 'react';

export function useLanguage() {
  // Initialize with default language to avoid hydration issues
  const [language, setLanguage] = useState('pt');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to ensure we're on the client
    setMounted(true);
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('bridge-language');
    if (savedLanguage && ['pt', 'gb', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    if (['pt', 'gb', 'fr'].includes(newLanguage)) {
      setLanguage(newLanguage);
      if (typeof window !== 'undefined') {
        localStorage.setItem('bridge-language', newLanguage);
        // Update HTML lang attribute for screen readers
        const langMap = { pt: 'pt', gb: 'en', fr: 'fr' };
        document.documentElement.lang = langMap[newLanguage] || 'pt';
      }
    }
  };

  // Return default language until mounted to avoid hydration mismatch
  return [mounted ? language : 'pt', changeLanguage];
}
