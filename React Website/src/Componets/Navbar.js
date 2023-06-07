import React from 'react'
import { Link } from "react-router-dom"; 
import { FiPhone ,FiSearch ,FiShoppingCart } from "react-icons/fi";
import { FaRegHeart ,FaRegUser } from "react-icons/fa";



function Navbar(props) {

    return (
        <div>
            <div className="">
                <nav className="p-2 flex items-center justify-between max-md:flex-col bg-gray-100">
                    <div className="">
                        <span className="text-base text-gray-500"> USD &#709; </span>

                        <span className="text-base text-gray-500">ENG &#709;</span>
                    </div>
                    <ul className="flex items-center max-sm:flex-col max-sm:text-3xl  max-sm:w-full">
                        <li>
                            <FiPhone className="h-4 inline items-center text-gray-500"/><span
                                className="text-base p-2 text-gray-500 hover:text-black">CALL:+0123 456 789</span>
                        </li>
                        <li>
                           <FaRegHeart className="h-4 inline items-center text-gray-500"/>
                            <Link className="text-base text-gray-500 p-2 hover:text-black " to={"/Wishlist"}>MY WISHLIST(3)</Link>
                        </li>
                        <li><Link className="text-base p-2 text-gray-500 hover:text-black" to={"/About"}>ABOUT US</Link></li>
                        <li>
                            <Link className="text-base p-2 text-gray-500 hover:text-black" to={"/Contactus"}>CONTACT US</Link>
                        </li>
                        <li>
                            <FaRegUser className="h-4 inline items-center text-gray-500"/><Link
                            className="text-base p-2 text-gray-500 hover:text-black" id="userName" to="/Login">LOGIN</Link>
                        </li>

                    </ul>
                </nav>
                <nav className="flex justify-between max-md:grid grid-cols-1 max-md:justify-center">
                    <ul className="flex items-center max-md:flex-col max-md:text-2xl max-sm:mt-2">
                        <li className='flex max-sm:flex-col items-center'>
                            <img className="h-10 inline "
                                src="./LOGO/Navbar/jacket.png" alt='' /><span className='text-4xl p-1 '>J&K</span>
                        </li>
                        <li>
                            <Link className="text-base hover:text-orange-500 p-2" to="/Home">HOME &#709;</Link>
                        </li>
                        <li>
                            <Link className="text-base hover:text-orange-500 p-2" to={"/Shop"}>SHOP &#709;</Link>
                        </li>
                      
                        <li>
                        <Link className="text-base hover:text-orange-500 p-2" to={"/Product_Page"}>PAGE &#709;</Link>
                        </li>
                        <li>
                        <Link className="text-base hover:text-orange-500 p-2" to={"/Blog"}>BLOG &#709;</Link>
                        </li>
                        <li>
                            <Link className="text-base hover:text-orange-500 p-2" to="/Profile">PROFILE &#709;</Link>
                        </li>
                    </ul>
                    <div className="max-md:w-fit max-md:px-12 max-md:m-auto max-sm:px-18">
                        <input className="m-1 p-3 hover:text-black" type="text" placeholder="Search Product" />
                        <FiSearch className='inline text-2xl max-sm:text-xl text-gray-500 hover:text-black'/>
                        <FiShoppingCart className='inline text-2xl max-sm:text-xl text-gray-500 m-2 hover:text-black'/>
                    </div>
                </nav>
            </div></div>
    )
}

export default Navbar