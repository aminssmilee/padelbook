// resources/js/Components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-yellow-400">
              PadelBooking
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-yellow-600">
              Home
            </a>
            <a href="/lapangan" className="text-gray-700 hover:text-yellow-600">
              Lapangan
            </a>
            <a href="/jadwal" className="text-gray-700 hover:text-yellow-600">
              Jadwal
            </a>
            <a href="/profil" className="text-gray-700 hover:text-yellow-600">
              Profil
            </a>
          </div>

          {/* Button Login/Register */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-yellow-400 rounded-lg hover:bg-blue-700"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 text-sm font-medium text-yellow-600 border border-yellow-600 rounded-lg hover:bg-yellow-50"
            >
              Register
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/lapangan" className="block text-gray-700 hover:text-blue-600">
            Lapangan
          </a>
          <a href="/jadwal" className="block text-gray-700 hover:text-blue-600">
            Jadwal
          </a>
          <a href="/profil" className="block text-gray-700 hover:text-blue-600">
            Profil
          </a>
          <a
            href="/login"
            className="block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Login
          </a>
          <a
            href="/register"
            className="block px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
