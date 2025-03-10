
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  const certifications = [
    {
      name: "IBM AI Developer",
      issuer: "IBM on Coursera",
      date: "July 29, 2024",
      skills: ["Artificial Intelligence", "Deep Learning", "Neural Networks", "Python"]
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI on Coursera",
      date: "July 7, 2024",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"]
    },
    {
      name: "IBM Machine Learning",
      issuer: "IBM on Coursera",
      date: "June 10, 2024",
      skills: ["Machine Learning", "Data Analysis", "Predictive Modeling", "Python"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection className="flex flex-col items-center text-center mb-16" animation="slide-up">
          <div className="inline-block px-3 py-1 rounded-full glass-morphism text-sm text-primary mb-6">
            Professional Qualifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certifications</h2>
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={200 * (index + 1)}
              className="h-full"
            >
              <Card className="glass-morphism border-white/10 overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader>
                  <CardTitle className="text-gradient">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Issuer:</p>
                    <p className="font-medium">{cert.issuer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date Earned:</p>
                    <p className="font-medium">{cert.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Certifications;
