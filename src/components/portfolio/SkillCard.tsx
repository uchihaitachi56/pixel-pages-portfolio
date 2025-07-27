import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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

  return (
    <Card 
      className="p-6 group hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
          <Progress 
            value={isHovered ? skill.level : 0} 
            className="h-2 transition-all duration-1000"
          />
          <div className="text-sm text-muted-foreground mt-1">
            <span>Proficiency</span>
          </div>
        </div>
      </div>
      
      <p className={`text-muted-foreground text-sm transition-all duration-300 ${
        isHovered ? 'opacity-100 max-h-20' : 'opacity-70 max-h-0'
      } overflow-hidden`}>
        {skill.description}
      </p>
    </Card>
  );
};

export default SkillCard;