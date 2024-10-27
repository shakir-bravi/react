import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import "./why.css"

export default function WhyComponent() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="why-body">
        <div data-aos="zoom-in" className="why-join"><center>Why We Join ?</center></div>

        <div className="why-grid">
          {
            Why.map((w, i) => {
              return (
                <div key={w.id} className="why-card" data-aos="fade-up">
                  <div className="icon">
                    <div className="ic">{w.icon}</div>
                  </div>

                  <div className="why-text">
                    <p className="whytet">
                      {w.text}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

const Why = [
  {
    id: 0,
    icon: <i className="fa-solid fa-lightbulb"></i>,
    text: <p>24 / 7 <br /> hrs Electricity </p>,
  },
  {
    id: 1,
    icon: <i className="fa-solid fa-droplet"></i>,
    text: "Filtered Water",
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-video"></i>,
    text: `Security CCTV Record`,
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-motorcycle"></i>,
    text: `Parking`,
  },
  {
    id: 4,
    icon: <i className="fa-solid fa-wifi"></i>,
    text: <p>24 / 7 <br /> 5G Wifi </p>,
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-bed"></i>,
    text: `Chill Environment`,
  },
  {
    id: 6,
    icon: <i className="fa-solid fa-hand-sparkles"></i>,
    text: `Clean Environment`,
  },
  {
    id: 7,
    icon: <i className="fa-solid fa-people-group"></i>,
    text: <p>Alert Team & <br /> Management</p>,
  },
  {
    id: 8,
    icon: <i className="fa-solid fa-building"></i>,
    text: <p>Prime Location <br />Of Sachal lrk</p>,
  },
];
