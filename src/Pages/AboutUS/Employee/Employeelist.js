import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import farukvai from '../../../images/339250653_1554574205051853_2489081205167840794_n.jpg'
import './Employeelist.css'

const EmployeeList=()=>{
    const [list,setList]=useState([]);
    const server = "https://server.scaleiti.com/employee/";
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/get-employee')
        .then(res=>{
            setList(res.data);
            //console.log(res.data)
        })
    },[])
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="image-emp card" data-aos="zoom-in">
                        <img src={farukvai} alt="" className="card-img-top card-img-emp rounded-circle mt-2"  />
                        <div class="card-body text-center">
    <h5 class="card-title title-1">MD. Omor Faruk </h5>
    <h5 class="card-title title-2">CEO</h5>
    <h5 className="name">Innovative Technology International</h5>
    
  </div>
  
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">

                {list.map(emp=>
           <div className="col-lg-4 col-sm-12 col-md-6 mt-5">
                <div key={emp._id}>
              
              <div className="image-emp card " data-aos="zoom-in">
                       <img src={ server+emp.image } alt="" className="card-img-top card-img-emp emp-2 mt-2"  />
                       <div class="card-body text-center">
   <h5 class="card-title title-1"> {emp.name} </h5>
   <h5 class="card-title title-2">{emp.designation}</h5>
   <h5 className="name">Innovative Technology International</h5>
   
 </div>
 <div className="card-footer">
     <p>Mobile: {emp.phone}</p>
 </div>
 
                   </div>
           </div>
           </div>
            )}
                </div>
            </div>
            
        </div>
    )
}

export default EmployeeList;