import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ExternalLink, Search, Filter, Download, TrendingUp } from "lucide-react";
import { backlinksData } from "../../data/mock";

const Backlinks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBacklinks, setFilteredBacklinks] = useState(backlinksData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = backlinksData.filter(
      backlink => 
        backlink.platform.toLowerCase().includes(term) ||
        backlink.url.toLowerCase().includes(term)
    );
    setFilteredBacklinks(filtered);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getScoreBadgeVariant = (score) => {
    if (score >= 90) return "default";
    if (score >= 70) return "secondary";
    if (score >= 50) return "outline";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Backlinks</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Backlinks</p>
                <p className="text-2xl font-bold text-gray-900">127</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">25</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">DoFollow</p>
                <p className="text-2xl font-bold text-gray-900">89</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg. DR</p>
                <p className="text-2xl font-bold text-gray-900">76</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search backlinks..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10"
          />
        </div>
      </div>

      {/* Backlinks Table */}
      <Card>
        <CardHeader>
          <CardTitle>Your Backlinks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredBacklinks.map((backlink) => (
              <div 
                key={backlink.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  {/* Score Badge */}
                  <div className={`w-12 h-12 ${getScoreColor(backlink.score)} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{backlink.score}</span>
                  </div>
                  
                  {/* Platform Icon */}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src={backlink.favicon}
                      alt={backlink.platform}
                      className="w-6 h-6"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-6 h-6 bg-gray-300 rounded hidden items-center justify-center">
                      <span className="text-xs text-gray-600">{backlink.platform.charAt(0)}</span>
                    </div>
                  </div>

                  {/* Platform Info */}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{backlink.platform}</h3>
                    <a 
                      href={`https://${backlink.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                    >
                      {backlink.url}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Date */}
                <div className="text-right">
                  <p className="text-sm text-gray-500">{backlink.date}</p>
                  <Badge variant={getScoreBadgeVariant(backlink.score)} className="mt-1">
                    DR {backlink.score}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {filteredBacklinks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No backlinks found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Backlinks;