import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/Shop/1.png";
import {GiCancel} from "react-icons/gi"
const Oder = () => {
    return (
        <div className=' grid grid-cols-3 gap-2 p-2 max-md:grid-cols-1' ><div className="flex flex-col border  w-fit m-auto max-md:text-center  ">
            <div className="flex flex-col text-center p-8 px-20">
                <img
                    className="h-2/3 w-auto border p-2 rounded-full"
                    src="./profile-pic.png"
                    alt='' />
                <p>Kuldeep Rajpurohit</p>
                <p className="text-gray-400">India</p>
            </div>
            <div className="bg-gray-200 w-full">
                <p className="p-3 text-sm">DASHBOARD NAVIGATION</p>
            </div>
            <div className=" w-full text-xl p-2">
                <p className="p-3">
                    {" "}
                    <i className="fa-solid fa-cart-shopping" /> My Order
                </p>
            </div>
            <hr />
            <div className=" w-full text-xl p-2">
                <p className="p-3">
                    {" "}
                    <i className="fa-solid fa-heart" /><Link to={"/Wishlist"}>Wishlist</Link>
                </p>
            </div>
            <hr />
            <div className=" w-full text-xl p-2">
                <p className="p-3">
                    {" "}
                    <i className="fa-solid fa-user" />
                    <a href="/Dashbord/Profile.html"> Profile Info</a>
                </p>
            </div>
            <hr />
            <div className=" w-full text-xl p-2">
                <p className="p-3">
                    {" "}
                    <i className="fa-solid fa-location-dot" />
                    <Link to={"/Address"}>Addresses</Link>
                </p>
            </div>
            <hr />
            <div className=" w-full text-xl p-2 ">
                <p className="p-3">
                    {" "}
                    <i className="fa-solid fa-credit-card" />
                    <Link to={"/Payment"}> Payment Methode</Link>
                </p>
            </div>
            <hr />
            <div className=" w-full text-xl p-2">
                <p className="p-3">
                    <i className="fa-solid fa-power-off" /> Log Out
                </p>
            </div>
        </div>
            <div className='col-span-2'>
                <div className="grid grid-rows-1 border h-fit">
                    <div className='flex h-fit justify-between bg-gray-200 p-2'>
                        <div>
                            <p className='text-gray-500'>Order Number</p>
                            <p className='font-bold'>#1250004123</p></div>
                        <div className='justify-end'>
                            <button className='p-3 bg-black text-white'>Track Order</button>
                        </div>
                    </div>
                    
                    <div className=''>
                        <div className='flex gap-10 p-2 '>
                            <img className='w-20 inline rounded' src={img} alt='' />
                            <div>
                            <p className='text-gray-500'>Dresses</p>
                            <p className='font-semibold'>Women Striped Shirt Dress</p>
                            <p>size:36,color:Red</p>
                            <p className='font-semibold'>$129</p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <p>Status</p>
                                <p className='text-orange-300 bg-yellow-100 p-1 rounded'>In Progress</p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p>Expected date by:</p>
                                <p className='font-semibold'>22 Septamber 2021</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='flex justify-between'>
                            <div className='p-2'>
                            <p className='text-xl'>Cancel Order</p>
                            </div>
                            <div className='p-2'>
                                <p className='text-xl'>Total:$4510</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    )
}

export default Oder