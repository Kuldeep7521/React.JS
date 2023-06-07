import React from "react";
import Slider from "@mui/material/Slider";
import { useState,useEffect } from "react";
import { Data } from './Data';


import { FaChevronDown } from "react-icons/fa";

const Menshop = () => {
  const [show, setShow] = useState(true);
  const [show2, setshow2] = useState(true);
  const [show3, setshow3] = useState(true);
  const [show4, setshow4] = useState(true);
  const [show5, setshow5] = useState(true);
  const [range, setRange] = React.useState([5, 30]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  const Effect = () => {
    useEffect(() => {
      document.title = "Menshop"
    }, []);
}
Effect();
  return (
    <div>
      <div
        style={{ backgroundImage: 'url("./Banner/Men.png")' }}
        className="bg-cover"
      >
        <div className="grid grid-rows-2 justify-start items-center p-32 max-lg:flex flex-col ">
          <div>
            <button className="text-4xl text-semibold">Shop</button>
          </div>

          <div>
            <ul className="flex gap-8">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="p-2">File Path</div>
      <hr />
      <br />
      <div className="grid grid-cols-4 m-2 gap-10 max-lg:grid-cols-2 gap-2 max-md:grid-cols-1 gap-2">
        <div className="col-span-1 border p-4 h-fit w-full items-center max-lg:col-span-2 text-center">
          <p>CATEGORIES</p>
          <div className="flex flex-col">
            <button
              className="w-full p-2 text-left text-xl  "
              onClick={() => setShow(!show)}
            >
              Shoes{" "}
              <FaChevronDown className="inline float-right text-gray-500 h-4  " />
            </button>
            {!show ? (
              <div className=" flex flex-col px-2 items-start">
                <button>Pumps & high Heals</button>
                <button>Sandels</button>
                <button>Sneakers</button>
                <button>Boots</button>
                <button>Casual Shoes</button>
                <button>Flats Sandel</button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div className="flex flex-col">
              <button
                className="w-full p-2 text-left text-xl "
                onClick={() => setshow2(!show2)}
              >
                {" "}
                <FaChevronDown className="inline float-right text-gray-500 h-4  " />
                Clothing
              </button>
              {!show2 ? (
                <div className=" flex flex-col px-2 items-start">
                  <button>Blazers</button>
                  <button>Men Suits</button>
                  <button>Coat Pant</button>
                  <button>T-Shirts</button>
                  <button>Men Shirts</button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <button
              className="w-full p-2 text-left text-xl "
              onClick={() => setshow3(!show3)}
            >

              <FaChevronDown className="inline float-right text-gray-500 h-4  " />
              Watches
            </button>
            {
              !show3 ? <div className="flex flex-col items-start px-2">
                <button>Casual Watches</button>
                <button>Fashion Watches</button>
                <button>Girls Watches</button>
                <button>Smart Watches</button>
              </div> : ""
            }

          </div>
          <div className="flex flex-col">

            <button
              className="w-full p-2 text-left text-xl "
              onClick={() => setshow4(!show4)}
            >

              <FaChevronDown className="inline float-right text-gray-500 h-4  " />Bags</button>
            {
              !show4 ? <div className="flex flex-col items-start px-2">
                <button>Casual Bags</button>
                <button>Sport Bags</button>
                <button>Lugges bags</button>
                <button>Fashion Bags</button>
                <button>Small Bags</button>
              </div> : ""
            }

          </div>
          <div className="flex flex-col">

            <button
              className="w-full p-2 text-left text-xl "
              onClick={() => setshow5(!show5)}
            >

              <FaChevronDown className="inline float-right text-gray-500 h-4  " />Accessories</button>
            {
              !show5 ? <div className="flex flex-col items-start px-2">
                <button>Men Wallet</button>
                <button>Men Belt</button>
                <button>Hats</button>
                <button>Jwelery</button>
                <button>Beauty</button>
                <button>Cosmetic</button>
              </div> : ""
            }

          </div>
          <br />
          <hr />

          <div>PRICING</div>
          <div>
            <Slider
              value={range}
              onChange={handleChanges}
              valueLabelDisplay="auto"
            />
            <span className="font-extrabold t">${range[0]} </span> -{" "}
            <span className="font-extrabold"> ${range[1]}</span>
          </div>
          <br />
          <hr />
          <div>SIZE</div>
          <br />
          <div className="gird gird-rows-2 ">
            <div className="" >
              <button className="border w-fit py-2 px-3 m-1 rounded">26</button>
              <button className="border w-fit py-2 px-3 m-1 rounded">28</button>
              <button className="border w-fit py-2  px-3 m-1 rounded">30</button>
              <button className="border w-fit py-2 px-3 m-1 rounded">32</button>
              <button className="border w-fit py-2 px-3 m-1 rounded">34</button>
            </div>
            <div className="">
              <button className="border w-fit py-2  m-1 px-3 rounded">36</button>
              <button className="border w-fit py-2 m-1 px-3 rounded">38</button>
              <button className="border w-fit py-2 m-1 px-3 rounded">40</button>
              <button className="border w-fit py-2 m-1 px-3 rounded">42</button>
            </div>
          </div>
          <br />
          <hr />
          <div className="flex flex-col gap-1">
            <p>BRANDS</p>

            <label className="">
              <input type="checkbox" />
              Samsung
            </label>
            <label>
              <input type="checkbox" />
              Apple
            </label>
            <label>
              <input type="checkbox" />
              Nike
            </label>
            <label>
              <input type="checkbox" />
              Reebok
            </label>
            <hr />

            <div className=" flex flex-col gap-2 ">
              <p>GENDER</p>

              <label>
                <input type="checkbox" />
                Male
              </label>
              <label>
                <input type="checkbox" />
                Female
              </label>
            </div>
            <hr />

            <div className="flex flex-col gap-2">
              <p>DISCOUNT</p>
              <label>
                <input type="checkbox" />
                80% Discount
              </label>
              <label>
                <input type="checkbox" />
                60% Discount
              </label>
              <label>
                <input type="checkbox" />
                50% Discount
              </label>
              <label>
                <input type="checkbox" />
                40% Discount
              </label>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-5 col-span-3 text-center max-xl:grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1">
        {Data.slice(21, 26).map((item) => {
            return (
              <div className="col-span-1 group  z-10">
                <div className="relative overflow-hidden">
                  <img src={item.image} alt="" />
                  <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 right-0 group-hover:bottom-0 transition-all duration-300 ease-out">
                    Add to Cart
                  </button>
                </div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            )
          })}
          {/* <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men1.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0   group-hover:block absolute -bottom-10  group-hover:bottom-0 right-0 transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div>
          <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men2.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-0 right-0  transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div>
          <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men3.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-0 right-0  transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div>
          <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men4.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-0 right-0  transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div>
          <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men5.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-0 right-0  transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div>
          <div className="col-span-1 group  z-10">
            <div className="relative overflow-hidden">
              <img src="/Product/Men2.jpeg" alt="" />
              <button className="bg-black text-white w-full p-2 -z-0  group-hover:block absolute -bottom-10 group-hover:bottom-0 right-0  transition-all duration-300 ease-out">
                Add to Cart
              </button>
            </div>
            <p>product name</p>
            <p>$ 199</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Menshop;
