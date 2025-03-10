
import AnimatedSection from "./AnimatedSection";

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-16" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Education</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </AnimatedSection>

        <div className="space-y-10">
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">
                    Bachelor of Science in Computer Science
                  </h3>
                  <h4 className="text-lg text-muted-foreground mb-4">Africa University</h4>
                  <div className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm inline-block mb-4">
                    GPA: 3.8/4.0
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Software Engineering</li>
                    <li>• Database Structures and Algorithms</li>
                    <li>• Object Oriented Programming</li>
                    <li>• Operating Systems</li>
                    <li>• Data Communication and Networking</li>
                    <li>• Artificial Intelligence</li>
                    <li>• Web Development</li>
                  </ul>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                  <span className="text-muted-foreground">Aug 2022 - June 2026</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400}>
            <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">
                    High School - Advanced Level
                  </h3>
                  <h4 className="text-lg text-muted-foreground mb-4">Thornhill High School</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pure Mathematics (A)</li>
                    <li>• Physics (A)</li>
                    <li>• Computer Science (A)</li>
                  </ul>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                  <span className="text-muted-foreground">Jan 2016 - Dec 2026</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={600}>
            <div className="glass-morphism rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">
                    High School - Ordinary Level
                  </h3>
                  <h4 className="text-lg text-muted-foreground mb-4">Thornhill High School</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground">
                    <div>
                      <ul className="space-y-2">
                        <li>• Mathematics (A)</li>
                        <li>• Computer Science (A)</li>
                        <li>• Combined Science (A)</li>
                        <li>• Physics (A)</li>
                        <li>• Biology (B)</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2">
                        <li>• Chemistry (A)</li>
                        <li>• Geography (A)</li>
                        <li>• History (A)</li>
                        <li>• English Language (B)</li>
                        <li>• Shona Language (B)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Education;
