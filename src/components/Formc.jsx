'use client'
import React, {useState} from 'react'


const Formc = () => {
    const [formData, setFormData] = useState({
        name : '',
        email :'',
        message : '',
    })
    const handleChange = (e) => {
       const {name, value} = e.target;
       setFormData({
        ...formData,
        [name]: value,
       })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('FormData',formData);
    }
    return(
        <div>
            <div className='container'>
                <h1>Contact Us</h1>
                <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600' id="name" name='name' type="text" value={formData.name} onChange={handleChange} placeholder='Enter the name' />
                <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600' id='email' name='email' type="email" value={formData.email} onChange={handleChange} placeholder='Enter the email' />
                <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600' id='message' name='message'   type="text" value={formData.message} onChange={handleChange} placeholder='Enter the message' />
                <button type='Submit' onClick={handleSubmit} className='px-4 py-2 bg-red-600'>submit</button>
            </div>
        </div>
    )
}

export default Formc;