import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to White-Hat Link Building in 2025",
      excerpt: "Learn the latest strategies and techniques for building high-quality backlinks that actually move the needle for your SEO rankings.",
      author: "Sarah Johnson",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "SEO Strategy",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How We Helped 500+ Websites Increase Their Domain Rating",
      excerpt: "Case studies and real examples of how our backlink strategies have transformed websites across different industries.",
      author: "Mike Chen",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Understanding Google's Latest Algorithm Updates",
      excerpt: "Stay ahead of the curve with insights into recent Google algorithm changes and how they affect your SEO strategy.",
      author: "Lisa Martinez",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Algorithm Updates",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Local SEO vs. Global SEO: Which Strategy is Right for You?",
      excerpt: "Discover the key differences between local and global SEO strategies and how to choose the right approach for your business.",
      author: "David Kim",
      date: "2024-12-28",
      readTime: "10 min read",
      category: "SEO Strategy",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "The ROI of Professional Link Building Services",
      excerpt: "Calculate the real return on investment from professional link building and understand why it's worth the investment.",
      author: "Emily Parker",
      date: "2024-12-20",
      readTime: "7 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Technical SEO Checklist for 2025",
      excerpt: "A comprehensive checklist to ensure your website's technical foundation is optimized for search engines.",
      author: "Alex Rodriguez",
      date: "2024-12-15",
      readTime: "15 min read",
      category: "Technical SEO",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    }
  ];

  const categories = ["All", "SEO Strategy", "Case Studies", "Algorithm Updates", "Technical SEO", "Business"];

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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            SEO Insights & Strategies
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights, case studies, and actionable strategies to help you dominate search results and grow your organic traffic.
          </p>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-blue-100 text-blue-800">{post.category}</Badge>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>

      {/* Recent Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Read
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with SEO Trends
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get weekly insights, case studies, and actionable SEO tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime.
          </p>
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

export default Blog;