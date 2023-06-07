import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div>
      <div className="flex">
  <div className="grid grid-cols-1 border w-fit  mx-6">
    <div className="flex flex-col text-center p-8 px-20">
      <img
        className="h-48 w-auto border p-2 rounded-full"
        src="/profile-pic.png"
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
        <i className="fa-solid fa-cart-shopping" /> My Order
      </p>
    </div>
    <hr />
    <div className=" w-full text-xl p-2">
      <p className="p-3">
        {" "}
        <i className="fa-solid fa-heart" /> Wishlist
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
        <a href="/Dashbord/Address.html"> Addresses</a>
      </p>
    </div>
    <hr />
    <div className=" w-full text-xl p-2 ">
      <p className="p-3">
        {" "}
        <i className="fa-solid fa-credit-card" /> Payment Methode
      </p>
    </div>
    <hr />
    <div className=" w-full text-xl p-2">
      <p className="p-3">
        <i className="fa-solid fa-power-off" />
        <a href="/register.html"> Log Out</a>
      </p>
    </div>
  </div>
  <div className="grid grid-cols-2 h-fit gap-5  justify-center mx-auto w-2/3 items-center">
    <div className="flex flex-col bg-gray-100 h-fit w-full py-4 px-24 mb-2">
      <p className="font-bold">Debit/Credit Card</p>
      <br />
      <p className="font-bold">Card Number</p>
      <p className="text-gray-500">1470 **** **** 6325(Visa)</p>
      <br />
      <p className="font-bold">Card Holder</p>
      <p className="text-gray-500">Kuldeep Rajpurohit</p>
      <br />
      <p className="font-bold">Expired</p>
      <p className="text-gray-500">January 2027</p>
      <br />
      <div className="flex gap-2 justify-center">
        <button className="bg-black text-white px-6 rounded">Edit</button>
        <button className="bg-black text-white p-2 rounded">Remove</button>
      </div>
    </div>
    <div className="flex flex-col bg-gray-100 h-fit w-full py-4 px-24">
      <p className="font-bold">Debit/Credit Card</p>
      <br />
      <p className="font-bold">Card Number</p>
      <p className="text-gray-500">1470 **** **** 6325(Visa)</p>
      <br />
      <p className="font-bold">Card Holder</p>
      <p className="text-gray-500">Kuldeep Rajpurohit</p>
      <br />
      <p className="font-bold">Expired</p>
      <p className="text-gray-500">January 2027</p>
      <br />
      <div className="flex gap-2 justify-center">
        <button className="bg-black text-white px-6 rounded">Edit</button>
        <button className="bg-black text-white p-2 rounded">Remove</button>
      </div>
    </div>
    <div className="flex flex-col border border-black col-span-2 p-2 text-xl rounded">
      <button>
        {" "}
        <i className="fa-solid fa-plus" />
        <a href="/Dashbord/Payment_update.html"> Add New Card</a>
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Payment