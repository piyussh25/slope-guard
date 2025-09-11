import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Download,
  Eye,
  MoreHorizontal
} from "lucide-react";

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock historical reports data
  const reports = [
    {
      id: "RPT-2025001",
      location: "Jharia Coalfield, Sector 7-A", 
      date: "2025-01-10",
      riskLevel: "MODERATE",
      riskScore: 68,
      status: "active",
      confidence: 94,
      eventOccurred: false
    },
    {
      id: "RPT-2025002", 
      location: "Singareni Collieries, Block 3-C",
      date: "2025-01-09",
      riskLevel: "HIGH",
      riskScore: 84,
      status: "resolved",
      confidence: 91,
      eventOccurred: false
    },
    {
      id: "RPT-2025003",
      location: "Korba Coalfield, Zone 2-B",
      date: "2025-01-08", 
      riskLevel: "LOW",
      riskScore: 32,
      status: "archived",
      confidence: 88,
      eventOccurred: false
    },
    {
      id: "RPT-2025004",
      location: "Jharia Coalfield, Sector 5-D",
      date: "2025-01-07",
      riskLevel: "HIGH",
      riskScore: 89,
      status: "event_occurred",
      confidence: 96,
      eventOccurred: true
    },
    {
      id: "RPT-2025005",
      location: "Raniganj Coalfield, Area 1-A",
      date: "2025-01-06",
      riskLevel: "MODERATE", 
      riskScore: 71,
      status: "resolved",
      confidence: 85,
      eventOccurred: false
    },
    {
      id: "RPT-2025006",
      location: "Talcher Coalfield, Sector 8-E",
      date: "2025-01-05",
      riskLevel: "LOW",
      riskScore: 28,
      status: "archived", 
      confidence: 92,
      eventOccurred: false
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low": return "text-success bg-success/10 border-success/20";
      case "moderate": return "text-warning bg-warning/10 border-warning/20";
      case "high": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-info bg-info/10 border-info/20";
      case "resolved": return "text-success bg-success/10 border-success/20";
      case "archived": return "text-muted-foreground bg-muted/10 border-muted/20";
      case "event_occurred": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active Monitoring";
      case "resolved": return "Resolved";
      case "archived": return "Archived";
      case "event_occurred": return "Event Occurred";
      default: return status;
    }
  };

  const filteredReports = reports.filter(report =>
    report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: reports.length,
    active: reports.filter(r => r.status === "active").length,
    resolved: reports.filter(r => r.status === "resolved").length,
    eventOccurred: reports.filter(r => r.eventOccurred).length,
    accuracy: Math.round((reports.filter(r => !r.eventOccurred && r.status !== "active").length / reports.filter(r => r.status !== "active").length) * 100)
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Past Risk Assessment Reports
          </h1>
          <p className="text-xl text-muted-foreground">
            Historical analysis and predictions for rockfall incidents across mining sites
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="glass-card animate-slide-in">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{stats.total}</div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-info mb-2">{stats.active}</div>
                <p className="text-sm text-muted-foreground">Active Monitoring</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">{stats.resolved}</div>
                <p className="text-sm text-muted-foreground">Resolved</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive mb-2">{stats.eventOccurred}</div>
                <p className="text-sm text-muted-foreground">Events Occurred</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stats.accuracy}%</div>
                <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="glass-card mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by location or report ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {filteredReports.map((report, index) => (
            <Card key={report.id} className="glass-card hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{report.id}</h3>
                      <Badge className={getRiskColor(report.riskLevel)}>
                        {report.riskLevel}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {getStatusText(report.status)}
                      </Badge>
                      {report.eventOccurred && (
                        <Badge variant="destructive">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Event Occurred
                        </Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{report.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{new Date(report.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Risk Score: {report.riskScore}%</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">Confidence: {report.confidence}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Link to={`/report/${report.id}`}>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-12 text-center">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Reports Found</h3>
              <p className="text-muted-foreground mb-6">
                No reports match your search criteria. Try adjusting your search terms.
              </p>
              <Link to="/predict">
                <Button className="gradient-primary text-primary-foreground">
                  Generate New Report
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="glass-card gradient-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Need a New Risk Assessment?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Get real-time analysis of your mine site conditions with our AI-powered prediction system.
              </p>
              <Link to="/predict">
                <Button variant="secondary" size="lg">
                  Start New Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;