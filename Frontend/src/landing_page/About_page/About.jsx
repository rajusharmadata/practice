import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import AyueshImg from './Ayuesh.jpeg';
import TanmayDev from './Tanmaydev.jpeg';
import Raju from './Raju.jpeg';

export default function About() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Raju Kumar",
      image: Raju,
      role: "Full-Stack Developer & Problem Solver",
      description: "Raju drives our full-stack initiatives with expertise in React, Node.js, and MongoDB. He’s a natural problem-solver, ensuring every project is robust and user-friendly.",
      skills: ["React", "Node.js", "MongoDB", "Problem Solving"],
    },
    {
      name: "Tanmay Dev",
      image: TanmayDev,
      role: "Frontend Developer & AI Integration Expert",
      description: "Tanmay crafts stunning, responsive interfaces using React and Tailwind CSS, while weaving AI magic into our projects to elevate functionality.",
      skills: ["React", "Tailwind CSS", "AI Integration", "UI Design"],
    },
    {
      name: "Ayush Kumar",
      image: AyueshImg,
      role: "Backend Developer & Database Expert",
      description: "Ayush architects our backend with precision, leveraging Express.js, PostgreSQL, and Firebase to deliver secure, scalable systems.",
      skills: ["Express.js", "PostgreSQL", "Firebase", "Backend Architecture"],
    },
  ];

  const ourMission = {
    title: "Our Mission",
    content: "We’re a trio of passionate B.Tech CSE students dedicated to turning ideas into reality through innovative technology. Our goal is to tackle real-world challenges with creative, efficient solutions.",
  };

  const ourWork = [
    {
      title: "Web Development",
      description: "Building fast, responsive websites with modern tools.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-7v7m0 0v2m0-2h-7m7 0h7" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Solutions",
      description: "Enhancing apps with smart, AI-driven features.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM11 9h2v2h-2V9z" />
        </svg>
      ),
    },
    {
      title: "Database Optimization",
      description: "Creating secure, efficient data systems.",
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-gray-50 text-gray-800 mt-20">
      {/* Hero Section */}
      <motion.section
        className="text-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-600 mb-4 sm:mb-6 tracking-tight drop-shadow-md">
          About Our Team
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We’re a group of driven B.Tech CSE students united by our love for coding and innovation. Meet the minds behind our projects.
        </p>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-md mb-12 sm:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8">
          {ourMission.title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
          {ourMission.content}
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 drop-shadow-sm">
          Our Crew
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-indigo-50 text-indigo-600 text-xs sm:text-sm rounded-full border border-indigo-200 hover:bg-indigo-100 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Work Section */}
      <motion.section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl shadow-md mb-12 sm:mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 drop-shadow-sm">
          What We Bring to the Table
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {ourWork.map((work, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center border border-gray-100"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 sm:mb-6 text-indigo-600">{work.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                {work.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {work.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-center text-white rounded-xl shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-md">
          Let’s Create Together
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          Got an idea? We’re ready to turn it into something extraordinary. Reach out to us!
        </p>
        <motion.button
          onClick={handleContactClick}
          className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </div>
  );
}