import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImgCont from './ImgCont';

const Signup = () => {
    const [inputval, setInputval] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value, name } = e.target;

        setInputval({
            ...inputval,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputval.username || !inputval.email || !inputval.password) {
            toast.error('All fields are mandatory');
            return;
        }

        if (!inputval.email.includes('@') || (!inputval.email.includes("com"))) {
            toast.error('Please enter a valid email address.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        if (inputval.password.length < 6) {
            toast.error('Password must be at least 6 characters long', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        // If all validations pass, proceed to save data
        localStorage.setItem('signupData', JSON.stringify([inputval]));

        // Clear form fields
        setInputval({
            username: "",
            email: "",
            password: ""
        });

        // Show success message and navigate to login page
        toast.success('Signup successful!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            navigate('/login');
        }, 1000);
    }

    return (
        <div className='container flex flex-wrap items-center justify-evenly px-6' style={{
            backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
            minHeight: "100vh"
        }}>
            <div>
                <div className="w-[320px] max-w-[350px] max-h-sm mt-4">
                    <div className="shadow-xl my-3 mx-auto shadow-black rounded-lg">
                        <div className="max-w-[300px] sm:max-w-sm w-[100%] h-[auto] mx-auto relative flex flex-col py-2 px-4 rounded-2xl text-black bg-white">
                            <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#7747ff]">App</span></div>
                            <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Signup to your account</div>
                            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                <div className="block relative">
                                    <label htmlFor="username" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Username</label>
                                    <input type="text" id="username" value={inputval.username} name='username' maxLength="15" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" autoComplete="user"  onChange={handleChange} />
                                </div>
                                <div className="block relative">
                                    <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
                                    <input type="text" id="email" value={inputval.email} name='email' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" autoComplete="email" onChange={handleChange} />
                                </div>
                                <div className="block relative">
                                    <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
                                    <input type="password" id="password" value={inputval.password} name='password' className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" autoComplete="current-password" onChange={handleChange} />
                                </div>
                                <div>
                                    <a className="text-sm text-[#7747ff]">Forgot your password?</a>
                                </div>
                                <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
                                <p className='text-black text-xs mt-3'>
                                    Do you already have an account? <Link to={'/login'} className='cursor-pointer hover:text-blue-300'>Login</Link>
                                </p>
                            </form>
                            <ToastContainer position="top-center" autoClose={2000} />
                        </div>
                    </div>
                </div>
            </div>
            <ImgCont />
        </div>
    );
}

export default Signup;
