import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle,
  Zap,
  Globe,
  Image,
  FileText,
  Link as LinkIcon
} from "lucide-react";
import { seoAuditData } from "../../data/mock";

const SEOAudit = () => {
  const getIssueIcon = (severity) => {
    switch (severity) {
      case "critical": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "warning": return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getIssueColor = (severity) => {
    switch (severity) {
      case "critical": return "border-red-200 bg-red-50";
      case "warning": return "border-yellow-200 bg-yellow-50";
      default: return "border-blue-200 bg-blue-50";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SEO Audit</h1>
          <p className="text-gray-600">Comprehensive technical SEO analysis with actionable insights</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Run New Audit
        </Button>
      </div>

      {/* Overall Score */}
      <Card>
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">SEO Health Score</h2>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-green-600">{seoAuditData.score}/100</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">Good Performance</span>
                </div>
              </div>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray={`${seoAuditData.score}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">{seoAuditData.score}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        {seoAuditData.issues.map((issue, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{issue.type} Issues</p>
                  <p className="text-2xl font-bold text-gray-900">{issue.count}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  issue.type === "Critical" ? "bg-red-100" :
                  issue.type === "Warning" ? "bg-yellow-100" : "bg-blue-100"
                }`}>
                  {issue.type === "Critical" ? <AlertTriangle className="w-6 h-6 text-red-600" /> :
                   issue.type === "Warning" ? <AlertCircle className="w-6 h-6 text-yellow-600" /> :
                   <Info className="w-6 h-6 text-blue-600" />
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Web Vitals */}
      <Card>
        <CardHeader>
          <CardTitle>Core Web Vitals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600">{seoAuditData.coreWebVitals.lcp}s</div>
                <p className="text-sm text-gray-600">Largest Contentful Paint</p>
              </div>
              <Progress value={75} className="h-2" />
              <Badge variant="default" className="mt-2 bg-green-100 text-green-700">Good</Badge>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600">{seoAuditData.coreWebVitals.fid}ms</div>
                <p className="text-sm text-gray-600">First Input Delay</p>
              </div>
              <Progress value={85} className="h-2" />
              <Badge variant="default" className="mt-2 bg-green-100 text-green-700">Good</Badge>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-yellow-600">{seoAuditData.coreWebVitals.cls}</div>
                <p className="text-sm text-gray-600">Cumulative Layout Shift</p>
              </div>
              <Progress value={60} className="h-2" />
              <Badge variant="outline" className="mt-2 bg-yellow-100 text-yellow-700">Needs Improvement</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Issues */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {seoAuditData.techIssues.map((issue, index) => (
              <div 
                key={index}
                className={`p-4 border rounded-lg ${getIssueColor(issue.severity)}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getIssueIcon(issue.severity)}
                    <div>
                      <h3 className="font-medium text-gray-900">{issue.issue}</h3>
                      <p className="text-sm text-gray-600">
                        {issue.pages} page{issue.pages !== 1 ? 's' : ''} affected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Fix Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Optimize Images</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Compress and resize large images to improve page load speed. This could improve your LCP score.
                  </p>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Add Meta Descriptions</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    12 pages are missing meta descriptions. This impacts search engine visibility.
                  </p>
                  <Button variant="outline" size="sm">
                    Fix Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Fix Broken Links</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    3 internal links are broken and need to be updated or removed.
                  </p>
                  <Button variant="outline" size="sm">
                    View Links
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOAudit;