import React from 'react'
import { Link } from 'react-router-dom'

const Profileinfo = () => {
    let email = window.localStorage.getItem(`email`)
    let users = window.localStorage.getItem('users')
    users = JSON.parse(users)

    // const userData = users.filter(data => data.email == email && data.password == password)

    // let login_email = document.getElementById('h2').innerHTML =`Email: ${email}`;

    // let login_mobile = document.getElementById("h3").innerHTML = `Mobile No:${users[0].mobile}`


    function findName(email) {
        for (var index = 0; index < users.length; index++) {
            if (users[index].email === `${email}`) {
                let login_name = document.getElementById("userName").innerHTML = `${users[index].name}`
                console.log(`${users[index].name}`)
                //    let login_mobile = document.getElementById("h3").innerHTML = `Mobile No:${users[index].mobile}`
            }
        }

    }
    findName(`${email}`)

    return (
        <div>
            <div className=" grid grid-cols-3 p-2 max-md:grid-cols-1">
                <div className="flex flex-col border  w-fit m-auto max-md:text-center  ">
                    <div className="flex flex-col text-center p-8 px-20">
                        <img
                            className="h-2/3 w-auto border p-2 rounded-full"
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
                            <a href="/Dashbord/Profile.html"> Profile Info</a>
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
                <div class="col-span-2 mr-40">
                <form class="m-2">
                    <div class="grid grid-cols-2 gap-6 mb-2">
                        <div>
                            <label>First Name *</label>
                            <input class="border p-2 w-full" type="text" placeholder="First Name" id="firstName"
                                onblur="checkFirstname()"/>
                            <span id="firstName_error" class="text-red-500"></span>
                        </div>
                        <div>
                            <label>Last Name *</label>
                            <input class="border p-2 w-full" type="text" placeholder="Last Name" id="lastName"
                                onblur="checkLastname()"/>
                            <span id="lastName_error" class="text-red-500"></span>
                        </div>
                    </div>
                    <div class="mb-2">
                        <label>Email*</label>
                        <input class="border p-2 w-full" type="text" placeholder="Email" id="email_2"
                            onblur="checkEmail2()"/>
                        <span id="email_error2" class="text-xl
                                text-red-500"></span>
                    </div>
                    <div class="mb-2">
                        <label>Address*</label><br/>
                        <textarea cols="80" rows="5" class="border"></textarea>
                    </div>
                    <div class="grid grid-cols-2 gap-6 mb-2">
                        <div>
                            <label>Current Password*</label>
                            <input class="border p-2 w-full" type="text" placeholder="Password" id="Password1"
                                onblur="checkPass1()"/>
                            <span id="Password_error1" class="
                                    text-red-500"></span>
                        </div>
                        <div>
                            <label>New Password*</label>
                            <input class="border p-2 w-full" type="text" placeholder="Confirm Password"
                                id="confirm_Password" onblur="checkPass2()"/>
                            <span id="confirmPassword_error" class="
                                    text-red-500"></span>
                        </div>
                    </div>
                    <div class="text-center bg-black text-white w-fit">
                        <button class="p-3" onclick="return validate()">Save Changes</button>
                    </div>

                </form>

            </div>
        </div>
    </div>

         
    )
}
export default Profileinfo