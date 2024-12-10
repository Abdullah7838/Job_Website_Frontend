import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllJobs(props) {
    const [jobs, setJobs] = useState([]);
    const [detail, sdetail] = useState(42);
    const [bdetail, sbdetail] = useState('read more');
    const [apply, sapply] = useState('Go back and choose again');

    useEffect(() => {
        if (props.onApplyNameChange) {
            props.onApplyNameChange(apply); 
        }
        console.log(props.applyName);
    }, [apply, props.applyName]);
  

    const readmore=()=>{
        if(detail == 42){
            sdetail(1000);
            sbdetail('read less')
        }else{
            sdetail(42);
            sbdetail('read more')
        }
    }

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const response = await axios.get('http://localhost:3001/job'); // Replace with your actual API URL
                setJobs(response.data.reverse());
            } catch (err) {
                console.error('Error while fetching admin jobs:', err);
            }
        };
        fetchAllJobs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800">All Jobs</h2>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-md p-8 transition-transform transform hover:scale-105"
                        >
                            <h3 className="text-lg font-bold text-gray-700">{job.jobName}</h3>
                            <p className="text-sm text-gray-500 mt-2">{job.jobDetails}</p>
                            {/* <p className="text-sm text-gray-500 mt-2">{job.jobDetails.slice(0,detail)}</p> */}
                            {/* <button onClick={readmore} className='text-red-500'>{bdetail}</button> */}
                            <p className="text-stone-950 text-sm mt-2">Posted at: {new Date(job.postedAt).toLocaleDateString()}</p>
                            <Link to='/apply'>
                            <button onClick={(e)=>sapply(job.jobName)} className='bg-blue-500 p-2 font-medium text-lg rounded text-white mt-2'>Apply Now</button>
                            </Link> 
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center w-full col-span-full">
                        No jobs available at the moment.
                    </p>
                )}
            </div>
        </div>
    );
}

export default AllJobs;
