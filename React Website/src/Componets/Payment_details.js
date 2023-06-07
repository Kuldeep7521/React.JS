import React from 'react'

const Payment_details = () => {
  return (
    <div>
        <div className=" grid grid-cols-3">
    <div className="flex flex-col border w-fit ml-28  m-2">
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
          <a href="/Dashbord/Address.html">Addresses</a>
        </p>
      </div>
      <hr />
      <div className=" w-full text-xl p-2 ">
        <p className="p-3">
          {" "}
          <i className="fa-solid fa-credit-card" />
          <a href="/Dashbord/Payment.html"> Payment Methode</a>
        </p>
      </div>
      <hr />
      <div className=" w-full text-xl p-2">
        <p className="p-3">
          <i className="fa-solid fa-power-off" /> Log Out
        </p>
      </div>
    </div>
    <div className="col-span-2 mr-40">
      <form className="m-2">
        <div className="grid grid-cols-2 gap-6 mb-2">
          <div>
            <label>First Name *</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="First Name"
              id="firstName"
              onblur="checkFirstname()"
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
              onblur="checkLastname()"
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
            onblur="checkEmail2()"
          />
          <span
            id="email_error2"
            className="text-xl
                                text-red-500"
          />
        </div>
        <div className="mb-2">
          <label>Address*</label>
          <br />
          <textarea cols={80} rows={5} className="border" defaultValue={""} />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-2">
          <div>
            <label>Current Password*</label>
            <input
              className="border p-2 w-full"
              type="text"
              placeholder="Password"
              id="Password1"
              onblur="checkPass1()"
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
              onblur="checkPass2()"
            />
            <span
              id="confirmPassword_error"
              className="
                                    text-red-500"
            />
          </div>
        </div>
        <div className="text-center bg-black text-white w-fit">
          <button className="p-3" onclick="return validate()">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Payment_details