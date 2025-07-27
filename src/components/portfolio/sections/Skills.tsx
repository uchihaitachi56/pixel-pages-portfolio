import SkillCard from "../SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "Machine Learning & AI",
      level: 85,
      icon: "🤖",
      description: "PyTorch, TensorFlow, Scikit-learn, Transformers, and advanced ML model development"
    },
    {
      name: "Backend Development",
      level: 70,
      icon: "🚀",
      description: "Python, Java, C/C++, REST API development, and data pipeline creation"
    },
    {
      name: "Frontend Development",
      level: 70,
      icon: "🌐",
      description: "JavaScript, TypeScript, HTML/CSS, frontend-backend integration, and web development"
    },
    {
      name: "Cloud & DevOps",
      level: 60,
      icon: "☁️",
      description: "Microsoft Azure, container orchestration, model deployment, and cloud infrastructure"
    },
    {
      name: "Data Science",
      level: 85,
      icon: "📊",
      description: "Pandas, NumPy, Matplotlib, Seaborn, statistical analysis, and data visualization"
    }
  ];

  const technologies = [
    "Python", "PyTorch", "TensorFlow", "JavaScript", "Java", "Scikit-learn", 
    "Azure", "Pandas", "React", "TypeScript", "Docker", "NumPy", 
    "SQL", "NLTK", "Git", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in AI/ML, data science, and scalable backend solutions
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          
          {/* Programming Languages */}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4 text-muted-foreground">Programming Languages</h4>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL"].map((lang, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 font-mono text-sm hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-muted-foreground">Frameworks & Tools</h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["PyTorch", "TensorFlow", "Scikit-learn", "Azure", "Pandas", "React", "Docker", "NumPy", "NLTK", "Git", "REST APIs"].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 font-mono text-sm hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "AI & Machine Learning",
              icon: "🧠",
              description: "Deep learning, neural networks, model optimization, and deployment of intelligent systems",
              gradient: "from-purple-500/10 to-pink-500/10 border-purple-500/20"
            },
            {
              title: "Data Engineering", 
              icon: "⚙️",
              description: "Building robust data pipelines, ETL processes, and scalable data infrastructure",
              gradient: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
            },
            {
              title: "Full-Stack Development",
              icon: "🔧",
              description: "End-to-end application development with modern frameworks and cloud deployment",
              gradient: "from-green-500/10 to-teal-500/10 border-green-500/20"
            }
          ].map((area, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br ${area.gradient} backdrop-blur-sm border hover:shadow-lg transition-all duration-300 animate-slide-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <h4 className="text-lg font-semibold mb-3">{area.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;