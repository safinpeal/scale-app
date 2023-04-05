import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PartnerCarousel = () => {
  const [logos,setlogos]=useState([]);
  const server ="https://server.scaleiti.com/partners/";
  useEffect(()=>{
    axios.get('https://server.scaleiti.com/partners-image')
    .then((res)=>{
        setlogos(res.data);
        console.log(res.data);
    })
  },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='my-5'>
          
            <Carousel responsive={responsive} data-aos="zoom-in">
            {logos.map(logo=>
                 <div  key={logo._id}><img src={server+logo.imageUrl} alt={logo.imageUrl}/></div>
            
              )}
                
                {/* <div><img src="https://server.scaleiti.com/partners/alco_logo.webp" alt="alco_logo.webp"/></div>
                <div><img src="https://server.scaleiti.com/partners/logo.webp" alt="logo.webp"/></div>
                <div><img src="https://server.scaleiti.com/partners/alco_logo.webp" alt="alco_logo.webp"/></div> */}
            </Carousel>
        </div>
    );
};

export default PartnerCarousel;