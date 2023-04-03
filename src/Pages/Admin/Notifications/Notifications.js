import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NotificationContext } from '../../../Context/NotificationContext';

import './Notification.css';
const Notifications = () => {
    let count=0;
    const [tableData,setTableData]=useState([]);
    const{notification,setNotification}=useContext(NotificationContext);
    useEffect(()=>{
        axios.get('https://server.scaleiti.com/notification')
        .then(response => {
          setTableData(response.data);
          setNotification(response.data);
          
        })
        .catch(error => {
          console.error(error);
        });
    },[])
    const handleDelete=(id)=>{
       axios.post('https://server.scaleiti.com/contactdelete',{id:id}).then(res=>{
           if(res){
               const newtableData=tableData.filter(data=>data._id !==id);
               setTableData(newtableData);
           }
       })
                 
    }
    return (
        <div className="table-responsive">
            <table class="table table-data">
  <thead>
    <tr>
      <th scope="col">Serial</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Query</th>
      

    </tr>

  </thead>
  <tbody>
  {
    tableData.map(data=>
        <tr>
      <th scope="row">{count=count+1}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.Number}</td>
      <td>{data.query}</td>
      
      <td><button className="btn btn-primary" onClick={()=>handleDelete(data._id)}>Delete</button></td>

    </tr>
    )
}
    
    </tbody>
    </table>
        </div>
    );
};

export default Notifications;