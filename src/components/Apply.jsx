import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Apply(props) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        experience: '',
        hobbies: '',
        jobTitle: props.applyName || 'Choose Again', // From props and unchangeable
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key] && key !== 'jobTitle') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Posting each field individually
            const response = await axios.post('http://localhost:3001/applications', {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                address: formData.address,
                experience: formData.experience,
                hobbies: formData.hobbies,
                jobTitle: formData.jobTitle, // jobTitle is from props
            });

            if (response.data.success) {
                toast.success('Application submitted successfully!', {
                    position: 'top-right',
                    theme: 'dark',
                    transition: Zoom,
                });

                // Reset form data
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    experience: '',
                    hobbies: '',
                    jobTitle: props.applyName || 'Choose Again', // Keep jobTitle unchanged
                });
                setErrors({});
            } else {
                toast.error('Error! Please try again.', {
                    position: 'top-right',
                    theme: 'dark',
                    transition: Zoom,
                });
            }
        } catch (error) {
            console.error('Error during POST request:', error);
            toast.error('An internal error occurred', {
                position: 'top-right',
                theme: 'dark',
                transition: Zoom,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full sm:max-w-sm md:max-w-lg lg:max-w-xl space-y-4"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Apply for a Job</h2>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Enter Your Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Enter Your WhatsApp Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email Address"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>

                {/* Residential Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Residential Address</label>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Your Address"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.address && <span className="text-red-500 text-xs">{errors.address}</span>}
                </div>

                {/* Experience */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Experience in Detail</label>
                    <textarea
                        id="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        placeholder="Describe your experience"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                    {errors.experience && <span className="text-red-500 text-xs">{errors.experience}</span>}
                </div>

                {/* Hobbies */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Your Hobbies</label>
                    <input
                        type="text"
                        id="hobbies"
                        value={formData.hobbies}
                        onChange={handleChange}
                        placeholder="Your Hobbies"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    {errors.hobbies && <span className="text-red-500 text-xs">{errors.hobbies}</span>}
                </div>

                {/* Job Title */}
                <div>
                    <label className="block text-sm font-bold text-red-700">Your Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={formData.jobTitle} // Job title comes from props and is unchangeable
                        className="mt-1 block w-full text-blue-700 font-semibold p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        disabled // Making jobTitle read-only
                    />
                    {errors.jobTitle && <span className="text-red-500 text-xs">{errors.jobTitle}</span>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md shadow hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}
