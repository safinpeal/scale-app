import { useState } from "react";

const Location=()=>{
    const [center, setCenter] =useState({ lat: 37.7749, lng: -122.4194 });
    const [position, setPosition] =useState(center);
    return(
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.677970694193!2d90.48886971402241!3d23.72319129573426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7592f61a8a1%3A0xd83fc12f951826b8!2sInnovation%20Technology%20International!5e0!3m2!1sen!2sbd!4v1680543173584!5m2!1sen!2sbd" 
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