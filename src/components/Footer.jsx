import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-start gap-8">
                    {/* Left Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-lg font-bold">About Us</h2>
                        <p className="mt-2 text-gray-400 text-sm">
                            We are committed to providing the best services for our users, ensuring reliability and trust.
                        </p>
                    </div>

                    {/* Center Section */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 text-center">
                        <h2 className="text-lg font-bold">Quick Links</h2>
                        <ul className="mt-2 text-gray-400 text-sm space-y-2">
                            <li>
                                <a href="/about" className="hover:text-blue-400 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-blue-400 transition">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/3 text-center">
                        <h2 className="text-lg font-bold">Follow Us</h2>
                        <div className="flex justify-center mt-4 gap-6 text-blue-600">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 transition"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-800 transition"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-600 transition"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DigiJobs. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
