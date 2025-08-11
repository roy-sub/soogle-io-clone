import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Home, 
  BarChart3, 
  Link as LinkIcon, 
  ShieldCheck, 
  Search, 
  FileText,
  HelpCircle,
  Phone,
  Settings,
  LogOut,
  CreditCard,
  Plus,
  ChevronLeft,
  Bell,
  Sun, 
  Moon, 
  Globe, 
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { navigationItems } from "../data/mock";
import DashboardHome from "./dashboard/DashboardHome";
import Performance from "./dashboard/Performance";
import Backlinks from "./dashboard/Backlinks";
import SEOAudit from "./dashboard/SEOAudit";
import SERP from "./dashboard/SERP";
import ComingSoon from "./dashboard/ComingSoon";

const Dashboard = () => {
  const location = useLocation();
  const [credits] = useState(10);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const iconMap = {
    home: Home,
    "bar-chart-3": BarChart3,
    link: LinkIcon,
    "shield-check": ShieldCheck,
    search: Search,
    google: Search,
    "file-text": FileText,
    "help-circle": HelpCircle,
    phone: Phone
  };

  const isActive = (path) => {
    if (path === "/dashboard" && location.pathname === "/dashboard") return true;
    if (path !== "/dashboard" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Soogle</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-r-2 border-blue-600"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs dark:bg-gray-700 dark:text-gray-300">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              <Settings className="w-4 h-4 mr-2" />
              {t('dashboard.settings')}
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
              <LogOut className="w-4 h-4 mr-2" />
              {t('dashboard.logout')}
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <ChevronLeft className="w-4 h-4 mr-1" />
                {t('dashboard.app')}
              </Button>
              <span className="text-gray-400 dark:text-gray-500">&gt;</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                {location.pathname === "/dashboard" ? t('dashboard.title') : 
                 location.pathname.includes("backlinks") ? t('dashboard.backlinks') :
                 location.pathname.includes("performance") ? t('dashboard.performance') :
                 location.pathname.includes("seo-audit") ? t('dashboard.seoAudit') :
                 location.pathname.includes("serp") ? t('dashboard.serp') :
                 location.pathname.includes("google-ads") ? t('dashboard.googleAds') :
                 t('dashboard.title')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900 px-3 py-1 rounded-lg">
                <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{credits} {t('dashboard.credits')}</span>
                <Button size="sm" variant="ghost" className="p-1 h-6 w-6 hover:bg-blue-100 dark:hover:bg-blue-800">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              
              {/* Theme Toggle */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {theme === 'light' ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
                {/* Beta Tag */}
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-sm font-bold leading-none">
                  BETA
                </div>
              </div>
              
              {/* Language Dropdown */}
              <div className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2 flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-xs font-medium">
                        {language.toUpperCase()}
                      </span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <DropdownMenuItem 
                      onClick={() => handleLanguageChange('en')}
                      className="cursor-pointer text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      🇺🇸 English
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleLanguageChange('de')}
                      className="cursor-pointer text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      🇩🇪 Deutsch
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                {/* Beta Tag */}
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 py-0.5 rounded-sm font-bold leading-none">
                  BETA
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback className="dark:bg-gray-700 dark:text-gray-200">SC</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SolooCourse</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 transition-colors">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="performance" element={<Performance />} />
            <Route path="backlinks" element={<Backlinks />} />
            <Route path="seo-audit" element={<SEOAudit />} />
            <Route path="serp" element={<SERP />} />
            <Route path="google-ads" element={<ComingSoon feature="Google Ads" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;