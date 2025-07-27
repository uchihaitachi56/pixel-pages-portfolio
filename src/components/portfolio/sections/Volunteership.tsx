import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Code, Trophy, DollarSign, Wrench, Calendar, Palette } from "lucide-react";

const Volunteership = () => {
  const positionsOfResponsibility = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Startup Head",
      organization: "Entrepreneurship Cell, IIT Mandi",
      period: "Sep 2024 - Present",
      description: "Leading startup initiatives and fostering entrepreneurial culture among students. Organizing startup events, workshops, and mentorship programs to encourage innovation and business development within the campus community.",
      impact: "Active Leadership Role",
      skills: ["Leadership", "Startup Ecosystem", "Event Management", "Team Building"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Hostel Maintenance Coordinator",
      organization: "IIT Mandi",
      period: "Oct 2023 - May 2024",
      description: "Coordinated maintenance activities and infrastructure improvements across hostel facilities. Managed student grievances, liaised with maintenance staff, and ensured optimal living conditions for residents.",
      impact: "Campus Infrastructure Management",
      skills: ["Project Management", "Problem Solving", "Communication", "Operations"]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Head",
      organization: "Exodia'23, Cultural Festival of IIT Mandi",
      period: "Mar 2024 - May 2024",
      description: "Led event planning and execution for one of the major cultural festivals at IIT Mandi. Managed multiple event categories, coordinated with various teams, and ensured successful delivery of cultural programs.",
      impact: "Major Festival Leadership",
      skills: ["Event Planning", "Team Coordination", "Budget Management", "Creative Direction"]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Head of Sponsorship",
      organization: "Himalayan Startup Trek'23",
      period: "Sep 2023 - Oct 2023",
      description: "Secured sponsorships and partnerships for the flagship startup event. Developed sponsor relationships, negotiated deals, and managed sponsor deliverables to ensure successful event funding.",
      impact: "Successful Event Funding",
      skills: ["Business Development", "Negotiation", "Relationship Management", "Sales"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Core Team Member",
      organization: "Designauts (Design Club IIT Mandi)",
      period: "May 2023 - Dec 2024",
      description: "Active member of the design community at IIT Mandi, contributing to various design projects and initiatives. Participated in design workshops, competitions, and collaborative projects to promote design thinking on campus.",
      impact: "Design Community Contribution",
      skills: ["Design Thinking", "Creative Collaboration", "Workshop Organization", "Community Building"]
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Event Coordinator",
      organization: "Ranneeti - Sports Fest IIT Mandi",
      period: "Oct 2022",
      description: "Coordinated sporting events and activities during the annual sports festival. Managed event logistics, participant registration, and ensured smooth execution of various sports competitions and tournaments.",
      impact: "Sports Festival Coordination",
      skills: ["Sports Management", "Event Coordination", "Logistics", "Team Work"]
    }
  ];

  const awardsAchievements = [
    {
      title: "Leadership Excellence",
      description: "Recognized for outstanding leadership in multiple student organizations",
      icon: "🏆"
    },
    {
      title: "Event Management",
      description: "Successfully managed large-scale campus events and festivals",
      icon: "🎯"
    },
    {
      title: "Community Impact",
      description: "Made significant contributions to campus life and student experience",
      icon: "⭐"
    }
  ];

  // Floating elements animation - positioned more strategically
  const FloatingElements = () => {
    const elements = [
      { icon: "🚀", left: "15%", top: "20%", delay: 0, duration: 3 },
      { icon: "🎨", left: "75%", top: "15%", delay: 1, duration: 4 },
      { icon: "🏆", left: "85%", top: "60%", delay: 2, duration: 3.5 },
      { icon: "🤝", left: "10%", top: "70%", delay: 0.5, duration: 3.2 },
      { icon: "💡", left: "60%", top: "80%", delay: 1.5, duration: 3.8 }
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((elem, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-10 animate-float"
            style={{
              left: elem.left,
              top: elem.top,
              animationDelay: `${elem.delay}s`,
              animationDuration: `${elem.duration}s`
            }}
          >
            {elem.icon}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="volunteership" className="py-20 bg-gradient-to-br from-background to-card/30 relative">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-6 animate-pulse">
            <Users className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Positions of <span className="text-primary">Responsibility</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leadership roles and contributions to campus life and community development
          </p>
        </div>

        {/* Positions of Responsibility */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {positionsOfResponsibility.map((position, index) => (
            <Card 
              key={index}
              className="group p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] animate-slide-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {position.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{position.title}</h3>
                  <p className="text-primary text-sm mb-1 font-medium">{position.organization}</p>
                  <Badge variant="outline" className="text-xs mb-2 border-primary/30 text-primary/80">
                    {position.period}
                  </Badge>
                  <div className="text-emerald-500 text-sm font-semibold mb-2 flex items-center gap-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    {position.impact}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10">
                {position.description}
              </p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {position.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="text-xs hover:bg-primary/20 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Awards and Achievements Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-2 text-primary">
            Awards & Achievements
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {awardsAchievements.map((award, index) => (
              <Card
                key={index}
                className="group p-6 text-center bg-card/60 backdrop-blur-sm border-border/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 animate-slide-up relative overflow-hidden"
                style={{animationDelay: `${index * 0.1 + 0.8}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 relative z-10">
                  {award.icon}
                </div>
                <h4 className="font-bold mb-2 text-lg group-hover:text-primary transition-colors duration-300 relative z-10">
                  {award.title}
                </h4>
                <p className="text-muted-foreground text-sm relative z-10">
                  {award.description}
                </p>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-primary to-secondary blur-xl" />
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-5deg); }
          75% { transform: translateY(-8px) rotate(3deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slide-up {
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.8s ease-out forwards;
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Volunteership;