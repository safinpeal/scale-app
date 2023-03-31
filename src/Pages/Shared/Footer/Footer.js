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
            <footer className="bg-dark text-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <p className="header">Who We are</p>
       <Link to="/">Home</Link><br></br>
    <Link to="/about">About Us</Link><br></br>
    <Link to="/about">Message from CEO</Link><br></br>
    <Link to="/about">Message from CEO</Link>

      </div>
      <div class="col-lg-3 col-md-6">
      <p className="header">Contact Us</p>
       <Link to="contact">Contact</Link><br></br>
    <Link to="/location">Google Map</Link><br></br>
    <Link to="/about">Message from CEO</Link><br></br>
    <Link to="/about">Message from CEO</Link>
      </div>
      <div class="col-lg-3 col-md-6">
      <p className="header">Our Branch</p>
       <Link to="/">Home</Link><br></br>
    <Link to="/about">About Us</Link><br></br>
    <Link to="/about">Message from CEO</Link><br></br>
    <Link to="/about">Message from CEO</Link>
      </div>
      <div class="col-lg-3 col-md-6">
      <p className="header">Follow Us</p>
      <div class="footer-icons">
      <span class="fa-stack fa-lg color">
      <FontAwesomeIcon icon={faYoutube} />
   </span>
   <span class="fa-stack fa-lg">
      
      <FontAwesomeIcon icon={faInstagram } />
   </span>
   <span class="fa-stack fa-lg facebook">
    
    <Link to="https://www.facebook.com/groups/1625746967875634/?hoisted_section_header_type=recently_seen&multi_permalinks=1626495904467407"> <FontAwesomeIcon icon={faFacebookF} /></Link>

   </span>
   <span class="fa-stack fa-lg whatsapp ">
   {/* <i class="fas fa-circle fa-stack-2x"></i> */}
    
      <FontAwesomeIcon  icon={faWhatsapp} />

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