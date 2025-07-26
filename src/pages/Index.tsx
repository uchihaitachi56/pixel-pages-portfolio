import { useState } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/sections/About";
import Skills from "@/components/portfolio/sections/Skills";
import Experience from "@/components/portfolio/sections/Experience";
import Education from "@/components/portfolio/sections/Education";
import Projects from "@/components/portfolio/sections/Projects";
import Achievements from "@/components/portfolio/sections/Achievements";
import Volunteership from "@/components/portfolio/sections/Volunteership";
import Contact from "@/components/portfolio/sections/Contact";
import Footer from "@/components/portfolio/Footer";
import SignatureIntro from "@/components/portfolio/SignatureIntro";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <SignatureIntro onComplete={handleIntroComplete} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Volunteership />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
