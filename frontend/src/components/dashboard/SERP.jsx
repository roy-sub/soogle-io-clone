import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Plus,
  Filter,
  Download,
  ExternalLink,
  Target
} from "lucide-react";
import { serpData } from "../../data/mock";

const SERP = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredKeywords, setFilteredKeywords] = useState(serpData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = serpData.filter(
      keyword => 
        keyword.keyword.toLowerCase().includes(term) ||
        keyword.url.toLowerCase().includes(term)
    );
    setFilteredKeywords(filtered);
  };

  const getPositionColor = (position) => {
    if (position <= 10) return "text-green-600 bg-green-50";
    if (position <= 20) return "text-blue-600 bg-blue-50";
    if (position <= 50) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getChangeIcon = (change) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <div className="w-4 h-4 bg-gray-300 rounded-full"></div>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SERP Tracking</h1>
          <p className="text-gray-600">Monitor your keyword rankings across search engines</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Keywords
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Keywords</p>
                <p className="text-3xl font-bold text-gray-900">89</p>
                <p className="text-sm text-gray-500 mt-1">Tracking across all engines</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Top 10 Rankings</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+3 this week</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Position</p>
                <p className="text-3xl font-bold text-gray-900">23.5</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">Improved by 4.2</span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Improved Keywords</p>
                <p className="text-3xl font-bold text-gray-900">34</p>
                <p className="text-sm text-gray-500 mt-1">In the last 30 days</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search keywords..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline">All Engines</Badge>
          <Badge variant="outline">All Devices</Badge>
        </div>
      </div>

      {/* Keywords Table */}
      <Card>
        <CardHeader>
          <CardTitle>Keyword Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredKeywords.map((keyword, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Badge className={`px-2 py-1 ${getPositionColor(keyword.position)}`}>
                        #{keyword.position}
                      </Badge>
                      {getChangeIcon(keyword.change)}
                      {keyword.change !== 0 && (
                        <span className={`text-sm font-medium ${
                          keyword.change > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {keyword.change > 0 ? '+' : ''}{keyword.change}
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{keyword.keyword}</h3>
                      <a 
                        href={`https://${keyword.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        {keyword.url}
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-right">
                  <div>
                    <p className="text-sm text-gray-500">Search Volume</p>
                    <p className="font-semibold text-gray-900">{keyword.searchVolume.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Difficulty</p>
                    <Badge variant={keyword.difficulty > 80 ? "destructive" : keyword.difficulty > 60 ? "outline" : "secondary"}>
                      {keyword.difficulty}%
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredKeywords.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No keywords found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Keyword Research</h3>
            <p className="text-sm text-gray-600 mb-4">Discover new keyword opportunities</p>
            <Button variant="outline" size="sm">
              Start Research
            </Button>
          </CardContent>
        </Card>

        <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-0 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Competitor Analysis</h3>
            <p className="text-sm text-gray-600 mb-4">Analyze competitor keyword strategies</p>
            <Button variant="outline" size="sm">
              Analyze Competitors
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SERP;