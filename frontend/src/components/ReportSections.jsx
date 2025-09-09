import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Search, Database, Filter, Award, Calendar, ArrowRight, CheckCircle,
  AlertTriangle, Lightbulb, TrendingUp, Users, BarChart3, Target,
  Globe, Zap, Shield, Building2
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';
import { CitationLink } from './CitationLink';
import { readinessAssessmentData, researchMethodologyData, citations } from '../data/mockData';

export const MethodologySection = () => (
  <div className="space-y-6">
    {/* Research Design */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Systematic Literature Review Methodology
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Research Approach</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">PRISMA Guidelines Followed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Systematic Search Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Quality Assessment Criteria</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Thematic Analysis Framework</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Search Parameters</h3>
            <div className="space-y-2 text-sm">
              <div><strong>Databases:</strong> Web of Science, Scopus, EBSCO, ABI/INFORM, JSTOR</div>
              <div><strong>Keywords:</strong> "family business*", "succession planning", "leadership transition*"</div>
              <div><strong>Time Frame:</strong> 2018-2024</div>
              <div><strong>Language:</strong> English</div>
              <div><strong>Document Type:</strong> Peer-reviewed articles</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Study Selection Process */}
    <Card>
      <CardHeader>
        <CardTitle>Study Selection Process</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={researchMethodologyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="phase" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">1,247</div>
            <div className="text-xs text-blue-800">Initial Records</div>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">834</div>
            <div className="text-xs text-green-800">After Deduplication</div>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">234</div>
            <div className="text-xs text-yellow-800">After Screening</div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">89</div>
            <div className="text-xs text-purple-800">Final Selection</div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Quality Assessment */}
    <Card>
      <CardHeader>
        <CardTitle>Quality Assessment Criteria</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <Database className="h-6 w-6 text-blue-500 mb-2" />
            <h4 className="font-medium mb-2">Methodological Rigor</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Clear research questions</li>
              <li>• Appropriate methodology</li>
              <li>• Valid data collection</li>
              <li>• Reliable analysis methods</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <Filter className="h-6 w-6 text-green-500 mb-2" />
            <h4 className="font-medium mb-2">Relevance Criteria</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Family business focus</li>
              <li>• Succession planning content</li>
              <li>• Contemporary relevance</li>
              <li>• Practical implications</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <Award className="h-6 w-6 text-purple-500 mb-2" />
            <h4 className="font-medium mb-2">Publication Quality</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Peer-reviewed journals</li>
              <li>• Impact factor consideration</li>
              <li>• Author credibility</li>
              <li>• Citation quality</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const FindingsSection = () => (
  <div className="space-y-6">
    {/* Key Findings Overview */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Major Research Findings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-green-700">Positive Findings</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Indian Advantage:</strong> 45% second-generation survival vs 30% globally
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Early Planning Impact:</strong> 5x higher success rates with formal planning
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Innovation Catalyst:</strong> Succession processes drive strategic renewal
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Relationship Quality:</strong> Primary determinant of success outcomes
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-red-700">Critical Challenges</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Implementation Gap:</strong> 35% gap between importance and execution
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Communication Barriers:</strong> 60% cite inadequate family communication
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Governance Weakness:</strong> Only 55% have formal governance structures
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                <div className="text-sm">
                  <strong>Cultural Tensions:</strong> Tradition-innovation balance challenges
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Comparative Analysis */}
    <Card>
      <CardHeader>
        <CardTitle>Indian vs Global Family Business Patterns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Aspect</th>
                <th className="text-left p-2">Indian Context</th>
                <th className="text-left p-2">Global Pattern</th>
                <th className="text-left p-2">Convergence Level</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-2 font-medium">Survival Rates</td>
                <td className="p-2">45% (2nd gen), 20% (3rd gen)</td>
                <td className="p-2">30% (2nd gen), 12% (3rd gen)</td>
                <td className="p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Higher</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Family Structure</td>
                <td className="p-2">Joint families, extended involvement</td>
                <td className="p-2">Nuclear families, limited scope</td>
                <td className="p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">Divergent</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Professionalization</td>
                <td className="p-2">Gradual adoption, family-first</td>
                <td className="p-2">Rapid implementation</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Converging</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Innovation Integration</td>
                <td className="p-2">Balanced traditional-modern</td>
                <td className="p-2">Technology-driven disruption</td>
                <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Converging</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-2 font-medium">Social Responsibility</td>
                <td className="p-2">Strong community orientation</td>
                <td className="p-2">Stakeholder capitalism trend</td>
                <td className="p-2"><span className="bg-green-100 text-green-800 px-2 py-1 rounded">Aligned</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          Analysis reveals both convergent and divergent patterns, with Indian family businesses showing unique strengths in survival rates and cultural integration <CitationLink id="4" callType="quote" citations={citations}/>.
        </div>
      </CardContent>
    </Card>

    {/* Success Factors Radar Chart */}
    <Card>
      <CardHeader>
        <CardTitle>Succession Readiness Assessment Framework</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={readinessAssessmentData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="dimension" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Current State"
              dataKey="score"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.3}
            />
            <Radar
              name="Target State"
              dataKey="fullMark"
              stroke="#10B981"
              fill="transparent"
              strokeDasharray="5 5"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-sm text-gray-600">
          Six-dimensional assessment framework showing typical family business readiness profile with strengths in family and culture dimensions.
        </div>
      </CardContent>
    </Card>
  </div>
);

export const FrameworksSection = () => (
  <div className="space-y-6">
    {/* Three-Phase Process Model */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Integrated Succession Planning Framework
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-blue-700">Phase 1: Preparation</h3>
              </div>
              <div className="text-sm text-gray-600 mb-3">Duration: 5-15 years</div>
              <ul className="text-sm space-y-1">
                <li>• Family readiness assessment</li>
                <li>• Successor identification</li>
                <li>• Development programs</li>
                <li>• Governance establishment</li>
                <li>• Strategic planning integration</li>
              </ul>
            </div>
            <div className="p-4 border-2 border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="h-5 w-5 text-green-500" />
                <h3 className="font-semibold text-green-700">Phase 2: Transition</h3>
              </div>
              <div className="text-sm text-gray-600 mb-3">Duration: 2-5 years</div>
              <ul className="text-sm space-y-1">
                <li>• Authority transfer processes</li>
                <li>• Stakeholder communication</li>
                <li>• Performance monitoring</li>
                <li>• Risk management</li>
                <li>• Support systems</li>
              </ul>
            </div>
            <div className="p-4 border-2 border-purple-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold text-purple-700">Phase 3: Consolidation</h3>
              </div>
              <div className="text-sm text-gray-600 mb-3">Duration: 3-7 years</div>
              <ul className="text-sm space-y-1">
                <li>• Leadership establishment</li>
                <li>• Strategic direction setting</li>
                <li>• Culture preservation/adaptation</li>
                <li>• Innovation integration</li>
                <li>• Next generation preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Succession Planning Checklist */}
    <Card>
      <CardHeader>
        <CardTitle>Comprehensive Succession Planning Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                Family Dimension (25 points)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Family vision and values articulation (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Communication protocols established (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Conflict resolution mechanisms (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Family council formation (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Next-generation engagement (5 pts)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-green-500" />
                Business Dimension (25 points)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Strategic planning integration (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Performance measurement systems (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Risk assessment and mitigation (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Innovation and adaptation planning (5 pts)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Stakeholder engagement strategy (5 pts)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const RecommendationsSection = () => (
  <div className="space-y-6">
    {/* Strategic Recommendations */}
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          Strategic Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-blue-700">For Family Businesses</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-800">Early Planning Initiative</div>
                <div className="text-sm text-blue-600 mt-1">
                  Start succession planning 10-15 years before transition, with formal assessment and development programs.
                </div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-800">Governance Structure Development</div>
                <div className="text-sm text-green-600 mt-1">
                  Establish family councils, constitutions, and independent boards to manage complex relationships.
                </div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-800">Cultural Integration Strategy</div>
                <div className="text-sm text-purple-600 mt-1">
                  Balance traditional values with modern business practices through systematic adaptation frameworks.
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-green-700">For Policymakers</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="font-medium text-yellow-800">Support Infrastructure</div>
                <div className="text-sm text-yellow-600 mt-1">
                  Develop specialized family business centers providing advisory services and training programs.
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="font-medium text-red-800">Tax Incentives</div>
                <div className="text-sm text-red-600 mt-1">
                  Create favorable tax policies for businesses with formal succession planning and governance structures.
                </div>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <div className="font-medium text-indigo-800">Research and Development</div>
                <div className="text-sm text-indigo-600 mt-1">
                  Fund longitudinal research on family business succession to develop evidence-based policies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Expected Impact */}
    <Card>
      <CardHeader>
        <CardTitle>Expected Impact and Benefits</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-3 text-green-500" />
            <h3 className="font-semibold mb-2">Survival Rate Improvement</h3>
            <div className="text-2xl font-bold text-green-600 mb-1">+50%</div>
            <p className="text-sm text-gray-600">Increase in second-generation survival rates through systematic planning</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 mx-auto mb-3 text-blue-500" />
            <h3 className="font-semibold mb-2">Employment Preservation</h3>
            <div className="text-2xl font-bold text-blue-600 mb-1">2.5M</div>
            <p className="text-sm text-gray-600">Jobs potentially preserved in India's family business sector</p>
          </div>
          <div className="text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-3 text-purple-500" />
            <h3 className="font-semibold mb-2">Economic Impact</h3>
            <div className="text-2xl font-bold text-purple-600 mb-1">+1.2%</div>
            <p className="text-sm text-gray-600">Additional contribution to India's GDP growth through improved succession</p>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Future Research Directions */}
    <Card>
      <CardHeader>
        <CardTitle>Future Research Directions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <Calendar className="h-6 w-6 text-blue-500 mb-2" />
            <h4 className="font-medium mb-2">Longitudinal Studies</h4>
            <p className="text-sm text-gray-600">Following businesses through complete succession cycles to understand long-term dynamics and outcomes <CitationLink id="5" callType="quote" citations={citations}/>.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Globe className="h-6 w-6 text-green-500 mb-2" />
            <h4 className="font-medium mb-2">Cultural Comparative Studies</h4>
            <p className="text-sm text-gray-600">Systematic cross-cultural comparisons to identify universal vs culture-specific success factors.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Users className="h-6 w-6 text-purple-500 mb-2" />
            <h4 className="font-medium mb-2">Gender and Diversity Research</h4>
            <p className="text-sm text-gray-600">Examining experiences of women and diverse successors in family business transitions.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Zap className="h-6 w-6 text-orange-500 mb-2" />
            <h4 className="font-medium mb-2">Digital Transformation Integration</h4>
            <p className="text-sm text-gray-600">Understanding technology's role in succession planning and next-generation leadership development.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);