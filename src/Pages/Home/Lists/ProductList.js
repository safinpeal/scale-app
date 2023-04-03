import { Link } from "react-router-dom";
import './ProductList.css';
import '../../Login/Login.css'

function ProductList(props){

    const server = "https://server.scaleiti.com/images/";

    return(
        
          <div className="card trans"data-aos="zoom-in">
            <div className="image">
            <img src={server+props.product.image} className="card-img-top img-fluid card-img" alt="..."/>
            </div>
            <div class="card-body products">
              <h5 className="card-title product-name">{props.product.name}</h5>
              {/* <p class="card-text product-cat">{props.product.category}</p> */}
              <p class="card-text made-in">Made in {props.product.madeIn}</p>
            </div>
            <div class="card-footer">
            <Link to={`/productdetails/${props.product._id}`}>
              <button className="btn btn-primary login-btn">Show Details</button>
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