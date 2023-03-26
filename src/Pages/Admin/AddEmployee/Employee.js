import axios from "axios";
import { useEffect, useState } from "react";

const Employee=()=>{
    const [name,setName]=useState();
    const [phone,setPhone]=useState();
    const [desig,setDesig]=useState();
    const [file,setFile]=useState();
    const [list,setList]=useState([]);

    const addEmployee=(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('phone',phone);
        formdata.append('designation',desig);
        formdata.append('file',file);
        axios.post('http://localhost:5000/add-employee',formdata)
        .then(res=>{
            list.push(res.data);
            setName('');
            setPhone('');
            setDesig('');
            setFile('');
            document.getElementById('name').value='';
            document.getElementById('phn').value='';
            document.getElementById('deg').value='';
            document.getElementById('file').value='';
            //console.log(res.data)
        })
    }

    const deleteEmp=(emp)=>{
        axios.post('http://localhost:5000/delete-employee',{id:emp._id,image:emp.image})
        .then(res=>{
            const arr = list.filter((employee)=>{
                return employee._id!== emp._id;
            })
            setList(arr);
        })
    };
    useEffect(()=>{
        axios.get('http://localhost:5000/get-employee')
        .then(res=>{
            setList(res.data);
            //console.log(res.data)
        })
    },[])
    return (
        
        <div>
            <div>Add Employee</div>
            <div className="container mb-4">
            <form>
                <div className="row my-4">
                <div className="col-6">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} className="form-control" type="text" id="name"/>
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="phn">Phone</label>
                    <input onChange={(e)=>{setPhone(e.target.value)}} className="form-control" type="number" id="phn"/>
                </div>
                <div className="col-6">
                    <label className="form-label" htmlFor="deg">Designation</label>
                    <input onChange={(e)=>{setDesig(e.target.value)}} className="form-control" type="text" id="deg"/>
                </div>
                
                <div className="col-6">
                    <label className="form-label" htmlFor='file'>Upload a Image</label>
                    <input onChange={(e)=>{setFile(e.target.files[0])}} className="form-control" type='file' id='file' name='file' required/>
                </div>
                </div>
                <button onClick={addEmployee} className="btn btn-primary" type="submit">Upload</button>
            </form>
            </div>
            <div className="my-4">Employee List</div>
            {
                list.map(emp=>
                  <div key={emp._id} className="my-2">
                    {emp.name}  {emp.phone} 
                    <button onClick={()=>{deleteEmp(emp)}} className="btn btn-danger">Delete</button>
                  </div>  
                )
            }
        </div>
    )
}

export default Employee;