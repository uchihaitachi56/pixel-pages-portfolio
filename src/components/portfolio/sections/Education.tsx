import TimelineItem from "../TimelineItem";

const Education = () => {
  const education = [
    {
      title: "Master of Science in Computer Science",
      company: "Stanford University",
      period: "2016 - 2018",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Deep Learning Applications in Web Development'. Graduated with distinction and received the Outstanding Graduate Student Award.",
      skills: ["Machine Learning", "Deep Learning", "Algorithms", "Data Structures", "Research"],
      type: "education" as const
    },
    {
      title: "Bachelor of Science in Software Engineering",
      company: "University of California, Berkeley",
      period: "2012 - 2016",
      description: "Comprehensive study of software development principles, computer science fundamentals, and engineering practices. Active member of the Computer Science Club and participated in multiple hackathons.",
      skills: ["Software Engineering", "Object-Oriented Programming", "Database Design", "System Design"],
      type: "education" as const
    },
    {
      title: "Full Stack Web Development Bootcamp",
      company: "Lambda School",
      period: "2018",
      description: "Intensive 6-month program covering modern web development technologies and practices. Worked on real-world projects and collaborated with remote teams using agile methodologies.",
      skills: ["React", "Node.js", "Express", "MongoDB", "Agile Development"],
      type: "education" as const
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      year: "2022"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2022"
    },
    {
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta",
      year: "2021"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and formal education that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8">Academic Background</h3>
            <div className="max-w-4xl">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  title={edu.title}
                  company={edu.company}
                  period={edu.period}
                  description={edu.description}
                  skills={edu.skills}
                  type={edu.type}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs">{cert.year}</p>
                </div>
              ))}
            </div>

            {/* Learning Philosophy */}
            <div className="mt-12 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 animate-slide-up" style={{animationDelay: "0.5s"}}>
              <h4 className="font-semibold mb-4 text-lg">Learning Philosophy</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe in continuous learning and staying current with technology trends. 
                Beyond formal education, I regularly take online courses, attend tech conferences, 
                and contribute to open-source projects to expand my knowledge and give back to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;