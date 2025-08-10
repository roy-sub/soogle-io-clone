import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Plus, Minus, Mail, MessageCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = [
    {
      id: 1,
      question: "How does Soogle.io's automated backlink building work?",
      answer: "Our AI-powered system identifies high-quality, relevant websites in your niche and creates contextual backlinks through manual outreach and content placement. We focus on white-hat techniques that comply with Google's guidelines, ensuring sustainable SEO growth without penalties."
    },
    {
      id: 2,
      question: "How many backlinks will I get per month?",
      answer: "Our standard plan includes 25 high-quality backlinks per month. Each backlink is manually vetted and placed on websites with good domain authority and relevance to your industry. Quality over quantity is our priority."
    },
    {
      id: 3,
      question: "How long does it take to see results?",
      answer: "Most clients see improvements in their domain rating and organic traffic within 3-6 months. SEO is a long-term strategy, and sustainable results take time. However, some improvements in keyword rankings can be observed as early as 4-8 weeks."
    },
    {
      id: 4,
      question: "What industries do you work with?",
      answer: "We work with businesses across all industries, including SaaS, e-commerce, healthcare, finance, legal, real estate, and more. Our team has experience in over 50+ different verticals and can adapt our strategies to any niche."
    },
    {
      id: 5,
      question: "Are your backlinks safe and Google-compliant?",
      answer: "Absolutely. We only use white-hat, manual link building techniques that comply with Google's webmaster guidelines. All our backlinks come from real websites with genuine editorial content, not PBNs or link farms."
    },
    {
      id: 6,
      question: "Can I see the backlinks you've built for my website?",
      answer: "Yes! Your dashboard provides complete transparency with detailed reports of every backlink we build, including the source website, domain authority, placement date, and live links to verify the backlinks."
    },
    {
      id: 7,
      question: "Do you offer a money-back guarantee?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first month, we'll provide a full refund. We're confident in our ability to deliver results."
    },
    {
      id: 8,
      question: "How do you choose which websites to target for backlinks?",
      answer: "We use advanced SEO tools and manual research to identify websites that are: 1) Relevant to your industry, 2) Have good domain authority (typically DR 20+), 3) Accept guest posts or content partnerships, 4) Have real organic traffic and engagement."
    },
    {
      id: 9,
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period. All backlinks already built will remain active."
    },
    {
      id: 10,
      question: "Do you provide keyword research and content creation?",
      answer: "Our primary focus is on backlink building, but we do provide basic keyword recommendations for anchor text optimization. For comprehensive keyword research and content creation, we can recommend trusted partners or discuss custom packages."
    },
    {
      id: 11,
      question: "What makes Soogle.io different from other link building services?",
      answer: "Our key differentiators are: 1) 100% manual, white-hat approach, 2) Complete transparency with detailed reporting, 3) Industry-specific expertise, 4) Guaranteed monthly delivery, 5) No long-term contracts required, 6) Focus on sustainable, penalty-free growth."
    },
    {
      id: 12,
      question: "Do you work with new websites or only established ones?",
      answer: "We work with both new and established websites. For new websites, we recommend having some basic content and a professional design before starting. We can provide guidance on preparing your site for our link building campaigns."
    }
  ];

  const categories = [
    { name: "Getting Started", count: 4 },
    { name: "Service Details", count: 5 },
    { name: "Pricing & Billing", count: 3 },
    { name: "Results & Reporting", count: 2 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
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
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <RouterLink to="/get-started">Get Started</RouterLink>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to know about our SEO services and link building process.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-3.5">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Categories</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Contact Support */}
              <Card className="mt-8 bg-blue-50 border-blue-200">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqData.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {item.question}
                      </span>
                      {openItems[item.id] ? (
                        <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openItems[item.id] && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Boost Your SEO Rankings?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1,000+ businesses that trust Soogle for their link building needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              View Pricing
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <RouterLink to="/get-started">Start Free Trial</RouterLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-semibold">Soogle</span>
              </div>
              <p className="text-gray-400">
                AI SEO Growth on Autopilot. Automated backlink building for better search rankings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Soogle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;