import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Applications() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get('http://localhost:3001/applications');
                setApplications(response.data.data);
                console.log(response.data.data);
            } catch (err) {
                toast.error('Error while fetching applications:', err);
            }
        };
        fetchApplications();
    }, []);
    
    const fetchApplications = async () => {
        try {
            const response = await axios.get('http://localhost:3001/applications');
            setApplications(response.data.data);
            console.log(response.data.data);
        } catch (err) {
            toast.error('Error while fetching applications:', err);
        }
    };

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const response = await axios.delete(`http://localhost:3001/applications/${id}`);
            if (response.data.success) {
                toast.success('Application deleted successfully!', {
                    position: 'top-right',
                    theme: 'dark',
                    transition: Zoom,
                });
                setApplications(applications.filter(application => application.id !== id));
                fetchApplications();
            } else {
                toast.error('Error! Please try again.', {
                    position: 'top-right',
                    theme: 'dark',
                    transition: Zoom,
                });
            }
        } catch (error) {
            console.error('Error during DELETE request:', error);
            toast.error('An internal error occurred', {
                position: 'top-right',
                theme: 'dark',
                transition: Zoom,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 md:pl-64 lg:pl-64 xl:pl-64">
            <h2 className="text-2xl font-bold text-center text-gray-800">Applications</h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-6">
                {applications.length > 0 ? (
                    applications.map((application, index) => (
                        <div
                            key={application.id}
                            className="bg-white shadow-md rounded-md p-4 transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">
                                {application.jobTitle}
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Name: {application.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                Email: {application.email}
                            </p>
                            <p className="text-sm text-gray-500">
                                Phone: {application.phone}
                            </p>
                            <p className="text-sm text-gray-500">
                                Address: {application.address}
                            </p>
                            <p className="text-sm text-blue-500 mt-2">
                                Experience: {application.experience}
                            </p>
                            <p className="text-sm text-blue-500 mt-2">
                                Hobbies: {application.hobbies}
                            </p>
                            
                            {/* Delete Button */}
                            <div className="mt-4 text-right">
                                <button
                                    onClick={() => handleDelete(application._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center w-full col-span-full">
                        No applications available at the moment.
                    </p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Applications;
