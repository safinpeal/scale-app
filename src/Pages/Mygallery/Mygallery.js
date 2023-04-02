import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { AdminContext } from "../../Context/AdminContext";

const Mygallery=()=>{
    const token = localStorage.getItem('Token');
    const [admin,setAdmin]=useContext(AdminContext);
    const [images,setImages]=useState([]);
    const [disable,setDisable]=useState(false);
    const [msg,setMsg]=useState('');
    const server = "http://localhost:5000/gallery/";
    const deleteit=(image)=>{
        setDisable(true);
        axios.post('http://localhost:5000/delete-gallery',{token,image})
        .then(res=>{
            setDisable(false);
            console.log(res.data)
            if(res.data.response.deletedCount==1)
            {
                const arr = images.filter(item=>{
                    return item._id!==image._id;
                })
                setImages(arr);
            }
            else{
                setMsg('Deletion failed');
            }
        })
    }
    useEffect(()=>{
        axios.get('http://localhost:5000/get-gallery')
        .then(res=>{
            console.log(res.data);
            setImages(res.data);
        })
    },[])
    return(
    <div className="container">
        <h2 className="my-4">My Gallery</h2>
        <div className="">
         {images.map(image=>
         <div key={image._id} className="m-2">
              <img src={server+image.imageUrl} alt={image.imageUrl}/>
              {admin?
              <button className="btn btn-danger" onClick={()=>{deleteit(image)}}>Delete</button>
              :""} 
              <div>{msg}</div>       
         </div>
         )}
        </div>
    </div>
    )
}

export default Mygallery;