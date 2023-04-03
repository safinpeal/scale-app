import { useState } from "react";

const Location=()=>{
    const [center, setCenter] =useState({ lat: 37.7749, lng: -122.4194 });
    const [position, setPosition] =useState(center);
    return(
      <iframe data-aos="fade-right" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d66061.32220544053!2d88.5868633096928!3d24.377459059566636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf02db6d04b59%3A0xaa58eb411ea3ec5c!2sUniversity%20of%20Rajshahi!5e0!3m2!1sen!2sbd!4v1680242694348!5m2!1sen!2sbd" 
      width="85%" 
      height="450" 
      style={{border:0}} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
        
      </iframe>
    )
}

export default Location;