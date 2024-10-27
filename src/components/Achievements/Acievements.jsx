import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import './Acievemtns.css';

export default function Achievements() {
  const [startCount, setStartCount] = useState(false);
  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target); // Stop observing once it has triggered
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (achievementRef.current) {
      observer.observe(achievementRef.current);
    }

    return () => {
      if (achievementRef.current) {
        observer.unobserve(achievementRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="achievement-body" ref={achievementRef}>
        <h1 data-aos="zoom-in">
          <center>Our Achievements</center>
        </h1>
{/* 
        <div className="grid-achievement">
          <div className="achvemet-card">
            <p>
              <span>
                {startCount && (
                  <CountUp start={0} end={2.7} duration={5} decimals={1} suffix="K" />
                )}
              </span>
              <br /> Satisfied Members
            </p>
          </div>

          <div className="achvemet-card">
            <p>
              <span>
                {startCount && <CountUp start={0} end={400} duration={5} suffix="+" />}
              </span>
              <br /> Members
            </p>
          </div>

          <div className="achvemet-card">
            <p>
              <span>{startCount ? <CountUp start={0} end={3} duration={5} prefix="0" />  : '00'}</span> <br /> Hostels
            </p>
          </div>
        </div> */}




        <div className="grid-achievement-sml">
          <div className="achvemet-card-sml">
          <p>
              <span>
                {startCount && <CountUp start={0} end={400} duration={5} suffix="+" />}
              </span>
              <br /> Members
            </p>
          </div>

          <div className="achvemet-card-sml">
          <p>
              <span>
                {startCount && (
                  <CountUp start={0} end={2.7} duration={7} decimals={1} suffix="K" />
                )}
              </span>
              <br /> Satisfied Members
            </p>

         
          </div>
          
          <div className="achvemet-card-sml">
            <p>
              <span>{startCount ? <CountUp start={0} end={3} duration={5} prefix="0" />  : '00'}</span> <br /> Hostels
            </p>
          </div>
        </div>



      </div>
    </>
  );
}
