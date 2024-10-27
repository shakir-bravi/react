import React from 'react'
import Landing from './landing'
import Why from '../why/Why'
import ViewCarousel from '../common/viewCarousel'
import Faq from '../FAQ/Faq'
import Acievements from '../Achievements/Acievements'
import Feedback from '../feedback/Feedback'
import Footer from '../common/footer/Footer'

export default function Land() {
  return (<>


<div style={{backgroundColor:"#0A0308", height:"auto", width:"100%"}} className="land-body">

<Landing/>
<Why/>
<ViewCarousel/>
<Faq/>
<Acievements/>
<Feedback/>
<Footer/>
</div>





</>  )
}
