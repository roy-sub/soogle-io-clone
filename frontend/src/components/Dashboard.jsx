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
  Bell
} from "lucide-react";
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Soogle</span>
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
                        ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="ml-auto text-xs">
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
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="w-4 h-4 mr-1" />
                App
              </Button>
              <span className="text-gray-400">></span>
              <span className="text-gray-600 font-medium">
                {location.pathname === "/dashboard" ? "Dashboard" : 
                 location.pathname.includes("backlinks") ? "Backlinks" :
                 location.pathname.includes("performance") ? "Performance" :
                 location.pathname.includes("seo-audit") ? "SEO Audit" :
                 location.pathname.includes("serp") ? "SERP" :
                 "Dashboard"}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-lg">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">{credits} Credits</span>
                <Button size="sm" variant="ghost" className="p-1 h-6 w-6">
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">SolooCourse</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
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