import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//import { AdminContext } from '../../../Context/AdminContext';
import '../../Login/Login.css'
import './AdminPage.css'

const AdminPage = () => {
    const navigate =useNavigate(); 
//    const [admin,setAdmin]=useContext(AdminContext);
    const {id} = useParams();
    const [disable,setDisable]=useState(false);
    const [name,setName]=useState();
    const [cat,setCat]=useState();
    const [madeIn, setMadeIn]= useState('china');
    const [top,setTop]= useState(true);
    const [files, setfiles]=useState();
    const [pdf, setPdf]=useState();
    const [othersImg, setOthersImg]=useState([]);
    const [check,setCheck] = useState(false)
    const token = localStorage.getItem('Token');
    const [msg,setMsg]= useState('');
    const changeName=(e)=>{
       setName(e.target.value)
    }
    const changeCat=(e)=>{
        setCat(e.target.value)
    }
    const changeFile=(e)=>{
        setfiles(e.target.files[0])
        //console.log(e.target.files[0]);
    }
    const changePdf=(e)=>{
        setPdf(e.target.files[0])
    }
    const changeFiles=(e)=>{
        setOthersImg(e.target.files);
    }

    const uploadData=(e)=>{
        e.preventDefault();
        setDisable(true);
        if(token){
            const data = new FormData();
            data.append('token',token);
            data.append('name',name);
            data.append('cat',cat);
            data.append('madeIn',madeIn);
            data.append('top',top);
            data.append('file',files);
            data.append('pdf',pdf);
            data.append('size',othersImg.length);
            for(let i =0; i<othersImg.length;i++)
    
            {
                data.append(`file-${i}`, othersImg[i])
            }
            axios.post('https://server.scaleiti.com/upload',data).then(res=>{
                //console.log(res.data);
                setDisable(false);
                if(res.data.status===200){
                    
                    document.getElementById('name').value='';
                    document.getElementById('cat').value='';
                    setMadeIn('china');
                    setTop(true);
                    setMsg('');
                    document.getElementById('file').value=null;
                    document.getElementById('pdf').value=null;
                    document.getElementById('files').value=null;
                }
                else
                {
                    setMsg(res.data.msg);
                    //console.log(res.data);
                }

            })
        }
        else{
            alert('Access Denied');
        }
    }

    const updateData=(e)=>{
        e.preventDefault();
        setDisable(true);
        if(token){
            const data = new FormData();
            data.append('token',token);
            data.append('id',id);
            data.append('name',name);
            data.append('cat',cat);
            data.append('madeIn',madeIn);
            data.append('top',top);
            data.append('file',files);
            data.append('pdf',pdf);
            data.append('size',othersImg.length);
            for(let i =0; i<othersImg.length;i++)
    
            {
                data.append(`file-${i}`, othersImg[i])
            }
            axios.post('https://server.scaleiti.com/updateproduct',data)
            .then(res=>{
                setDisable(false);
                if(res.data.status===200)
                {
                    
                    navigate('/productslist');
                }
                else
                {
                    setMsg(res.data.msg);
                }

            });
        }
        else
        {
            alert('Access Denied');
        }

    }
    useEffect(()=>{ 
            if(id)
            {
                setCheck(true);
                axios.post('https://server.scaleiti.com/getdetails',{id}).then((res)=>{
                     //console.log(res.data);
                     setName(res.data.name);
                     setCat(res.data.category);
                     setMadeIn(res.data.madeIn);
                     setTop(res.data.top);
                     setCheck(false);

                })
            }
    },[])

    if(check){
        return <div>Loading.....</div>
    }
    return (
        <div className="form-container">
            <h1>This is admin page</h1>
            <form className='m-4'>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor='name'>Product Name</label>
                        <input onChange={changeName} defaultValue={name} id='name' className='form-control' type='text'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='category'>Short Description</label>
                        <input onChange={changeCat} defaultValue={cat} id='cat' className='form-control' type='text'/>
                    </div>
                    <div className='my-2'>
                    {/* onChange={(e)=>{setMadeIn(e.target.value)}} */}
                        <select id="select" value={madeIn} onChange={(e)=>{setMadeIn(e.target.value)}} className="form-select" aria-label="Default select example">
                            <option value="china">Made In China</option>
                            <option value="spain">Made in Spain</option>
                        </select>
                    </div>
                    <div className='my-3 col-md-5'>
                    {/*  */}
                        <input  defaultChecked={top} onChange={()=>{setTop(!top)}} id='top' type='checkbox' className='mx-2'/>
                        <label htmlFor='top'>Add to Top Selling Products</label>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='file'>Upload a Image</label>
                        <input className='form-control' onChange={changeFile} type='file' id='file' name='file'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='pdf'>Upload a PDF</label>
                        <input className='form-control' onChange={changePdf} type='file' id='pdf' name='pdf'/>
                    </div>
                    {!id? 
                    <div className='form-group'>
                        <label className='form-label' htmlFor='files'>Upload Other Images</label>
                        <input className='form-control' onChange={changeFiles} type='file' id='files' name='files' multiple/>
                    </div>
                    :""}
                    {!id?
                    <button  onClick={uploadData} disabled={disable} className='btn btn-primary m-4 login-btn'>Save</button>:
                    <button onClick={updateData} disabled={disable} className='btn btn-primary m-4 login-btn'>Update</button>
                    }
                </div>
                <div>{msg}</div>
            </form>

        </div>
    );
};

export default AdminPage;