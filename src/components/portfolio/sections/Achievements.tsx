import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "NASA SpaceApps Hackathon",
      organization: "NASA SpaceApps Challenge",
      year: "2023",
      highlight: "🏆 Global Runner-up & Regional Winner",
      description: (
        <>
          Recognized as <span className="font-semibold text-foreground">Global Runner-up</span> and <span className="font-semibold text-foreground">Regional Winner</span> in GeoAI Reimagined Challenge, surpassing 155,000 worldwide participants through pioneering geospatial analysis models.
        </>
      ),
      type: "competition"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Amazon ML Challenge",
      organization: "Amazon",
      year: "2024",
      highlight: "🥇 AIR-67 out of 75,000+",
      description: (
        <>
          Secured <span className="font-semibold text-foreground">AIR-67</span> ranking among 75,000 participants across India in the Amazon Machine Learning Challenge.
        </>
      ),
      type: "award"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "SWE Job Simulation",
      organization: "J.P. Morgan Chase & Co",
      year: "2024",
      highlight: "💻 Practical Experience",
      description: (
        <>
          Completed an online <span className="font-semibold text-foreground">Software Engineering Job Simulation</span> by Forage, demonstrating practical skills in financial technology solutions.
        </>
      ),
      type: "program"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Inter IIT Tech Meet 12.0",
      organization: "IIT Madras",
      year: "2023",
      highlight: "🎯 Institute Representation",
      description: (
        <>
          Represented the institute at <span className="font-semibold text-foreground">Inter IIT Tech Meet 12.0</span>, hosted at IIT Madras, competing with top technical institutes across India.
        </>
      ),
      type: "contribution"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "JEE Advanced 2022",
      organization: "National Testing Agency",
      year: "2022",
      highlight: "🎖️ AIR 3884",
      description: (
        <>
          Achieved <span className="font-semibold text-foreground">All India Rank 3884</span> in JEE Advanced 2022, securing admission to one of India's premier engineering institutes.
        </>
      ),
      type: "recognition"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "award": return "bg-gradient-to-r from-yellow-400 to-orange-400";
      case "competition": return "bg-gradient-to-r from-purple-400 to-pink-400";
      case "recognition": return "bg-gradient-to-r from-blue-400 to-cyan-400";
      case "contribution": return "bg-gradient-to-r from-green-400 to-emerald-400";
      case "program": return "bg-gradient-to-r from-red-400 to-rose-400";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognition that mark my journey as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${getTypeColor(achievement.type)} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                  <p className="text-primary text-sm mb-1">{achievement.organization}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {achievement.year}
                    </Badge>
                    {achievement.highlight && (
                      <span className="text-xs bg-yellow-400/90 text-black px-2 py-1 rounded-md font-semibold shadow-inner ring-1 ring-yellow-500/40">
                        {achievement.highlight}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
