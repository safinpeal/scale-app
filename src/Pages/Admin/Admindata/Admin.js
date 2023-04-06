import axios from "axios";
import { useState } from "react"
import './admin.css';
import { useContext } from "react";
import { AdminContext } from "../../../Context/AdminContext";

const Admin=()=>{
    const [admin,setAdmin]=useContext(AdminContext);
    const token = localStorage.getItem("Token");
    const [email,setEmail]=useState(admin.email);
    const [password,setPassword]=useState();
    const [newpassword,setNewpassword]=useState();
    const [msg,setMsg]=useState();
    const update=(e)=>{
        e.preventDefault();
        if(token)
        {
            axios.post('https://server.scaleiti.com/update-admin-data',{token,email,password,newpassword})
            .then(res=>{
                if(res.data.modifiedCount==1)
                {
                    setMsg("Successfully Updated")
                }
                else
                {
                    setMsg("Wrong Password Provided");
                }
                document.getElementById('password').value='';
                document.getElementById('newpassword').value='';
            })
        }
        else
        {
            setMsg('Not Authorized');
        }
    }
   return (
    <div className="container admin">
            <h2 className="my-4">Update Your Login Credential</h2>
            <form onSubmit={update}  className="form-login" data-aos="fade-up" >
            <div className="form-row">
                <div className='form-group'>
                    <label htmlFor='password'>Present Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} id='password' className='form-control' type='password'/>
                </div>
                <div className='form-group' >
                    <label htmlFor='email'>Your New Email</label>
                    <input defaultValue={email} onChange={(e)=>setEmail(e.target.value)} id='email' className='form-control' type='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>New Password</label>
                    <input onChange={(e)=>setNewpassword(e.target.value)} id='newpassword' className='form-control' type='password'/>
                </div>
                <button type='submit' className="btn btn-primary login-btn mt-5">Save</button>
            </div>
            <div className="my-4">{msg}</div>
            </form>
            
    </div>
   )
}

export default Admin;