import React from 'react'
import { FaCcVisa, FaPaypal, FaGooglePay, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <br />

      <footer>
        <div className="grid grid-cols-6  max-lg:grid-cols-3 max-lg:gap-12 max-md:gap-8 max-sm:flex flex-col bg-black text-white p-5">
          <div className="col-span-2">
            <div className='flex items-center'>
              <img className="h-10 inline" src="./LOGO/Navbar/jacket.png" alt='' /><span className='text-4xl p-1  '>J&K</span>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis
              voluptas, molestias amet recusandae corporis! Dolore nesciunt fugit quod
              sequi voluptas saepe labore, dolorem delectus perferendis
            </p>
            <br />
            <span>Got Question? Call us</span>
            <span className="ml-4">Payment methods</span>
            <br />
            <span>24/7</span>
            <div className="relative left-44 bottom-6 w-fit">
              <FaCcVisa className='text-blue-400 inline m-2' />
              <FaPaypal className='text-blue-500 inline' />
              <FaGooglePay className='text-cyan-500 inline text-4xl m-2' />
            </div>
            <p className="text-orange-500 text-xl">+0123456789</p>
          </div>
          <div className="max-sm:flex flex-col">
            <strong>
              <p>USEFUL LINKS</p>
            </strong>
            <p>About J&amp;K</p>
            <p>How to shop on J&amp;K</p>
            <p>FAQ</p>
            <p>Contact us</p>
            <p>Log in</p>
          </div>
          <div className="f3">
            <strong>
              <p>CUSTOMER SERVICE</p>
            </strong>
            <p>Payment Methods</p>
            <p>Money-back guarantee!</p>
            <p>Returns</p>
            <p>Shipping</p>
            <p>Terms and conditions</p>
          </div>
          <div className="f4">
            <strong>
              <p>MY ACCOUNT</p>
            </strong>
            <p>Sign in</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My Order</p>
            <p>Help</p>
          </div>
          <div className="f5">
            <strong>
              <p>SIGN UP TO NEWSLETTER</p>
            </strong>
            <p>Get the latest news and articles to your inbox every month.</p>
            <br />

            <input
              className="p-2 rounded max-xl:w-36"
              type="email"
              placeholder="Your email Address.."
            />
            <span className="text-blue-500">→</span>

          </div>
        </div>
        <hr className="border-gray-100" />
        <div className="flex place-content-between bg-black text-gray-400 pt-2">
          <p className="madeby">
            Copyright © 2023 J&amp;K Store.All Rights Reserved.
            <a href="">
              <u>Terms of Use</u> /<u>Privacy Policy</u>
            </a>
          </p>
          <div className="flex gap-2 items-center pr-2 pb-2 ">
            <p className="text-gray-400">Social Media</p>
            <FaFacebookF className='text-blue-500' />
            <FaTwitter className="text-cyan-500" />
            <FaInstagram className="text-pink-500" />
            <FaYoutube className="text-red-500" />
            <FaPinterest className=" text-red-500" />
          </div>
        </div>
        <br />
        <br />
      </footer>
    </div>
  )
}

export default Footer