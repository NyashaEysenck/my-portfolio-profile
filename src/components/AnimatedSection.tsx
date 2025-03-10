
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  animation = "fade-in", 
  delay = 0,
  duration = 500
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
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

  // Define animation classes based on type
  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch(animation) {
      case 'fade-in': return 'animate-fade-in';
      case 'slide-up': return 'animate-slide-up';
      case 'slide-down': return 'animate-slide-down';
      case 'slide-left': return 'animate-slide-left';
      case 'slide-right': return 'animate-slide-right';
      case 'scale-in': return 'animate-scale-in';
      case 'bounce': return 'animate-bounce';
      default: return 'animate-fade-in';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${getAnimationClass()}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms` 
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
