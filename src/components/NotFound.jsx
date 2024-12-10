import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='cursor-context-menu'>
            <div>
                <div className='h-full border-2 border-y-8 border-black bg-blue-950'>
                    <div className='w-full h-60 bg-blue-800 rounded-full'>
                        <div className='lg:text-6xl text-center font-bold pt-4 text-white'>Welcome to <strong className='text-orange-400'>DigiJobs</strong></div>
                        <div className='lg:text-3xl text-center font-bold mt-6 text-purple-400'>
                            <strong className='text-yellow-400'>Effortlessly</strong> <strong className='text-pink-300'>Connect</strong>
                            <strong className='text-green-500'> With</strong> <strong className='text-black'>Top Talent And </strong><br></br>
                            <strong className='text-black'>Managed Services</strong> With <strong className='text-orange-400'> Digijob</strong></div>
                    </div>
                </div>
                <div className='mt-4 mb-4'>
                    <div className='lg:pl-8 lg:pr-8 pl-1 pr-0 text-xl font-medium text-center'>
                        <p className='text-6xl font-black'> Page Not Found 404 </p>
                        <div className='mt-12'>
                            <Link to='/'>
                                <button className='text-center bg-blue-500 text-black font-bold pl-4 pr-4 p-2 rounded-md'>Go Home Page</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
