import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const EmployeeList=()=>{
    const [list,setList]=useState([]);
    const server = "http://localhost:5000/employee";
    useEffect(()=>{
        axios.get('http://localhost:5000/get-employee')
        .then(res=>{
            setList(res.data);
            //console.log(res.data)
        })
    },[])
    return(
        <div>
            {list.map(emp=>
            <div key={emp._id}>
               {emp.name}||{ server+emp.image }||{emp.designation}||{emp.phone}
            </div>
            )}
        </div>
    )
}

export default EmployeeList;