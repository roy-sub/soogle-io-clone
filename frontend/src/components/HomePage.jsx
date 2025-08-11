import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Search, 
  TrendingUp, 
  Link, 
  ShieldCheck, 
  Bell, 
  FileText,
  Star,
  ArrowRight,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { featuresData, clientLogos, backlinksPartners, testimonials, pressLogos } from "../data/mock";

const HomePage = () => {
  const iconMap = {
    search: Search,
    "trending-up": TrendingUp,
    link: Link,
    "shield-check": ShieldCheck,
    bell: Bell,
    "file-text": FileText
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_2px,#f3f4f6_2px)] bg-[size:24px_24px] opacity-30"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Soogle</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#results" className="text-gray-600 hover:text-gray-900 transition-colors">Results</a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            </nav>
            <div className="flex items-center space-x-4">
              <RouterLink to="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Log in</RouterLink>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                <RouterLink to="/conversion">Subscribe</RouterLink>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Backlinks on Autopilot
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
              Improve SEO in 3-6 Months
            </h2>
            <p className="text-xl text-gray-600 mb-2 leading-relaxed">
              Manual <strong>white-hat backlinks</strong>, improve <strong>search rankings</strong>.
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Grow your <span className="bg-orange-500 text-white px-2 py-1 rounded font-semibold">organic traffic</span> without manual effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="outline" className="bg-white border-gray-300 hover:bg-gray-50 flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </Button>
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 flex items-center">
                <RouterLink to="/conversion">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </RouterLink>
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              30-Day Money Back Guarantee, Cancel Anytime
            </p>
          </div>
        </section>

        {/* Press Section with Wing Decorations */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-center">
            {/* Left Wing */}
            <div className="flex-1 flex justify-end pr-8">
              <svg className="w-12 h-6 text-gray-300" viewBox="0 0 48 24" fill="currentColor">
                <path d="M0,12 C12,4 24,8 36,12 C24,16 12,20 0,12 Z" opacity="0.6"/>
              </svg>
            </div>
            
            {/* Center Text */}
            <p className="text-center text-gray-500 text-sm font-medium tracking-wider uppercase">AS SEEN ON</p>
            
            {/* Right Wing */}
            <div className="flex-1 flex justify-start pl-8">
              <svg className="w-12 h-6 text-gray-300" viewBox="0 0 48 24" fill="currentColor">
                <path d="M48,12 C36,4 24,8 12,12 C24,16 36,20 48,12 Z" opacity="0.6"/>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 mt-8">
            {pressLogos.map((press, index) => (
              <a key={index} href={press.url} target="_blank" rel="noopener noreferrer">
                <img 
                  src={press.logo} 
                  alt={press.name}
                  className="h-8 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-400">Verified by BrandPush.co</p>
          </div>
        </section>

        {/* Client Logos - Revolving */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-center text-gray-900 text-lg font-medium mb-8">
            Over <strong>1k+</strong> SEO agencies, companies and individual marketers <strong className="text-blue-600">growing with us</strong>
          </p>
          <div className="overflow-hidden">
            <div className="animate-scroll-infinite">
              <div className="flex gap-12 w-max items-center">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                  <img 
                    key={index}
                    src={client.logo} 
                    alt={client.name}
                    className="h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-60"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Backlink Partners Grid - Revolving */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="overflow-hidden">
            <div className="animate-scroll-infinite">
              <div className="flex gap-6 w-max">
                {[...backlinksPartners, ...backlinksPartners, ...backlinksPartners].map((partner, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-40">
                    <CardContent className="p-0 text-center">
                      <img 
                        src={partner.favicon} 
                        alt={partner.name}
                        className="w-12 h-12 mx-auto mb-2"
                      />
                      <h3 className="font-medium text-sm text-gray-900 mb-1">{partner.name}</h3>
                      <p className="text-xs text-gray-500 mb-2">{partner.url}</p>
                      <Badge variant="secondary" className="text-xs">
                        DR {partner.dr}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">We</span> use <span className="text-blue-600">Soogle.io</span> for our own products
              </h2>
              <p className="text-lg text-gray-600">
                PlaylistHub got <strong>17 DR in 3 months</strong> with so many different strategies and testing, we spent over <strong>$2,000 testing</strong> to find the best strategies for our clients.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - PlaylistHub Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">playlisthub.io</h3>
                      <p className="text-gray-600">Music Marketing</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-8 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Initial DR</p>
                        <p className="text-3xl font-bold text-gray-900">2</p>
                      </div>
                      <ArrowRight className="w-8 h-8 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">After 3 Months</p>
                        <p className="text-3xl font-bold text-blue-600">17</p>
                      </div>
                      <div className="bg-green-100 px-4 py-2 rounded-full">
                        <p className="text-green-600 font-semibold">+15</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">We got 17 DR in 3 months with so many different strategies and testing, we spent over $2,000 testing to find the best strategies for our clients.</p>
                  </div>
                </div>

                {/* Right Side - Chart/Graph */}
                <div className="bg-blue-600 rounded-2xl p-8 text-white relative">
                  <div className="mb-6">
                    <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full inline-block font-semibold">
                      +3,000 Organic Searches Per Day
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Mock analytics chart */}
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between">
                      <div className="bg-white bg-opacity-20 w-8 h-12 rounded-t"></div>
                      <div className="bg-white bg-opacity-30 w-8 h-16 rounded-t"></div>
                      <div className="bg-white bg-opacity-25 w-8 h-20 rounded-t"></div>
                      <div className="bg-white bg-opacity-40 w-8 h-24 rounded-t"></div>
                      <div className="bg-white bg-opacity-45 w-8 h-28 rounded-t"></div>
                      <div className="bg-white bg-opacity-50 w-8 h-32 rounded-t"></div>
                      <div className="bg-white bg-opacity-60 w-8 h-40 rounded-t"></div>
                      <div className="bg-white bg-opacity-80 w-8 h-48 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Revolving */}
        <section id="results" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real Results from Real Websites
              </h2>
              <p className="text-xl text-gray-600">
                See how these sites dramatically <strong>improved their Domain Rating</strong> in just 3 months
              </p>
            </div>
            <div className="overflow-hidden">
              <div className="animate-scroll-testimonials">
                <div className="flex gap-6 w-max">
                  {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                    <Card key={`${testimonial.id}-${index}`} className="p-6 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-4">
                          <img 
                            src={testimonial.avatar}
                            alt={testimonial.website}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">{testimonial.website}</h3>
                            <p className="text-sm text-gray-500">{testimonial.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center">
                            <p className="text-xs text-gray-500">Initial DR</p>
                            <p className="text-2xl font-bold">{testimonial.initialDR}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                          <div className="text-center">
                            <p className="text-xs text-gray-500">After 3 Months</p>
                            <p className="text-2xl font-bold text-blue-600">{testimonial.currentDR}</p>
                          </div>
                          <div className="bg-green-100 px-2 py-1 rounded">
                            <p className="text-green-600 font-semibold text-sm">+{testimonial.growth}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 italic">"{testimonial.testimonial}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                All-In-One SEO Suite
              </h2>
              <p className="text-xl text-gray-600">
                designed for your needs!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">FAQ</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to see results?",
                  answer: "Most clients see +4 DR improvement within 6 months. Some see results as early as 3 months depending on their starting point and industry competition."
                },
                {
                  question: "What types of backlinks do you provide?",
                  answer: "We provide high-quality, contextual backlinks from real websites with high domain ratings. All backlinks are manually vetted and follow white-hat SEO practices."
                },
                {
                  question: "Do you guarantee results?",
                  answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund."
                },
                {
                  question: "Can I cancel anytime?",
                  answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your service will continue until the end of your current billing period."
                },
                {
                  question: "How many backlinks can I expect each month?",
                  answer: "You get up to 25 high-quality backlinks monthly with your subscription, with options to purchase additional backlinks at $2 each."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart use Soogle.io
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Try it risk free — we don't charge cancellation fees.
            </p>
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <RouterLink to="/conversion">Start for $67</RouterLink>
            </Button>
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
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
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
    </div>
  );
};

export default HomePage;