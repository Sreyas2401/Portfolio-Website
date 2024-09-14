import { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInComponentProps {
  children: ReactNode;
}

const FadeInComponent = ({ children }: FadeInComponentProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>{children}</div>;
};

export default FadeInComponent;
