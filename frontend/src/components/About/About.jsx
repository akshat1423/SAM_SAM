import React, { useEffect, useState } from 'react';
import './about.css';
import Aos from 'aos'; // Import aos library for animations
import 'aos/dist/aos.css'; // Aos styles

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize aos with duration 1000ms
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`about ${isVisible ? 'fade-in' : ''}`} id="about" data-aos="fade-up">
            <div className="aboutHeading">
                <p>ABOUT SAM</p>
            </div>
            <div className="aboutContent">
                <p>
                The Student Alumni Meet in the city is aimed to be a welcome event for
                    successful candidates who will be joining IITs and for current IITB students. It is
                    an opportunity for them to get guidance from the alumni of IIT Bombay. It will be
                    an event where they will get to know ‘what life looks like after getting out of IIT
                    and also what is the current scenario of life in the institute’ from the experiences
                    of our esteemed alumni and the current students (our team), respectively.
                    Structure:<br></br>
                    1. Speech by an alumnus (telling about the life after graduating from the
                    institute with a broader perspective i.e. not specific to a particular field)<br></br>
                    2. Presentation by the Chapter (in case of IITB, we have alumni chapters),
                    briefing about the activities done round the year (the invited students as
                    well as the current students will get to know about these)<br></br>
                    3. Common Q&A session where the doubts of students and their parents will
                    be addressed.
                </p>
            </div>
        </div>
    );
}
