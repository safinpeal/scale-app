import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Contact = () => {
    return (
        <div>
            
            <h1>This is contact us page</h1>
            <div>Tell ous about your query</div>
            <form className='container border border-2 rounded p-3'>
                    <div className='row mt-3 g-5'>
                        <div className='col-md'>
                        <label htmlFor='name' className='form-label'>Your Name</label>
                        <input type="text" id="name" className='form-control'/>
                        </div>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='email'>Your Email</label>
                        <input type="email" id="email" className='form-control'/>
                        </div>
                    </div>
                    <div className='row my-3 g-5'>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='mobile'>Your Phone Number</label>
                        <input type="number" id="phone" className='form-control'/>
                        </div>
                        <div className='col-md'>
                        <label className='form-label' htmlFor='text'>Your Query</label>
                        <textarea id="text" className='form-control'></textarea>
                        </div>
                    </div>
                    <button type='submit' className='btn btn-primary mb-3'>Submit</button>
            </form>
        </div>
    );
};

export default Contact;