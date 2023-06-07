import React from 'react'

const Wishlist = () => {
    return (
        
        <div>
            <br/>
            <div className=" grid grid-cols-4 gap-2">
                <div className="flex flex-col border w-fit ml-4 ">
                    <div className="flex flex-col text-center p-8 px-20">
                        <img
                            className="h-48 w-auto border p-2 rounded-full"
                            src="./profile-pic.png"
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
                            <a href="/Dashbord/Address.html"> Addresses</a>
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
                <div className='text-center'>
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
                </div>
                <div className='text-center'>
                   
                    <div>
                        <img src='./Shop/12.png' alt=''></img>
                        <p>Formal Women Lowers</p>
                        <p className='text-bold'>$99-$129</p>
                    </div>
                    <div>
                        <img src='./Shop/4.jpeg' alt=''></img>
                        <p>Formal Women Lowers</p>
                        <p className='text-bold'>$99-$129</p>
                    </div>
                   
                </div>
                <div className='text-center'>
                   
                   <div>
                       <img src='./Shop/5.jpeg' alt=''></img>
                       <p>Formal Women Lowers</p>
                       <p className='text-bold'>$99-$129</p>
                   </div>
                  
                  
               </div>
            </div>
        </div>
    )
}

export default Wishlist