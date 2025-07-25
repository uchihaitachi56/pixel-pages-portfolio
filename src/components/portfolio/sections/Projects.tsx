import ProjectBook from "../ProjectBook";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI and seamless user experience",
      longDescription: "Built a comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. The platform handles thousands of products and users with optimal performance and security.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web Development"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard for data visualization and predictive analytics",
      longDescription: "Developed an intelligent analytics dashboard that processes large datasets and provides actionable insights through machine learning algorithms. Features real-time data visualization, predictive modeling, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Machine Learning"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking and workout planning",
      longDescription: "Created a comprehensive fitness application with workout planning, progress tracking, social features, and AI-powered recommendations. The app supports offline functionality and syncs across multiple devices.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Mobile Development"
    },
    {
      title: "Design System Library",
      description: "Comprehensive design system and component library for consistent UX",
      longDescription: "Architected and developed a complete design system with reusable components, design tokens, and documentation. Used by multiple teams to ensure consistency across all digital products.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
      technologies: ["React", "Storybook", "TypeScript", "Figma", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Design System"
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable messaging platform with real-time communication features",
      longDescription: "Built a modern chat platform supporting real-time messaging, file sharing, video calls, and team collaboration. Features end-to-end encryption and handles thousands of concurrent users.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Socket.io", "React", "Node.js", "Redis", "WebRTC"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Web Development"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology",
      longDescription: "Developed a decentralized voting system ensuring transparency, security, and immutability. Features smart contracts, voter verification, and real-time result tracking with complete audit trails.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Blockchain"
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;