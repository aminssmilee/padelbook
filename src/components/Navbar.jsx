import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="bg-gray-50 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-yellow-400">
              PadelBooking
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
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
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <Link to="/profil" className="flex items-center text-gray-700 hover:text-yellow-600">
                <FaUserCircle className="w-7 h-7" />
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

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-yellow-600">
            Home
          </Link>
          <Link to="/lapangan" className="block text-gray-700 hover:text-yellow-600">
            Lapangan
          </Link>
          <Link to="/jadwal" className="block text-gray-700 hover:text-yellow-600">
            Jadwal
          </Link>

          {isLoggedIn ? (
            <Link
              to="/profil"
              className="flex items-center gap-2 text-gray-700 hover:text-yellow-600"
            >
              <FaUserCircle className="w-6 h-6" />
              Profil
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-2 text-sm font-medium text-white bg-yellow-400 rounded-lg hover:bg-yellow-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-50"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
