import React, { useState } from 'react';
import "./view.carousel.css";

export default function ViewCarousel() {
const [index,setIndex] =useState(0)


const next = () => {
    setIndex((prevIndex) => {
      // If we're at the last item, don't go beyond, or loop back to the start
      return prevIndex === Images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  // Prev function
  const prev = () => {

    setIndex((prevIndex) => {
      // If we're at the first item, go to the last item, otherwise decrement
      return prevIndex === 0 ? Images.length - 1 : prevIndex - 1;
    });
  };


  return (<>


<div className="view-carousel-body">

<h1 data-aos="zoom-in"><center>A View On Hostel</center></h1>


<div key={index} style={{backgroundImage:`url(${Images[index]})`}}  className="carousel">  

{/* <img src={Images[index]} alt="" /> */}

<div className="left-img">
    <div onClick={prev}>
    <i class="fa-regular fa-circle-left"></i>
    </div>
    </div>

<div className="right-img">
    <div onClick={next}>
    <i class="fa-regular fa-circle-right"></i>
    </div>
    </div>


</div>





</div>





</> )
}

const Images = [ 
    "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1728965780/al-maroo-hostel/riwqyhl0nb0sojc0ygnr.jpg",
    "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1728965780/al-maroo-hostel/tmmydolqhcnj5shinymw.jpg",
    "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1728965780/al-maroo-hostel/ydscvejxzsilfq5hdmqc.jpg",
    "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1728965779/al-maroo-hostel/rbrkxcq8mopn1a74dr50.jpg",



]