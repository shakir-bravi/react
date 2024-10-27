import React from 'react';
import "./landing.css"
import Nav from '../common/Nav';
import "@fortawesome/fontawesome-free/css/all.css";
import masroor from "../images/al-masroorii.jpeg"
import { Link } from 'react-router-dom';
import Why from '../why/Why';

export default function Landing() {

  return (
    <>
<div className="landing-body">

<Nav/>

{/* Hero Section */}
<section className='landing-hero'>

{/* <div style={{backgroundImage:`url(${masroor})`}} className="masroor"></div> */}

<img data-aos="fade-right" className='masroor-img' src={masroor} alt="" />


<div  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="200"
     data-aos-offset="0" className="al-masroor-narrative">
  <span>AL-Masroor Royal Hostel Larkana</span> <br />
  is the name of an institute that offers its every  member life changing experience with a blend of educational, <br /> moral and ethical values. Living here resembles a own-home feel. It covers  all basic necessities on just one time monthly rent. A library-like environment and peaceful surroundings create   passionate students. With its serene environment, the hostel has only one aim to build the community in 
  <span style={{color:"#edb64a"}}> Larkana.</span>
</div>




</section>

<div className="join-now">
  <Link to={"/register"} className='join'>Join Now</Link>
</div>
{/* <Why/> */}
  
  
  </div>    
    </>
  )
}
