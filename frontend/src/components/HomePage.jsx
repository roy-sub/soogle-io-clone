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
  ExternalLink
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
    <div className="min-h-screen bg-white">
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
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <RouterLink to="/get-started">Get Started</RouterLink>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Backlinks on Autopilot{" "}
            <span className="text-blue-600">Improve SEO in 3–6 Months</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Manual <strong>white-hat backlinks</strong>, improve <strong>search rankings</strong>. 
            Grow your <strong>organic traffic</strong> without manual effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="outline" className="bg-white border-gray-300 hover:bg-gray-50">
              Sign in with Google
            </Button>
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <RouterLink to="/get-started">Get Started Now</RouterLink>
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            30-Day Money Back Guarantee, Cancel Anytime
          </p>
        </div>
      </section>

      {/* Press Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-center text-gray-500 text-sm mb-8">AS SEEN ON</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
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
      </section>

      {/* Client Logos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-gray-900 text-lg font-medium mb-8">
          Over <strong>1k+</strong> SEO agencies, companies and individual marketers <strong>growing with us</strong>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {clientLogos.map((client, index) => (
            <img 
              key={index}
              src={client.logo} 
              alt={client.name}
              className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </section>

      {/* Backlink Partners Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {backlinksPartners.map((partner, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
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
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
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

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">We</span> use <span className="text-blue-600">Soogle.io</span> for our own products
            </h2>
            <p className="text-lg text-gray-600">
              PlaylistHub got <strong>17 DR in 3 months</strong> with so many different strategies and testing, we spent over $2,000 testing to find the best strategies for our clients.
            </p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-6">
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
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <ArrowRight className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">After 3 Months</p>
                  <p className="text-2xl font-bold text-blue-600">17</p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <p className="text-green-600 font-semibold">+15</p>
                </div>
              </div>
              <p className="text-gray-700 italic">+3,000 Organic Searches Per Day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
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
                      <p className="text-lg font-bold">{testimonial.initialDR}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                    <div className="text-center">
                      <p className="text-xs text-gray-500">After 3 Months</p>
                      <p className="text-lg font-bold text-blue-600">{testimonial.currentDR}</p>
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
            <RouterLink to="/get-started">Start for $67</RouterLink>
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
  );
};

export default HomePage;