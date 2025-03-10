
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-12" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Summary</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-8"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="glass-morphism rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Personal Information</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-medium text-primary">Languages:</span> English, Shona, Portuguese
                </li>
                <li>
                  <span className="font-medium text-primary">Location:</span> Zimbabwe
                </li>
                <li>
                  <span className="font-medium text-primary">Availability:</span> Internship / Entry-level positions
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={300}>
            <div className="glass-morphism rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Professional Profile</h3>
              <p className="text-muted-foreground">
                I am a Computer Science undergraduate with a strong academic record and a passion for 
                developing innovative software solutions. With experience in web development, machine 
                learning, and algorithm design, I focus on creating efficient and scalable applications 
                that solve real-world problems.
              </p>
              <p className="text-muted-foreground mt-4">
                My goal is to leverage my technical skills to contribute to cutting-edge projects while
                continuing to learn and grow as a software developer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
