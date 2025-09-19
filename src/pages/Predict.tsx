import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Upload, 
  MapPin, 
  Thermometer, 
  Gauge, 
  Cloud, 
  Activity,
  AlertTriangle,
  CheckCircle,
  Loader2,
  FileImage,
  Map,
  Zap
} from "lucide-react";

const Predict = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    location: "",
    temperature: "",
    rainfall: "",
    vibrations: "",
    displacement: "",
    strain: "",
    porePressure: ""
  });

  const mineSites = [
    { value: "jharia-sector-7a", label: "Jharia Coalfield – Sector 7-A" },
    { value: "singareni-block-3c", label: "Singareni Collieries – Block 3-C" },
    { value: "korba-zone-2b", label: "Korba Coalfield – Zone 2-B" },
    { value: "raniganj-area-1a", label: "Raniganj Coalfield – Area 1-A" },
    { value: "talcher-sector-8e", label: "Talcher Coalfield – Sector 8-E" }
  ];

  const handleFileChange = (field: string, files: FileList | File | null) => {
    setFormData(prev => ({ ...prev, [field]: files }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);

    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    // Simulate analysis completion
    setTimeout(() => {
      setLoading(false);
      const reportId = `RPT-${Date.now()}`;

      // Simple mock scoring based on inputs
      const base = 40;
      const temp = Number(formData.temperature || 0);
      const rain = Number(formData.rainfall || 0);
      const vib = Number(formData.vibrations || 0);
      const disp = Number(formData.displacement || 0);
      const strain = Number(formData.strain || 0);
      const pore = Number(formData.porePressure || 0);
      const score = Math.max(0, Math.min(100, Math.round(base + 0.2 * rain + 0.3 * vib + 0.25 * disp + 0.15 * (strain/10) + 0.1 * pore)));
      const riskLevel = score >= 80 ? "HIGH" : score >= 50 ? "MODERATE" : "LOW";

      toast({
        title: "Analysis Complete!",
        description: `Risk assessment report ${reportId} has been generated.`,
      });

      navigate(`/report/${reportId}`, {
        state: {
          riskScore: score,
          overallRisk: riskLevel,
          location: formData.location,
        }
      });
    }, 5000);
  };

  const analysisSteps = [
    "Evaluating sensor readings...",
    "Calculating environmental factors...",
    "Running prediction models...",
    "Generating risk assessment...",
    "Preparing safety recommendations...",
    "Finalizing report..."
  ];

  const currentStep = Math.floor((progress / 100) * analysisSteps.length);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Rockfall Risk Prediction
          </h1>
          <p className="text-xl text-muted-foreground">
            Upload your mine site data for AI-powered risk analysis
          </p>
          <Badge variant="outline" className="mt-4">
            <Zap className="h-4 w-4 mr-2" />
            Real-time Analysis
          </Badge>
        </div>

        {loading ? (
          <Card className="glass-card animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span>Analyzing Mine Site Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{progress}%</div>
                <Progress value={progress} className="w-full h-3 mb-4" />
                <p className="text-muted-foreground">
                  {analysisSteps[currentStep] || "Processing complete..."}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {["Sensor Data", "Environment", "Model Run", "Risk Calculation"].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-card/50 rounded-lg">
                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 ${
                      index <= currentStep / 2 ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      {index <= currentStep / 2 ? <CheckCircle className="h-4 w-4" /> : <Activity className="h-4 w-4" />}
                    </div>
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Location Info */
            }
            <Card className="glass-card animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Mine Site Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location">Select a Mine Site</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(val) => handleInputChange("location", val)}
                    >
                      <SelectTrigger id="location" className="w-full">
                        <SelectValue placeholder="Choose a site" />
                      </SelectTrigger>
                      <SelectContent>
                        {mineSites.map((site) => (
                          <SelectItem key={site.value} value={site.value}>
                            {site.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Uploads removed per request */}

            {/* Environmental Data */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cloud className="h-5 w-5 text-warning" />
                  <span>Environmental Factors</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="temperature" className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4" />
                      <span>Temperature (°C)</span>
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="25.5"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange("temperature", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rainfall">Rainfall (mm)</Label>
                    <Input
                      id="rainfall"
                      type="number"
                      placeholder="15.2"
                      value={formData.rainfall}
                      onChange={(e) => handleInputChange("rainfall", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="vibrations" className="flex items-center space-x-2">
                      <Activity className="h-4 w-4" />
                      <span>Vibrations (mm/s)</span>
                    </Label>
                    <Input
                      id="vibrations"
                      type="number"
                      placeholder="2.1"
                      value={formData.vibrations}
                      onChange={(e) => handleInputChange("vibrations", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sensor Data */}
            <Card className="glass-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gauge className="h-5 w-5 text-accent" />
                  <span>Geotechnical Sensor Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="displacement">Displacement (mm)</Label>
                    <Input
                      id="displacement"
                      type="number"
                      placeholder="0.5"
                      value={formData.displacement}
                      onChange={(e) => handleInputChange("displacement", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="strain">Strain (με)</Label>
                    <Input
                      id="strain"
                      type="number"
                      placeholder="120"
                      value={formData.strain}
                      onChange={(e) => handleInputChange("strain", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="porePressure">Pore Pressure (kPa)</Label>
                    <Input
                      id="porePressure"
                      type="number"
                      placeholder="45.2"
                      value={formData.porePressure}
                      onChange={(e) => handleInputChange("porePressure", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                type="submit" 
                size="lg" 
                className="gradient-primary text-primary-foreground px-12 py-6 text-lg"
                disabled={loading}
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Generate Risk Assessment
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Analysis typically takes 30-60 seconds depending on data complexity
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Predict;