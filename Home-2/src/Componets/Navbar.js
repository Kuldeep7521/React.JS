import React from 'react'

const Navbar = () => {
    return (
        <div>
           
            <div className=" max-sm:text-black max-sm:text-right p-4 justify-between flex items-center max-md:flex-col gap-5">

                <img className='h-[76px] w-[72px]' src='./Images/Layer_1.png'alt=''/>
                <div className="menu">
                    <ul className="flex max-sm:flex-col  gap-4 px-4 text-base   items-center justify-center">

                        <li className="hover:text-cyan-500"><a href="#">About us</a></li>
                        <li className="hover:text-cyan-500"><a href="#">industry</a></li>
                        <li className="hover:text-cyan-500"><a href="#">Projects</a></li>
                        <li className="hover:text-cyan-500"><a href="#">Blog</a></li>
                        <li className="hover:text-cyan-500"><a href="#">Inquiry</a></li>

                    </ul>
                </div>

                
                <button className='border border-black w-fit mr-14 max-md:mr-0 p-2 rounded-md text-[16px]'>Contact</button>
            </div>

        </div>
    )
}

export default Navbar