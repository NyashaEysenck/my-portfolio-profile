
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Keras", level: 70 },
        { name: "Scikit-learn", level: 75 },
        { name: "Pandas", level: 80 },
        { name: "Flask", level: 75 },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
  ];

  const [visibleSkills, setVisibleSkills] = useState<{[key: string]: boolean}>({});
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Initialize all skills as not visible
  useEffect(() => {
    if (isInView) {
      const allSkills: {[key: string]: boolean} = {};
      
      // Create a delay for each skill to animate in sequence
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const skillKey = `${category.category}-${skill.name}`;
          
          setTimeout(() => {
            setVisibleSkills(prev => ({
              ...prev,
              [skillKey]: true
            }));
          }, (categoryIndex * 100) + (skillIndex * 100));
        });
      });
      
      // Set initial state
      setVisibleSkills(allSkills);
    }
  }, [isInView]);

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/5" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-16" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            Technical Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.category}
              animation="slide-up"
              delay={categoryIndex * 200}
              className="h-full"
            >
              <Card 
                className={`glass-morphism border-white/10 h-full transition-all duration-300 ${
                  hoveredCategory === category.category ? 'shadow-lg shadow-primary/20 scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHoveredCategory(category.category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gradient mb-6 relative">
                    {category.category}
                    <div className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-primary to-transparent transition-all duration-500 ${
                      hoveredCategory === category.category ? 'w-full' : 'w-0'
                    }`}></div>
                  </h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => {
                      const skillKey = `${category.category}-${skill.name}`;
                      const isVisible = visibleSkills[skillKey];
                      
                      return (
                        <div key={skillIndex} className="group">
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                            <span className="text-primary">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-progress bg-gradient-to-r from-primary to-accent rounded-full"
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transition: 'width 1.5s cubic-bezier(0.65, 0, 0.35, 1)'
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
