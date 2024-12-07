import { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, LANGUAGE_DETAILS } from './constants';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || SUPPORTED_LANGUAGES.FR;
    const validLang = Object.values(SUPPORTED_LANGUAGES).includes(storedLang) 
      ? storedLang 
      : SUPPORTED_LANGUAGES.FR;
      
    setCurrentLanguage(validLang);
    updateDocumentSettings(validLang);
    i18n.changeLanguage(validLang);
  }, []);

  const updateDocumentSettings = (lang) => {
    const langDetails = LANGUAGE_DETAILS[lang];
    document.documentElement.dir = langDetails.dir;
    document.documentElement.lang = lang;
    document.documentElement.style.fontFamily = langDetails.fontFamily;
  };

  const changeLanguage = async (lang) => {
    if (!Object.values(SUPPORTED_LANGUAGES).includes(lang)) return;
    
    await i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    updateDocumentSettings(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage,
      isRTL: LANGUAGE_DETAILS[currentLanguage]?.dir === 'rtl'
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}