import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const ImageController=()=>{
    const [file,setFile]=useState();
    const [images,setImages]= useState([]);
    const [modal, setModal] = useState(false);
    const [modalImage, setModalImage]= useState('');
    const server = "http://localhost:5000/CarouselImage/";
    const showModal =(image)=>{ 
        setModalImage(image);
        setModal(true);
    }
    const hideModal =()=>{ setModal(false);}
    const changeFile=(e)=>{
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }
    const UploadImage=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file',file);
        axios.post('http://localhost:5000/add-image',formdata)
        .then(res=>{
            images.push(res.data);
            setFile('');
            document.getElementById('file').value='';
            //console.log(res.data);
        })
    }

    const deleteImage=(image)=>{
      axios.post('http://localhost:5000/delete',{id:image._id,name:image.imageUrl})
      .then(res=>{
        console.log(res.data);
        const arr = images.filter((img)=>{
            return img._id!== image._id;
        })
        setImages(arr);
      })
    };
    useEffect(()=>{
        axios.get('http://localhost:5000/carousel-image')
        .then((res)=>{
            setImages(res.data);
            //console.log(res.data);
        })
    },[])

    return(
        <div>
            <div>Image Upload</div>
            <form className="mb-5">
                <div className="m-3">
                    <label htmlFor='file'>Upload a Image</label>
                    <input onChange={changeFile} type='file' id='file' name='file' required/>
                </div>
                <div><button className="btn btn-primary" onClick={UploadImage}>Upload</button></div>
            </form>

            <div>Image List</div>
            {
                images.map(image=>
                <div key={image._id} className="my-2">
                    {image.imageUrl}
                    <button className="btn btn-primary mx-2" onClick={()=>{showModal(image.imageUrl)}}>Preview</button>
                    <button className="btn btn-danger mx-2" onClick={()=>{deleteImage(image)}}>Delete</button>
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
        </div>
        
    )
}

export default ImageController;