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
import "../styles/animations.css";
import Header from "./Header";
import { useLanguage } from "../contexts/LanguageContext";

const Conversion = () => {
  const { t } = useLanguage();
  
  const iconMap = {
    search: Search,
    "trending-up": TrendingUp,
    link: Link,
    "shield-check": ShieldCheck,
    bell: Bell,
    "file-text": FileText
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors">
      {/* Modern Dot Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: '0.4'
          }}
        ></div>
      </div>
      
      <div className="relative z-10">
        <Header />

        {/* Backlink Partners Grid - Revolving */}
        <section className="max-w-7xl mx-auto px-6 py-8 overflow-hidden">
          <div className="animate-scroll-infinite">
            <div className="flex gap-4 w-max">
              {[...backlinksPartners, ...backlinksPartners].slice(0, 20).map((partner, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-32 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-0 text-center">
                    <img 
                      src={partner.favicon} 
                      alt={partner.name}
                      className="w-8 h-8 mx-auto mb-2"
                    />
                    <h3 className="font-medium text-xs text-gray-900 dark:text-white mb-1">{partner.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{partner.url}</p>
                    <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      DR {partner.dr}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Conversion Section */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('conversion.improveSEO')}
              </h1>
              
              <div className="mb-6">
                <Badge className="mb-4 bg-blue-100 text-blue-600 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800">
                  {t('conversion.mostClientsSee')}
                </Badge>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$67 USD</span>
                  <span className="text-xl text-gray-500 dark:text-gray-400 line-through">$467 USD</span>
                  <Badge className="bg-blue-600 text-white">SAVE 86%</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('conversion.taxesIncluded')}</p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Link className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{t('conversion.backlinksPerMonth')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Wrench className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{t('conversion.seoTools')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Zap className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{t('conversion.premiumBacklinks')}</span>
                </div>
              </div>

              {/* Money Back Guarantee - Full Width Bordered Box Style */}
              <div className="w-screen relative -mx-6 lg:-mx-12 xl:-mx-24 2xl:-mx-32 px-6 lg:px-12 xl:px-24 2xl:px-32 py-8 bg-blue-50 dark:bg-blue-900/20 border-t-2 border-b-2 border-blue-200 dark:border-blue-800 mb-8">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-center justify-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 dark:text-blue-300 font-medium text-lg">{t('conversion.moneyBackGuarantee')}</span>
                  </div>
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

        {/* Press Section with Wing Decorations - COLORED LOGOS */}
        <section className="bg-gray-50 dark:bg-gray-800 py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center">
              {/* Left Wing */}
              <div className="flex-1 flex justify-end pr-8">
                <svg className="w-12 h-6 text-gray-300 dark:text-gray-600" viewBox="0 0 48 24" fill="currentColor">
                  <path d="M0,12 C12,4 24,8 36,12 C24,16 12,20 0,12 Z" opacity="0.6"/>
                </svg>
              </div>
              
              {/* Center Text */}
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase">{t('sections.asSeenOn')}</p>
              
              {/* Right Wing */}
              <div className="flex-1 flex justify-start pl-8">
                <svg className="w-12 h-6 text-gray-300 dark:text-gray-600" viewBox="0 0 48 24" fill="currentColor">
                  <path d="M48,12 C36,4 24,8 12,12 C24,16 36,20 48,12 Z" opacity="0.6"/>
                </svg>
              </div>
            </div>
            
            {/* COLORED LOGOS - Remove grayscale */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
              {pressLogos.map((press, index) => (
                <a key={index} href={press.url} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={press.logo} 
                    alt={press.name}
                    className="h-8 hover:scale-110 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-gray-400 dark:text-gray-500">Verified by BrandPush.co</p>
            </div>
          </div>
        </section>

        {/* Client Social Proof */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-gray-900 dark:text-white text-lg font-medium mb-8">
              {t('sections.overThousandAgencies')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {clientLogos.map((client, index) => (
                <img 
                  key={index}
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 hover:opacity-100 transition-all duration-300 dark:invert"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Real Results Section - Revolving */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {t('sections.realResults')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {t('sections.realResultsDesc')}
              </p>
            </div>
            <div className="overflow-hidden">
              <div className="animate-scroll-testimonials">
                <div className="flex gap-6 w-max">
                  {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <Card key={`${testimonial.id}-${index}`} className="p-4 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-3">
                          <img 
                            src={testimonial.companyLogo || testimonial.avatar}
                            alt={testimonial.website}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{testimonial.website}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Initial DR</p>
                            <p className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.initialDR}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                          <div className="text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">After 3 Months</p>
                            <p className="text-lg font-bold text-blue-600">{testimonial.currentDR}</p>
                          </div>
                          <div className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">
                            <p className="text-green-600 dark:text-green-300 font-semibold text-xs">+{testimonial.growth}</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 italic">"{testimonial.testimonial.substring(0, 60)}..."</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All-In-One SEO Suite */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('sections.allInOneSEO')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('sections.allInOneSEODesc')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t('features').map((feature, index) => {
                const IconComponent = iconMap[featuresData[index]?.icon];
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-0">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Real Backlinks Section - With Logos */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('sections.realBacklinks')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('sections.realBacklinksDesc')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Pexels", url: "pexels.com", dr: "93", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=pexels.com&sz=64" },
                { name: "TripAdvisor", url: "tripadvisor.com", dr: "94", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=tripadvisor.com&sz=64" },
                { name: "Quora", url: "quora.com", dr: "92", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=quora.com&sz=64" },
                { name: "Pinterest", url: "pinterest.com", dr: "94", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=pinterest.com&sz=64" },
                { name: "Posteezy", url: "posteezy.com", dr: "62", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=posteezy.com&sz=64" },
                { name: "Laravel Paste", url: "paste.laravel.io", dr: "76", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=laravel.io&sz=64" },
                { name: "Ranker", url: "ranker.com", dr: "81", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=ranker.com&sz=64" },
                { name: "PasteLink", url: "pastelink.net", dr: "52", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=pastelink.net&sz=64" },
                { name: "Academia.edu", url: "independent.academia.edu", dr: "89", status: "Live & Indexed", favicon: "https://www.google.com/s2/favicons?domain=academia.edu&sz=64" }
              ].map((backlink, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={backlink.favicon} 
                          alt={backlink.name}
                          className="w-8 h-8 mr-3"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{backlink.name}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{backlink.url}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs mb-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                          DR {backlink.dr}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 dark:text-green-400">{backlink.status}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Sample Report Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('sections.clientSampleReport')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              {t('sections.clientSampleReportDesc')}
            </p>
            <div className="max-w-md mx-auto">
              <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-8">
                  SAMPLE REPORT
                </h3>
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  {t('sections.downloadSampleReport')}
                </Button>
              </div>
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
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - PlaylistHub Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 12l8-4 8 4v8l-8 4-8-4v-8z" stroke="white" strokeWidth="2" fill="none"/>
                        <circle cx="16" cy="16" r="2" fill="white"/>
                      </svg>
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

                {/* Right Side - Line Chart */}
                <div className="bg-blue-600 rounded-2xl p-8 text-white relative">
                  <div className="mb-6">
                    <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full inline-block font-semibold">
                      +3,000 Organic Searches Per Day
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Line Chart */}
                    <svg viewBox="0 0 300 150" className="w-full h-full">
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid-conversion" width="30" height="15" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid-conversion)" />
                      
                      {/* Line chart path */}
                      <path
                        d="M 20 130 L 50 125 L 80 120 L 110 115 L 140 100 L 170 85 L 200 70 L 230 50 L 260 30 L 290 20"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Data points */}
                      <circle cx="20" cy="130" r="3" fill="white" />
                      <circle cx="50" cy="125" r="3" fill="white" />
                      <circle cx="80" cy="120" r="3" fill="white" />
                      <circle cx="110" cy="115" r="3" fill="white" />
                      <circle cx="140" cy="100" r="3" fill="white" />
                      <circle cx="170" cy="85" r="3" fill="white" />
                      <circle cx="200" cy="70" r="3" fill="white" />
                      <circle cx="230" cy="50" r="3" fill="white" />
                      <circle cx="260" cy="30" r="3" fill="white" />
                      <circle cx="290" cy="20" r="3" fill="white" />
                    </svg>
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
    </div>
  );
};

export default Conversion;