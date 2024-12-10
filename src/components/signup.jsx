import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSignUp = async (e) => {
        e.preventDefault();

        const { fullName, phoneNumber, password, confirmPassword } = formData;
        
        if (fullName.length===1) {
            toast.error('Please enter your full name', {position: 'top-right',transition: Zoom ,theme:"dark" });
            return;
        }
        if (password.length<8) {
            toast.error('Password must be of 8 digits', { position: 'top-right',transition: Zoom ,theme:"dark" });
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Confirm Passwords do not match.', { position: 'top-right',transition: Zoom ,theme:"dark" });
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/signup', {
                fullName,
                phoneNumber,
                password,
            });

            if (response.data.success) {
                toast.success('Account created successfully!', { position: 'top-right',transition: Zoom ,theme:"dark" });
                navigate('/login');
            } else {
                toast.error(response.data.message || 'Signup failed.', { position: 'top-right',transition: Zoom ,theme:"dark"  });
            }
        } catch (error) {
            console.error('Error during signup:', error);
            toast.error('An error occurred while signing up.', { position: 'top-right',transition: Zoom ,theme:"dark" });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="fullName">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="phoneNumber">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
