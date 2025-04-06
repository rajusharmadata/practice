import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiMail, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 6, color: "#a5b4fc", transition: { duration: 0.2 } }
  };

  const socialVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative">
      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="h-6 w-6" />
        </motion.button>
      )}

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={itemVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.03 }}
            >
              Binary Bandits
            </motion.h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating innovative UI solutions that transform your digital presence and elevate user experiences.
            </p>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <FiMail className="h-4 w-4 text-indigo-400" />
              <a
                href="mailto:support@binarybandits.com"
                className="text-gray-300 hover:text-indigo-300 text-sm transition-colors duration-300"
              >
                support@binarybandits.com
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Work", "Contact"].map((item) => (
                <motion.li key={item} variants={linkVariants} initial="initial" whileHover="hover">
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-indigo-300 text-sm transition-all duration-300 flex items-center"
                  >
                    <span className="mr-1">›</span> {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Connect With Us</h3>
            <div className="flex space-x-5">
              {[
                { icon: FiFacebook, href: "https://facebook.com", label: "Facebook" },
                { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
                { icon: FiInstagram, href: "https://instagram.com", label: "Instagram" },
                { icon: FiGithub, href: "https://github.com", label: "GitHub" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-300 transition-colors duration-300"
                  variants={socialVariants}
                  initial="initial"
                  whileHover="hover"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-gray-400 text-xs">
              Stay updated with our latest projects and technologies.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium text-white mb-4 border-b border-gray-800 pb-2">Visit Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>123 Tech Boulevard</p>
              <p>San Francisco, CA 94107</p>
              <p>United States</p>
              <p className="mt-3 text-indigo-400">+1 (555) 123-4567</p>
            </address>
          </motion.div>
        </motion.div>

        {/* Divider and Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-10 pt-6 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Binary Bandits. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Crafted with passion and precision.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}