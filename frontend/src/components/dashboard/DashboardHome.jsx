import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Link as LinkIcon, 
  Search, 
  Eye,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3
} from "lucide-react";
import { dashboardStats, backlinksData } from "../../data/mock";

const DashboardHome = () => {
  const recentBacklinks = backlinksData.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Track your SEO performance and backlink growth</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Domain Rating</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.domainRating}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+12% from last month</span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Backlinks</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalBacklinks}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+25 this month</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <LinkIcon className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Organic Traffic</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.organicTraffic.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+{dashboardStats.monthlyGrowth}% this month</span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Keyword Rankings</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardStats.keywordRankings}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+15 improved</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Organic Traffic Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 70, 75, 82, 100].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-blue-600 rounded-t"
                    style={{ height: `${height}%` }}
                  ></div>
                  <p className="text-xs text-gray-500 mt-2">
                    {["Jan", "Feb", "Mar", "Apr", "May"][index]}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Backlinks */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Backlinks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentBacklinks.map((backlink) => (
                <div key={backlink.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${
                      backlink.score >= 90 ? "bg-green-500" :
                      backlink.score >= 70 ? "bg-blue-500" :
                      backlink.score >= 50 ? "bg-yellow-500" : "bg-orange-500"
                    } rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-xs">{backlink.score}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{backlink.platform}</p>
                      <p className="text-xs text-gray-500">{backlink.url}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {backlink.date}
                  </Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Backlinks
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Keyword Research</h3>
            <p className="text-sm text-gray-600 mb-4">Discover high-value keywords for your niche</p>
            <Button variant="outline" size="sm">
              Start Research
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <LinkIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Request Backlinks</h3>
            <p className="text-sm text-gray-600 mb-4">Get more high-quality backlinks</p>
            <Button variant="outline" size="sm">
              Request Now
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Site Audit</h3>
            <p className="text-sm text-gray-600 mb-4">Comprehensive SEO analysis</p>
            <Button variant="outline" size="sm">
              Run Audit
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;