import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const Employee=()=>{
    const [name,setName]=useState();
    const [phone,setPhone]=useState();
    const [desig,setDesig]=useState();
    const [file,setFile]=useState();
    const [list,setList]=useState([]);
    const token = localStorage.getItem('Token');
    const [msg, setMsg]=useState('');
    const [modaldata,setModaldata]=useState();
    const [deletemodal,setDeletemodal]=useState(false);
    const [disable,setDisable]=useState(false);
    const showdeletemodal =(image)=>{ 
        setModaldata(image);
        setDeletemodal(true);
    }
    const hidedeletemodal=()=>{ setDeletemodal(false)}
    const addEmployee=(e)=>{
        e.preventDefault();
        setDisable(true);
        if(token)
        {
        const formdata = new FormData();
        formdata.append('token',token);
        formdata.append('name',name);
        formdata.append('phone',phone);
        formdata.append('designation',desig);
        formdata.append('file',file);
        axios.post('https://server.scaleiti.com/add-employee',formdata)
        .then(res=>{
            setDisable(false);
            if(res.data.status==200)
            {
                list.push(res.data.response);
                setName('');
                setPhone('');
                setDesig('');
                setFile('');
                document.getElementById('name').value='';
                document.getElementById('phn').value='';
                document.getElementById('deg').value='';
                document.getElementById('file').value='';
                setMsg('');
            }
            else
            {
                setMsg(res.data.msg);
            }
            //console.log(res.data)
        })
        }
        else
        {
           alert('Access Denied');
        }
    }

    const deleteEmp=(emp)=>{
        if(token){
            axios.post('https://server.scaleiti.com/delete-employee',{id:emp._id,image:emp.image,token})
            .then(res=>{
                setDeletemodal(false);
                //console.log(res.data);
                if(res.data.status==0)
                {
                    setMsg(res.data.msg);     
                }
                else{
                    const arr = list.filter((employee)=>{
                        return employee._id!== emp._id;
                    })
                    setList(arr);
                }

            })
        }
        else
        {
           alert('Access Denied');
        }
    };
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/get-employee')
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
                    <input onChange={(e)=>{setPhone(e.target.value)}} className="form-control" type="text" id="phn"/>
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
                <button disabled={disable} onClick={addEmployee} className="btn btn-primary" type="submit">Upload</button>
                <div>{msg}</div>
            </form>
            </div>
            <div className="my-4">Employee List</div>
            {
                list.map(emp=>
                  <div key={emp._id} className="my-2">
                    {emp.name}  {emp.phone} 
                    <button onClick={()=>{showdeletemodal(emp)}} className="btn btn-danger">Delete</button>
                    <div>{msg}</div>
                  </div>  
                )
            }
            {/* delete modal */}
            <Modal show={deletemodal} onHide={hidedeletemodal} backdrop="static">
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body>
                   <div className="mt-4">
                   This operation permanently delete the file.<br/>
                   Please confirm it to delete.
                   </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-white mx-2 border border-1" onClick={()=>{setDeletemodal(false)}}>Cancel</button>
                    <button className="btn btn-danger mx-2" onClick={()=>{deleteEmp(modaldata)}}>Confirm</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Employee;