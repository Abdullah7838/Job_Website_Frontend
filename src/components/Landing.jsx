import React from 'react'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
        <div className="bg-blue-950 text-white cursor-context-menu">
            {/* Header Section */}
            <div className="relative w-full bg-blue-800">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-800 to-blue-950 rounded-b-full"></div>
                <div className="relative z-10 flex flex-col items-center py-16">
                    <h1 className="text-4xl sm:text-3xl lg:text-6xl font-bold text-white">
                        Welcome to <span className="text-orange-400">DigiJobs</span>
                    </h1>
                    <p className="mt-6 text-center text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-purple-300 px-4">
                        <span className="text-yellow-400">Effortlessly</span>{' '}
                        <span className="text-pink-300">Connect</span>{' '}
                        <span className="text-green-500">With</span>{' '}
                        <span className="text-slate-400">Top Talent And</span>{' '}
                        <span className="text-zinc-500">Managed Services</span> With{' '}
                        <span className="text-orange-400">DigiJobs</span>
                    </p>
                </div>
            </div>

            {/* Description Section */}
            <div className="container mx-auto px-4 mt-8">
                <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-center lg:text-left">
                    Discover top talent and streamline recruitment with DigiJobs' online marketplace.
                    Outsource IT projects, enhance hiring processes, and ensure integrity with our technical verification
                    services. Comprehensive solutions for seamless IT support, recruitment processes, and technical
                    verification, tailored to your business needs.
                </p>
                <div className="text-center lg:text-left mt-8">
                    <strong className="text-red-600 text-2xl">Join Our Team Now</strong>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="container mx-auto px-4  grid lg:grid-cols-6 lg:gap-0 sm:gap-8">
                {/* Left Content */}
                <div className="text-center lg:text-left lg:pl-6 pt-2">
                    <Link to="/login">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-serif font-normal text-xl py-4 px-10 rounded-lg transition">
                            Get Started
                        </button>
                    </Link>
                </div>
                {/* Right Content */}
                <div className="flex justify-center lg:col-span-5">
                    <img
                        alt="digijobs"
                        src="img1.webp"
                        className="rounded-lg shadow-lg w-full sm:w-80 lg:w-96 h-auto"
                    />
                </div>
            </div>

            </div>
    );
}

