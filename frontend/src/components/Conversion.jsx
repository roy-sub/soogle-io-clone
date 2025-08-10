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
  ShoppingCart,
  Wrench,
  Zap
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { clientLogos, backlinksPartners, testimonials, pressLogos, featuresData } from "../data/mock";

const Conversion = () => {
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
            <a href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</a>
          </nav>
        </div>
      </header>

      {/* Backlink Partners Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {backlinksPartners.slice(0, 10).map((partner, index) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <img 
                  src={partner.favicon} 
                  alt={partner.name}
                  className="w-8 h-8 mx-auto mb-2"
                />
                <h3 className="font-medium text-xs text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{partner.url}</p>
                <Badge variant="outline" className="text-xs">
                  DR {partner.dr}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Conversion Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Improve SEO in Weeks
            </h1>
            
            <div className="mb-6">
              <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200">
                Most Clients See +4 DR in 6 Months
              </Badge>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">$67 USD</span>
                <span className="text-xl text-gray-500 line-through">$467 USD</span>
                <Badge className="bg-blue-600 text-white">SAVE 86%</Badge>
              </div>
              <p className="text-sm text-gray-600">Taxes included.</p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Link className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">+20 Backlinks Per Month</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Wrench className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">SEO Tools Worth $1,000s</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">5 Premium Backlinks (+80 DR)</span>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="border border-blue-200 rounded-lg p-4 mb-8 bg-blue-50">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="text-center lg:text-left">
            <Button 
              size="lg" 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg w-full mb-4"
            >
              <RouterLink to="/get-started">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Give Me Backlinks Now
              </RouterLink>
            </Button>
            <p className="text-sm text-gray-500 mb-4">
              We offer a 30-day money-back guarantee - see our refund policy. By purchasing, you agree to our terms of service.
            </p>
            <div className="flex justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png" alt="PayPal" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/200px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
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
        </div>
      </section>

      {/* Client Social Proof */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-900 text-lg font-medium mb-8">
            Over <strong>1k+</strong> SEO agencies, companies and individual marketers <strong className="text-blue-600">growing with us</strong>
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
        </div>
      </section>

      {/* Real Results Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Websites
            </h2>
            <p className="text-lg text-gray-600">
              See how these sites dramatically <strong className="text-blue-600">improved their Domain Rating</strong> in just 3 months
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.slice(0, 8).map((testimonial) => (
              <Card key={testimonial.id} className="p-4 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.website}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900">{testimonial.website}</h3>
                      <p className="text-xs text-gray-500">{testimonial.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Initial DR</p>
                      <p className="text-lg font-bold">{testimonial.initialDR}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="text-center">
                      <p className="text-xs text-gray-500">After 3 Months</p>
                      <p className="text-lg font-bold text-blue-600">{testimonial.currentDR}</p>
                    </div>
                    <div className="bg-green-100 px-2 py-1 rounded">
                      <p className="text-green-600 font-semibold text-xs">+{testimonial.growth}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 italic">"{testimonial.testimonial.substring(0, 60)}..."</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All-In-One SEO Suite */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">All-In-One SEO Suite</span>
            </h2>
            <p className="text-xl text-gray-600">
              designed for your needs!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* We Use Soogle Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">We</span> use <span className="text-blue-600">Soogle.io</span> for our own products
            </h2>
            <p className="text-lg text-gray-600">
              PlaylistHub got <strong>17 DR in 3 months</strong> with so many different strategies and testing, we spent over <strong>$2,000 testing</strong> to find the best strategies for our clients.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                <div className="bg-blue-100 px-4 py-2 rounded-full inline-block">
                  <p className="text-blue-700 font-semibold">+3,000 Organic Searches Per Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">FAQ</h2>
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
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Improve Your SEO?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 1,000+ agencies and marketers growing their organic traffic with Soogle.io
          </p>
          <Button 
            size="lg" 
            asChild 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <RouterLink to="/get-started">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Give Me Backlinks Now - $67
            </RouterLink>
          </Button>
          <p className="text-sm mt-4 opacity-75">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
};

export default Conversion;