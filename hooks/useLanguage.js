import { useState, useEffect } from 'react';

export function useLanguage() {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('bridge-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('bridge-language', newLanguage);
  };

  return [language, changeLanguage];
}
