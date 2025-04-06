import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hackathonImage from './hackathon-image.jpeg';

const WorkExperience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      title: "Participant - International Hackathon 6.0",
      date: "2025",
      description: "Collaborated in a global coding competition, working on innovative solutions under tight deadlines. Gained hands-on experience in problem-solving, teamwork, and modern development technologies.",
      skills: ["Problem Solving", "Team Collaboration", "React.js", "Tailwind CSS"," Node.js", "Express.js", "MongoDB"],
      image: hackathonImage,
    },
    // You can add more achievements here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-indigo-50 to-blue-100 py-16 px-4 min-h-screen mt-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-indigo-800 mb-4">My Experience</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Showcasing my journey in tech through impactful achievements and hands-on learning.
        </p>
      </motion.div>

      {/* Achievements Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        {achievements.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-10 hover:shadow-xl transition-shadow duration-300 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Box */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-1 rounded-full font-medium">
                {item.date}
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;