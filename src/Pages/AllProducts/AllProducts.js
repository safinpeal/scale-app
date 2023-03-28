import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../Home/Lists/ProductList";

const AllProducts=()=>{
    const [products,setProducts] =useState([]);
    const [data,setData] = useState([]);
    const changeProducts=(e)=>{
        const cat=e.target.value;

        if(cat!=1)
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
        axios.get('http://localhost:5000/getproducts')
        .then(res=>{
            setProducts(res.data);
            setData(res.data);
        })
    },[])
    return (
        <div className="container mt-3">
            <h2>All Products List</h2>
            <select id="select" className="" onChange={changeProducts}>
                <option value="1" selected>Select Category</option>
                <option value="china">Made In China</option>
                <option value="spain">Made In Spain</option>
            </select>
            <div className='row gy-3 justify-content-center my-4'>
            { products.map((product)=>
              <div key={product._id} className='col-8 col-md-4'>
                <ProductList product={product}></ProductList>
              </div>
            )}
            </div>
        </div>
    )
}


export default AllProducts;