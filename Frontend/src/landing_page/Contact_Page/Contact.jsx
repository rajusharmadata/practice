import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_4lgeee1'; // Replace with your EmailJS Service ID
    const templateID = 'template_r75vt0c'; // Replace with your EmailJS Template ID
    const userID = 'qSZpsNRPoHznAtSHj'; // Replace with your EmailJS User ID

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'rajusharmadata123@gmail.com',
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          navigate('/'); // Redirect to Home
        }, 2000); // Redirect after 2 seconds
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        className="bg-white max-w-md w-full p-6 sm:p-8 rounded-2xl shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-4 tracking-tight drop-shadow-md">
          Let’s Connect
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
          Drop us a line—we’re excited to hear from you!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-gray-50 text-gray-800 transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-gray-50 text-gray-800 transition-all duration-300"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          {/* Message Input */}
          <motion.div variants={inputVariants}>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">
              Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-gray-50 text-gray-800 transition-all duration-300 resize-none"
              placeholder="Tell us about your project or question..."
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-2 sm:py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-md ${
              isSubmitted
                ? 'bg-green-500 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg'
            }`}
            whileHover={!isSubmitted ? { scale: 1.05 } : {}}
            whileTap={!isSubmitted ? { scale: 0.95 } : {}}
          >
            {isSubmitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </form>

        {/* Contact Info */}
        <motion.div
          className="mt-6 sm:mt-8 text-center text-gray-600 space-y-3"
          variants={inputVariants}
        >
          <p className="flex items-center justify-center text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@binarybandits.com
          </p>
          <p className="flex items-center justify-center text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98765 43210
          </p>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          className="mt-4 sm:mt-6 text-center"
          variants={inputVariants}
        >
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 font-medium hover:underline transition-colors duration-300 text-sm sm:text-base"
          >
            Back to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}