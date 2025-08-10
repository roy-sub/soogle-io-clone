import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "../hooks/use-toast";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    subject: "",
    message: ""
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
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@soogle.io",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 SEO Street, Suite 100"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "8:00 AM - 6:00 PM PST",
      description: "Monday through Friday"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start working on my website?",
      answer: "We can usually start within 1-2 business days after onboarding."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to enterprises."
    },
    {
      question: "Can I see examples of your previous work?",
      answer: "Absolutely. We can provide case studies and examples during our consultation call."
    }
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions about our SEO services? We're here to help you grow your organic traffic.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                        Website URL
                      </Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://yourwebsite.com"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more about your SEO goals and how we can help..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="font-medium text-gray-700">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Answers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quick Answers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <h4 className="font-medium text-gray-900 mb-2">{faq.question}</h4>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                  <RouterLink to="/faq">
                    View All FAQs
                  </RouterLink>
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  For urgent SEO issues affecting your rankings
                </p>
                <Button variant="outline" size="sm" className="border-red-300 text-red-600 hover:bg-red-100">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your SEO Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Skip the wait and get started with our automated link building today.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <RouterLink to="/get-started">Start Free Trial</RouterLink>
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

export default Contact;