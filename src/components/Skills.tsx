
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

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/5">
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
              <Card className="glass-morphism border-white/10 h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gradient mb-6">{category.category}</h3>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
