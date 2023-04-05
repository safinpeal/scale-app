import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Context/AdminContext";
import './Login.css';

function Login(){
    const navigate = useNavigate();
    const [admin,setAdmin]= useContext(AdminContext);
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg,setMsg]=useState();
    const login=(e)=>{
        e.preventDefault();
        axios.post('https://server.scaleiti.com/login',{email,password}).then(res=>{
            if(res.data.token){
                localStorage.setItem("Token",res.data.token)
                setAdmin(res.data.user);
                navigate('/admin');
            }
            else
            {
                document.getElementById('password').value='';
                setMsg('Wrong Credential')
            }
        })
    }
    if(admin)
    {
        navigate('/admin');
    }
    return(
        <div className="form-container">
            
            <form onSubmit={login}  className="form-login" data-aos="fade-up" >
            <div className="form-row">
                <div className='form-group'>
                    <label htmlFor='email'>Your Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} id='email' className='form-control' type='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} id='password' className='form-control' type='password'/>
                </div>
                <button type='submit' className="btn btn-primary login-btn mt-5">Login</button>
            </div>
            <div className="my-4">{msg}</div>
            </form>
        </div>
    )
}

export default Login;