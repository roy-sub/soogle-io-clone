import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Clock, Bell, Mail, ArrowRight } from "lucide-react";

const ComingSoon = ({ feature }) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{feature}</h1>
        <p className="text-gray-600">This feature is coming soon to enhance your SEO workflow</p>
      </div>

      {/* Coming Soon Card */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
          
          <Badge variant="secondary" className="mb-4">
            Coming Soon
          </Badge>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {feature} Integration
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We're working hard to bring you powerful {feature.toLowerCase()} tools that will integrate 
            seamlessly with your SEO workflow. Stay tuned for updates!
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Deep analytics and reporting</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Automated optimization suggestions</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Integration with existing workflows</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Bell className="w-4 h-4 mr-2" />
              Notify Me When Ready
            </Button>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Request Early Access
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feature Preview */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Advanced Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Comprehensive performance tracking with detailed insights
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Automated Optimization</h3>
                  <p className="text-sm text-gray-600">
                    AI-powered recommendations for better performance
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h3 className="font-medium text-gray-900">Real-time Monitoring</h3>
                  <p className="text-sm text-gray-600">
                    Live tracking of key metrics and instant alerts
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Planning & Research</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Development</p>
                  <p className="text-sm text-gray-500">In Progress</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-500">Testing & QA</p>
                  <p className="text-sm text-gray-500">Q2 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-500">Launch</p>
                  <p className="text-sm text-gray-500">Q3 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Alternative */}
      <Card>
        <CardHeader>
          <CardTitle>Meanwhile, Explore Our Current Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">Backlink Analysis</h3>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                Track and analyze your backlink profile with detailed metrics
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">SEO Audit</h3>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                Comprehensive site analysis with actionable recommendations
              </p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900">Performance Tracking</h3>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600">
                Monitor your website's performance and traffic growth
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoon;