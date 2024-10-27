import React, { useEffect, useRef, useState } from 'react';
import "./common.css"
import { Link } from 'react-router-dom';



export default function Nav() {
  
const [showNav,setShowNav] =useState(false)

const navbar= useRef("");

const clz = (e)=>{

  if( !navbar.current  || navbar.current.contains(e.target)) return;
setShowNav(false)

}


useEffect(()=>{
  window.document.addEventListener("mousedown",clz)
  window.document.addEventListener("touchstart",clz )
},[showNav])





  return (<>
<nav  data-aos="fade-down">

<div className="mlogo">
<div className="mtext">M</div>

</div>

<div className="links">

<Link  to={"/about"} className='Link'>About</Link>
<Link className='Link'>Gallery</Link>
<Link className='Link'>Services</Link>

<div className="sml-links"> <div   >
    { showNav?<i class="fa-solid fa-xmark"></i>:<i onClick={()=>setShowNav(true)} class="fa-solid fa-bars"></i>} </div> </div>

</div>

</nav>  



<div ref={navbar} className={showNav ? "fixed-nav":"fixed-nav-clz"}>

<Link to={"/about"} className='Fixex-Link'>About</Link>
<Link className='Fixex-Link'>Gallery</Link>
<Link className='Fixex-Link'>Services</Link>




</div>


</>)

 }
