import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getSkillLevel = () => {
    if (skill.level >= 90) return { text: "Expert", color: "bg-neon-green" };
    if (skill.level >= 80) return { text: "Advanced", color: "bg-neon-blue" };
    if (skill.level >= 70) return { text: "Intermediate", color: "bg-neon-pink" };
    return { text: "Beginner", color: "bg-muted" };
  };

  const skillLevel = getSkillLevel();

  return (
    <Card 
      className={`p-6 group hover:shadow-glow transition-all duration-500 cursor-pointer bg-card/80 backdrop-blur-sm border-border/50 relative overflow-hidden ${
        isClicked ? 'ring-2 ring-primary shadow-neon scale-105' : 'hover:scale-105'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-primary opacity-0 transition-opacity duration-500 ${
        isClicked ? 'opacity-5' : 'group-hover:opacity-3'
      }`} />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className={`text-4xl mr-4 transition-all duration-300 ${
            isHovered ? 'animate-bounce-in scale-110' : 'animate-float'
          }`} style={{animationDelay: `${index * 0.5}s`}}>
            {skill.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <Badge 
                className={`${skillLevel.color} text-white text-xs transition-all duration-300 ${
                  isHovered ? 'scale-110' : ''
                }`}
              >
                {skillLevel.text}
              </Badge>
            </div>
            
            <Progress 
              value={isHovered || isClicked ? skill.level : 0} 
              className="h-3 transition-all duration-1000"
            />
            <div className="text-sm text-muted-foreground mt-2 flex justify-between">
              <span>Proficiency</span>
              <span className={`transition-all duration-500 font-mono ${
                isHovered || isClicked ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}>
                {skill.level}%
              </span>
            </div>
          </div>
        </div>
        
        <p className={`text-muted-foreground text-sm transition-all duration-500 ${
          isHovered || isClicked 
            ? 'opacity-100 max-h-20 translate-y-0' 
            : 'opacity-70 max-h-0 -translate-y-2'
        } overflow-hidden`}>
          {skill.description}
        </p>

        {/* Interactive Elements */}
        <div className={`mt-4 flex gap-2 transition-all duration-300 ${
          isClicked ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
          <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
        </div>
      </div>

      {/* Click Ripple Effect */}
      {isClicked && (
        <div className="absolute inset-0 bg-primary/20 animate-ping rounded-lg" />
      )}
    </Card>
  );
};

export default SkillCard;