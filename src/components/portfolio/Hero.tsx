import { useEffect, useState } from "react";
import { ChevronDown, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Creative Developer & Designer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background">
        {/* Interactive Mouse Trail */}
        <div 
          className="absolute w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
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

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 border-2 border-primary/20 rotate-45 animate-tilt" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-neon-blue/10 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-32 left-20 w-3 h-12 bg-neon-pink/10 animate-wiggle" />
        <div className="absolute bottom-20 right-10 w-8 h-8 border border-neon-green/20 animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Interactive Name with Hover Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 group cursor-default">
            <span className="bg-gradient-primary bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 inline-block">
              John Doe
            </span>
            <Sparkles className="inline-block w-8 h-8 ml-4 text-primary animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h1>
          
          {/* Enhanced Typing Animation */}
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="font-mono text-foreground/80 relative">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
              <MousePointer2 className="absolute -right-8 top-1 w-5 h-5 text-primary/60 animate-bounce" />
            </span>
          </div>

          {/* Interactive Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-300 hover:text-foreground/90 hover:scale-105">
            Passionate about creating digital experiences that blend creativity with 
            cutting-edge technology. I craft solutions that are both beautiful and functional.
          </p>

          {/* Enhanced Buttons with Ripple Effect */}
          <div className="flex gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float hover:opacity-20 transition-opacity cursor-pointer" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-secondary rounded-full opacity-10 animate-float hover:opacity-20 transition-opacity cursor-pointer" style={{animationDelay: "2s"}} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-accent rounded-full opacity-10 animate-float hover:opacity-20 transition-opacity cursor-pointer" style={{animationDelay: "4s"}} />
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform group p-2 rounded-full hover:bg-primary/10"
        >
          <ChevronDown className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
        </button>
        <div className="text-xs text-muted-foreground mt-2 opacity-70 animate-pulse">Scroll Down</div>
      </div>
    </section>
  );
};

export default Hero;