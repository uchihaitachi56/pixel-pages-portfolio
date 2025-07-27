import TimelineItem from "../TimelineItem";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Otsuka Corporation",
      location: "Tokyo, Japan",
      period: "May 2025 - July 2025",
      description: "Architected an AI-powered B2B Sales Automation Platform capable of intelligent customer interactions, automated quote generation, and advanced product search capabilities using FastAPI, PostgreSQL, and Elasticsearch.\n<strong>Key Features:</strong>\n• Intelligent AI service factory with Azure OpenAI and HuggingFace integration\n• Conversational agents for automated quotes and product search\n• Live configuration system with admin UI for persona customization\n• Complete deployment pipeline with Docker, Nginx, CircleCI on Azure VMs\n• Comprehensive monitoring via Grafana and Kibana",
      skills: ["FastAPI", "PostgreSQL", "Elasticsearch", "Azure OpenAI", "HuggingFace", "NLP", "Docker", "Nginx", "CircleCI", "Azure VMs", "Grafana", "Kibana"],
      type: "work" as const
    },
    {
      title: "Inter IIT Tech Meet",
      company: "Zelta Labs",
      location: "Remote",
      period: "Oct 2023 - Dec 2023",
      description: "Developed sophisticated algorithmic trading strategies capable of cryptocurrency profit prediction across multiple timeframes, integrating advanced sentiment analysis for enhanced market decision-making.\n<strong>Key Features:</strong>\n• 3 trading strategies optimized for 15-min, 4-hour, and 8-hour timeframes\n• Multi-cryptocurrency support (Ethereum, Bitcoin, Dogecoin, Matic)\n• Sentiment analysis with fear-greed indices and market psychology\n• Systematic backtesting achieving 32-fold profit amplification",
      skills: ["Python", "Algorithmic Trading", "Cryptocurrency Analysis", "Sentiment Analysis", "Backtesting", "Market Psychology", "Data Analysis"],
      type: "work" as const
    },
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
              location={experience.location}
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