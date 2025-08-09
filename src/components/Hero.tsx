import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Brain, Globe, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Create <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Intelligent</span> Surveys
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Build beautiful surveys, collect responses in real-time, and get AI-powered insights 
            that help you make data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Creating
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Demo
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Create professional surveys in minutes with our intuitive drag-and-drop builder.</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-muted-foreground">Get intelligent analysis and trend detection from your survey responses automatically.</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Share Everywhere</h3>
            <p className="text-muted-foreground">Distribute your surveys across multiple channels and collect responses in real-time.</p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-muted-foreground">Surveys Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2M+</div>
            <div className="text-muted-foreground">Responses Collected</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;