import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FiTruck} from "react-icons/fi"
import { RiRefund2Fill } from "react-icons/ri";
import {BiSupport} from "react-icons/bi"

function Login() {
    
    const [values, setValues] = useState({ email: '', password: '' })
    


    const [data, setData] = useState([])
    

    const handleInput = (e) => {

        setValues({ ...values, [e.target.name]: e.target.value })

    }
   

    function handleForm(e) {
        e.preventDefault()
        if (values.email && values.password) {

            document.getElementById("email_error").innerHTML = ""
            document.getElementById("Password_error").innerHTML = ""
        }

        else {


            document.getElementById("email_error").innerHTML = "Enter your Email"
            document.getElementById("Password_error").innerHTML = "Enter your Password"

        }
        setData([...data, values])
    


    }
    
    


    
    function checkEmail() {
        if (values.email === "") {
            document.getElementById("email_error").innerHTML = "Enter your Email"
        }
        else {
            document.getElementById("email_error").innerHTML = ""
        }
    }

    function checkPassword() {
        if (values.password === "") {
            document.getElementById("Password_error").innerHTML = "Enter your Password"
        }
        else {
            document.getElementById("Password_error").innerHTML = ""
            
        }
    }
    const Effect = () => {
        useEffect(() => {
          document.title = "Login"
        }, []);
    }
    Effect();


        return (
            <>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login &amp; Registration</title>
                <div>

                    <div className="grid grid-cols-1 m-auto max-md:grid-cols-1">
                        <div className="border p-10 mx-96">
                            <form className="text-gray-500" onSubmit={handleForm}>
                                <div className="mb-2">
                                    <label className="">Email*</label>
                                    <br />
                                    <input
                                        className="border p-2 w-full"
                                        name='email'
                                        type="text"
                                        placeholder="Email*"
                                        id="email"
                                        value={values.email}
                                        onChange={handleInput}
                                        onBlur={checkEmail}
                                    />
                                    <span
                                        id="email_error"
                                        className="text-xl
                        text-red-700"
                                    ></span>
                                </div>
                                <div className="mb-2">
                                    <label>Password*</label>
                                    <br />
                                    <input
                                        className="border p-2 w-full"
                                        type="Password"
                                        name='password'
                                        placeholder="Password*"
                                        id="Password"
                                        value={values.password}
                                        onChange={handleInput}
                                        onBlur={checkPassword}
                                    />
                                    <span
                                        id="Password_error"
                                        className="text-xl
                            text-red-700"
                                    />
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div>
                                        <input type="checkbox" placeholder="" />
                                        <label>Remember Me</label>
                                    </div>
                                    <Link to={"/Login"}>Forgot Password?</Link>
                                </div>
                                <div className="grid grid-cols-2  gap-1 text-center text-white w-full">
                                    <button type='submit' className="p-3 bg-black">Login</button>
                                    <Link to={"/Register"} className="p-3 bg-black">Register</Link>
                                </div>
                            </form>
                        </div>
                       
                    </div>
                    <br/>
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
                    <br />
                   
                </div>
            </>

        )
    }


export default Login