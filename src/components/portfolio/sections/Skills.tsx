import SkillCard from "../SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      icon: "⚛️",
      description: "React, Next.js, TypeScript, Tailwind CSS, and modern web technologies"
    },
    {
      name: "Backend Development",
      level: 88,
      icon: "🚀",
      description: "Node.js, Python, PostgreSQL, MongoDB, and API development"
    },
    {
      name: "UI/UX Design",
      level: 85,
      icon: "🎨",
      description: "Figma, Adobe Creative Suite, user research, and design systems"
    },
    {
      name: "Mobile Development",
      level: 80,
      icon: "📱",
      description: "React Native, Flutter, and cross-platform mobile applications"
    },
    {
      name: "DevOps & Cloud",
      level: 78,
      icon: "☁️",
      description: "AWS, Docker, Kubernetes, CI/CD, and infrastructure management"
    },
    {
      name: "Machine Learning",
      level: 75,
      icon: "🤖",
      description: "Python, TensorFlow, scikit-learn, and data analysis"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for bringing ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Proficiencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
              "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <span className="font-mono text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;