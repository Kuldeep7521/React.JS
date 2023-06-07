import React from 'react'

const Address = () => {
    return (
        <div><>
            <div className="flex">
                <div className="grid grid-cols-1 border w-fit  mx-6">
                    <div className="flex flex-col text-center p-8 px-20">
                        <img
                            className="h-48 w-auto border p-2 rounded-full"
                            src="/profile-pic.png"
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
                <div className="grid grid-cols-2 h-fit gap-5  justify-center mx-auto w-2/3 items-center">
                    <div className="border p-4 h-fit w-full">
                        <p className="text-xl mb-2">Shipping Address</p>
                        <hr className="h-full w-full" />
                        <br />
                        <div className="pr-8">
                            <p className="text-xl">Rajpurohit Kuldeep</p>
                            <p className="text-gray-400">
                                203 Raghav Apartment
                                <br /> Main street,cross road,
                                <br />
                                Navi mumbai-124567
                            </p>
                            <p>Email:</p>
                            <p>Call:</p>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <button className="bg-black text-white px-6 rounded">Edit</button>
                            <button className="bg-black text-white p-2 rounded">Remove</button>
                        </div>
                    </div>
                    <div className="border p-4 h-fit w-full ">
                        <p className="text-xl mb-2">Billing Address</p>
                        <hr className="h-full w-full" />
                        <br />
                        <div className="pr-8">
                            <p className="text-xl">Rajpurohit Kuldeep</p>
                            <p className="text-gray-400">
                                203 Raghav Apartment
                                <br /> Main street,cross road,
                                <br />
                                Navi mumbai-124567
                            </p>
                            <p>Email:</p>
                            <p>Call:</p>
                        </div>
                        <div className="flex gap-2 justify-center">
                            <button className="bg-black text-white px-6 rounded">Edit</button>
                            <button className="bg-black text-white p-2 rounded">Remove</button>
                        </div>
                    </div>
                    <div className="flex flex-col border border-black col-span-2 p-2 text-xl rounded">
                        <button>
                            {" "}
                            <i className="fa-solid fa-plus" /> Add New Address
                        </button>
                    </div>
                </div>
            </div>



            </>
        </div>
        
    )
}

export default Address