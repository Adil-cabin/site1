import { useLanguage } from '../LanguageContext';
import { LANGUAGE_DETAILS } from '../constants';

export function useDirection() {
  const { currentLanguage } = useLanguage();
  const isRTL = LANGUAGE_DETAILS[currentLanguage]?.dir === 'rtl';
  
  return {
    isRTL,
    dir: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'right' : 'left',
    marginClass: (left, right) => isRTL ? right : left,
    paddingClass: (left, right) => isRTL ? right : left,
    flexClass: (start, end) => isRTL ? end : start
  };
}