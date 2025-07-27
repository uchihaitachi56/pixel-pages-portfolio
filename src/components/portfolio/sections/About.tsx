import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const About = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/BhaveshGoyal_CV.pdf'; // Path to your CV in public/cv/ folder
    link.download = 'BhaveshGoyal_CV.pdf'; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven to create real-world impact through AI-powered solutions in Data Science and Software Engineering!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm an AI and software enthusiast currently pursuing B.Tech in Data Science & Engineering at IIT Mandi. 
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I've worked across diverse projects in the field of AI, transforming complex ideas into functional applications. With international experience across Germany and Japan, I bring a global mindset to creating practical, end-to-end tech solutions.
              </p>
              
              <div className="flex gap-4">
                <Button 
                  className="bg-gradient-primary hover:shadow-neon hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300 transform-gpu"
                  onClick={handleDownloadCV}
                >
                  <Download className="w-4 h-4 mr-2 hover:animate-bounce" />
                  Download CV
                </Button>
              </div>
            </Card>
          </div>

          <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-full opacity-15 animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "10+", label: "Projects & Hackathons" },
            { number: "2", label: "Industry & Research Internships" },
            { number: "67", label: "Rank in Amazon ML Challenge" },
            { number: "1%", label: "NASA SpaceApps Global Finalist" }
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;