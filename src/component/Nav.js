import React from 'react'
import tech3 from './image/tech3.jpg'
import facebook from './image/facebook.jpg'
import instagram from './image/instagram.jpg'
import youtube from './image/yotube.jpg'
import email from './image/email.jpg'
import calender from './image/calender.jpg' 
import enquiry from './image/enquiry.jpg'
import './Nav.css'

function Nav() {
  return (
    <div className='first'>
        <div className='seco'>
        
        <img className='phone' src={tech3} alt="" width="35px"/> <i class="text-center"> 8208416137 / 8007243000 </i>
        <a href="https://www.facebook.com/TechRelindia"><img className='face' src= {facebook}alt="" width="35px"/></a>
        <a href="https://www.instagram.com/techrel_pune"><img className='int'src={instagram} alt="" width="35px"/></a>
        <a href="https://www.youtube.com/@TechRelInstitute"><img className='you' src={youtube} alt="" width="35px"/></a>
        <a href="mailto:hr@techrel.com"><img className='eml' src={email} alt="" width="35px"/></a>
       
        </div>
        <div className='thir'> 
        <a href=""><img  className='cal'src={calender} alt="" width="35px"/><b>Upcoming Batches</b></a>
        <a href=""><img className='enq' src={enquiry} alt="" width="35px"/><b>Enquiry</b></a>
        </div>
        </div>
       
       
       
    

    
   

   
  )
}

export default Nav

 {/* <div class="p-2 row m-0 sticky-top" style="background-color: rgb(255, 171, 44);">
    <div class="col-md-6">
      <div class="text-center text-white" id="header">
        <img src={tech3} alt="" width="25px"/> <i class="text-center"> 8208416137 / 8007243000 </i>
        <a href="https://www.facebook.com/TechRelindia"><img src="" alt="" width="25px"/></a>
        <a href="https://www.instagram.com/techrel_pune"><img src="" alt="" width="25px"/></a>
        <a href="https://www.youtube.com/@TechRelInstitute"><img src="" alt="" width="25px"/></a>
        <a href="mailto:hr@techrel.com"><img src="Assets/img/email.png" alt="" width="25px"/></a>
      </div>
    </div>
    <div class="col-md-6 d-flex justify-content-center text-white row">
        <a href="batch-schedule.php" class="text-dark px-3" id="header">
          <img src="Assets/img/calender.png" alt="" width="25px" class=""/>Upcoming Batches</a>
        <a href="enquiry.php" class="text-dark" id="header">
          <img src="Assets/img/enquiry.png" alt="" width="25px" style="text-decoration: none; font-weight: bold;"/>Enquiry</a>

    </div> */}
  
   


