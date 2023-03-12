import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../../Context/AdminContext';

const AdminPage = () => {
    const [admin,setAdmin]=useContext(AdminContext);
    //console.log(admin);
    const [name, setName]=useState();
    const [cat, setCat]=useState();
    const [files, setfiles]=useState();
    const [othersImg, setOthersImg]=useState([]);
//    const[imgs,setImgs]=useState([]);
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeCat=(e)=>{
        setCat(e.target.value)
    }
    const changeFile=(e)=>{
        setfiles(e.target.files[0])
        console.log(e.target.files[0]);
    }
    const changeFiles=(e)=>{
        setOthersImg(e.target.files);
    }

    const uploadData=(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('name',name);
        data.append('cat',cat);
        data.append('file',files);
        data.append('size',othersImg.length);
        for(let i =0; i<othersImg.length;i++)

        {
            data.append(`file-${i}`, othersImg[i])
        }
        axios.post('http://localhost:5000/upload',data).then(res=>{
            console.log('ok');

        })
    }
    // useEffect(()=>{ 
    //     axios.get('http://localhost:5000/getproducts').then((res)=>{
    //         console.log(res.data);
    //         setImgs(res.data);
    //     })
    // },[])
    return (
        <div>
            <h1>This is admin page</h1>
            <form className='m-4' onSubmit={uploadData}>
                <div className='form-row'>
                    <div className='form-group col-md-5'>
                        <label htmlFor='name'>Product Name</label>
                        <input onChange={changeName} id='name' className='form-control' type='text'/>
                    </div>
                    <div className='form-group col-md-5'>
                        <label htmlFor='category'>Category</label>
                        <input onChange={changeCat} id='category' className='form-control' type='text'/>
                    </div>
                    <div>
                        <label htmlFor='file'>Upload a Image</label>
                        <input onChange={changeFile} type='file' id='file' name='file'/>
                    </div>
                    <div>
                        <label htmlFor='files'>Upload Other Images</label>
                        <input onChange={changeFiles} type='file' id='files' name='files' multiple/>
                    </div>
                    <button type='submit' className='btn btn-primary m-4'>Upload</button>
                </div>
            </form>
            {/* <div>            
                {imgs.map(x=>
                <div key={x._id}>
                    <img src={server+x.image}/>
                    {
                      x.othernames.split(',').map((name)=>
                      <div key={name}>
                        <img src={server+name}/>
                      </div>)
                    }
                </div>
                 )}
            </div> */}

        </div>
    );
};

export default AdminPage;