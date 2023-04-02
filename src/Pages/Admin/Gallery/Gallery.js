import axios from "axios";
import { useState } from "react"

const Gallery =()=>{
    const token = localStorage.getItem("Token");
    const [file,setFile]=useState();
    const [disable,setDisable]=useState(false);
    const changeFile=(e)=>{
        setFile(e.target.files[0]);
    }
    const saveImage=(e)=>{
        e.preventDefault();
        setDisable(true);
        const data = new FormData();
        data.append('token',token);
        data.append('file',file);
        axios.post('http://localhost:5000/add-gallery',data)
        .then(res=>{
            //console.log(res.data);
            setDisable(false);
            document.getElementById('file').value='';
        })
    }
    return (
    <div>
        <h1>Add Your Gallery Image</h1>
         <form className="mx-5">
                <div className='form-group my-3'>
                    <label className='form-label' htmlFor='file'>Upload a Image</label>
                    <input className='form-control' onChange={changeFile} type='file' id='file' name='file'/>
                </div>
                <button disabled={disable} className="btn btn-primary" onClick={saveImage}>Save</button>
         </form>
    </div>
  )
}
export default Gallery;