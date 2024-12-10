import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios to send requests
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Postjobs() {
    const [jobName, setJobName] = useState('');
    const [jobDetails, setJobDetails] = useState('');

    const handleJobNameChange = (e) => setJobName(e.target.value);
    const handleJobDetailsChange = (e) => setJobDetails(e.target.value);

    const postJob = async (e) => {
        e.preventDefault(); 

        if (!jobName || !jobDetails) {
            toast.error('Please fill in all fields', {
                position: 'top-right',
                theme:"dark",
                transition: Zoom 
            });
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/job', {
                jobName,
                jobDetails,
            });
            if (response.status === 200) {
                toast.success('Job posted successfully', {
                    position: 'top-right',
                    theme:"dark",
                    transition: Zoom 
                });
            } else {
                toast.error('Failed to post job', {
                    position: 'top-right',
                    theme:"dark",
                    transition: Zoom 
                });
            }
        } catch (err) {
            if (err.status === 409) {
                toast.warning(`Job name "${jobName}" already exists`, {
                    position: 'top-right',
                    theme:"dark",
                    transition: Zoom 
                });
                return;
            }
            console.error('Error posting job:', err);
            toast.error('An error occurred while posting the job', {
                position: 'top-right',
                theme:"dark",
                transition: Zoom 
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
            <form
                className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg space-y-4"
                onSubmit={postJob}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">Post a Job</h2>

                {/* Job Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Name</label>
                    <input
                        required
                        type="text"
                        value={jobName}
                        onChange={handleJobNameChange}
                        placeholder="Enter Job Name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Job Details */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Job Details</label>
                    <textarea
                        required
                        value={jobDetails}
                        onChange={handleJobDetailsChange}
                        placeholder="Enter Job Details"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                    ></textarea>
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
