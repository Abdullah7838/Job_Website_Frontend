import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllJobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchAllJobs();
    }, []);

    const fetchAllJobs = async () => {
        try {
            const response = await axios.get('http://localhost:3001/job'); // Replace with your actual API URL
            setJobs(response.data);
        } catch (err) {
            console.error('Error while fetching jobs:', err);
        }
    };

    const deleteJob = async (jobId) => {
        try {
           let data = prompt('Enter yes to delete');
           if(data !== 'yes'){
            toast.warning('Deletion Canceled');
            return;
           }
            const response = await axios.delete(`http://localhost:3001/job/${jobId}`);
            if (response.data.success) {
                setJobs(jobs.filter((job) => job._id !== jobId));
                toast.success('Job deleted successfully');
                console.log('Job deleted successfully');
            } else {
                toast.error('Failed to delete job')
                console.error('Failed to delete job');
            }
        } catch (err) {
            console.error('Error while deleting job:', err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 xl:pl-64 lg:pl-64 md:pl-64">
            <h2 className="text-2xl font-bold text-center text-gray-800">All Jobs</h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <div
                            key={job._id}
                            className="bg-white shadow-md rounded-md p-8 transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-lg font-semibold text-gray-700">{job.jobName}</h3>
                            <p className="text-sm text-gray-500 mt-2">{job.jobDetails}</p>
                            <p className="text-blue-500 text-sm mt-2">
                                Posted at: {new Date(job.postedAt).toLocaleDateString()}
                            </p>
                            <button
                                className="bg-red-500 p-2 font-medium text-lg rounded text-white mt-2"
                                onClick={() => deleteJob(job._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center w-full col-span-full">
                        No jobs available at the moment.
                    </p>
                )}
            </div>
            <ToastContainer />
        </div>
    );
}

export default AllJobs;
