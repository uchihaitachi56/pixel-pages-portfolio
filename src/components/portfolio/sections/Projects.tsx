import ProjectBook from "../ProjectBook";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      title: "Stratos - Intelligent Weather Application",
      description: "Advanced Android weather app with AI-powered sky analysis and smart forecasting",
      longDescription: "Built a next-generation weather application featuring real-time forecasting, offline capabilities, and intelligent sky analysis. The app uses Google Gemini API to analyze cloud patterns and atmospheric conditions, providing users with highly accurate weather predictions. Includes location tracking, data caching, and a modern Material Design interface.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Machine Learning", "REST APIs", "Room Database", "WorkManager"],
      githubUrl: "https://github.com/uchihaitachi56/Stratos",
      liveUrl: "#",
      category: "App Development"
    },
    {
      title: "GeoAI Reimagined",
      description: "Award-winning geospatial AI solution for disaster management and environmental monitoring",
      longDescription: "Developed cutting-edge deep learning models for comprehensive geospatial analysis including flood detection, crop monitoring, and disaster response. Achieved exceptional 94.8% accuracy across multiple classification tasks. This project secured Global Runner-up position at NASA SpaceApps Challenge, competing against 155,000 participants worldwide.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop",
      technologies: ["Deep Learning", "Transfer Learning", "Image Segmentation", "PyTorch", "Computer Vision"],
      githubUrl: "https://github.com/uchihaitachi56/Iitiansindenorth",
      liveUrl: "#",
      category: "Machine Learning"
    },
    {
      title: "Railway Track Inspection Bot",
      description: "Cost-effective IoT solution for automated railway infrastructure monitoring",
      longDescription: "Led a 6-member engineering team to develop an intelligent crack detection system for railway safety. Implemented custom YOLOv8 computer vision model with sensor fusion technology using Arduino and Raspberry Pi. The system achieves 92% detection accuracy while maintaining costs under ₹30,000, making it highly scalable for real-world deployment.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
      technologies: ["Computer Vision", "Machine Learning", "Arduino", "Raspberry Pi", "YOLOv8", "IoT"],
      githubUrl: "https://github.com/uchihaitachi56/Railway-Track-Inspection",
      liveUrl: "#",
      category: "Computer Vision"
    }
  ];

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A collection of my favorite works - click on any book to explore the details
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? "bg-gradient-primary hover:shadow-neon" 
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Library */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ProjectBook project={project} index={index} />
              </div>
            ))}
          </div>
          
          {/* Background Books */}
          <div className="absolute inset-0 -z-10 overflow-hidden opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-20 bg-gradient-to-b from-primary to-primary/50 rounded-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 20 - 10}deg)`
                }}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300"
            asChild
          >
            <a href="https://github.com/uchihaitachi56" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;