import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Best Innovation Award",
      organization: "TechCorp Solutions",
      year: "2023",
      description: "Recognized for developing an AI-powered solution that improved customer satisfaction by 40% and reduced response time by 60%.",
      type: "award"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hackathon Winner",
      organization: "Silicon Valley Tech Challenge",
      year: "2022",
      description: "First place winner in a 48-hour hackathon with over 200 participants. Built a sustainable energy management platform.",
      type: "competition"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Employee of the Year",
      organization: "Digital Innovations Inc.",
      year: "2021",
      description: "Selected from 500+ employees for exceptional performance, leadership, and contribution to team success.",
      type: "recognition"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2020-2023",
      description: "Active contributor to popular open source projects with 1000+ stars and contributions to React, Node.js, and TypeScript ecosystems.",
      type: "contribution"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Top 1% Developer",
      organization: "Stack Overflow",
      year: "2022",
      description: "Ranked in the top 1% of Stack Overflow contributors with 50K+ reputation points and 200+ answered questions.",
      type: "recognition"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Google Summer of Code",
      organization: "Google",
      year: "2019",
      description: "Selected participant in Google Summer of Code program, contributing to a machine learning framework used by thousands of developers.",
      type: "program"
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
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${getTypeColor(achievement.type)} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                  <p className="text-primary text-sm mb-1">{achievement.organization}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.year}
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Awards Won", icon: "🏆" },
            { number: "3", label: "Hackathons Won", icon: "💻" },
            { number: "50K+", label: "GitHub Stars", icon: "⭐" },
            { number: "10K+", label: "Lines of Code", icon: "📝" }
          ].map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 animate-slide-up group"
              style={{animationDelay: `${index * 0.1 + 0.5}s`}}
            >
              <div className="text-3xl mb-2 group-hover:animate-bounce">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
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

export default Achievements;