import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { FiGlobe } from 'react-icons/fi';

const languages = [
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    document.documentElement.dir = languages.find(lang => lang.code === languageCode).dir;
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
        <FiGlobe className="h-5 w-5" />
        <span className="hidden sm:inline-block">
          {currentLanguage?.name}
        </span>
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {languages.map((language) => (
          <Menu.Item key={language.code}>
            {({ active }) => (
              <button
                onClick={() => handleLanguageChange(language.code)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } ${
                  i18n.language === language.code ? 'font-semibold' : ''
                } block px-4 py-2 text-sm text-gray-700 w-full text-left`}
              >
                {language.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}