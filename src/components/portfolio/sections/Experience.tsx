import TimelineItem from "../TimelineItem";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise-level applications, mentoring junior developers, and architecting scalable solutions. Responsible for full-stack development using modern technologies and best practices.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Team Leadership"],
      type: "work" as const
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      period: "2020 - 2022",
      description: "Developed responsive web applications with focus on user experience and performance optimization. Collaborated with design teams to implement pixel-perfect UI components and interactive features.",
      skills: ["React", "JavaScript", "CSS", "Redux", "REST APIs", "Git"],
      type: "work" as const
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Built and maintained multiple client websites and web applications. Gained experience in full-stack development and learned to work in agile development environments.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      type: "work" as const
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2018 - 2019",
      description: "Provided web development services to small businesses and startups. Handled everything from initial consultation to deployment and maintenance of web solutions.",
      skills: ["Web Development", "Client Communication", "Project Management"],
      type: "work" as const
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through the tech industry, building solutions and growing as a developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              skills={experience.skills}
              type={experience.type}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;