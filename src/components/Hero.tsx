
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <AnimatedSection 
            className="flex-1 space-y-6" 
            animation="slide-right" 
            delay={300}
          >
            <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-2">
              Computer Science Undergraduate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="block">Hi, I'm a</span>
              <span className="text-gradient block">Software Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Computer Science student with a 3.8/4.0 GPA, skilled in software development, programming,
              and building scalable applications. Seeking an internship or entry-level software development
              role to contribute to innovative projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/80 text-white py-6 px-8">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 px-8">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection 
            className="flex-1 flex justify-center" 
            animation="slide-left" 
            delay={300}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden glass-morphism flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
