import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a creative developer and designer passionate about building innovative 
                solutions that make a difference. With over 5 years of experience in web 
                development, I specialize in creating beautiful, functional, and user-centered 
                digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey began with a curiosity about how things work, leading me to 
                explore the intersection of design and technology. I believe in the power 
                of clean code, thoughtful design, and meaningful user interactions.
              </p>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-primary hover:shadow-neon transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </Card>
          </div>

          <div className="relative animate-slide-up" style={{animationDelay: "0.3s"}}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 rounded-2xl bg-gradient-primary p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-full opacity-15 animate-float" style={{animationDelay: "2s"}} />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "20+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
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