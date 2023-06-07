import React from 'react'
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import {FiTruck} from "react-icons/fi"
import { RiRefund2Fill } from "react-icons/ri";
import {BiSupport} from "react-icons/bi"


function Profile() {
  const Effect = () => {
    useEffect(() => {
      document.title = "User Profile"
    }, []);
}
Effect();
  return (
    <>
      <>
  <div className=" grid grid-cols-3 p-2 max-md:grid-cols-1">
    <div className="flex flex-col border  w-fit m-auto max-md:text-center  ">
      <div className="flex flex-col text-center p-8 px-20">
        <img
          className="h-2/3 w-auto border p-2 rounded-full"
          src="./profile-pic.png"
        alt=''/>
        <p>Kuldeep Rajpurohit</p>
        <p className="text-gray-400">India</p>
      </div>
      <div className="bg-gray-200 w-full">
        <p className="p-3 text-sm">DASHBOARD NAVIGATION</p>
      </div>
      <div className=" w-full text-xl p-2">
        <p className="p-3">
          {" "}
          <i className="fa-solid fa-cart-shopping" /><Link to="/Order"> My Order</Link>
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
          <Link to={"/Profileinfo"}> Profile Info</Link>
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
    <div className="col-span-2 max-xl:mr-auto max-lg:m-2">
      <form className="m-2">
        <div className="grid grid-cols-2 gap-6 mb-2 max-lg:grid-cols-1">
          <div>
            <label>First Name *</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="First Name"
              id="firstName"
              onBlur="checkFirstname()"
            />
            <span id="firstName_error" className="text-red-500" />
          </div>
          <div>
            <label>Last Name *</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="Last Name"
              id="lastName"
              onBlur="checkLastname()"
            />
            <span id="lastName_error" className="text-red-500" />
          </div>
        </div>
        <div className="mb-2">
          <label>Email*</label>
          <input
            className="border p-2 w-full"
            type="text"
            placeholder="Email"
            id="email_2"
            onBlur="checkEmail2()"
          />
          <span
            id="email_error2"
            className="text-xl
                          text-red-500"
          />
        </div>
        <div className="mb-2 max-lg:flex flex-col">
          <label>Address*</label>
          <br />
          <textarea cols={80} rows={5} className="border" defaultValue={""} />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-2  max-lg:grid-cols-1">
          <div>
            <label>Current Password*</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="Password"
              id="Password1"
              onBlur="checkPass1()"
            />
            <span
              id="Password_error1"
              className="
                              text-red-500"
            />
          </div>
          <div>
            <label>New Password*</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="Confirm Password"
              id="confirm_Password"
              onBlur="checkPass2()"
            />
            <span
              id="confirmPassword_error"
              className="
                              text-red-500"
            />
          </div>
        </div>
        <div className="text-center bg-black text-white w-fit">
          <button className="p-3" onClick="return validate()">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  <br />
  <hr />
  <br />
  <div className="grid grid-cols-3 px-44 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-20">
                        <div className="flex items-center gap-2">
                           <FiTruck className='text-4xl'/>
                            <p>
                                PAYMENT &amp; DELIVERY
                                <br />
                                Free shipping for orders over $50
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                           <RiRefund2Fill className='text-4xl'/>
                            <p>
                                RETURN &amp; REFUND
                                <br />
                                Free 100% money back guarantee
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiSupport className='text-4xl'/>
                            <p>
                                QUALITY SUPPORT
                                <br />
                                Alway online feedback 24/7
                            </p>
                        </div>
                    </div>
</>

    </>
  )
}

export default Profile