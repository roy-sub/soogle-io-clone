import React from 'react';
import { Button } from './ui/button';
import { Link as RouterLink } from 'react-router-dom';
import { Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'de' : 'en');
  };

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Soogle</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.features')}
          </a>
          <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.pricing')}
          </a>
          <a href="#results" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.results')}
          </a>
          <a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t('nav.blog')}
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
          
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="p-2 flex items-center gap-1"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium">
              {language.toUpperCase()}
            </span>
            <ChevronDown className="h-3 w-3" />
          </Button>
          
          <RouterLink 
            to="/" 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
          >
            {t('nav.logIn')}
          </RouterLink>
          <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
            <RouterLink to="/conversion">{t('nav.subscribe')}</RouterLink>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;