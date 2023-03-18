import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

function ProductDetails(){
    const {id} = useParams();
    const server = "http://localhost:5000/images/";
    const [details,setDetails] = useState();
    const [others,setOthers] = useState([]);
    const [check,setCheck] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage]= useState('');
    const showModal =(image)=>{ 
        setModalImage(image);
        setModal(true);
    }
    const hideModal =()=>{ setModal(false);}
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
            <div className="container">
                <div className="row">
                   <div className="col border border-2 rounded mt-5">
                      <img id="image" onClick={()=>{showModal(details.image)}} height="100%" width="100%" src={server+details.image} title="click to see full image"/>
                    </div> 
                   <div className="col mt-5">
                     {others.map((other)=>
                        <img id="image" onClick={()=>{showModal(other)}} className="m-2 border border-2 rounded" width="80%" height="200px" key={other} src={server+other} title="click to see full image"/>
                     )}
                   </div>
                </div>
                

            </div>
            {/* modal */}
            <Modal size="lg" show={modal} onHide={hideModal} backdrop="static">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={server+modalImage} width="100%" height="100%"/>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProductDetails;