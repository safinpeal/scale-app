import { Link } from "react-router-dom";
import './ProductList.css';
import { AdminContext } from "../../../Context/AdminContext";
import { useContext } from "react";
import axios from "axios";

function ProductList(props){
    const [admin,setAdmin]=useContext(AdminContext);
    const server = "http://localhost:5000/images/";
    const edititem=(product)=>{
      console.log(product);
    };
    const deleteitem=(product)=>{
      axios.post('http://localhost:5000/deleteproduct',{product})
      .then(res=>{
        console.log(res.data);
      })
      //console.log(product);
    };
    return(
        
          <div className="card h-100 trans">
            <img src={server+props.product.image} className="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
              <h5 className="card-title name">{props.product.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            {admin?<button onClick={()=>edititem(props.product)} className="btn btn-warning mx-1"> Edit</button> :""}
            <Link to={`/productdetails/${props.product._id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
            {admin?<button onClick={()=>{deleteitem(props.product)}} className="btn btn-danger mx-1"> Delete</button> :""}
            
            </div>
          
        
</div>



        // <div className="border rounded-md p-3">
        //     <img src={server+props.product.image} className="img-fluid"/>
        //     <div className="name">{props.product.name}</div>
        //     <div className="category">{props.product.category}</div>
        //     <Link to={`/productdetails/${props.product._id}`}>
        //        <button className="btn btn-primary">Show Details</button>
        //     </Link>
        // </div>
    )
}


export default ProductList;