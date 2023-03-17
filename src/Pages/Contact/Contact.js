import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { useRef } from 'react';
import axios from 'axios';

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
            
            <h1>This is contact us page</h1>
            <div>Tell ous about your query</div>
            <form className='container border border-2 rounded p-3' onSubmit={handleSubmit}>
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
                    <button type='submit' className='btn btn-primary mb-3'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;