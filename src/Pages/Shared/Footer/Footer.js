import React from 'react';
import { Link, NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { faFacebook} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-dark text-light footer-bottom">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6 ">
        <p className="header header-style">Who We are</p>
<div className="display ">
<Link to="/" className="link-style">Home</Link><br></br>
    <Link to="/" className="link-style">About Us</Link><br></br>
    <Link to="/about" className="link-style">Message from CEO</Link><br></br>
    <Link to="/productslist" className="link-style">Product List</Link>
</div>

      </div>
      <div class="col-lg-3 col-md-6 ">
      <p className="header header-style seperator">Head Office</p>
       <Link to="/contact" className="link-style">Contact</Link><br></br>
    <Link to="/location" className="link-style">Google Map</Link><br></br>
    <Link to="/gallery" className="link-style">Gallery</Link><br></br>
    
      </div>
      <div class="col-lg-3 col-md-6">
      <p className="header header-style">Head Office</p>
     <p className="head-address">
       Innovative Technology International <br></br>
       118,Bawany Nagar<br></br>
       Demra,Dhaka-1360<br></br>
       Email : innotecin@gmail.com<br></br>
       Mobile : 01517140811
       
     </p>
      </div>
      <div class="col-lg-3 col-md-6">
      <p className="header header-style">Follow Us</p>
      <div class="footer-icons">
      <span class="fa-stack fa-lg color youtube">
      
      <Link to="https://www.youtube.com/@sohojsikkha4708"><FontAwesomeIcon icon={faYoutube} /></Link>
   </span>
   <span class="fa-stack fa-lg insta">
      
      <FontAwesomeIcon icon={faInstagram } />
   </span>
   <span class="fa-stack fa-lg facebook">
    
    <Link to="https://www.facebook.com/groups/1625746967875634/?hoisted_section_header_type=recently_seen&multi_permalinks=1626495904467407"> <FontAwesomeIcon icon={faFacebookF} /></Link>

   </span>
   <span class="fa-stack fa-lg whatsapp ">
   {/* <i class="fas fa-circle fa-stack-2x"></i> */}
    
      <Link to="intent://send/[01517140811]#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><FontAwesomeIcon icon={faWhatsapp} /></Link>

   </span>

      </div>

      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;