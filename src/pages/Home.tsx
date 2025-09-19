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
      title: "Predictive insights",
      description: "We combine maps, imagery, and sensor readings to estimate rockfall risk you can act on.",
      color: "text-info"
    },
    {
      icon: Eye,
      title: "Ongoing monitoring",
      description: "Watch slope stability over time using DEMs, drone photos, and on‑site instruments.",
      color: "text-success"
    },
    {
      icon: AlertTriangle,
      title: "Early warnings",
      description: "Get alerts when conditions change so teams have time to respond safely.",
      color: "text-warning"
    },
    {
      icon: BarChart3,
      title: "Clear dashboards",
      description: "Maps, trends, and simple summaries help you see what matters quickly.",
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
              Predict rockfall risk
              <span className="gradient-primary bg-clip-text text-transparent"> before it happens</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              A practical tool for open‑pit mines. It looks at elevation models, drone imagery, and sensor data to flag areas that may fail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/predict">
                <Button size="lg" className="text-lg px-8 py-6 gradient-primary text-primary-foreground">
                  Run a risk check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/reports">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  View reports
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
              What you get
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One place to track slope health, spot changes early, and share clear updates with your team.
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

      {/* How It Works Section removed per request */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-primary p-12 rounded-2xl animate-fade-in">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to make your site safer?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Try it on a current bench or wall and see if the insights help your daily checks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/predict">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                  Start a check
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Talk to us
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