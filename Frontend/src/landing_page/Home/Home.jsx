import React from 'react';
import backgroundImage from './home.jpeg';

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized code and efficient algorithms for lightning-fast UI rendering.",
      color: "text-blue-600",
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      ),
      title: "Modern Design",
      description: "Sleek, adaptive layouts that shine on every device.",
      color: "text-green-600",
    },
    {
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20h4M12 4v16m8-8H4" />
        </svg>
      ),
      title: "Easy Customization",
      description: "Tailor-made UI components to match your brand’s vision.",
      color: "text-purple-600",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Scalable, responsive websites built with cutting-edge tech.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7v7m0 0v2m0-2h-7m7 0h7" />
        </svg>
      ),
    },
    {
      title: "App Development",
      description: "Cross-platform mobile apps with seamless performance.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, user-focused designs that captivate and convert.",
      icon: (
        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 9c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header Section */}
      <header className="relative w-full">
        {/* Desktop Background */}
        <div
          className="hidden md:block min-h-[80vh] bg-gradient-to-b from-gray-900/80 to-transparent"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
      
        </div>

        {/* Mobile Background */}
        <div className="block md:hidden relative min-h-[60vh]">
          <div
            className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-transparent"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center 20%",
            }}
          />
         
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-50 py-12 md:py-20">
        {/* Hero Section */}
        <section className="mb-20 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Unleashing Digital Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We’re a team of code warriors dedicated to transforming your ideas into powerful, scalable, and stunning digital experiences.
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Our Work
          </button>
        </section>

        {/* Features Section */}
        <section className="mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Binary Bandits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              >
                <div className={`mb-6 ${feature.color} group-hover:animate-pulse`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20 px-4 bg-gray-100 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:bg-indigo-50 hover:shadow-xl"
              >
                <div className="mb-6 text-indigo-600">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Beliefs Section */}
        <section className="mb-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Core Belief
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
              "Code is our weapon, innovation is our mission. We build solutions that redefine possibilities and empower the future."
            </blockquote>
            <p className="font-semibold text-indigo-600 text-lg md:text-xl">
              The Binary Bandits Crew
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              Raju Kumar, Tanmay Dev, Ayush Kumar
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}