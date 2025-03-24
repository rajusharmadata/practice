import { useState } from "react";
import { X, User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? "Signup Data:" : "Login Data:", formData);
    setIsVisible(false);
    navigate("/home");
  };

  const closeForm = () => {
    setIsVisible(false);
    navigate("/home");
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900/80 via-blue-800/80 to-purple-900/80 p-4 sm:p-6 z-50">
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-95 dark:bg-opacity-90 transform transition-all duration-300 hover:scale-[1.02]">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              onClick={closeForm}
            >
              <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-indigo-700 dark:text-indigo-300 mb-2 tracking-tight drop-shadow-sm">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6">
              {isSignUp ? "Start your journey with us!" : "Sign in to explore"}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div className="relative">
                  <User className="absolute top-1/2 left-3 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white transition-all duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute top-1/2 left-3 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white transition-all duration-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute top-1/2 left-3 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white transition-all duration-200"
                  placeholder="Your Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            {/* Toggle */}
            <p className="text-center mt-5 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              {isSignUp ? "Already have an account?" : "Need an account?"}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-indigo-600 dark:text-indigo-400 font-semibold ml-1 hover:underline transition-all duration-200"
              >
                {isSignUp ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
}