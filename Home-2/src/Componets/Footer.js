import React, { useState } from 'react'
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
    const[value,setValue]=useState();
    function handleInput(e){
      setValue({[e.target.name]:e.target.value});
      
      console.log(value);
    };
    return (
    
        <div className=' bg-gray-900 px-32 max-sm:px-10'>
            <div className='grid grid-cols-2 max-sm:flex max-sm:flex-col'>
                <div className='flex justify-start p-10'>
                    <span className='text-[40px] text-white'>Subscribe to our<br /> newsletter</span>
                </div>
                <div className='flex justify-center items-center'>

                    <input name='Email'value={value} onChange={handleInput} className='bg-gray-900 w-full p-2 border-b-2 text-white' type='email' placeholder='Enter your Email' /><span className='text-white text-4xl border-b-2'>&#8594;</span>


                </div>
                <hr className='border border-white col-span-2' />

            </div>
            <div className='flex items-center justify-between py-5 max-[960px]:grid max-[960px]:grid-rows-2 max-md:grid-cols-1 '>
                <div className='flex items-center gap-5 max-md:flex-col'>
                <img className='h-[76px] w-[72px] m-2' src='./Images/Layer_1.png' alt='' />
                <ul className="flex gap-4  text-white max-sm:flex-col max-sm:text-center ">

                    <li className="hover:text-red-400 border-b-2"><a href="#">About us</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">industry</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Projects</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Blog</a></li>
                    <li className="hover:text-red-400 border-b-2"><a href="#">Inquiry</a></li>

                </ul>
                </div>
                <div className='max-md:flex justify-center'>
                <button><img className='p-2' src="./Images/G170.png" alt=''/></button>
               <button> <img className='p-2' src="./Images/G171.png" alt=''/></button>
                <button><img className='p-2' src="./Images/G172.png" alt=''/></button>
                </div>
            </div>
            <hr className='border border-white col-span-2' />
            <div className='text-white flex items-center justify-between py-2 max-sm:flex-col'>
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