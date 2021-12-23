import React from "react";
import Navbar from "../Navbar/Navbar";
import './Login.css';

function Login() {
    return(
        <div>
        <div className="w-full flex items-center justify-center login mt-10 mb-10 p-8">
        <form className="w-full md:w-1/3 bg-white rounded-lg login-form">
            <div className="flex font-bold justify-center mt-6">
                <img className="h-20 w-20 login-image" />
            </div>
            <h2 className="text-3xl text-center text-white mb-4">Login Form</h2>
            <div className="px-12 pb-10 ">
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input type='text' placeholder="Username"
                            className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none login-placeholder" />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10  fas fa-lock'></i>
                        <input type='text' placeholder="Password"
                            className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none login-placeholder" />
                    </div>
                </div>
                        
                <a href="#" className="text-xs text-white float-right mb-4">Forgot Password?</a>
                <button type="submit"
                    className="login-button w-full py-2 rounded-full bg-red-500 text-gray-100  focus:outline-none">Login</button>
            </div>
        </form>
    </div>
    </div>
    )
}

export default Login;