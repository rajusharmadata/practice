import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-indigo-400 tracking-tight">
              Binary Bandits
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed">
              Crafting innovative UI solutions to empower your digital journey.
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <FiMail className="h-5 w-5 text-indigo-400" />
              <a href="mailto:support@binarybandits.com" className="text-gray-300 hover:text-indigo-400 transition">
                support@binarybandits.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-indigo-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-indigo-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-indigo-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
              >
                <FiTwitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
              >
                <FiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-indigo-400 transition duration-300 transform hover:scale-110"
              >
                <FiGithub className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} Binary Bandits. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed with <span className="text-red-400">♥</span> by the Binary Bandits Team
          </p>
        </div>
      </div>
    </footer>
  );
}