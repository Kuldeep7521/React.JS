import React from "react";
import { FaAngleLeft, FaAngleRight,FaArrowRight,FaArrowLeft ,FaHandHoldingWater } from "react-icons/fa"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { GiWaterRecycling } from "react-icons/gi"

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


const Home = () => {
    

    return (
        <div className="">
            
              <Slide>
            <div
                className="bg-no-repeat bg-cover"
                style={{ backgroundImage: "url(/Images/Farm.png)" }}
            >
                
                <div className="grid place-content-center py-52 bg-no-repeat">
                    <img className="absolute left-40 top-60" src="./Images/R182.png" alt="" />
                    <p className="text-white">QUALITY</p>
                    <h1 className="text-6xl text-white bg-no-repeat pr-96 max-[945px]:pr-44 max-md:p-5 max-sm:text-4xl">
                        HIGHLY STRENGTH
                        <br /> AND LONG LASTING
                    </h1>
                </div>
            </div>
            
           
            <div
                className="bg-no-repeat bg-cover"
                style={{ backgroundImage: "url(/Images/Farm.png)" }}
            >
                
                <div className="grid place-content-center py-52 bg-no-repeat">
                    <img className="absolute left-40 top-60" src="./Images/R182.png" alt="" />
                    <p className="text-white">QUALITY</p>
                    <h1 className="text-6xl text-white bg-no-repeat pr-96 max-[945px]:pr-44 max-md:p-5 max-sm:text-4xl">
                        HIGHLY STRENGTH
                        <br /> AND LONG LASTING
                    </h1>
                </div>
            </div>
            </Slide>
            
        
         
            <div className="grid grid-cols-2 max-[974px]:flex flex-col justify-center items-center">
                <div className="max-[974px]:grid grid-cols-2 max-md:flex max-md:flex-col ">
                    <div className="relative top-[10px] left-20 max-lg:left-10 max-sm:left-0 max-sm:flex max-sm:justify-center ">
                        <img
                            className="  h-[552px] w-fit max-xl:w-[428px] max-xl:h-[428px] max-sm:w-[300px] max-sm:h-[300px]  "
                            src="./Images/G127.png"
                            alt=""
                        />
                    </div>

                    <div className="absolute top-[1000px] left-56 max-xl:top-[850px] max-xl:left-40 max-lg:left-32 max-[974px]:relative max-[974px]:top-0 max-[974px]:left-0 ">
                        <span className="text-[320px] max-[974px]:text-[250px] max-[830px]:text-[200px]  text-cyan-600 max-[400px]:text-[100px]">10</span>
                        <span className="max-md:text-[40px] max-sm:text-[20px]">years of experience</span>
                    </div>
                </div>
                <div className="py-28 max-md:text-center">
                    <p className="text-cyan-500">Who We Are</p>
                    <p className="text-[40px]">We focus on</p>
                    <p className="text-[40px]">Sustainability</p>
                    <div>
                        <p className="text-base">
                            {" "}
                            The main background of porous irrigation is to provide a
                            water-
                            <br />efficient and sustainable irrigation system for agriculture.
                            Porous<br /> irrigation systems release water slowly and steadily
                            through small <br /> holes or pores along the length of the pipes,
                            allowing the water to<br /> seep into the soil gradually and directly to
                            the roots of the plants
                        </p>
                    </div>
                    <button className="border border-cyan-500 p-2 rounded-xl text-base my-6">More About Us</button>
                </div>

            </div>
            <div className="bg-regal-blue bg-no-repeat grid grid-cols-2 max-[920px]:grid-cols-1 max-sm:text-center " >
                <div className="pt-72 pl-20 max-[920px]:pt-10 max-[920px]:m-auto max-sm:pl-0">
                    <p className="text-xl text-cyan-500 ">BENIFIT</p>
                    <p className="text-[32px] font-bold">We are strengthening<br /> and making it long<br /> lasting</p>
                    <div className="flex gap-2 p-5 max-sm:justify-center" >
                        <button className="border border-black rounded"><FaAngleLeft /></button>
                        <button className="border border-black rounded"><FaAngleRight /></button>
                    </div>
                </div>
                <div className="bg-no-repeat" style={{ backgroundImage: "url(/Images/image22.png)" }}>
                    <div className="flex gap-3 relative -bottom-72 max-[920px]:bottom-0 max-[920px]:justify-center m-5 max-sm:flex-col max-sm:items-center">
                        <div className="bg-white w-fit p-4 rounded-xl text-center">
                            <div className="bg-white rounded-full m-auto p-2  relative bottom-10 w-fit">
                            <FaHandHoldingWater className="text-blue-600 text-4xl "/>
                            </div>
                            <p className="text-[20px] p-1">Water conservation</p>
                            <p className="text-[16px]">Porous pipes aid in water <br /> conservation by lowering  <br />evaporation and runoff.<br /> Water gets evaporated or <br /> taken away by drainage <br />when water is delivered<br /> directly to the soil.</p>
                        </div>
                        <div className="bg-blue-500 w-fit rounded-xl p-4 text-white text-center">
                            <div className=" bg-blue-600 rounded-full m-auto p-2 relative bottom-10 w-fit">
                            <GiWaterRecycling className="text-4xl"/>
                            </div>
                            <p>Recycle</p>
                            <p>Irrigation porous pipes are<br /> made from recycled<br /> rubber and plastic, As a<br /> result, it is<br /> environmentally friendly.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div>
                <div className="text-center">
                    <p className="text-cyan-500 text-[20px]">OUR PRODUCTS</p>
                    <p className="text-[40px] font-semibold">PRODUCT RANGE</p>
                </div>
                <br />
                <br />
                <div className="grid grid-cols-4  px-24 max-xl:px-10 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    <div className="flex flex-col items-center">
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206.png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(3).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(2).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206.png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(3).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(4).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(4).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                        <div className="font-semibold text-center text-[24px] w-fit">
                            <img src="./Images/R206(2).png" alt="" />
                            <p>Flat Inline Pipe</p>
                            <p>(16mm)</p>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
            <div className="bg-regal-blue">

                <div className="text-center py-14">
                    <p className="text-cyan-500 text-[20px]">APPLICATION</p>
                    <p className="text-[40px]">WHERE TO USE IT</p>
                    <p className="text-[16px] text-gray-700">Porous pipes are used in various applications for the efficient <br /> delivery of water to plants or other areas that require irrigation. Here <br /> are some common applications of porous pipes</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center px-20 max-sm:px-5 max-md:grid-cols-2 max-sm:grid-cols-1">
                    <div className="flex flex-col justify-center bg-white rounded">
                        <img src="./Images/R193.png" alt="" />
                        <p className="text-[24px] p-2">Landscape Irrigation</p>
                    </div>
                    <div className="flex flex-col justify-center bg-white rounded">
                        <img src="./Images/R193(2).png" alt="" />
                        <p className="text-[24px] p-2">Landscape Irrigation</p>
                    </div>
                    <div className="flex flex-col justify-center bg-white rounded">
                        <img src="./Images/R193(3).png" alt="" />
                        <p className="text-[24px] p-2">Landscape Irrigation</p>
                    </div>

                </div>
                <div className="text-center p-5">
                    <button className="bg-blue-300 rounded-full"><RiCheckboxBlankCircleLine /></button>
                    <button><RiCheckboxBlankCircleLine /></button>
                    <button><RiCheckboxBlankCircleLine /></button>
                </div>
                <div className="px-20">
                    <img className="w-full relative -bottom-52" src="./Images/R194.png" alt="" />
                </div>

                <div className="bg-white pt-60">
                    <div className="">
                        <div className="grid grid-cols-2 bg-regal-blue mx-20 max-sm:mx-5 max-md:grid-cols-1 max-md:text-center">
                            <div className="flex justify-center p-10">
                                <img className="relative left-24 max-[583px]:left-12 " src="./Images/G141.png" alt="" />
                                <img className="h-[180px] relative right-60 top-20 max-xl:right-2/4 max-lg:right-2/4 max-lg:h-[142px] max-md:right-2/4 max-md:bottom-2/4 max-[583px]:h-[100px] max-[502px]:h-[40px]" src="./Images/img.png" alt="" />

                            </div>
                            <div className="flex justify-center flex-col">
                                <p className="text-[40px] max-sm:text-[24px]">TESTIMONIAL</p>
                                <p className="text-[16px] text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br/> enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="text-[24px] text-gray-800">Rishabjit</p>
                                <p className="text-[16px] text-gray-600">Manager of crazy bite</p>
                                <div className="flex gap-8 p-2 max-md:justify-center">
                                    <button className="hover:text-cyan-500"><FaArrowLeft/></button>
                                    <button className="hover:text-cyan-500"><FaArrowRight/></button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>


            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <div className="text-center py-10">
                    <p className="text-cyan-500 text-[20px]">BLOGS</p>
                    <p className="text-[40px]">LATEST BLOGS</p>
                </div>
                <div className="grid grid-cols-4 px-20 gap-20 max-lg:grid-cols-2 max-sm:flex max-sm:items-center max-sm:flex-col">
                <div className="">
                    <img className="rounded-t-lg" src="./Images/R86.png"alt=""/>
                    <p className="text-[20px]">Lorem ipsum dolor sit<br/> amet, consec tetur <br/> adipiscing elit,</p>
                    <p className="text-[14px] text-gray-500">21/02/23</p>
                </div>
                <div>
                    <img className="rounded-t-lg" src="./Images/R86(2).png"alt=""/>
                    <p className="text-[20px]">Lorem ipsum dolor sit<br/> amet, consec tetur <br/> adipiscing elit,</p>
                    <p className="text-[14px] text-gray-500">21/02/23</p>
                </div>
                <div>
                    <img className="rounded-t-lg" src="./Images/R86.png"alt=""/>
                    <p className="text-[20px]">Lorem ipsum dolor sit<br/> amet, consec tetur <br/> adipiscing elit,</p>
                    <p className="text-[14px] text-gray-500">21/02/23</p>
                </div>
                <div>
                    <img className="rounded-t-lg" src="./Images/R86(2).png"alt=""/>
                    <p className="text-[20px]">Lorem ipsum dolor sit<br/> amet, consec tetur <br/> adipiscing elit,</p>
                    <p className="text-[14px] text-gray-500">21/02/23</p>
                </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Home;
