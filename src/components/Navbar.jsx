import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  //const navigate = useNavigate();

  function AboutClick() {
    //navigate("/#About");
    console.log("Inside On click function : ");
    window.location.href = window.location.origin + "/#about";// 'http://localhost:5178/#about';
}

function ServiceClick() {
  //navigate("/#About");
  console.log("Inside On click function : ");
  window.location.href = window.location.origin + "/#services";// 'http://localhost:5178/#about';
}

function ContactClick() {
  //navigate("/#About");
  console.log("Inside On click function : ");
  window.location.href = window.location.origin + "/#contacts";// 'http://localhost:5178/#about';
}
  return (
    <>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
         
        <div className="left nav_items">
        <img src="src/assets/photo/jsm logo solar.jpg"/>
        </div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>

          <div class="dropdown">
          <div onClick={AboutClick}>
            <button
            class="dropbtn">About</button>
            </div>
            <div class="dropdown-content">
              <a href="#">About Us</a>  
              <a href="#">Vision</a>
              <a href="#">Mission</a>
              
              <a href="#">Upcl Contractors</a>
              <a href="#">Iso Certified</a>


        
            </div>
          </div>

          
          
          <div class="dropdown">
            <div onClick={ServiceClick}>
            
          <button 
          
          class="dropbtn">Services</button>
          </div>
          <div class="dropdown-content">
            
          <a href="#">Solar Heater</a>
          <a href="#">Solar Street Light</a>
          <a href="#">Solar Roof Top</a>

        
          </div>
          </div>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
          
        
        </div>
        
      </div>
        
      
    </>
  );
};
export default Navbar;