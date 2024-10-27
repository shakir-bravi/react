import { useState } from 'react'

import "./faq.css"

export default function Faq() {

    const [index,setIndex] =useState(null)

  return (
    
<>
<div className="faq-body">
<h1 data-aos="zoom-in"><center>Ask About Hostel</center></h1>


<div className="faq">


{/* data-aos={f.id%2 == 0 ?"fade-right":"fade-left"} */}
    {

        FaqC.map((f,i)=> {
            return(<>
            
<div    onClick={()=>setIndex(f.id)} key={i} className="faq-QandA">

<div className="Faq-Q"> <h2>{f.q}</h2> <h2 style={{fontSize:"50px" , color:"#edb64a"}}>{f.id === index ?"-":"+"}</h2></div>

<p className={`${f.id === index ?"showAns":"clzAns"}`} >{f.ans}</p>



</div>

            </>)
        })
    }


</div>




{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat adipisci cupiditate voluptatem, officia tempore asperiores saepe neque voluptatum ad debitis eius dolore culpa quos soluta eaque nam aperiam ipsa cumque. */}


</div>
</>  )
}




const FaqC = [


    {
        id:0,
        q:" What is The Rent Structure ?",
        ans:"It Starts from 8,000 Without mess. mess is not available right now."
    },
    {

        id:1,
        q:"How Many Members in One Room ?",
        ans:"four or five per room. However individual rooms are available with charge of fourS."
    },
    {

        id:2,
        q:"How Many Advance ?",
        ans:"Four thousand to five thousand. will only be refundable before informing before 15 days on leaving hostel"
    },
    {

        id:3,
        q:"What is Timing Of Hostel ?",
        ans:"11 : 00 PM for final timing for entering the hostel"
    },
    {

        id:4,
        q:"Is gas available for own cooking ?",
        ans:"Yes it's available and bill is paid by hostel management "
    },
    {
        id:5,
        q:"Is Saturday Sunday is Off ?",
        ans:"Hsotel is open all the time , But Office timing is 10 : 00 AM to 7 : 00 PM from monday to friday "
    },

];