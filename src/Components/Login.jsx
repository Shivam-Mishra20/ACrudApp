import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve signup data from localStorage
        const signupData = JSON.parse(localStorage.getItem('signupData')) || [];

        // Retrieve form data
        const { email, password } = formData;

        // Check if there's a matching user
        const user = signupData.find((user) => user.email === email && user.password === password);

        if (user) {
            // User found, log them in
            toast.success('You are logged in successfully ✅');
            localStorage.setItem("loged", true);

            // Redirect after 1 second
            setTimeout(() => {
                navigate('/create'); // Use navigate to navigate to '/create'
            }, 1000);
        } else {
            // No matching user found, show error message
            toast.error('Invalid email or password. Please try again');
        }
    };

    return (
        <div className="flex items-center     justify-center     min-h-screen bg-gradient-to-t from-cyan-500 to-indigo-600" style={{
            backgroundColor: '#00DBDE',
            backgroundImage: ' linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
            minHeight: "calc(100vh - 64px)",
            height: "100%"


        }}>
            <div className=" bg-transparent dark:bg-gray-900 shadow-xl border max-w-[310px] w-full rounded-lg px-4 sm:px-8 py-6 md:py-2" >
                <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-200">Welcome Back!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" autoComplete="email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" autoComplete="current-password" required />
                        <div className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                        </div>
                        <div className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Link to="/signup">Create Account</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                    <p className="text-sm pt-2 text-center">Don't have an account? <Link to="/signup" className="underline">Sign Up</Link></p>
                </form>
                <ToastContainer position="top-center" autoClose={2000} />
            </div>
        </div>
    );
};

export default Login;
