import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../Home/Lists/ProductList";
import './AllProduct.css'

const AllProducts=()=>{
    const [products,setProducts] =useState([]);
    const [data,setData] = useState([]);
    const changeProducts=(e)=>{
        const cat=e.target.value;

        if(cat!==1)
        {
            const arr = data.filter((product)=>
               {return cat === product.madeIn}
            );
            setProducts(arr);
        }
        else{
            setProducts(data);
        }
        
    }
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/getproducts')
        .then(res=>{
            setProducts(res.data);
            setData(res.data);
        })
    },[])
    return (
        <div className="container mt-3">
            <h2>All Products List</h2>
            
            <select id="select" className="select-style" onChange={changeProducts}>
                <option className="option" value="1">Select Category</option>
                <option value="china">Made In China</option>
                <option value="spain">Made In Spain</option>
            </select>
            
            <div className='row gy-3 justify-content-center my-4'>
            { products.map((product)=>
              <div key={product._id} className='col-lg-4 col-md-6 col-sm-12'>
                <ProductList product={product}></ProductList>
              </div>
            )}
            </div>
        </div>
    )
}


export default AllProducts;