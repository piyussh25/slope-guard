import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Star,
  Code,
  Brain,
  Palette,
  Database,
  Shield
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Piyush Sharma",
      role: "Team Lead & AI Engineer",
      expertise: "Machine Learning, Computer Vision",
      description: "Specializes in developing AI models for predictive analysis and computer vision applications in mining safety.",
      icon: Brain,
      color: "text-primary"
    },
    {
      name: "Agrim Gupta", 
      role: "Backend Developer",
      expertise: "System Architecture, APIs",
      description: "Expert in building scalable backend systems and real-time data processing pipelines for mining operations.",
      icon: Database,
      color: "text-info"
    },
    {
      name: "Akash Kumar",
      role: "Full Stack Developer", 
      expertise: "React, Node.js, DevOps",
      description: "Focuses on creating responsive web applications and managing cloud infrastructure for mining safety systems.",
      icon: Code,
      color: "text-success"
    },
    {
      name: "Roshni Patel",
      role: "Data Scientist",
      expertise: "Data Analysis, Geotechnical Modeling",
      description: "Specializes in analyzing geological and sensor data to improve rockfall prediction accuracy.",
      icon: Star,
      color: "text-warning"
    },
    {
      name: "Aikansh Singh",
      role: "Frontend Developer",
      expertise: "UI/UX, React, Animations",
      description: "Creates intuitive user interfaces and engaging visual experiences for mining safety dashboards.",
      icon: Palette,
      color: "text-accent"
    },
    {
      name: "Mohit Verma",
      role: "Security Engineer",
      expertise: "Cybersecurity, Safety Protocols", 
      description: "Ensures the security and reliability of mining safety systems and data protection protocols.",
      icon: Shield,
      color: "text-destructive"
    }
  ];

  const achievements = [
    "Smart India Hackathon 2025 Participants",
    "AI-Powered Mining Safety Innovation",
    "Real-time Rockfall Prediction System",
    "Multi-source Data Integration Expertise"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our
            <span className="gradient-primary bg-clip-text text-transparent"> Expert Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse group of talented engineers and data scientists working together to revolutionize 
            mining safety through AI-powered rockfall prediction technology.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {achievements.map((achievement, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                {achievement}
              </Badge>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-card mb-4 ${member.color}`}>
                    <member.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="outline" className="mb-4">
                    {member.expertise}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Team Members", value: "6", icon: User },
            { label: "Years Combined Experience", value: "24+", icon: Star },
            { label: "Technologies Mastered", value: "15+", icon: Code },
            { label: "Mining Sites Analyzed", value: "50+", icon: Database }
          ].map((stat, index) => (
            <Card key={index} className="glass-card text-center animate-slide-in" style={{ animationDelay: `${(index + 6) * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="glass-card gradient-primary animate-fade-in" style={{ animationDelay: "1s" }}>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto mb-8">
              We are committed to leveraging cutting-edge artificial intelligence and machine learning 
              technologies to create safer mining environments. Our goal is to prevent rockfall incidents 
              through predictive analytics, protecting both human lives and valuable mining equipment 
              while contributing to the sustainable future of the mining industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Innovation",
                  description: "Pushing the boundaries of AI in mining safety",
                  icon: Brain
                },
                {
                  title: "Safety First", 
                  description: "Protecting lives through predictive technology",
                  icon: Shield
                },
                {
                  title: "Collaboration",
                  description: "Working together towards common goals",
                  icon: User
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">{value.title}</h3>
                  <p className="text-primary-foreground/80 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to Collaborate?
          </h3>
          <p className="text-muted-foreground mb-6">
            We're always interested in connecting with fellow innovators and mining safety experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-primary-foreground">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;