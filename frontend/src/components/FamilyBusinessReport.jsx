import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Building2, 
  Users, 
  TrendingDown, 
  Globe, 
  Target, 
  BookOpen, 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Award,
  Shield,
  Zap,
  ChevronRight,
  FileText,
  Search,
  Database,
  Filter,
  TrendingUp
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart as RechartsPieChart,
  Cell,
  Area,
  AreaChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';
import { CitationLink } from './CitationLink';
import { MethodologySection, FindingsSection, FrameworksSection, RecommendationsSection } from './ReportSections';
import { 
  citations,
  survivalRatesData,
  businessContributionData,
  successFactorsData,
  readinessAssessmentData,
  researchMethodologyData,
  COLORS
} from '../data/mockData';

const FamilyBusinessReport = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Executive Overview', icon: Building2 },
    { id: 'literature', label: 'Literature Analysis', icon: BookOpen },
    { id: 'methodology', label: 'Research Methodology', icon: Search },
    { id: 'findings', label: 'Key Findings', icon: Target },
    { id: 'frameworks', label: 'Frameworks & Tools', icon: Shield },
    { id: 'recommendations', label: 'Recommendations', icon: Lightbulb }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Executive Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Global Significance</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Family businesses represent 70-90% of all enterprises globally, contributing significantly to employment and economic growth. However, their survival rates across generations remain critically low <CitationLink id="1" callType="quote" citations={citations}/>.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Global GDP Contribution</span>
                        <span className="font-semibold">70-90%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Global Workforce</span>
                        <span className="font-semibold">60%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Indian Market Share</span>
                        <span className="font-semibold">67%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Research Scope</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">89 peer-reviewed studies analyzed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-green-500" />
                        <span className="text-sm">2018-2024 research timeframe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">Global and Indian perspectives</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Multi-theoretical framework</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Survival Rates Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  Family Business Survival Rates Across Generations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Critical Challenge:</strong> Only 30% of family businesses survive to the second generation globally, with Indian businesses showing relatively better performance at 45% <CitationLink id="2" callType="quote" citations={citations}/>.
                    </AlertDescription>
                  </Alert>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={survivalRatesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="generation" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="global" fill="#EF4444" name="Global Average" />
                    <Bar dataKey="indian" fill="#10B981" name="Indian Businesses" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Key Statistics */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold">22,000</div>
                  <div className="text-sm text-gray-600">Words in Research</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <div className="text-2xl font-bold">25</div>
                  <div className="text-sm text-gray-600">Peer-Reviewed Sources</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-gray-600">Theoretical Frameworks</div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'literature':
        return (
          <div className="space-y-6">
            {/* Thematic Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Thematic Literature Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Major Themes Identified</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Succession Planning Models</div>
                          <div className="text-sm text-gray-600">Process-based frameworks and three-circle models</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Successor Development</div>
                          <div className="text-sm text-gray-600">Competency building and preparation strategies</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-purple-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Governance Structures</div>
                          <div className="text-sm text-gray-600">Family councils, constitutions, and boards</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="h-5 w-5 text-orange-500 mt-0.5" />
                        <div>
                          <div className="font-medium">Innovation Integration</div>
                          <div className="text-sm text-gray-600">Balancing tradition with modernization</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Cultural Perspectives</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-blue-800">Indian Context</div>
                        <div className="text-sm text-blue-600 mt-1">
                          Higher survival rates (45% vs 30% globally), stronger family values integration, complex joint family structures <CitationLink id="4" callType="quote" citations={citations}/>
                        </div>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="font-medium text-green-800">Global Patterns</div>
                        <div className="text-sm text-green-600 mt-1">
                          Professionalization trends, education emphasis, innovation integration across cultures
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Factors Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Success Factors: Importance vs Implementation Gap</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={successFactorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="importance" fill="#3B82F6" name="Importance %" />
                    <Bar dataKey="implementation" fill="#10B981" name="Implementation %" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 text-sm text-gray-600">
                  Analysis reveals significant gaps between recognized importance and actual implementation of key success factors <CitationLink id="3" callType="quote" citations={citations}/>.
                </div>
              </CardContent>
            </Card>

            {/* Theoretical Frameworks */}
            <Card>
              <CardHeader>
                <CardTitle>Theoretical Framework Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium text-blue-800">Agency Theory</div>
                      <div className="text-sm text-gray-600">Multi-principal framework addressing complex stakeholder relationships</div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium text-green-800">Stewardship Theory</div>
                      <div className="text-sm text-gray-600">Intergenerational stewardship model development</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium text-purple-800">Resource-Based View</div>
                      <div className="text-sm text-gray-600">Family-specific resource framework enhancements</div>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="font-medium text-orange-800">Social Capital Theory</div>
                      <div className="text-sm text-gray-600">Multi-level social capital framework applications</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">This section is under development</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Family Business Succession Planning: Comprehensive Research Report
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          A literature-based analysis with focus on Indian and global perspectives, examining leadership transition dynamics across generations
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {renderTabContent()}
      </div>

      {/* Citations Footer */}
      <Card className="mt-8">
        <CardContent className="text-xs sm:text-sm text-gray-600 mt-4 p-4 sm:p-6">
          <p className="font-semibold mb-3">References:</p>
          <ul className="space-y-2">
            {Object.entries(citations).map(([id, citation]) => (
              <li key={id}>
                <CitationLink id={id} callType="recommend" citations={citations}/>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t text-xs text-gray-500">
            <p><strong>Research Scope:</strong> 22,000+ words, 25 peer-reviewed sources, systematic literature review methodology</p>
            <p><strong>Time Frame:</strong> 2018-2024 publications with focus on contemporary succession planning practices</p>
            <p><strong>Geographic Focus:</strong> Global perspectives with special emphasis on Indian family business context</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyBusinessReport;