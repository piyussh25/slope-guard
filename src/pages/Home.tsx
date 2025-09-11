import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  AlertTriangle, 
  BarChart3, 
  Zap, 
  Eye, 
  Brain,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  MapPin
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictions",
      description: "Advanced machine learning algorithms analyze multi-source data to predict rockfall risks with high accuracy.",
      color: "text-info"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of slope stability using DEM, drone imagery, and geotechnical sensors.",
      color: "text-success"
    },
    {
      icon: AlertTriangle,
      title: "Early Warning System",
      description: "Instant alerts via SMS/email when dangerous conditions are detected, enabling proactive safety measures.",
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "Risk Analytics",
      description: "Comprehensive dashboard with risk maps, probability forecasts, and actionable insights.",
      color: "text-accent"
    }
  ];

  const stats = [
    { label: "Mine Sites Monitored", value: "24", icon: MapPin },
    { label: "Prediction Accuracy", value: "94%", icon: TrendingUp },
    { label: "Early Warnings Sent", value: "1,247", icon: AlertTriangle },
    { label: "Incidents Prevented", value: "89", icon: Shield }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mining-grid absolute inset-0 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm">
              <Zap className="h-4 w-4 mr-2" />
              Smart India Hackathon 2025 • SIH25071
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Predicting
              <span className="gradient-primary bg-clip-text text-transparent"> Rockfall </span>
              Risks with AI
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI-powered system for open-pit mines that analyzes digital elevation models, 
              drone imagery, and sensor data to predict rockfall incidents before they occur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/predict">
                <Button size="lg" className="text-lg px-8 py-6 gradient-primary text-primary-foreground">
                  Start Prediction Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/reports">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View Past Reports
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advanced Rockfall Detection Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive system integrates multiple data sources and cutting-edge AI to provide 
              the most accurate rockfall predictions in the mining industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-card ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How RockGuard AI Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Our three-step process ensures comprehensive monitoring and accurate predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Gather data from multiple sources including DEM, drone imagery, sensors, and environmental factors",
                icon: Eye
              },
              {
                step: "02", 
                title: "AI Analysis",
                description: "Process multi-source data through advanced machine learning models to identify risk patterns",
                icon: Brain
              },
              {
                step: "03",
                title: "Risk Prediction",
                description: "Generate real-time risk maps, probability forecasts, and automated alerts for mine safety teams",
                icon: Shield
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto gradient-primary rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-primary p-12 rounded-2xl animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Enhance Mine Safety?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start using RockGuard AI today and protect your mining operations with predictive intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/predict">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Begin Risk Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;