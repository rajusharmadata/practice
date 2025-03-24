import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AyueshImg from './Ayuesh.jpeg';
import TanmayDev from './Tanmaydev.jpeg';
import Raju from './Raju.jpeg';

export default function About() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const teamMembers = [
        {
            name: "Raju Kumar",
            image: Raju,
            role: "Full-Stack Developer & Problem Solver",
            description: "Raju drives our full-stack initiatives with expertise in React, Node.js, and MongoDB. He’s a natural problem-solver, ensuring every project is robust and user-friendly from start to finish.",
            skills: ["React", "Node.js", "MongoDB", "Problem Solving"],
        },
        {
            name: "Tanmay Dev",
            image: TanmayDev,
            role: "Frontend Developer & AI Integration Expert",
            description: "Tanmay crafts stunning, responsive interfaces using React and Tailwind CSS, while also weaving AI magic into our projects to elevate functionality and user interaction.",
            skills: ["React", "Tailwind CSS", "AI Integration", "UI Design"],
        },
        {
            name: "Ayush Kumar",
            image: AyueshImg,
            role: "Backend Developer & Database Expert",
            description: "Ayush architects our backend with precision, leveraging Express.js, PostgreSQL, and Firebase to deliver secure, scalable systems that power our applications.",
            skills: ["Express.js", "PostgreSQL", "Firebase", "Backend Architecture"],
        },
    ];

    const ourMission = {
        title: "Our Mission",
        content: "We’re a trio of passionate B.Tech CSE students dedicated to turning ideas into reality through innovative technology. Our goal is to tackle real-world challenges with creative, efficient, and scalable solutions that make a difference.",
    };

    const ourWork = [
        {
            title: "Web Development",
            description: "Building fast, responsive websites with modern tools and frameworks.",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7v7m0 0v2m0-2h-7m7 0h7" />
                </svg>
            ),
        },
        {
            title: "AI-Powered Solutions",
            description: "Enhancing applications with smart, AI-driven features and analytics.",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM11 9h2v2h-2V9z" />
                </svg>
            ),
        },
        {
            title: "Database Optimization",
            description: "Creating secure, efficient data systems for seamless performance.",
            icon: (
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
        },
    ];

    // Function to handle navigation to Contact page
    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20 text-gray-800">
            {/* Hero Section */}
            <section className="text-center mb-16 px-4 sm:px-8 *:mt-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-600 mb-6 tracking-tight drop-shadow-md">
                    About Our Team
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    We’re a group of driven B.Tech CSE students united by our love for coding and innovation. Discover the minds powering our projects.
                </p>
            </section>

            {/* Our Mission Section */}
            <section className="mb-20 px-4 sm:px-8 bg-white py-12 rounded-xl shadow-md">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
                    {ourMission.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
                    {ourMission.content}
                </p>
            </section>

            {/* Team Section */}
            <section className="mb-20 px-4 sm:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-sm">
                    Our Crew
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl group border border-gray-100"
                        >
                            <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-indigo-600 font-semibold mb-3 text-base sm:text-lg">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                                    {member.description}
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {member.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full border border-indigo-200 transition-colors duration-300 hover:bg-indigo-100"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Work Section */}
            <section className="mb-20 px-4 sm:px-8 bg-gray-100 py-16 rounded-xl shadow-md">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-sm">
                    What We Bring to the Table
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {ourWork.map((work, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:bg-indigo-50 hover:shadow-xl border border-gray-100"
                        >
                            <div className="mb-6 text-indigo-600">{work.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                {work.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 text-center text-white px-4 sm:px-8 rounded-xl shadow-lg">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-md">
                    Let’s Create Together
                </h2>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                    Got an idea? We’re ready to turn it into something extraordinary. Reach out to us!
                </p>
                <button
                    onClick={handleContactClick} // Add onClick handler for navigation
                    className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Contact Us
                </button>
            </section>
        </div>
    );
}