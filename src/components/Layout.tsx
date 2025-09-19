import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Mountain, 
  Shield, 
  BarChart3, 
  FileText, 
  Users, 
  MessageCircle, 
  Phone,
  Menu,
  X,
  Newspaper
} from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/", icon: Mountain },
    { name: "Predict Now", href: "/predict", icon: Shield },
    { name: "Past Reports", href: "/reports", icon: FileText },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Team", href: "/team", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="gradient-primary p-2 rounded-lg animate-glow">
                <Mountain className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CodeROCKERS</h1>
                <p className="text-xs text-muted-foreground">NIRM - Ministry of Mines</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className="w-full justify-start flex items-center space-x-2"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center space-x-3">
            <div className="gradient-primary p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-foreground">CodeROCKERS</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;