import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './home.jpg';

export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Performance",
      description: "Optimized code and efficient algorithms for lightning-fast UI rendering.",
      color: "text-blue-600",
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      ),
      title: "Modern Design",
      description: "Sleek, adaptive layouts that shine on every device.",
      color: "text-green-600",
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20h4M12 4v16m8-8H4" />
        </svg>
      ),
      title: "Easy Customization",
      description: "Tailor-made UI components to match your brand's vision.",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="flex flex-col font-sans antialiased">
      {/* Hero Section */}
      <header className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10" />
        <div
          className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover", // Ensures image covers the area
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll", // Changed from fixed for better mobile compatibility
          }}
        >
          <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              <span className="block">Unleashing Digital</span>
              <span className="block text-blue-300">Excellence</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              We're a team of <span className="text-indigo-500 mr-1">⚡</span>Binary Bandits dedicated to transforming your ideas into powerful, scalable, and stunning digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/work"
                className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 text-sm sm:text-base"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                Why Binary Bandits?
              </h2>
              <div className="h-1 w-16 sm:w-20 md:w-24 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with creative excellence to deliver solutions that stand out.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-xl p-6 sm:p-8 text-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className={`mb-4 sm:mb-6 ${feature.color} mx-auto`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}