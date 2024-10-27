import React from 'react';
import "./header.css";
import logo from "./logo.jpg";
import almasroor from "./al-masroor.jpeg"


export default function Header({headerFor}) {
  return (<>



<header>
<div className="header-logo">
<img src={logo} alt="" />
</div>


<div className="header-heading">
    <div>
    <img className='masror-img' src={almasroor} alt="" />
    </div>
    <h1  className='reg-h1'><center>{headerFor}</center></h1>
</div>
</header>

   
    
    
    
    
    
    
    </>
  )
}
