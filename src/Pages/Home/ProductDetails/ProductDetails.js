import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../../../Context/AdminContext";
import './ProductDetails.css';

function ProductDetails(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [admin,setAdmin]=useContext(AdminContext);
    const server = "http://localhost:5000/images/";
    const [details,setDetails] = useState();
    const [others,setOthers] = useState([]);
    const [check,setCheck] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage]= useState('');
    const token = localStorage.getItem('Token');
    const [msg, setMsg]=useState('');
    const [disable,setDisable]=useState(false);
    const showModal =(image)=>{ 
        setModalImage(image);
        setModal(true);
    }
    const hideModal =()=>{ setModal(false);}
    const edititem=(product)=>{ 
        navigate('/admin/'+product._id);
    }
    const deleteitem=(product)=>{
        setDisable(true);
        if(token){
            axios.post('http://localhost:5000/deleteproduct',{product,token})
            .then(res=>{
              //console.log(res.data);
              setDisable(false);
              if(res.data.response.deletedCount===1)
              {
                 navigate('/productslist') 
              }
              else
              {
                setMsg(res.data.msg);
              }
            })
        }
    }
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
            <h4>Product Details</h4>
            <div className="container">
                <div className="row">
                   <div className="col border border-2 rounded mt-5">
                      <img id="image" onClick={()=>{showModal(details.image)}} height="100%" width="100%" src={server+details.image} title="click to see full image" alt={details.image}/>
                    </div> 
                   <div className="col mt-5">
                     {others.map((other)=>
                        <img id="image" alt={other} onClick={()=>{showModal(other)}} className="m-2 border border-2 rounded" width="80%" height="200px" key={other} src={server+other} title="click to see full image"/>
                     )}
                   </div>
                </div>
                
                {admin?<button onClick={()=>edititem(details)} className="btn btn-warning mx-1"> Edit</button> :""}
                {admin?<button onClick={()=>{deleteitem(details)}} disabled={disable} className="btn btn-danger mx-1"> Delete</button> :""}
                <div>{msg}</div>
            </div>
            {/* modal */}
            <Modal size="lg" show={modal} onHide={hideModal} backdrop="static">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={server+modalImage} width="100%" height="100%" alt={modalImage}/>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProductDetails;