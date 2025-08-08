'use client'
import { useEffect, useState } from "react";

export default function jobListing() {
  const[job,setJob] = useState([]);
  async function getData() {
  const url = "http://192.168.20.83:5000/getjoblisting";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    setJob(json);
  } catch (error) {
    // console.error(error.message);
  }
}
useEffect(()=>{
getData()
},[])
  return (
    <>
<div id="templatemo_site_title_bar_wrapper">
	<div id="templatemo_site_title_bar">
    	<div id="site_title">
            <h1><a href="#">
            <img src="images/templatemo_logo.png" alt="myWORK" />
            <span>free css templates</span>
            </a></h1>
        </div>
        
        <ul className="social_network">
            <li><a href="#"><img src="images/facebook_icon.png" alt="facebook" /></a></li>
            <li><a href="#"><img src="images/linkin_icon.png" alt="linkedin" /></a></li>	
            <li><a href="#"><img src="images/twitter_icon.png" alt="twitter" /></a></li>
        </ul>
    
    </div> 
</div> 

<div id="templatemo_menu_wrapper">

	<div id="templatemo_menu">
    
    
        <ul>
            <li><a href="something.html">Home</a></li>
            <li><a href="index.html">About Us</a></li>
            <li><a href="gallery.html" className="current">Job Listings</a></li>
            <li><a href="index.html" className="last">Contact Us</a></li>
        </ul>    	
    
    </div>

</div>

<div id="templatemo_content">
    
    <div className="section_w940">
        
        <h2>JOB LISTINGS</h2>
    

{
  job.map((obj,index)=>{
      return (      
      <div className="featured_project">        
            <h3>{obj[1]}</h3>
            <a href="#"><img src={obj[10]} alt="image" /></a>
            <p>{obj[2]}</p>
            <div className="button_02"><a href="#">Visit Site</a></div>
        </div>
      )
  })


}
        

        <div className="cleaner"></div>
        
        <ul className="paging">
        	<li><a href="#" className="current">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">Next</a></li>
		</ul>            
            
    </div>

</div>
<div id="templatemo_content_bottom"></div>

<div id="templatemo_footer_wrapper">
<div id="templatemo_footer">

    <div className="section_w240">
        
        <h3>Privacy Policy</h3>
        
        <div className="sub_content">
            <p>We collect and use your personal data (like name, email, resume) to connect you with job opportunities. Your information is kept secure and never shared without your consent. You can request to view, update, or delete your data anytime.</p>
        </div>
        
    </div>

 	<div className="section_w240">
        
        <h3>XHTML/CSS validations</h3>
        
        <div className="sub_content">
        	
            <p>Aliquam vehicula accumsan arcu, vestibulum cursus purus lobortis eu. Pellentesque vitae neque non lorem vehicula adipiscing. </p>
            
            <div className="cleaner_h20"></div>
        
            <a href="http://validator.w3.org/check?uri=referer"><img  src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31"/></a>
            
            <a href="http://jigsaw.w3.org/css-validator/check/referer"><img  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>
            
        </div>
            
    </div>
    
    <div className="section_w240">
        
        <h3>Partners</h3>
        
        <div className="sub_content">
            
            <ul className="footer_list">
                <li><a href="#">Free CSS Templates</a></li>
                <li><a href="#">Free Flash Files</a></li>
                <li><a href="#">Premium Web Templates</a></li>
                <li><a href="#">Web Design Tips</a></li>
                <li><a href="#">Best Flash Websites</a></li>               
            </ul>
            
        </div>
        
    </div>
    
  

    <div className="cleaner_h40"></div>

    <center>
        Copyright © 2048 <a href="#">Your Company Name</a> 
        Validate <a href="http://validator.w3.org/check?uri=referer">XHTML</a> &amp; <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a>
    </center>

</div> 
</div> 


</>
  )
}