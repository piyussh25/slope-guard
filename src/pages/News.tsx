import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  ExternalLink, 
  TrendingUp, 
  AlertTriangle, 
  Newspaper,
  Clock,
  MapPin,
  Filter
} from "lucide-react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock news data - in a real app this would come from news APIs
  const newsArticles = [
    {
      id: 1,
      title: "Major Breakthrough in AI-Powered Mine Safety Technology",
      summary: "New machine learning algorithms show 96% accuracy in predicting rockfall incidents at open-pit mines across India.",
      content: "Researchers at the National Institute of Rock Mechanics have developed advanced AI systems that can predict rockfall incidents with unprecedented accuracy...",
      source: "Mining Technology Today",
      date: "2025-01-10",
      category: "Technology",
      location: "New Delhi, India",
      urgent: false,
      image: "/api/placeholder/400/200",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Emergency Alert: Multiple Rockfall Warnings Issued in Jharia Coalfield",
      summary: "Advanced monitoring systems detect increased instability in three sectors of Jharia Coalfield following recent heavy rainfall.",
      content: "Mining operations in sectors 7-A, 8-C, and 9-B have been temporarily suspended after AI prediction systems indicated elevated rockfall risks...",
      source: "Indian Mining Safety Board",
      date: "2025-01-09",
      category: "Safety Alert",
      location: "Jharia, Jharkhand",
      urgent: true,
      image: "/api/placeholder/400/200",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Smart India Hackathon 2025: Mining Safety Solutions Take Center Stage",
      summary: "Innovative teams present AI-driven solutions for enhancing safety in India's mining sector at the national competition.",
      content: "The Smart India Hackathon 2025 has showcased groundbreaking solutions for mining safety, with several teams presenting AI-powered rockfall prediction systems...",
      source: "All India Council for Technical Education",
      date: "2025-01-08",
      category: "Innovation",
      location: "Multiple Locations",
      urgent: false,
      image: "/api/placeholder/400/200",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Drone Technology Revolutionizes Mine Site Monitoring",
      summary: "Latest drone-based imaging systems provide real-time data for slope stability analysis in open-pit mining operations.",
      content: "Mining companies across India are adopting advanced drone technology equipped with high-resolution cameras and LiDAR sensors...",
      source: "Drone Industry News",
      date: "2025-01-07",
      category: "Technology",
      location: "Raipur, Chhattisgarh",
      urgent: false,
      image: "/api/placeholder/400/200",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Ministry of Mines Announces New Safety Standards for Open-Pit Operations",
      summary: "Updated guidelines emphasize the use of predictive analytics and real-time monitoring systems in mining operations.",
      content: "The Ministry of Mines has released comprehensive new safety standards that mandate the implementation of AI-powered monitoring systems...",
      source: "Ministry of Mines",
      date: "2025-01-06",
      category: "Policy",
      location: "New Delhi, India",
      urgent: false,
      image: "/api/placeholder/400/200",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Successful Rockfall Prevention at Singareni Collieries Using Predictive AI",
      summary: "Early warning system prevents potential disaster, evacuating personnel 2 hours before rockfall occurrence.",
      content: "The AI-powered prediction system at Singareni Collieries successfully identified potential rockfall conditions, allowing for timely evacuation...",
      source: "Coal Mining Weekly",
      date: "2025-01-05",
      category: "Success Story",
      location: "Telangana, India",
      urgent: false,
      image: "/api/placeholder/400/200",
      readTime: "5 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "technology": return "text-info bg-info/10 border-info/20";
      case "safety alert": return "text-destructive bg-destructive/10 border-destructive/20";
      case "innovation": return "text-primary bg-primary/10 border-primary/20";
      case "policy": return "text-warning bg-warning/10 border-warning/20";
      case "success story": return "text-success bg-success/10 border-success/20";
      default: return "text-muted-foreground bg-muted/10 border-muted/20";
    }
  };

  const filteredNews = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const urgentNews = newsArticles.filter(article => article.urgent);
  const categories = [...new Set(newsArticles.map(article => article.category))];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mining Safety 
            <span className="gradient-primary bg-clip-text text-transparent"> News Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in rockfall prediction, mining safety technology, and industry innovations
          </p>
        </div>

        {/* Urgent Alerts */}
        {urgentNews.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center animate-fade-in">
              <AlertTriangle className="h-6 w-6 text-destructive mr-2" />
              Urgent Safety Alerts
            </h2>
            <div className="space-y-4">
              {urgentNews.map((article, index) => (
                <Card key={article.id} className="glass-card border-destructive/50 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className={getCategoryColor(article.category)}>
                            {article.category}
                          </Badge>
                          <Badge variant="destructive">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            URGENT
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-3">{article.summary}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{article.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Full Alert
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <Card className="glass-card mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Categories
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            All Categories
          </Badge>
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredNews.map((article, index) => (
            <Card key={article.id} className="glass-card hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Newspaper className="h-4 w-4" />
                      <span>{article.source}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{article.location}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <Card className="glass-card animate-fade-in">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Found</h3>
              <p className="text-muted-foreground">
                No news articles match your search criteria. Try adjusting your search terms.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Newsletter Signup */}
        <Card className="glass-card gradient-primary mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Stay Informed
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on mining safety technology, 
              rockfall prediction systems, and industry innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default News;