import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "general"
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        inquiryType: "general"
      });
    }, 2000);
  };

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Support" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "emergency", label: "Emergency Safety Alert" },
    { value: "demo", label: "Product Demo Request" },
    { value: "research", label: "Research Collaboration" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact form only */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Contact CodeROCKERS</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="organization">Organization/Company</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => handleInputChange("inquiryType", e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-primary-foreground"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;