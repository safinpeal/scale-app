import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Context/AdminContext";

function Login(){
    const navigate = useNavigate();
    const [admin,setAdmin]= useContext(AdminContext);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',{email,password}).then(res=>{
            if(res.data.token){
                localStorage.setItem("Token",res.data.token)
                setAdmin(res.data.user);
                navigate('/admin');
            }
        })
    }
    return(
        <div>
            This is the login page
            <form onSubmit={login}>
            <div className="form-row">
                <div className='form-group col-md-5'>
                    <label htmlFor='email'>Your Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} id='email' className='form-control' type='email'/>
                </div>
                <div className='form-group col-md-5'>
                    <label htmlFor='password'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} id='password' className='form-control' type='password'/>
                </div>
                <button type='submit' className="btn btn-primary">Login</button>
            </div>
            </form>
        </div>
    )
}

export default Login;