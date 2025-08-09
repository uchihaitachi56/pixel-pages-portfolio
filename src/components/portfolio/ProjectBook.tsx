import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, X } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

interface ProjectBookProps {
  project: Project;
  index: number;
}

const ProjectBook = ({ project, index }: ProjectBookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Book Cover */}
      <Card 
        className={`relative w-64 h-80 cursor-pointer transition-all duration-500 hover:scale-105 group ${
          isOpen ? 'animate-book-open' : ''
        }`}
        onClick={() => setIsOpen(true)}
        style={{
          background: `linear-gradient(135deg, 
            hsl(${220 + index * 40} 70% 50%), 
            hsl(${260 + index * 40} 70% 40%))`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg" />
        
        {/* Book Spine */}
        <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-b from-black/30 to-black/50 rounded-l-lg" />
        
        {/* Book Cover Content */}
        <div className="p-6 h-full flex flex-col justify-between relative z-10">
          <div>
            <div className="text-xs font-mono text-white/70 mb-2">{project.category}</div>
            <h3 className="text-xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm line-clamp-4">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="text-xs bg-white/20 text-white border-white/30"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        
        {/* Open Book Hint */}
        <div className="absolute top-4 right-4 text-white/60 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          Click to open
        </div>
      </Card>

      {/* Book Detail Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-background rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
                  <Badge className="mb-0">{project.category}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-destructive hover:text-destructive-foreground flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                  
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBook;