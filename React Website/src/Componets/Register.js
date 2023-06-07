import React from 'react'
import "./Checkout.css";
import { useEffect, useState } from 'react'

const Register = () => {
    //     const [values, setValues] = useState({fullName:'', phone:'', email: '', password: '' })
    //     const [data, setData] = useState([])



    //     const nameregex = /^[A-Za-z]+$/;

    //     const handleInput = (e) => {
    //       if (!nameregex.test(values.firstname) || values.firstname.length < 3) {
    //         document.getElementById("name_error").innerHTML =
    //           "Please enter firstname";
    //       } else {
    //         document.getElementById("name_error").innerHTML = "";
    //       }
    //       setValues({ ...values, [e.target.name]: e.target.value });
    //     };

    //     const handlePhone = (e) => {
    //         if (values.phone == "" || values.phone.length < 10) {
    //           document.getElementById("phone_error").innerHTML = "Please enter address";
    //         } else {
    //           document.getElementById("phone_error").innerHTML = "";
    //         }
    //         setValues({ ...values, [e.target.name]: e.target.value });
    //       };

    //       const handleEmail = (e) => {
    //         let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    //         if (values.email == "" || !emailregex.test(values.email)) {
    //           document.getElementById("email_error").innerHTML = "Please enter address";
    //         } else {
    //           document.getElementById("email_error").innerHTML = "";
    //         }
    //         setValues({ ...values, [e.target.name]: e.target.value });
    //       };

    //       const handlePassword = (e) => {
    //         if (values.password == "") {
    //           document.getElementById("password_error").innerHTML =
    //             "Please enter password";
    //         } else if (values.password.length < 8) {
    //           document.getElementById("password_error").innerHTML =
    //             "password is greater than 8 ";
    //         } else {
    //           document.getElementById("password_error").innerHTML = "";
    //         }
    //         setValues({ ...values, [e.target.name]: e.target.value });
    //       };

    //       const submit = (e) => {
    //         e.preventDefault(e);

    //         if (
    //           values.firstname === "" ||
    //           values.lastname === "" ||

    //           values.phone === "" ||
    //           values.email === "" ||
    //           values.password === "" ||
    //           values.ordernotes === ""
    //         ) {
    //           alert("Please fill form properly");
    //         } else {
    //           setData([...data, values]);
    //           // console.log(data);
    //           setValues({
    //             fullName: "",

    //             phone: "",
    //             email: "",
    //             password: "",

    //           });
    //         }
    //       };
    //     const Effect = () => {
    //         useEffect(() => {
    //           document.title = "Registrion"
    //         }, []);
    //     }
    //     Effect();
    //     return (
    //         <div> 
    //             <div className="border p-5 m-auto w-1/2" >
    //             <form className="text-gray-500" onSubmit={submit}>
    //                 <div className="grid grid-cols-1 gap-6 mb-2">
    //                     <div>
    //                         <label>Full Name *</label>
    //                         <input
    //                             className="border p-2 w-full"
    //                             type="text"
    //                             placeholder="Full Name"
    //                             id="fullName"
    //                             value={values.fullName}
    //                             onChange={handleInput}
    //                             onblur="checkFirstname()"
    //                         />
    //                         <span id="Name_error" className="text-red-500" />
    //                     </div>

    //                 </div>
    //                 <div className="mb-2">
    //                     <label>Mobile No*</label>
    //                     <input
    //                         className="border p-2 w-full"
    //                         type="text"
    //                         placeholder="Mobile No"
    //                         id="mobile"
    //                         value={values.mobile}
    //                         onChange={handleInput}
    //                         maxLength={10}
    //                         minLength={10}
    //                         onblur="checkMobile()"
    //                     />
    //                     <span id="mobile_error" className="text-xl text-red-500" />
    //                 </div>
    //                 <div className="mb-2">
    //                     <label>Email*</label>
    //                     <input
    //                         className="border p-2 w-full"
    //                         type="text"
    //                         placeholder="Email"
    //                         id="email"
    //                         value={values.email}
    //                         onChange={handleInput}
    //                         onblur="checkemail()"
    //                     />
    //                     <span
    //                         id="email_error"
    //                         className="
    // text-red-500"
    //                     />
    //                 </div>
    //                 <div className="grid grid-cols-1 gap-6 mb-2">
    //                     <div>
    //                         <label>Password*</label>
    //                         <input
    //                             className="border p-2 w-full"
    //                             type="text"
    //                             placeholder="Password"
    //                             id="password"
    //                             values={values.password}
    //                             onChange={handleInput}
    //                             onblur="checkPass()"
    //                         />
    //                         <span
    //                             id="Password_error"
    //                             className="
    //     text-red-500"
    //                         />
    //                     </div>

    //                 </div>
    //                 <p className="p-2 mb-2">
    //                     By registering your details, you agree with our Terms &amp;
    //                     Conditions, and Privacy and
    //                     <br /> Cookie Policy.
    //                 </p>
    //                 <div className="mb-2">
    //                     <input type="checkbox" placeholder="" />
    //                     <label>Sign me up for the Newsletter!</label>
    //                 </div>
    //                 <div className="text-center bg-black text-white w-full">
    //                     <button className="p-3" onclick="return validate()">
    //                         Create An Account
    //                     </button>
    //                 </div>
    //             </form>
    //         </div></div>
    // )
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        country: "",
        address: "",
        city: "",
        state: "",
        postcode: "",
        phone: "",
        email: "",
        password: "",
        ordernotes: "",
    });
    const [data, setData] = useState([]);


    const nameregex = /^[A-Za-z]+$/;

    const handleInput = (e) => {
        if (!nameregex.test(values.firstname) || values.firstname.length < 3) {
            document.getElementById("name_error").innerHTML =
                "Please enter firstname";
        } else {
            document.getElementById("name_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const lastnameHandle = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(values);
        const val = e.target.value;
        if (val == "" || !nameregex.test(val)) {
            document.getElementById("name_error1").innerHTML =
                "Please enter lastname";
        } else {
            document.getElementById("name_error1").innerHTML = "";
        }
    };

    const countryhandle = (e) => {
        let name = "india";
        setValues({ ...values, [e.target.name]: e.target.value });
        let Country_name = e.target.value;
        if (
            Country_name == "" ||
            !nameregex.test(Country_name)
        ) {
            document.getElementById("country_error").innerHTML =
                "Please enter valid name";
        } else {
            document.getElementById("country_error").innerHTML = "";
        }
        // console.log(values);
    };

    const handleaddress = (e) => {
        if (values.address == "") {
            document.getElementById("address_error").innerHTML =
                "Please enter address";
        } else {
            document.getElementById("address_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleState = (e) => {
        if (values.state == "") {
            document.getElementById("state_error").innerHTML = "Please enter address";
        } else {
            document.getElementById("state_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleCity = (e) => {
        if (values.city == "") {
            document.getElementById("city_error").innerHTML = "Please enter address";
        } else {
            document.getElementById("city_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handlePostcode = (e) => {
        let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
        if (values.postcode == null || !regex.test(values.postcode)) {
            document.getElementById("postcode_error").innerHTML =
                "Please enter a valid postcode ";
        } else {
            document.getElementById("postcode_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handlePhone = (e) => {
        if (values.phone == "" || values.phone.length < 10) {
            document.getElementById("phone_error").innerHTML = "Please enter address";
        } else {
            document.getElementById("phone_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleEmail = (e) => {
        let emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (values.email == "" || !emailregex.test(values.email)) {
            document.getElementById("email_error").innerHTML = "Please enter address";
        } else {
            document.getElementById("email_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handlePassword = (e) => {
        if (values.password == "") {
            document.getElementById("password_error").innerHTML =
                "Please enter password";
        } else if (values.password.length < 8) {
            document.getElementById("password_error").innerHTML =
                "password is greater than 8 ";
        } else {
            document.getElementById("password_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleNotes = (e) => {
        if (values.ordernotes == "") {
            document.getElementById("notes_error").innerHTML = "Please enter address";
        } else {
            document.getElementById("notes_error").innerHTML = "";
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault(e);
        

        if (
            values.firstname === "" ||
            values.lastname === "" ||
            values.country === "" ||
            values.address === "" ||
            values.city === "" ||
            values.state === "" ||
            values.postcode === "" ||
            values.phone === "" ||
            values.email === "" ||
            values.password === ""
        ) {
            alert("Please fill form properly");
        } else {
            setData([...data, values]);
            // console.log(data);
            setValues({
                firstname: "",
                lastname: "",
                country: "",
                address: "",

                city: "",
                state: "",
                postcode: "",
                phone: "",
                email: "",
                password: "",
                ordernotes: "",
            });
        }
    };
    return (
        <>
            <div className=" my-10">

                <div className="mx-60 py-4  border border-black ">

                    <div className='text-center'><p className='text-2xl font-semibold'>User Regisration</p></div>
                    <form action="" onSubmit={submit}>
                        <div className="flex justify-center gap-5">
                            <div className="checkout">
                                <div className="flex gap-5 my-4 ">
                                    <div className="">
                                        <label htmlFor="">
                                            First Name
                                            <samp className="text-red-500 text-sm">*</samp>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="pl-4 h-12 w-[23rem] my-2 input_checkout "
                                            name="firstname"
                                            value={values.firstname}
                                            onChange={handleInput}
                                        />{" "}
                                        <br />
                                        <span
                                            id="name_error"
                                            className="text-sm text-red-600 font-bold relative bottom-2"
                                        ></span>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            Last Name <samp className="text-red-500 text-sm">*</samp>{" "}
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                                            name="lastname"
                                            value={values.lastname}
                                            // onBlur={lastnameHandle}
                                            onChange={lastnameHandle}
                                        />{" "}
                                        <br />
                                        <span
                                            id="name_error1"
                                            className="text-sm text-red-600 font-bold relative bottom-2"
                                        ></span>
                                    </div>
                                </div>
                                <label htmlFor="">
                                    Country <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="India"
                                    className=" pl-4 h-12 w-full my-4"
                                    name="country"
                                    value={values.country}
                                    onChange={countryhandle}
                                />
                                <span
                                    id="country_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <br />
                                <label htmlFor="">
                                    Address <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Street address"
                                    className="pl-4 h-12  w-full my-4"
                                    name="address"
                                    value={values.address}
                                    onChange={handleaddress}
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="Apartment,Suit,Unite etc"
                                    className=" pl-4 h-12 w-full mb-4"
                                    name="address"
                                // value={values.address}
                                // onChange={handleInput}
                                />{" "}
                                <span
                                    id="address_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <br />
                                <label>
                                    Town / city <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    className=" pl-4 h-12 w-full my-4"
                                    name="city"
                                    value={values.city}
                                    onChange={handleCity}
                                />
                                <span
                                    id="city_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <br />
                                <label htmlFor="">
                                    Country/State <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    className="pl-4 h-12 w-full my-4"
                                    name="state"
                                    value={values.state}
                                    onChange={handleState}
                                />
                                <span
                                    id="state_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <br />
                                <label htmlFor="">
                                    postcode /Zip <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    className="pl-4 h-12 w-full my-4"
                                    name="postcode"
                                    value={values.postcode}
                                    onChange={handlePostcode}
                                />
                                <span
                                    id="postcode_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <div className="flex gap-5 my-3">
                                    <div className="">
                                        <label htmlFor="">
                                            Phone <samp className="text-red-500 text-sm">*</samp>
                                        </label>{" "}
                                        <br />
                                        <input
                                            type="text"
                                            className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handlePhone}
                                        />{" "}
                                        <br />
                                        <span
                                            id="phone_error"
                                            className="text-sm text-red-600 font-bold relative bottom-2"
                                        ></span>
                                    </div>
                                    <div>
                                        <label htmlFor="">
                                            Email <samp className="text-red-500 text-sm">*</samp>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            id=""
                                            className="pl-4 h-12 w-[23rem] my-2 input_checkout"
                                            name="email"
                                            value={values.email}
                                            onChange={handleEmail}
                                        />{" "}
                                        <br />
                                        <span
                                            id="email_error"
                                            className="text-sm text-red-600 font-bold relative bottom-2"
                                        ></span>
                                    </div>
                                </div>
                                

                                <br />
                                <label htmlFor="">
                                    Account Password{" "}
                                    <samp className="text-red-500 text-sm">*</samp>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id=""
                                    className="pl-4 h-12 w-full my-4"
                                    name="password"
                                    value={values.password}
                                    onChange={handlePassword}
                                />
                                <br />
                                <span
                                    id="password_error"
                                    className="text-sm text-red-600 font-bold relative bottom-2"
                                ></span>
                                <br />
                                <div className='text-center text-white'>
                                    <button className="p-3 bg-black" onclick="return validate()"> Create An Account</button>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register