import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PartnerCarousel from '../../Shared/PartnerCarousel/PartnerCarousel';
//import Navigation from '../../Shared/Navigation/Navigation';
import Carousel from '../Carousel/Carousel';
import ProductList from '../Lists/ProductList';


const Home = () => {
    const [products,setProducts] =useState([]);
    const deleteProduct =(product)=>{
        // const arr = products.filter(item=>{
        //     product._id != item._id;
        // })
        // setProducts(arr);
        console.log(product);
    }
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/gettopproducts')
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
        })
    },[])
    return (
        <div className='container'>
            <Carousel></Carousel>
            <h2 className='mt-3'> Top Selling Products</h2>
            <div className='row gy-3 my-4'>
            { products.map((product)=>
              <div key={product._id} className='col-lg-4 col-md-6 col-sm-12'>
                <ProductList  product={product}></ProductList>
              </div>
            )}
            </div>
            <div>
                <h3>Our Partners</h3>
                <PartnerCarousel></PartnerCarousel>
               
            </div>
            
        </div>
    );
};

export default Home;