// About.js
import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import { Typewriter } from 'react-simple-typewriter';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      {isVisible && (
        <>
          <h2>
            <Typewriter
              words={['About Me']}
              loop={1}
              cursor={false}
              cursorStyle="|"
              typeSpeed={10}
              delaySpeed={500}
            />
          </h2>
          <p>
            <Typewriter
              words={['I’m a front-end web developer from the United States with experience in HTML, CSS, JavaScript, and React.']}
              loop={1}
              cursor={false}
              cursorStyle="_"
              typeSpeed={10}
              deleteSpeed={30}
              delaySpeed={800}
            />
          </p>
          <p>
            <Typewriter
              words={['I enjoy creating user-friendly, responsive websites that provide an optimal experience on any device.']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={15}
              deleteSpeed={30}
              delaySpeed={800}
              onLoopDone={() => console.log('Typing completed!')}
            />
          </p>
        </>
      )}
    </section>
  );
}

export default About;
