import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Check, Star, TrendingUp, Shield, Zap, Users } from "lucide-react";

const Conversion = () => {
  const benefits = [
    "25 high-quality backlinks every month",
    "Improve Domain Rating in 3-6 months",
    "100% white-hat link building techniques",
    "Manual outreach to real websites",
    "Detailed monthly reports & analytics",
    "No long-term contracts required"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup.io",
      text: "My DR went from 15 to 42 in just 4 months!",
      rating: 5,
      improvement: "+180% organic traffic"
    },
    {
      name: "Mike Chen", 
      company: "EcommerceStore",
      text: "Finally found a link building service that actually works.",
      rating: 5,
      improvement: "Ranking #1 for main keywords"
    },
    {
      name: "Lisa Rodriguez",
      company: "DigitalAgency",
      text: "We use Soogle for all our clients now. Results speak for themselves.",
      rating: 5,
      improvement: "300% increase in leads"
    }
  ];

  const urgencyReasons = [
    { icon: TrendingUp, text: "Your competitors are building links right now" },
    { icon: Shield, text: "Google favors websites with strong backlink profiles" },
    { icon: Zap, text: "Every day you wait = missed organic traffic" },
    { icon: Users, text: "Limited spots available this month" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
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
          <Badge variant="destructive" className="animate-pulse">
            Limited Time Offer
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-green-100 text-green-800 px-6 py-2">
            ⚡ Get Started in 5 Minutes
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to <span className="text-blue-600">Dominate</span> Search Results?
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 1,000+ smart business owners who are already using our AI-powered link building 
            to increase their Domain Rating and organic traffic by <strong>300%+</strong> in just 3-6 months.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">300%</div>
              <div className="text-sm text-gray-600">Avg Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <Card className="mb-12 shadow-xl border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Here's What You Get Starting Today:
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Urgency Section */}
        <Card className="mb-12 bg-red-50 border-red-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-red-800 mb-4 text-center">
              ⚠️ Don't Wait - Here's Why You Need to Act NOW:
            </h3>
            <div className="space-y-3">
              {urgencyReasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <reason.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-red-700 font-medium">{reason.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Real Results from Real Customers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                    <div className="text-sm text-green-600 font-medium mt-1">
                      {testimonial.improvement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Comparison */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Compare the Real Cost:
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-red-600 font-semibold mb-2">DIY Link Building</div>
                <div className="text-3xl font-bold text-red-600 mb-2">$5,000+/month</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• SEO Manager: $4,000/mo</div>
                  <div>• Tools & Software: $500/mo</div>
                  <div>• Content Creation: $800/mo</div>
                  <div>• Time & Effort: Priceless</div>
                </div>
              </div>
              <div className="text-center border-2 border-green-300 rounded-lg p-4 bg-white">
                <div className="text-green-600 font-semibold mb-2">Soogle.io</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$67/month</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• 25 Quality Backlinks</div>
                  <div>• Full-Service Management</div>
                  <div>• Detailed Reports</div>
                  <div>• 30-Day Guarantee</div>
                </div>
                <Badge className="mt-3 bg-green-100 text-green-800">
                  Save 98.6%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Start Building Your SEO Empire Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let another day pass watching your competitors outrank you. 
              Take action now and secure your spot!
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-12 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                asChild
              >
                <RouterLink to="/get-started">
                  🎯 Give Me Backlinks Now - $67/month
                </RouterLink>
              </Button>
              
              <div className="text-sm opacity-80">
                ✅ 30-Day Money Back Guarantee • ✅ Cancel Anytime • ✅ No Setup Fees
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm opacity-80">
                🔒 Secure checkout • 💳 All major cards accepted • ⚡ Get started in 5 minutes
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Risk Reversal */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Still not sure? <strong>No problem!</strong> Try us risk-free for 30 days. 
            If you don't see improvement in your rankings, we'll refund every penny.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversion;