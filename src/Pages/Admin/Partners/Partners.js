import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Partners=()=>{
    const [file,setFile]=useState();
    const [images,setImages]= useState([]);
    const [modal, setModal] = useState(false);
    const [deletemodal, setDeletemodal] = useState(false);
    const [modalImage, setModalImage]= useState('');
    const [disable,setDisable]=useState(false);
    const server = "https://server.scaleiti.com/partners/";
    const token = localStorage.getItem('Token');
    const [msg,setMsg]= useState('');
    const showModal =(image)=>{ 
        setModalImage(image);
        setModal(true);
    }
    const showdeletemodal =(image)=>{ 
        setModalImage(image);
        setDeletemodal(true);
    }
    const hidedeletemodal=()=>{ setDeletemodal(false)}
    const hideModal =()=>{ setModal(false);}
    const changeFile=(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const UploadImage=(e)=>{
        e.preventDefault();
        setDisable(true);
        if(token){
            const formdata = new FormData();
            formdata.append('file',file);
            formdata.append('token',token);
            axios.post('https://server.scaleiti.com/add-partners',formdata)
            .then(res=>{
                setDisable(false);
                if(res.data.status==200)
                {
                    images.push(res.data.response);
                    setFile('');
                    setMsg('');
                    document.getElementById('file').value='';
                }
                else
                {
                    setMsg(res.data.msg);
                }

                //console.log(res.data);
            })
        }
        else
        {
            alert('Access Denied');
        }
    }

    const deleteImage=(image)=>{
        if(token){
            axios.post('https://server.scaleiti.com/delete-partners',{id:image._id,name:image.imageUrl,token})
            .then(res=>{
                setDeletemodal(false);
                if(res.data.status==200)
                {
                    const arr = images.filter((img)=>{
                        return img._id!== image._id;
                    })
                    setImages(arr);
                    setMsg('');
                }
                else
                {
                    setMsg(res.data.msg);
                }

            })
        }
        else
        {
            alert("Access Denied");
        }
    };
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/partners-image')
        .then((res)=>{
            setImages(res.data);
            //console.log(res.data);
        })
    },[])

    return(
        <div>
            <h2 className="my-3">Partners Logo Controller</h2>
            <form className="mb-5">
                <div className="m-3">
                    <label htmlFor='file'>Upload a Image</label>
                    <input onChange={changeFile} type='file' id='file' name='file' required/>
                </div>
                <div><button disabled={disable} className="btn btn-primary" onClick={UploadImage}>Upload</button></div>
                <div>{msg}</div>
            </form>

            <div>Image List</div>
            {
                images.map(image=>
                <div key={image._id} className="my-2">
                    {image.imageUrl}
                    <button className="btn btn-primary mx-2" onClick={()=>{showModal(image.imageUrl)}}>Preview</button>
                    <button className="btn btn-danger mx-2" onClick={()=>{showdeletemodal(image)}}>Delete</button>
                    <div>{msg}</div>
                </div>
                )
            }
            {/* modal */}
            <Modal size="lg" show={modal} onHide={hideModal} backdrop="static">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <img src={server+modalImage} width="100%" height="100%" alt={modalImage}/>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
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
                    <button className="btn btn-danger mx-2" onClick={()=>{deleteImage(modalImage)}}>Confirm</button>
                </Modal.Footer>
            </Modal>
        </div>
        
    )
}

export default Partners;