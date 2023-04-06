import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { AdminContext } from "../../Context/AdminContext";
import './Mygallery.css';
import { Modal } from "react-bootstrap";
// import $ from 'jquery';


const Mygallery=()=>{

    const token = localStorage.getItem('Token');
    const [admin,setAdmin]=useContext(AdminContext);
    const [images,setImages]=useState([]);
    const [disable,setDisable]=useState(false);
    const [msg,setMsg]=useState('');
    const [modalImage,setModalImage]=useState();
    const [deletemodal,setDeletemodal]=useState(false);
    const server = "https://server.scaleiti.com/gallery/";
    const showdeletemodal =(image)=>{ 
        setModalImage(image);
        setDeletemodal(true);
    }
    const hidedeletemodal=()=>{ setDeletemodal(false)}
    const deleteit=(image)=>{
        setDisable(true);
        axios.post('https://server.scaleiti.com/delete-gallery',{token,image})
        .then(res=>{
            setDisable(false);
            setDeletemodal(false);
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
        axios.get('https://server.scaleiti.com/get-gallery')
        .then(res=>{
            console.log(res.data);
            setImages(res.data);
        })
    },[])

    
    return(
    <div className="container my-5">
        <h2 className="my-4"> Gallery</h2>
        <div className="">
         <div className="container-div " >
             <div className="row" >
             {images.map(image=>
             <div className="col-lg-3 col-md-4 col-sm-6 display " key={image._id}>

             <div className="gallery-img mt-5" >
             <img  src={server+image.imageUrl} alt="" class="img-fluid"/>
             {
             admin?
             <button className="btn btn-danger my-1" onClick={()=>{showdeletemodal(image)}}>Delete</button>
             :""
             }
             </div>
           
         </div>

         )}
             </div>
         </div>
        </div>
                    {/* delete modal */}
            <Modal show={deletemodal} onHide={hidedeletemodal} backdrop="static">
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body>
                   <div className="mt-4">
                   This operation permanently delete the file.<br/>
                   Please confirm it to delete.
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-white mx-2 border border-1" onClick={()=>{setDeletemodal(false)}}>Cancel</button>
                    <button className="btn btn-danger mx-2" onClick={()=>{deleteit(modalImage)}}>Confirm</button>
                </Modal.Footer>
            </Modal>
    </div>
    )
}

export default Mygallery;


{/* <div key={image._id} className="m-2">
              <img src={server+image.imageUrl} alt={image.imageUrl}/>
                     
         </div> 
        
        {admin?
              <button className="btn btn-danger" onClick={()=>{deleteit(image)}}>Delete</button>
              :""} 
              <div>{msg}</div>
        
        
        
        
        
        */}