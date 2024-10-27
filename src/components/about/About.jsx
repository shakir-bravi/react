import React , {useEffect}from 'react';
import "./about.css";
import Header from '../common/pageHeader/Header';
 import { Link } from 'react-router-dom';
import mdpic from "./mdpic.png";
import inchrgePic from "./inchargepic.png"; 
import Footer from '../common/footer/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
export default function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="about-body">
        <Header headerFor="About" />

        <div className="md-profile">

          <div data-aos="fade-right" className='md-pic'>
            
            <img src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729413839/al-maroo-hostel/m8wxr78xnihuiunainhg.png" alt="Managing Director" />
            <p>Engr Masroor Sodhar <br /><span>Managing Director</span></p>
          </div>

          <div className='md-about'>
            <p  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> Engr Masroor Sodhar is a project director of Al-Masroor Group of enterprises. 
     He is Graduateed form Mehran University Science & Technology Jamshoro . Currently he is a writer & independent researcher in <i> The Dawn</i>, <i> The Technology Times</i>, & <i> The Paradigm Shift</i>, Apart from this, he is a passionate entrepreneur.
     
       </p>
            <div data-aos="flip-down" className="contact-about">
              <p><i className="fa-solid fa-phone"></i> +92 3061482592</p>
              <p><i className="fa-regular fa-envelope"></i> sodhar32@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="md-profile incharge">
          <div  style={{ paddingLeft: "25px" }} className='md-about'>
            <p 
            data-aos="fade-down"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saeped natus aspernatur, ipsa et fugit inventore, culpa, odit cupiditate consectetur nam quo.</p>
            <div  data-aos="fade-right" className="contact-about">
              <p><i className="fa-solid fa-phone"></i> +92 3193291955</p>

              <p><i className="fa-regular fa-envelope"></i> 786dostm@gmail.com</p>
            </div>
          </div>

          <div data-aos="zoom-in-up" className='md-pic'>
            <img src={inchrgePic} alt="Incharge" />
            <p>Dost Muhammad <br /><span>Incharge</span></p>
          </div>
        </div>

         <div className="map-container">

          <iframe 
          data-aos="zoom-in-down" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5462.291641256882!2d68.19290524315585!3d27.55837615507291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935ab08ba090653%3A0x98bfe0d974c559bd!2sAl-%20Masroor%20Boys&#39;%20Hostels%20Larkana!5e1!3m2!1sen!2s!4v1729166890444!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

<p data-aos="zoom-in-right" className='address'> <span>Address</span> <b> : Main Sachal Colony Road Near NOVA Academy Larkana.</b>
</p>



<Footer/>

<Link to={"/"} className="goback">Go Back</Link>

      </div>
    </>
  );
}
