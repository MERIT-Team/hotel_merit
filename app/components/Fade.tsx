'use client';

import React, { useEffect, useRef, useState } from "react";

interface FadeProps {
    children: React.ReactNode;
    delay?: string;
}

const Fade: React.FC<FadeProps> = ({ 
    children, 
    delay 
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    const currentRef = domRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default Fade;