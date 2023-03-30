import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComp = () => {
  const [images, setImages]=useState([]);
  const server = "http://localhost:5000/CarouselImage/";
  useEffect(()=>{
    axios.get('http://localhost:5000/carousel-image')
    .then((res)=>{
        setImages(res.data);
        console.log(res.data);
    })
  },[])
    return (
      <div className="container">
        <Carousel>
          {images.map(image=>
            
          <Carousel.Item>
           <img
              className="d-block w-100"
              src={server+image.imageUrl}
              alt="First slide"
            />
            <Carousel.Caption>
                 {/* <h3>First slide label</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
             </Carousel.Caption>
          </Carousel.Item>
          )}
        </Carousel>
      </div>
       
    );
};

export default CarouselComp;