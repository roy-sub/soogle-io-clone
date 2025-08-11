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
import { useLanguage } from "../../contexts/LanguageContext";

const SEOAudit = () => {
  const { t } = useLanguage();

  const getIssueIcon = (severity) => {
    switch (severity) {
      case "critical": return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "warning": return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getIssueColor = (severity) => {
    switch (severity) {
      case "critical": return "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900";
      case "warning": return "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900";
      default: return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t('dashboard.seoAudit')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('dashboard.seoAuditDesc')}</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          {t('dashboard.runNewAudit')}
        </Button>
      </div>

      {/* Overall Score */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('dashboard.seoHealthScore')}</h2>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">{seoAuditData.score}/100</div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">{t('dashboard.goodPerformance')}</span>
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
                <span className="text-lg font-bold text-gray-900 dark:text-white">{seoAuditData.score}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issues Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        {seoAuditData.issues.map((issue, index) => (
          <Card key={index} className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {issue.type === "Critical" ? t('dashboard.criticalIssues') : 
                     issue.type === "Warning" ? t('dashboard.warningIssues') : 
                     t('dashboard.noticeIssues')}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{issue.count}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  issue.type === "Critical" ? "bg-red-100 dark:bg-red-900" :
                  issue.type === "Warning" ? "bg-yellow-100 dark:bg-yellow-900" : "bg-blue-100 dark:bg-blue-900"
                }`}>
                  {issue.type === "Critical" ? <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" /> :
                   issue.type === "Warning" ? <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" /> :
                   <Info className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Web Vitals */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">{t('dashboard.coreWebVitals')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{seoAuditData.coreWebVitals.lcp}s</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('dashboard.largestContentfulPaint')}</p>
              </div>
              <Progress value={75} className="h-2" />
              <Badge variant="default" className="mt-2 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">{t('dashboard.good')}</Badge>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{seoAuditData.coreWebVitals.fid}ms</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('dashboard.firstInputDelay')}</p>
              </div>
              <Progress value={85} className="h-2" />
              <Badge variant="default" className="mt-2 bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">{t('dashboard.good')}</Badge>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{seoAuditData.coreWebVitals.cls}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('dashboard.cumulativeLayoutShift')}</p>
              </div>
              <Progress value={60} className="h-2" />
              <Badge variant="outline" className="mt-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200">{t('dashboard.needsImprovement')}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Issues */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">{t('dashboard.technicalIssues')}</CardTitle>
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
                      <h3 className="font-medium text-gray-900 dark:text-white">{issue.issue}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {issue.pages} page{issue.pages !== 1 ? 's' : ''} affected
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                    {t('dashboard.fixNow')}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="dark:text-white">{t('dashboard.optimizationRecommendations')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Optimize Images</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Compress and resize large images to improve page load speed. This could improve your LCP score.
                  </p>
                  <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                    {t('dashboard.viewDetails')}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Add Meta Descriptions</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    12 pages are missing meta descriptions. This impacts search engine visibility.
                  </p>
                  <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                    {t('dashboard.fixNow')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">Fix Broken Links</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    3 internal links are broken and need to be updated or removed.
                  </p>
                  <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                    {t('dashboard.viewLinks')}
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