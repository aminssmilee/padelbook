import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaThLarge, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-gray-50 border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-yellow-400">
                PadelBooking
              </Link>
            </div>

            {/* Menu Desktop */}
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-yellow-600">
                Home
              </Link>
              <Link to="/lapangan" className="text-gray-700 hover:text-yellow-600">
                Lapangan
              </Link>
              <Link to="/jadwal" className="text-gray-700 hover:text-yellow-600">
                Jadwal
              </Link>
            </div>

            {/* Button Login/Register atau Profile */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <Link
                  to="/profil"
                  className="flex items-center text-gray-700 hover:text-yellow-600"
                >
                  <FaUser className="w-7 h-7" />
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium text-white bg-yellow-400 rounded-lg hover:bg-yellow-500"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-50"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed z-50 bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-2">
          <Link
            to="/"
            className={`flex flex-col items-center text-sm ${
              location.pathname === "/" ? "text-yellow-500" : "text-gray-600"
            }`}
          >
            <FaHome className="w-6 h-6 mb-1" />
            Home
          </Link>

          <Link
            to="/lapangan"
            className={`flex flex-col items-center text-sm ${
              location.pathname === "/lapangan" ? "text-yellow-500" : "text-gray-600"
            }`}
          >
            <FaThLarge className="w-6 h-6 mb-1" />
            Lapangan
          </Link>

          <Link
            to="/jadwal"
            className={`flex flex-col items-center text-sm ${
              location.pathname === "/jadwal" ? "text-yellow-500" : "text-gray-600"
            }`}
          >
            <FaCalendarAlt className="w-6 h-6 mb-1" />
            Jadwal
          </Link>

          {isLoggedIn ? (
            <Link
              to="/profil"
              className={`flex flex-col items-center text-sm ${
                location.pathname === "/profil" ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              <FaUser className="w-6 h-6 mb-1" />
              Profil
            </Link>
          ) : (
            <Link
              to="/login"
              className={`flex flex-col items-center text-sm ${
                location.pathname === "/login" ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              <FaUser className="w-6 h-6 mb-1" />
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
