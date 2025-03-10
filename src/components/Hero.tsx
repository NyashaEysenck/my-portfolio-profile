
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const roles = ["Software Developer", "UI Designer", "Problem Solver", "Tech Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Animate entry
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Text typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Background particles for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full bg-primary/10 ${i % 2 === 0 ? 'animate-float' : ''}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 10}px`,
              height: `${Math.random() * 60 + 10}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <AnimatedSection 
            className={`flex-1 space-y-6 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
            animation="slide-right" 
            delay={300}
          >
            <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-2 animate-pulse">
              Computer Science Undergraduate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block">Hi, I'm a</span>
              <span className="text-gradient block h-16 md:h-20">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Computer Science student with a 3.8/4.0 GPA, skilled in software development, programming,
              and building scalable applications. Seeking an internship or entry-level software development
              role to contribute to innovative projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/80 text-white py-6 px-8 group relative overflow-hidden">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                <a href="#contact" className="absolute inset-0"></a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 px-8 group">
                <span className="mr-2 group-hover:translate-x-1 transition-transform">View Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
                <a href="#projects" className="absolute inset-0"></a>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            className="flex-1 flex justify-center" 
            animation="slide-left" 
            delay={300}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-3xl animate-glow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden glass-morphism flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <div className="text-3xl">🚀</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
