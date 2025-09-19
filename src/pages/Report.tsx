import { useParams, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  AlertTriangle, 
  CheckCircle, 
  MapPin, 
  Calendar, 
  Download, 
  Share,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  Clock,
  Thermometer,
  Gauge,
  Activity,
  ArrowLeft,
  FileText,
  Mail,
  MessageSquare
} from "lucide-react";

const Report = () => {
  const { reportId } = useParams();
  const locationState = useLocation().state as { riskScore?: number; overallRisk?: string; location?: string } | null;

  // Mock report data - in real app this would come from API
  const report = {
    id: reportId,
    location: locationState?.location || "Jharia Coalfield, Sector 7-A",
    coordinates: "23.7644°N, 86.4106°E",
    analysisDate: new Date().toISOString(),
    overallRisk: locationState?.overallRisk || "MODERATE",
    riskScore: locationState?.riskScore ?? 68,
    confidence: 94,
    timeToEvent: "72-96 hours",
    factors: {
      geological: 75,
      environmental: 45,
      structural: 82,
      temporal: 60
    },
    alerts: [
      {
        type: "warning",
        message: "Increased slope displacement detected in Zone A",
        severity: "medium"
      },
      {
        type: "info", 
        message: "Weather conditions favorable for next 48 hours",
        severity: "low"
      }
    ],
    recommendations: [
      "Implement continuous monitoring in Zone A (coordinates: 23.7650°N, 86.4100°E)",
      "Restrict heavy machinery operations within 50m radius of high-risk zone",
      "Schedule emergency evacuation drill for personnel in affected sector",
      "Install additional displacement sensors at identified weak points",
      "Monitor weather conditions and postpone blasting if rainfall exceeds 20mm"
    ],
    sensorData: {
      displacement: { value: 2.3, unit: "mm", trend: "up", status: "warning" },
      strain: { value: 156, unit: "με", trend: "up", status: "warning" },
      porePressure: { value: 52.1, unit: "kPa", trend: "stable", status: "normal" },
      temperature: { value: 28.5, unit: "°C", trend: "down", status: "normal" },
      rainfall: { value: 12.3, unit: "mm/24h", trend: "stable", status: "normal" }
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "text-success bg-success/10 border-success/20";
      case "moderate": return "text-warning bg-warning/10 border-warning/20";
      case "high": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-destructive" />;
      case "down": return <TrendingDown className="h-4 w-4 text-success" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "text-success";
      case "warning": return "text-warning";
      case "critical": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <Link to="/predict">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Prediction
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Risk Assessment Report
            </h1>
            <p className="text-muted-foreground">Report ID: {report.id}</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline">
              <Share className="h-4 w-4 mr-2" />
              Share Report
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card animate-slide-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Risk</p>
                  <Badge className={`mt-2 ${getRiskColor(report.overallRisk)}`}>
                    {report.overallRisk}
                  </Badge>
                </div>
                <AlertTriangle className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Score</p>
                  <p className="text-2xl font-bold text-foreground">{report.riskScore}%</p>
                </div>
                <Gauge className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="text-2xl font-bold text-foreground">{report.confidence}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Time Frame</p>
                  <p className="text-sm font-medium text-foreground">{report.timeToEvent}</p>
                </div>
                <Clock className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Analysis */}
          <div className="lg:col-span-2 space-y-6">
            {/* Risk Map Preview */}
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle>Risk Map Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 rounded-lg bg-gradient-to-br from-destructive/20 via-warning/20 to-success/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Heatmap placeholder</div>
                    <div className="flex items-center justify-center space-x-2">
                      <Badge className="bg-destructive/20 text-destructive border-destructive/30">High</Badge>
                      <Badge className="bg-warning/20 text-warning border-warning/30">Moderate</Badge>
                      <Badge className="bg-success/20 text-success border-success/30">Low</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Location Info */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Site Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="font-medium">{report.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coordinates:</span>
                    <span className="font-medium">{report.coordinates}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Analysis Date:</span>
                    <span className="font-medium">{new Date(report.analysisDate).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Factors */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle>Risk Factor Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(report.factors).map(([factor, value]) => (
                  <div key={factor} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="capitalize text-muted-foreground">{factor}</span>
                      <span className="font-medium">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Sensor Data */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Current Sensor Readings</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(report.sensorData).map(([sensor, data]) => (
                    <div key={sensor} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        {sensor === 'temperature' && <Thermometer className="h-4 w-4" />}
                        {sensor === 'displacement' && <Gauge className="h-4 w-4" />}
                        {sensor === 'strain' && <Activity className="h-4 w-4" />}
                        <span className="capitalize text-sm">{sensor}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${getStatusColor(data.status)}`}>
                          {data.value} {data.unit}
                        </span>
                        {getTrendIcon(data.trend)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alert Settings */}
            <Card className="glass-card animate-slide-in">
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Email Alerts</span>
                  <input type="checkbox" defaultChecked className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SMS Alerts</span>
                  <input type="checkbox" className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Threshold (%)</span>
                  <input type="number" defaultValue={70} className="w-20 px-2 py-1 rounded-md border border-border bg-background text-foreground text-sm" />
                </div>
              </CardContent>
            </Card>
            {/* Alerts */}
            <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.7s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span>Active Alerts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {report.alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    alert.severity === 'medium' ? 'bg-warning/10 border-warning/20' : 'bg-info/10 border-info/20'
                  }`}>
                    <p className="text-sm font-medium">{alert.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.8s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>Safety Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {report.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{rec}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.9s" }}>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Alert Email
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  SMS Notification
                </Button>
                <Button className="w-full" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Link to="/predict" className="block">
                  <Button className="w-full gradient-primary text-primary-foreground">
                    <Activity className="h-4 w-4 mr-2" />
                    New Analysis
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;