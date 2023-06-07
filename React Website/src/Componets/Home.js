import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiTruck } from "react-icons/fi"
import { RiRefund2Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi"
import { useEffect } from "react";
import { Data } from './Data';
import { useState } from "react";
 import {useDispatch} from "react"
// import { addTocart } from '../Redux/CartSlice';

function Home() {
   
    const Effect = () => {
        useEffect(() => {
            document.title = "Home"
        }, []);
    }
    Effect();
    //  const dispatch = useDispatch();
    
    return (
        <div><>
            <div>
                <div>
                    <div className="grid grid-cols-2   gap-6  m-5 text-center max-md:grid-cols-1">
                        <div
                            className="h-[400px] w-full bg-no-repeat"
                            style={{ backgroundImage: 'url("/img/women.jpeg")' }}
                        >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="text-white m-auto">New Collection</p>
                            <p className="text-white m-auto text-4xl">Shop Women's</p>
                            <br />

                            <Link to={"/Shop"} className="text-white m-auto text-2xl" ><u>Discover Now</u></Link>

                        </div>
                        <div
                            className="h-[400px] w-full bg-no-repeat"
                            style={{ backgroundImage: 'url("/img/men.jpg")' }}
                        >
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p className="text-white m-auto">New Collection</p>
                            <p className="text-white m-auto text-4xl">Shop Men's</p>
                            <br />
                            <Link to={"/Menshop"} className="text-white m-auto text-2xl" ><u>Discover Now</u></Link>


                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 m-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                        <div
                            className="h-[300px] w-full bg-no-repeat flex justify-center items-center"
                            style={{ backgroundImage: 'url("/img/men.jpg")' }}
                        >
                            <div className="">
                                <p className="text-white">
                                    COLLECTION
                                    <br />
                                    <span className="text-2xl">
                                        OFFICE WEAR
                                        <br />
                                        SALE-70% OFF
                                    </span>
                                    <br />
                                    <a className="text-white" href="">
                                        <u>SHOP NOW</u>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="h-[300px] w-full bg-no-repeat flex justify-center items-center"
                            style={{ backgroundImage: 'url("/img/women.jpeg")' }}
                        >
                            <div className="">
                                <p className="">
                                    ACCESSORIES
                                    <br />
                                    <span className="text-2xl">
                                        2023 SUMMER
                                        <br />
                                        SALE-50% OFF
                                    </span>
                                    <br />
                                    <a className="" href="">
                                        <u>SHOP NOW</u>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div
                            className="h-[300px] w-full bg-no-repeat flex justify-center items-center"
                            style={{ backgroundImage: 'url("/img/men.jpg")' }}
                        >
                            <div className="">
                                <p className="text-white">
                                    NEW IN
                                    <br />
                                    <span className="text-2xl">
                                        MEN'S
                                        <br />
                                        CLASSIC WEAR
                                    </span>
                                    <br />
                                    <a className="" href="">
                                        <u>SHOP NOW</u>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 px-44 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-20">
                        <div className="flex items-center gap-2">
                            <FiTruck className='text-4xl' />
                            <p>
                                PAYMENT &amp; DELIVERY
                                <br />
                                Free shipping for orders over $50
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiRefund2Fill className='text-4xl' />
                            <p>
                                RETURN &amp; REFUND
                                <br />
                                Free 100% money back guarantee
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiSupport className='text-4xl' />
                            <p>
                                QUALITY SUPPORT
                                <br />
                                Alway online feedback 24/7
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="bg-gray-200">
                    <div className="text-center">
                        <br />
                        <p className="text-2xl">FEATURED PRODUCT</p>
                        <br />
                        <div className="text-xl">
                            <Link to={"/Shop"}>  <span className="p-5">WOMEN CLOTHING</span></Link>
                            <Link to={"/Menshop"}> <span className="p-5">MENS CLOTHING</span></Link>
                        </div>
                        <div className="grid grid-cols-5 gap-5 px-4 my-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
                            {/* <div className="bg-white mb-5 pb-2  col-span-1 group  z-10">
                                <div className='relative overflow-hidden'>
                                <img className="p-5" src="/New/banner-1.jpeg" alt='' />
                                <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-20 right-0  transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>

                                <p className="text-xl">Founder's Rumbling</p>
                                <p>$20.00</p>
                                <FaStar className='inline text-yellow-500' />
                                <FaStar className='inline text-yellow-500' />
                                <FaStar className='inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                </div>
                            </div> */}

                            {
                                Data.slice(0, 5).map((item) => {
                                    return (
                                        <div className="bg-white mb-5 pb-2  col-span-1 group  z-10">
                                            <div className='relative overflow-hidden'>
                                                <img className="p-5" src={item.image} alt='' />
                                                <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-20 right-0  transition-all duration-300 ease-out">
                                                    Add to Cart
                                                </button>

                                                <p className="text-xl">{item.title}</p>
                                                <p>{item.price}</p>
                                                <FaStar className='inline text-yellow-500' />
                                                <FaStar className='inline text-yellow-500' />
                                                <FaStar className='inline text-yellow-500' />
                                                <FaStar className=' inline text-yellow-500' />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                        <br />
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <br />
                        <p className="text-2xl">NEW ARRIVALS</p>
                        <br />
                        <div className="text-xl">
                            <Link to={"/Shop"}>  <span className="p-5">WOMEN CLOTHING</span></Link>
                            <Link to={"/Menshop"}>  <span className="p-5">MENS CLOTHING</span></Link>
                        </div>

                        <div className="grid grid-cols-5 gap-5 px-4 my-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
                            {
                                Data.slice(5, 10).map((item) => {
                                    return (
                                        <div className="bg-white mb-5 pb-2 col-span-1 group  z-10">
                                            <div className="relative overflow-hidden">

                                                <img className="" src={item.image} alt='' />
                                                <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                                    Add to Cart
                                                </button>
                                                <p className="text-xl">{item.title}</p>
                                                <p>{item.price}</p>
                                            </div>
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />

                                        </div>
                                    )
                                })
                            }
                            {/* <div className="bg-white mb-5  col-span-1 group  z-10 ">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/img/product-06.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Dabi - My Hero Academia</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5  col-span-1 group  z-10 ">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/img/product-09.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Luffy's Gear Fourth Boundman</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5  col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/img/product-15.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Haikyuu! Full Sleeves</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5  col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/img/product-detail-02.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Jotaro Kujo - Jojo's Bizarre</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div> */}
                        </div>
                        <br />
                        <div className="grid grid-cols-5 gap-5 px-4 my-5 max-lg:grid-cols-3 max-sm:grid-cols-2">
                            {
                                Data.slice(10, 15).map((item) => {
                                    return (
                                        <div className="bg-white mb-5 pb-2  col-span-1 group  z-10">
                                            <div className="relative overflow-hidden">
                                                <img className="" src={item.image} alt='' />
                                                <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                                    Add to Cart
                                                </button>
                                                <p className="text-xl">{item.title}</p>
                                                <p>{item.price}</p>
                                            </div>
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />
                                            <FaStar className=' inline text-yellow-500' />
                                        </div>
                                    )
                                })
                            }

                            {/* <div className="bg-white mb-5 col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/Product/24-312x360.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Dabi - My Hero Academia</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5 col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/Product/18.1-312x360.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Luffy's Gear Fourth Boundman</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5 col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/Product/2.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Haikyuu! Full Sleeves</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div>
                            <div className="bg-white mb-5 col-span-1 group  z-10">
                                <div className="relative overflow-hidden">
                                    <img className="" src="/Product/1.jpeg" alt='' />
                                    <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-12 right-0 transition-all duration-300 ease-out">
                                        Add to Cart
                                    </button>
                                    <p className="text-xl">Jotaro Kujo - Jojo's Bizarre</p>
                                    <p>$20.00</p>
                                </div>
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                                <FaStar className=' inline text-yellow-500' />
                            </div> */}
                        </div>
                    </div>
                </div>
                <br />
                <div className="flex justify-center">
                    <button className="border border-gray-300 p-5 text-bold">
                        Load More<span className="p-2">→</span>
                    </button>
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <p className="text-center text-xl">FROM OUR BLOG</p>
                    <br />
                    <div className="grid grid-cols-4 gap-5 px-4 max-lg:grid-cols-2 max-sm:grid-cols-2">
                        <div className="text-center">
                            <img src="/Blog/pexels-mnz-1639729.jpg" alt='' />
                            <p className="text-gray-400">NOV,22,2022,1 Comments</p>
                            <p className="text-xl">Lorem, ipsum dolor.</p>
                            <Link className='text-red-500' to={"/Blog"}>Read More</Link>
                        </div>
                        <div className="text-center">
                            <img src="/Blog/pexels-pixabay-325876.jpg" alt='' />
                            <p className="text-gray-400">NOV,22,2022,5 Comments</p>
                            <p className="text-xl">Lorem, ipsum dolor.</p>
                            <Link className='text-red-500' to={"/Blog"}>Read More</Link>
                        </div>
                        <div className="text-center">
                            <img src="/Blog/pexels-the-th-179909.jpg" alt='' />
                            <p className="text-gray-400">NOV,22,2022,6 Comments</p>
                            <p className="text-xl">Lorem, ipsum dolor.</p>
                            <Link className='text-red-500' to={"/Blog"}>Read More</Link>
                        </div>
                        <div className="text-center">
                            <img src="/Blog/pexels-ylanite-koppens-934069.jpg" alt='' />
                            <p className="text-gray-400">NOV,22,2022,4 Comments</p>
                            <p className="text-xl">Lorem, ipsum dolor.</p>
                            <Link className='text-red-500' to={"/Blog"}>Read More</Link>
                        </div>
                    </div>
                    <br />
                    <div className="bg-gray-200">
                        <div className="text-center">
                            <br />
                            <p className="text-2xl">OUR CUSTOMER SAY</p>
                            <div className="flex justify-center m-5">
                                <img
                                    className="h-20"
                                    src="/Blog/profile-pic-removebg-preview.png"
                                    alt='Blog' />
                            </div>
                            <p className="text-xl">"REALLY GERAT STORE"</p>
                            <br />
                            <p className="text-gray-500">
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                                <br />
                                aut architecto debitis fugit quam ducimus ipsam labore ab facere
                                <br />
                                iste, odio fugiat iure similique est."
                                <br />
                            </p>
                            <br />
                            <p className="text-xl">Rajpurohit Kuldeep</p>
                            <p className="text-gray-500">Customer</p>
                        </div>
                        <br />
                        <div>
                            <div className="grid grid-cols-5 justify-center items-center max-lg:grid-cols-3 max-sm:grid-cols-2">
                                <div className="text-center p-5">
                                    <img
                                        className="h-28"
                                        src="/brand/Louis_Philippe_Logo_Latest-removebg-preview.png"
                                        alt='brand_logo' />
                                </div>
                                <div className="text-center p-5">
                                    <img
                                        className="h-40"
                                        src="/brand/Allen_Solly-removebg-preview.png"
                                        alt='' />
                                </div>
                                <div className="text-center p-5">
                                    <img className="h-28" src="/brand/CK_Calvin_Klein_logo.svg" alt='' />
                                </div>
                                <div className="text-center p-5">
                                    <img className="h-20" src="/brand/H&M-Logo.svg" alt='' />
                                </div>
                                <div className="text-center p-5">
                                    <img className="h-20" src="/brand/Levis-logo-quer.svg" alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
        </div>
    )
}

export default Home