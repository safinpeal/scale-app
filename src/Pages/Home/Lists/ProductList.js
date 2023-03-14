import { Link } from "react-router-dom";
import './ProductList.css';

function ProductList(props){
    const server = "http://localhost:5000/images/";
    return(
        
          <div className="card h-100 trans">
            <img src={server+props.product.image} className="card-img-top img-fluid" alt="..."/>
            <div class="card-body">
              <h5 className="card-title name">{props.product.name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
            <Link to={`/productdetails/${props.product._id}`}>
              <button className="btn btn-primary">Show Details</button>
            </Link>
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