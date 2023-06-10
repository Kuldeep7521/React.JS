import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
    const[value,setValue]=useState();
    function handleInput(e){
      setValue({[e.target.name]:e.target.value});
      
      console.log(value);
    };
    return (
    
        <div className=' bg-gray-900 px-32'>
            <div className='grid grid-cols-2'>
                <div className='flex justify-start p-10'>
                    <span className='text-[40px] text-white'>Subscribe to our<br /> newsletter</span>
                </div>
                <div className='flex justify-center items-center'>

                    <input name='Email'value={value} onChange={handleInput} className='bg-gray-900 w-full p-2 border-b-2 text-white' type='email' placeholder='Enter your Email' /><span className='text-white text-4xl border-b-2'>&#8594;</span>


                </div>
                <hr className='border border-white col-span-2' />

            </div>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center gap-5'>
                <img className='h-[76px] w-[72px] m-2' src='./Images/Layer_1.png' alt='' />
                <ul className="flex gap-8  text-white">

                    <li className="hover:text-red-400 border-b-2"><a href="#">About us</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">industry</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Projects</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Blog</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Inquiry</a></li>

                </ul>
                </div>
                <div className=''>
                <button><img className='p-2' src="./Images/G170.png" alt=''/></button>
               <button> <img className='p-2' src="./Images/G171.png" alt=''/></button>
                <button><img className='p-2' src="./Images/G172.png" alt=''/></button>
                </div>
            </div>
            <hr className='border border-white col-span-2' />
            <div className='text-white flex items-center justify-between py-2'>
                <p>© irrigateporous | All right reserved</p>
                <p>Terms of Use | Privacy Policy</p>
            </div>
            <br />
            <br />
            <br />

        </div>
    )
}

export default Footer