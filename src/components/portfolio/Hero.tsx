import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSignature, setShowSignature] = useState(false);
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    // Show signature animation on mount
    const signatureTimer = setTimeout(() => {
      setShowSignature(true);
    }, 500);

    return () => clearTimeout(signatureTimer);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Signature Animation */}
          <div className="mb-8 relative h-32 flex items-center justify-center">
            {showSignature && (
              <div className="relative">
                {/* SVG signature path animation */}
                <svg 
                  width="400" 
                  height="120" 
                  viewBox="0 0 400 120" 
                  className="absolute inset-0"
                >
                  <path
                    d="M 20 80 Q 40 20 80 60 Q 100 80 120 40 Q 140 20 160 60 Q 180 80 200 50 Q 220 30 240 70 Q 260 90 280 50 Q 300 20 320 60 Q 340 80 360 40"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    fill="none"
                    className="signature-writing"
                  />
                </svg>
                
                {/* Actual text that appears after animation */}
                <h1 className="signature-text text-5xl md:text-7xl font-bold relative z-10">
                  Bhavesh Goyal
                </h1>
              </div>
            )}
          </div>
          
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="font-mono text-muted-foreground">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that blend creativity with 
            cutting-edge technology. I craft solutions that are both beautiful and functional.
          </p>

          <div className="flex gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full opacity-10 animate-float" style={{animationDelay: "2s"}} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-accent rounded-full opacity-10 animate-float" style={{animationDelay: "4s"}} />
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;