
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

interface Project {
  id: number;
  title: string;
  date: string;
  description: {
    problem: string;
    solution: string;
    impact: string;
  };
  technologies: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Course Recommender System",
      date: "June 2024",
      description: {
        problem: "Assisted students in selecting suitable courses, addressing course overload and confusion.",
        solution: "Built a recommendation system using student preferences and past course data.",
        impact: "Streamlined the course selection process, increasing student satisfaction and academic success."
      },
      technologies: ["Python", "Machine Learning", "Django", "MySQL"]
    },
    {
      id: 2,
      title: "Event Management System",
      date: "May 2024",
      description: {
        problem: "Simplified event management for organizers and attendees.",
        solution: "Built a web app for event creation, registration, and notifications using Django.",
        impact: "Improved event coordination and attendee engagement, saving time for organizers."
      },
      technologies: ["Django", "JavaScript", "SQL", "HTML/CSS"]
    },
    {
      id: 3,
      title: "Automated Vehicle Recognition System",
      date: "January - April 2024",
      description: {
        problem: "Automated the recognition and registration of vehicles for enhanced security and parking management.",
        solution: "Developed a system using computer vision to automatically detect and register vehicles' license plates.",
        impact: "Increased efficiency and security in vehicle management, reducing manual intervention and errors."
      },
      technologies: ["Python", "Computer Vision", "TensorFlow", "OpenCV"]
    }
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-16" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            My Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale-in"
              delay={200 * (index + 1)}
              className="h-full"
            >
              <Card 
                className={`glass-morphism border-white/10 overflow-hidden h-full flex flex-col interactive-card ${
                  hoveredId === project.id ? 'border-primary/30' : 'border-white/10'
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`h-1.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 ${
                  hoveredId === project.id ? 'w-full' : 'w-0'
                }`}></div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-gradient text-xl">{project.title}</CardTitle>
                    <span className="text-xs text-muted-foreground px-2 py-1 glass-morphism rounded-full">
                      {project.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4 flex-grow">
                  <div className="space-y-3">
                    <div className="group cursor-pointer" onClick={() => toggleExpand(project.id)}>
                      <h4 className="text-sm font-medium text-primary flex items-center">
                        Problem:
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={`ml-1 transition-transform ${expandedId === project.id ? 'rotate-180' : ''}`}
                        >
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </h4>
                      <CardDescription className="group-hover:text-foreground/90 transition-colors">
                        {project.description.problem}
                      </CardDescription>
                    </div>
                    {expandedId === project.id && (
                      <>
                        <div className="space-y-1 animate-fade-in">
                          <h4 className="text-sm font-medium text-primary">Solution:</h4>
                          <CardDescription>{project.description.solution}</CardDescription>
                        </div>
                        <div className="space-y-1 animate-fade-in" style={{ animationDelay: '100ms' }}>
                          <h4 className="text-sm font-medium text-primary">Impact:</h4>
                          <CardDescription>{project.description.impact}</CardDescription>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
