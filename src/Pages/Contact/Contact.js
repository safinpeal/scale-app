import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { useRef } from 'react';
import axios from 'axios';
import '../Login/Login.css'
import Location from '../Location/Location';
const Contact = () => {
    const yourName= useRef(null);
        const yourEmail=useRef(null);
        const yourNo=useRef(null);
        const yourQuery=useRef(null);
        
    const handleSubmit =(e)=>{
        e.preventDefault();
        const nameValue=yourName.current.value;
        const emailValue=yourEmail.current.value;
        const yourNoValue=yourNo.current.value;
        const yourQueryValue=yourQuery.current.value;
        const formData={
            name:nameValue,
            email:emailValue,
            Number:yourNoValue,
            query:yourQueryValue
        }

        console.log(formData);
        axios.post('http://localhost:5000/contactinfo',formData).then(res=>{
            console.log(res.data);
        })
        

    }
    return (
        <div>
            
                     <h1 data-aos="zoom-in-right">Drop your query </h1>
                     <h4 data-aos="zoom-in-left">We will contact you soon</h4>
          
            <form data-aos="zoom-in-left" className='container border border-2 my-5 rounded p-3' onSubmit={handleSubmit}>
                    <div className='row mt-3 g-5'>
                        <div className='col-md'>
                        <label htmlFor='name' className='form-label'>Your Name</label>
                        <input type="text" id="name" className='form-control' ref={yourName}/>
                        </div>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='email'>Your Email</label>
                        <input type="email" id="email" className='form-control' ref={yourEmail}/>
                        </div>
                    </div>
                    <div className='row my-3 g-5'>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='mobile'>Your Phone Number</label>
                        <input type="number" id="phone" className='form-control' ref={yourNo}/>
                        </div>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='text'>Your Query</label>
                        <textarea id="text" className='form-control' ref={yourQuery}></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mb-3 login-btn'>Submit</button>
            </form>
            <div className='mt-5'>
                <h2 className='my-4'>View our location on Google Map</h2>
                <Location></Location>
                {/* //  */}
            </div>
        </div>
    );
};

export default Contact;