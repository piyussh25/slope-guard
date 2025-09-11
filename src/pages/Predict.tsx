import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
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
    demFile: null as File | null,
    droneImages: null as FileList | null,
    temperature: "",
    rainfall: "",
    vibrations: "",
    displacement: "",
    strain: "",
    porePressure: ""
  });

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
      
      toast({
        title: "Analysis Complete!",
        description: `Risk assessment report ${reportId} has been generated.`,
      });

      navigate(`/report/${reportId}`);
    }, 5000);
  };

  const analysisSteps = [
    "Processing Digital Elevation Model...",
    "Analyzing drone imagery data...",
    "Evaluating sensor readings...",
    "Calculating environmental factors...",
    "Running AI prediction models...",
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
                {["DEM Analysis", "Image Processing", "Sensor Data", "Risk Calculation"].map((item, index) => (
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
            {/* Location Info */}
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
                    <Label htmlFor="location">Site Location/Coordinates</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Jharia Coalfield, Lat: 23.7644, Long: 86.4106"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-card animate-slide-in">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Map className="h-5 w-5 text-info" />
                    <span>Digital Elevation Model</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <input
                      type="file"
                      accept=".dem,.tif,.tiff"
                      onChange={(e) => handleFileChange("demFile", e.target.files?.[0] || null)}
                      className="hidden"
                      id="dem-upload"
                      required
                    />
                    <label htmlFor="dem-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" className="mb-2">
                        Upload DEM File
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Supported: .dem, .tif, .tiff
                      </p>
                    </label>
                    {formData.demFile && (
                      <Badge variant="outline" className="mt-2">
                        {formData.demFile.name}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card animate-slide-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileImage className="h-5 w-5 text-success" />
                    <span>Drone Imagery</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleFileChange("droneImages", e.target.files)}
                      className="hidden"
                      id="drone-upload"
                      required
                    />
                    <label htmlFor="drone-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" className="mb-2">
                        Upload Drone Images
                      </Button>
                      <p className="text-sm text-muted-foreground">
                        Multiple images supported
                      </p>
                    </label>
                    {formData.droneImages && formData.droneImages.length > 0 && (
                      <Badge variant="outline" className="mt-2">
                        {formData.droneImages.length} images selected
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

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