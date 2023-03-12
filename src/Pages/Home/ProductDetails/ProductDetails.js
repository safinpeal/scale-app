import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    const {id} = useParams();
    const server = "http://localhost:5000/images/";
    const [details,setDetails] = useState();
    const [others,setOthers] = useState([]);
    const [check,setCheck] = useState(true);
    useEffect(()=>{
        axios.post('http://localhost:5000/getdetails',{id})
        .then(res=>{

            setDetails(res.data);
            const arr = res.data.othernames.split(',');
            setOthers(arr);
            setCheck(false);
            //console.log(arr);
        })
    },[])
    if(check)
      return <div>Loading..</div>
    else

    return (
        <div>
            <div>This page Showing the Details</div>
            <div>
                <img src={server+details.image}/>
                {others.map((other)=>
                <img key={other} src={server+other} />
                )}
            </div>
        </div>
    )
}

export default ProductDetails;