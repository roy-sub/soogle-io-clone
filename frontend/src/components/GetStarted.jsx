import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Globe, Link as LinkIcon, TrendingUp, ShieldCheck } from "lucide-react";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    website: "",
    company: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Account Created!",
      description: "Welcome to Soogle! Redirecting to your dashboard...",
    });
    // Mock redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <RouterLink to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </RouterLink>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Soogle</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-auto px-6">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Get Started with Soogle
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Start your SEO journey today and improve your rankings in 3-6 months
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                    Website URL
                  </Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      required
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company Name (Optional)
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                  size="lg"
                >
                  Create Account & Start Free Trial
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => toast({ title: "Coming Soon", description: "Google sign-in will be available soon!" })}
                >
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google"
                    className="w-4 h-4 mr-2"
                  />
                  Continue with Google
                </Button>

                <div className="text-center text-xs text-gray-500">
                  <p>
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <LinkIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">25 Backlinks/Month</h3>
              <p className="text-sm text-gray-600">High-quality contextual backlinks delivered monthly</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3-6 Month Results</h3>
              <p className="text-sm text-gray-600">See improvements in domain rating and organic traffic</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">White-hat SEO</h3>
              <p className="text-sm text-gray-600">Safe, manual techniques that follow Google guidelines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;