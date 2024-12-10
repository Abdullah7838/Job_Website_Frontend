import React, { useState } from 'react';
import Postjobs from './Postjobs';
import AllJobs from './AllJobs';
import Applications from './Applications';

export default function Admin() {
    const [activePage, setActivePage] = useState('Postjobs'); // Default page
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

    // Render content based on active page
    const renderContent = () => {
        switch (activePage) {
            case 'Postjobs':
                return <Postjobs />;
            case 'AllJobs':
                return <AllJobs />;
            case 'Applications':
                return <Applications />;
            default:
                return <Postjobs />;
        }
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 text-white p-4 space-y-6 transform transition-transform duration-300 ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 lg:translate-x-0`} // Ensures it's visible on large screens
            >
                <h1 className="text-2xl font-bold text-center">Admin Panel</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <button
                                onClick={() => {
                                    setActivePage('Postjobs');
                                    setIsSidebarOpen(false); // Close on selection for sm/md
                                }}
                                className={`block w-full text-left p-2 rounded-md hover:bg-gray-700 transition ${
                                    activePage === 'Postjobs' ? 'bg-gray-700' : ''
                                }`}
                            >
                                Post Job
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setActivePage('AllJobs');
                                    setIsSidebarOpen(false);
                                }}
                                className={`block w-full text-left p-2 rounded-md hover:bg-gray-700 transition ${
                                    activePage === 'AllJobs' ? 'bg-gray-700' : ''
                                }`}
                            >
                                All Jobs
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setActivePage('Applications');
                                    setIsSidebarOpen(false);
                                }}
                                className={`block w-full text-left p-2 rounded-md hover:bg-gray-700 transition ${
                                    activePage === 'Applications' ? 'bg-gray-700' : ''
                                }`}
                            >
                                Applications
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Overlay for small/medium screens */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main
                className={`flex-1 p-6 bg-gray-100 overflow-y-auto transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`} // This adds margin-left to push content right when sidebar is open
            >
                {/* Menu button for small/medium screens */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden bg-gray-800 text-white p-2 rounded-md mb-4"
                >
                    {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
                </button>
                {renderContent()}
            </main>
        </div>
    );
}
