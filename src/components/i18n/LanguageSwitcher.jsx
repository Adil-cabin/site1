import { Menu } from '@headlessui/react';
import { FiGlobe } from 'react-icons/fi';
import { useLanguage } from './LanguageContext';
import { LANGUAGE_DETAILS } from './constants';
import { useDirection } from './hooks/useDirection';

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const { isRTL } = useDirection();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600">
        <FiGlobe className="h-5 w-5" />
        <span className="hidden sm:inline-block">
          {LANGUAGE_DETAILS[currentLanguage]?.name}
        </span>
      </Menu.Button>
      <Menu.Items 
        className={`absolute ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
      >
        {Object.entries(LANGUAGE_DETAILS).map(([code, details]) => (
          <Menu.Item key={code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(code)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } ${
                  currentLanguage === code ? 'font-semibold text-indigo-600' : ''
                } block w-full px-4 py-2 text-sm text-gray-900 ${
                  isRTL ? 'text-right' : 'text-left'
                } hover:text-indigo-600 transition-colors`}
                dir={details.dir}
              >
                {details.name}
              </button>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}