import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call could go here)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      navigate('/'); // Redirect to Home after submission
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 pt-20 sm:pt-24 pb-12 sm:pb-20 flex items-center justify-center px-4 sm:px-8">
      <div className="bg-white dark:bg-gray-900 max-w-lg w-full p-6 sm:p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105">
        {/* Title Section */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-4 tracking-tight drop-shadow-md">
          Get in Touch
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Have a question or idea? Drop us a message—we’re here to help!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-all duration-300"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Message
            </label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-all duration-300 resize-none"
              placeholder="Tell us about your project or question..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg ${
              isSubmitted
                ? 'bg-green-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl'
            }`}
          >
            {isSubmitted ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 space-y-2">
          <p className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@binarybandits.com
          </p>
          <p className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 98765 43210
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}