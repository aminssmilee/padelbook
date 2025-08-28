import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/padel.jpg";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Padel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* Overlay gelap */}
      </div>

      {/* Tombol Back */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 z-20"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Form Container */}
      <div className="relative z-10 mt-auto bg-white rounded-t-3xl shadow-lg px-6 py-8">
        <div className="w-full max-w-md mx-auto">
          {/* Judul */}
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8">
            Get Started
          </h2>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" required />
              <span>
                I agree to the processing of{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Personal data
                </a>
              </span>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 text-center text-sm text-gray-500">
            Sign in with
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6">
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <i className="fab fa-facebook text-blue-600 text-lg"></i>
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <i className="fab fa-twitter text-sky-400 text-lg"></i>
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100">
              <i className="fab fa-apple text-gray-900 text-lg"></i>
            </button>
          </div>

          {/* Link Register */}
          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
