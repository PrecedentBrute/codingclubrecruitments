import React from "react";
import Navbar from "../Navbar/Navbar";
import './Login.css';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import {useEffect} from 'react';

function Login() {

    useEffect(() => {
        // Update the document title using the browser API
        axios.get("https://cc-api.eastus.cloudapp.azure.com/user-api/getCSRF").then(res => { console.log(res) }).catch(err => { console.log(err) });
    });

    return(
        <div>
        <Fade>
        <div className="w-full flex items-center rounded-lg justify-center login mt-8 mb-10 p-4">
        <form className="w-full md:w-1/3 bg-white rounded-lg login-form">
            <div className="flex font-bold justify-center mt-2">
                <img className="h-20 w-20 login-image" />
            </div>
            <h2 className="text-3xl text-center text-white mb-4 mt-4">Login</h2>
            <div className="px-12 pb-10 ">
                {/*<div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input type='text' placeholder="Username"
                             className="-mx-6 px-8 bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black focus:outline-none" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10  fas fa-lock'></i>
                        <input type='text' placeholder="Password"
                             className="-mx-6 px-8  bg-transparent w-full border-b-2 border-red-500 border-teal-600 bg-teal-400 p-8 rounded px-3 py-2 border-black focus:outline-none" />
                    </div>
                </div>
                        
                <a href="#" className="text-xs text-white float-right mb-4">Forgot Password?</a>
                <button type="submit"
                                className="login-button mt-4 w-full py-2 rounded-full bg-red-500 text-gray-100  focus:outline-none">Login
                </button>*/}

                    <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile+https%3A//www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=https%3A//cc-api.eastus.cloudapp.azure.com/rest-auth/google/callback/&client_id=754009890523-f8r6n04j7k09grmf1auf8c872a7j1nbm.apps.googleusercontent.com&hd=pilani.bits-pilani.ac.in"><div
                        className="login-button text-center mt-4 w-full py-2 rounded-full bg-red-500 text-gray-100  focus:outline-none">Login with BITS Mail
                    </div></a>     
            </div>
        </form>
    </div>
    </Fade>
    </div>
    )
}

export default Login;