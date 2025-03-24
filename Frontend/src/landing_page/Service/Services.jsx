import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "Build fast, responsive, and scalable websites using the latest frameworks and technologies.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7v7m0 0v2m0-2h-7m7 0h7" />
        </svg>
      ),
      color: "text-indigo-600",
    },
    {
      title: "Mobile App Development",
      description: "Create seamless, cross-platform mobile apps tailored to your business needs.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "text-blue-600",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive, user-centric interfaces that enhance engagement and satisfaction.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 9c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        </svg>
      ),
      color: "text-purple-600",
    },
    {
      title: "Custom Software Solutions",
      description: "Develop bespoke software to solve unique challenges and streamline operations.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "text-teal-600",
    },
    {
      title: "Backend & API Development",
      description: "Power your applications with secure, efficient backend systems and API integrations.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a7 7 0 017-7m-7 7a7 7 0 007 7m7-7a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7-7a7 7 0 017 7" />
        </svg>
      ),
      color: "text-orange-600",
    },
    {
      title: "Cloud Solutions",
      description: "Leverage cloud technology for scalability, security, and cost-effective infrastructure.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.9 5.002 5.002 0 00-9.8-1.1A4 4 0 003 15z" />
        </svg>
      ),
      color: "text-cyan-600",
    },
  ];

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-12 sm:pb-20 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-16 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-indigo-700 mb-6 tracking-tight drop-shadow-lg">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover how we transform ideas into powerful digital solutions with expertise and innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-20 px-4 sm:px-8 bg-white py-12 rounded-xl shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-sm">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 group"
            >
              <div className={`mb-6 ${service.color} group-hover:animate-pulse`}>
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Content: Our Approach */}
      <section className="mb-20 px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-gray-50 py-16 rounded-xl shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-sm">
          Our Approach
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            At Binary Bandits, we combine technical expertise with creative problem-solving to deliver solutions that exceed expectations. Here’s what sets us apart:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Innovation-Driven</h3>
              <p className="text-gray-600">We push boundaries to create cutting-edge solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Client-Centric</h3>
              <p className="text-gray-600">Your vision guides every step of our process.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Agile Delivery</h3>
              <p className="text-gray-600">Fast, iterative development for timely results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 py-16 text-center text-white px-4 sm:px-8 rounded-xl shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-md">
          Let’s Build Your Next Big Thing
        </h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Ready to bring your ideas to life? Partner with us for exceptional digital solutions.
        </p>
        <button
          onClick={handleContactClick}
          className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}