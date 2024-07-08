import React, { useEffect } from 'react';
import './Line.css';
import gsap from 'gsap';

const Line = () => {
  useEffect(() => {
    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-200%)",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 0
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 4,
          ease: "none"
        });
        gsap.to(".marque img", {
          rotate: 180
        });
      }
    };

    window.addEventListener("wheel", handleWheel);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="page">
        <div className="move">
            <div className='marque'>
                <h2 className='text'>STUDENT ALUMNI MEET</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt='arrow' />
            </div>
            <div className='marque'>
                <h2>STUDENT ALUMNI MEET</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt='arrow' />
            </div>
            <div className='marque'>
                <h2>STUDENT ALUMNI MEET</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt='arrow' />
            </div>
            <div className='marque'>
                <h2>STUDENT ALUMNI MEET</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt='arrow' />
            </div>
            <div className='marque'>
                <h2>STUDENT ALUMNI MEET</h2>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt='arrow' />
            </div>
        </div>
    </div>
  );
}

export default Line;