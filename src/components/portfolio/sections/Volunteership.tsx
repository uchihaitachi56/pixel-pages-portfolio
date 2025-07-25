import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Code, Lightbulb } from "lucide-react";

const Volunteership = () => {
  const volunteerWork = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code for Good Mentor",
      organization: "TechForGood Foundation",
      period: "2021 - Present",
      description: "Mentoring aspiring developers from underrepresented communities. Helping them build their first applications and prepare for tech interviews. Over 50 mentees successfully placed in tech roles.",
      impact: "50+ Developers Mentored",
      skills: ["Mentoring", "Technical Training", "Career Guidance"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Youth Programming Instructor",
      organization: "Local Community Center",
      period: "2020 - 2022",
      description: "Teaching programming fundamentals to teenagers from low-income families. Designed curriculum covering HTML, CSS, JavaScript, and basic computer science concepts. Created a pathway for students to pursue tech careers.",
      impact: "100+ Students Taught",
      skills: ["Teaching", "Curriculum Design", "Youth Development"]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Tech Workshop Organizer",
      organization: "Women in Tech Society",
      period: "2019 - Present",
      description: "Organizing monthly workshops on emerging technologies for women entering the tech field. Topics include AI/ML basics, cloud computing, and modern web development. Building an inclusive tech community.",
      impact: "500+ Workshop Attendees",
      skills: ["Event Planning", "Public Speaking", "Community Building"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Digital Literacy Volunteer",
      organization: "Senior Citizens Tech Help",
      period: "2018 - 2020",
      description: "Helping senior citizens learn to use smartphones, computers, and internet services. Focus on staying connected with family, online banking security, and accessing digital services safely.",
      impact: "200+ Seniors Helped",
      skills: ["Digital Literacy", "Patient Teaching", "Technology Support"]
    }
  ];

  const causes = [
    {
      name: "Education Equality",
      description: "Supporting access to quality tech education for all",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Digital Inclusion",
      description: "Bridging the digital divide in underserved communities",
      color: "from-green-400 to-emerald-400"
    },
    {
      name: "Women in Tech",
      description: "Promoting gender diversity in technology fields",
      color: "from-purple-400 to-pink-400"
    },
    {
      name: "Open Source",
      description: "Contributing to free and open-source software",
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="volunteership" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Community & <span className="bg-gradient-primary bg-clip-text text-transparent">Volunteership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Giving back to the community and making technology accessible to everyone
          </p>
        </div>

        {/* Volunteer Work */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {volunteerWork.map((work, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-primary text-white">
                  {work.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{work.title}</h3>
                  <p className="text-primary text-sm mb-1">{work.organization}</p>
                  <Badge variant="outline" className="text-xs mb-2">
                    {work.period}
                  </Badge>
                  <div className="text-neon-green text-sm font-medium mb-2">
                    {work.impact}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Causes I Support */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8">Causes I Support</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{animationDelay: `${index * 0.1 + 0.8}s`}}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cause.color} flex items-center justify-center text-white text-2xl`}>
                  ❤️
                </div>
                <h4 className="font-semibold mb-2">{cause.name}</h4>
                <p className="text-muted-foreground text-sm">
                  {cause.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-gradient-primary/10 border-primary/20 animate-slide-up" style={{animationDelay: "1.2s"}}>
          <h3 className="text-2xl font-semibold mb-4">Want to Collaborate on a Good Cause?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always looking for opportunities to use technology for social good. 
            If you have a project that can make a positive impact, let's connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge className="bg-gradient-primary text-lg py-2 px-4">
              📧 volunteer@example.com
            </Badge>
            <Badge className="bg-gradient-secondary text-lg py-2 px-4">
              🤝 Open to Pro Bono Work
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Volunteership;