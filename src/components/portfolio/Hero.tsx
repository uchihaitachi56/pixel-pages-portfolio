import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Software Engineer & AI Developer";

  useEffect(() => {
  if (currentIndex < fullText.length) {
    const timeout = setTimeout(() => {
      setDisplayText(prev => prev + fullText[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, 100);
    return () => clearTimeout(timeout);
  } else {
    // Wait 2 seconds before restarting
    const resetTimeout = setTimeout(() => {
      setDisplayText("");
      setCurrentIndex(0);
    }, 2000);
    return () => clearTimeout(resetTimeout);
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
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bhavesh Goyal
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl mb-8 h-12 flex items-center justify-center">
            <span className="font-mono text-muted-foreground">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1" />
            </span>
          </div>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about solving complex problems with clean code and smart algorithms. I turn ideas into scalable solutions using AI, data science, and modern development practices.
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