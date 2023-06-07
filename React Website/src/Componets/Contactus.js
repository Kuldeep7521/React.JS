import React from 'react'

const Contactus = () => {
    return (
        <div>  <p className='font-semibold text-center text-3xl p-2'>Get in Touch</p>
            <div className='grid grid-cols-3 px-28'>
                <div>
                    <div className='p-2'>
                        <p className='text-xl text-red-600'>Make a Call</p>
                        <br/>
                        <p className='text-gray-500'>
                            1354 Green Street Nashville Drive Dodge City,
                        </p>
                        <p  className='text-gray-500'>KS 67801 United States</p>
                        <p  className='text-gray-500'>Email: kuldeepraj5081@gmail.com</p>
                    </div>
                    <div className='p-2'>
                        <p className='text-xl text-red-600'>Make a Call</p>
                        <br/>
                        <p className='font-semibold'>
                            Customer Care:
                        </p>
                        <p  className='text-gray-500'>+91 458 753 6924</p>
                        <p className='font-semibold'>Careers::
                        </p>
                        <p  className='text-gray-500'>+91 965 784 23658
                        </p>
                    </div>
                    <div className='p-2'>
                        <p className='text-xl text-red-600'>Drop A Mail</p>
                        <br/>
                        <p  className='text-gray-500'>
                        Fill out our form and we will contact you within 24 hours.
                        </p>
                        <p  className='text-gray-500'> kuldeepraj5081@gmail.com</p>
                        <p  className='text-gray-500'> kuldeepraj5081@gmail.com
                        </p>
                        
                    </div>
                </div>
                <div className='col-span-2 p-2'>
                  
                    <label className=''>Your Name*</label>
                    <input className='border w-full p-2' type='text' placeholder='Your Name'/>
                    
                    <label>Your Email*</label>
                    <input className='border w-full p-2' type='text' placeholder='Your Email'/>
                    <label>Subject*</label>
                    <input className='border w-full p-2' type='text' placeholder='Type your Subject'/>
                    <label>Message*</label>
                    <textarea className='border w-full p-2' type='text' placeholder='Your Name'/>
                    <button className='bg-black text-white p-3 '>Send Message</button>

                </div>

            </div>
        </div>
    )
}

export default Contactus