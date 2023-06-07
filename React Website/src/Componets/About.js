import React from "react";
import img from "../images/Shop/about-1.png";
import img2 from "../images/Shop/about-2.png";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="grid grid-cols-2 px-28 items-center">
                <div className="">
                    <p className="font-bold text-4xl">We Have Everything You Need ?</p>
                    <p className="p-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                        aliquid accusamus labore, inventore aut numquam voluptates! Quaerat,
                        accusantium! Dolorem eligendi similique earum nihil id esse. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, modi.
                    </p>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                        assumenda sed minima ullam laborum odio? Commodi officiis aperiam
                        facere quia perferendis beatae dignissimos soluta? Nobis? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Dolor, non
                        perferendis eum ab aperiam ratione nulla et! A, deleniti. Quo optio
                        aut et perspiciatis. Ut.
                    </p>
                    <br/>
                    <Link to={"/Blog"} className="bg-black text-white text-center p-4">See More Info</Link>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>

            </div>
            <div className="grid grid-cols-2 px-28 items-center">
                <div className="">
                <img src={img2} alt="" />
                </div>
                <div>
                    
                    <p className="font-bold text-4xl">Justin Lisiakir</p>
                    <p className="p-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
                        aliquid accusamus labore, inventore aut numquam voluptates! Quaerat,
                        accusantium! Dolorem eligendi similique earum nihil id esse. Lorem
                        ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, modi.
                    </p>
                    <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                        assumenda sed minima ullam laborum odio? Commodi officiis aperiam
                        facere quia perferendis beatae dignissimos soluta? Nobis? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Dolor, non
                        perferendis eum ab aperiam ratione nulla et! A, deleniti. Quo optio
                        aut et perspiciatis. Ut.
                    </p>
                    <br/>
                    <Link to={"/Blog"} className="bg-black text-white text-center p-4">See More Info</Link>
                </div>

            </div>
        </div>
    );
};

export default About;
