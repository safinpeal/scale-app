import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../Context/AdminContext";

const ProtectedAdmin=({children})=>{
    const navigate = useNavigate();
    const token = localStorage.getItem('Token');
    const [admin,setAdmin] = useContext(AdminContext)
    const [check, setCheck] = useState(true);
    useEffect(()=>{
        if(token){
            axios.post('http://localhost:5000/check-authentication',{token})
            .then((res)=>{
                if(res.data.id)
                {
                    setAdmin(res.data);
                    setCheck(false);
                    
                }
                else
                {
                    navigate('/login');
                }
            })
            
        }
        else
        {
            navigate('/login');
        }

    },[token])
    if(check)
       return (<div>Loading...</div>)
    return children;
}

export default ProtectedAdmin;