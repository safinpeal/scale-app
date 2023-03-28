import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import Navigation from '../../Shared/Navigation/Navigation';
import Carousel from '../Carousel/Carousel';
import ProductList from '../Lists/ProductList';


const Home = () => {
    const [products,setProducts] =useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/getproducts')
        .then(res=>{
            console.log(res.data);
            setProducts(res.data);
        })
    },[])
    return (
        <div className='container'>
            <Carousel></Carousel>
            <h2 className='mt-3'>Our Top Selling Products List</h2>
            <div className='row gy-3 justify-content-center my-4'>
            { products.map((product)=>
              <div key={product._id} className='col-8 col-md-4'>
                <ProductList product={product}></ProductList>
              </div>
            )}
            </div>
            <div>
                <h3>Our Partners</h3>
                <h5>add partners carousel</h5>
            </div>
            <div>Footer</div>
        </div>
    );
};

export default Home;