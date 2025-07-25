import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  type: 'work' | 'education';
  index: number;
}

const TimelineItem = ({ title, company, period, description, skills, type, index }: TimelineItemProps) => {
  return (
    <div className="relative flex items-center mb-12 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
      
      {/* Timeline Dot */}
      <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mr-8 ${
        type === 'work' 
          ? 'bg-gradient-primary shadow-glow' 
          : 'bg-gradient-secondary shadow-glow'
      }`}>
        <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
          <div className={`w-3 h-3 rounded-full ${
            type === 'work' ? 'bg-neon-purple' : 'bg-neon-blue'
          }`} />
        </div>
      </div>

      {/* Content Card */}
      <Card className="flex-1 p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <h4 className="text-primary font-medium">{company}</h4>
          </div>
          <Badge variant="outline" className="w-fit mt-2 md:mt-0">
            {period}
          </Badge>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default TimelineItem;