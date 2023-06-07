import React from "react";
import { useState } from "react";
import { FaFacebook, FaPinterest, FaStar, FaTwitter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import img from '../images/Shop/1.png'


const Product_Page = () => {
  const [theme, setTheme] = useState(false)
  const [theme2, setTheme2] = useState(true)
  const [theme3, setTheme3] = useState(false)
  return (

    <>
      <br />
      <div className="grid grid-cols-2 px-20 gap-2 max-md:grid-cols-1 max-md:text-center max-xl:px-2 ">
        <div>
          <img src={img} alt="" className="max-md:m-auto" />
        </div>
        <div>
          <br />
          <p className="font-bold text-4xl">Women Striped Shirt Dress</p>
          <div className="flex gap-2 items-center max-md:justify-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-gray-200" />
            <p>(412 Review)</p>
          </div>
          <div className="flex gap-2 items-center max-md:justify-center">
            <span className="text-green-700">
              <del>$199</del>
            </span>
            <span className="text-2xl text-red-600">$110</span>
          </div>
          <div>
            <br />
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nihil voluptatum nesciunt velit eaque quidem soluta necessitatibus
              harum molestiae neque. Quis, molestias praesentium harum fugit
              impedit repudiandae error expedita vero enim est aspernatur beatae
              optio quam dolorum, odit, natus nam eaque atque alias! Molestiae
              voluptate quia mollitia nobis, illo architecto.
            </p>
            <br />
            <p>
              <span className="text-gray-500">Category</span> : One Piece,Women
            </p>
            <p>
              <span className="text-gray-500">SKU</span> :KUMO42568
            </p>

            <br />
          </div>
          <div className="flex gap-2 items-center">
            <input className="border w-20  p-4" type="number" value={1} />
            <button className="text-black bg-gray-300 py-4 px-1 w-full ">
              <FiHeart className="inline-block" /> Wishlist
            </button>
           

          </div>
          <div className="flex mt-1">
          <button className="text-white bg-black p-4 w-full">
              <FaShoppingCart className="inline" /> Add to Cart
            </button>
            
          </div>
          <br />
          <div className="flex items-center gap-1">
            <p>Share :</p>{" "}
            <AiFillTwitterCircle className="inline text-gray-400 text-2xl" />
            <FaFacebook className="inline text-gray-400 text-2xl" />
            <FaPinterest className="inline text-gray-400 text-2xl" />
          </div>
        </div>
      </div>
      <br />
      <div className=" justify-center text-gray-500 text-center">
        <div className="p-2">
          <button className="focus:text-black focus:underline underline-offset-4 decoration-dotted " onClick={() => setTheme(!theme)} >
            DESCRIPTION
          </button>
          {
            theme
          }
          {
            !theme ?
              <div className="text-black">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolor nostrum beatae quaerat magnam ut cum sequi unde nulla porro.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quasi repellat debitis quibusdam alias consequuntur magnam aut minima velit dolorum!</p>
              </div> : ""
          }
        </div>
        <div className="py-2 px-60 max-md:px-12">
          <button className="focus:text-black focus:underline underline-offset-4 decoration-dotted pb-2 " onClick={() => setTheme2(!theme2)}>
            ADDITIONAL INFORMATION
          </button>

          {
            theme2
          }
          {
            !theme2 ?
              <div className="text-black border w-full">
                <div className="">
                  <div className="grid grid-cols-2 items-start w-full px-10">
                    <div className="font-bold p-2">
                      <p>Id</p>
                      <hr />
                      <p>SKU</p>
                      <hr />
                      <p>Color</p>
                      <hr />
                      <p>Size</p>
                      <hr />
                      <p>Weight</p>
                    </div>
                    <div className="text-gray-500 p-2">
                      <p>#12345678</p>
                      <hr />
                      <p>KUM125896</p>
                      <hr />
                      <p>Sky Blue</p>
                      <hr />
                      <p>Xl, 42</p>
                      <hr />
                      <p>450 Gr</p>
                    </div>

                  </div>
                </div>

              </div> : ""
          }
        </div>
        <div>
          <button className="focus:text-black focus:underline underline-offset-4 decoration-dotted" onClick={() => setTheme3(!theme3)}>
            REVIEWS
          </button>
          {
            theme3
          }
          {
            !theme3 ?
              <div className="text-black">
                Here
              </div> : ""
          }
        </div>
      </div>
      <br />
      <div>
        <p className="text-center font-semibold text-xl">Macthing Product</p>
        <br />
        <div>
          <div className="grid grid-cols-5 text-center gap-2 mx-2 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
            <div>
              <img src='./Shop/5.jpeg' alt=''></img>
              <p>Formal Women Lowers</p>
              <p className='text-bold'>$99-$129</p>
            </div>
            <div>
              <img src='./Shop/2.png' alt=''></img>
              <p>Formal Women Lowers</p>
              <p className='text-bold'>$99-$129</p>
            </div>
            <div>
              <img src='./Shop/3.png' alt=''></img>
              <p>Formal Women Lowers</p>
              <p className='text-bold'>$99-$129</p>
            </div>
            <div>
              <img src='./Shop/8.jpeg' alt=''></img>
              <p>Formal Women Lowers</p>
              <p className='text-bold'>$99-$129</p>
            </div>
            <div>
              <img src='./Shop/12.png' alt=''></img>
              <p>Formal Women Lowers</p>
              <p className='text-bold'>$99-$129</p>
            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default Product_Page;
