import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-6">Sorry, but the page you're looking for doesn't exist.</p>
            <div className="flex space-x-4">
                <button 
                    onClick={() => window.history.back()} 
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-300"
                >
                    Go Back
                </button>
                <Link 
                    to="/home" 
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition duration-300"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}