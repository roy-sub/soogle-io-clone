import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Target, 
  Clock,
  BarChart3,
  LineChart,
  PieChart
} from "lucide-react";
import { performanceData } from "../../data/mock";
import { useLanguage } from "../../contexts/LanguageContext";

const Performance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('dashboard.performanceAnalytics')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('dashboard.performanceDesc')}</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant={selectedPeriod === "7d" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedPeriod("7d")}
          >
            7D
          </Button>
          <Button 
            variant={selectedPeriod === "30d" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedPeriod("30d")}
          >
            30D
          </Button>
          <Button 
            variant={selectedPeriod === "90d" ? "default" : "outline"} 
            size="sm"
            onClick={() => setSelectedPeriod("90d")}
          >
            90D
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('dashboard.organicSessions')}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24,567</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+23.5%</span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('dashboard.avgSessionDuration')}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3:42</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+18%</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('dashboard.bounceRate')}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">42.3%</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">-5.2%</span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('dashboard.pagesPerSession')}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2.8</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 dark:text-green-400">+0.4</span>
                </div>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Target className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Charts */}
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="traffic">{t('dashboard.trafficAnalytics')}</TabsTrigger>
          <TabsTrigger value="keywords">{t('dashboard.keywordPerformance')}</TabsTrigger>
          <TabsTrigger value="backlinks">{t('dashboard.backlinkGrowth')}</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-6">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">{t('dashboard.organicTrafficGrowth')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-end justify-between space-x-2">
                {performanceData.organicTraffic.chartData.map((data, index) => {
                  const height = (data.traffic / 12400) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gray-200 rounded-t relative" style={{ height: "300px" }}>
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t absolute bottom-0 transition-all duration-500 hover:from-blue-700 hover:to-blue-500"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 font-medium">{data.month}</p>
                      <p className="text-xs text-gray-500">{data.traffic.toLocaleString()}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">{t('dashboard.keywordRankingsDistribution')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-600">Top 10 Positions</span>
                    </div>
                    <span className="font-semibold text-gray-900">{performanceData.keywordRankings.top10}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-600">Top 50 Positions</span>
                    </div>
                    <span className="font-semibold text-gray-900">{performanceData.keywordRankings.top50}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="text-sm text-gray-600">Below 50</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {performanceData.keywordRankings.total - performanceData.keywordRankings.top50}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">online learning platform</p>
                      <p className="text-xs text-gray-500">Position 15 → 12</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">+3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">backlink building</p>
                      <p className="text-xs text-gray-500">Position 18 → 6</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">+12</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">best seo tools</p>
                      <p className="text-xs text-gray-500">Position 26 → 28</p>
                    </div>
                    <div className="flex items-center text-red-600">
                      <TrendingDown className="w-4 h-4 mr-1" />
                      <span className="text-sm font-semibold">-2</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backlinks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Backlink Acquisition Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[15, 20, 22, 25, 25].map((count, index) => {
                  const height = (count / 25) * 100;
                  return (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div className="w-full bg-gray-200 rounded-t relative" style={{ height: "200px" }}>
                        <div 
                          className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t absolute bottom-0"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-3 font-medium">
                        {["Jan", "Feb", "Mar", "Apr", "May"][index]}
                      </p>
                      <p className="text-xs text-gray-500">{count} links</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Performance Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { page: "/homepage", sessions: 8420, change: 15.2 },
                { page: "/courses/seo", sessions: 3210, change: 8.7 },
                { page: "/blog/backlinks-guide", sessions: 2890, change: 22.1 },
                { page: "/pricing", sessions: 1560, change: -3.2 }
              ].map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{page.page}</p>
                    <p className="text-xs text-gray-500">{page.sessions.toLocaleString()} sessions</p>
                  </div>
                  <div className={`flex items-center ${page.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {page.change > 0 ? 
                      <TrendingUp className="w-4 h-4 mr-1" /> : 
                      <TrendingDown className="w-4 h-4 mr-1" />
                    }
                    <span className="text-sm font-semibold">
                      {page.change > 0 ? '+' : ''}{page.change}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { source: "Organic Search", percentage: 68.4, sessions: 16798, color: "bg-blue-500" },
                { source: "Direct", percentage: 18.2, sessions: 4471, color: "bg-green-500" },
                { source: "Referral", percentage: 8.9, sessions: 2186, color: "bg-purple-500" },
                { source: "Social", percentage: 4.5, sessions: 1106, color: "bg-yellow-500" }
              ].map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${source.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600">{source.source}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">{source.percentage}%</p>
                      <p className="text-xs text-gray-500">{source.sessions.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className={`${source.color} h-1.5 rounded-full transition-all duration-500`}
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Performance;