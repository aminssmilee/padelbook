"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Link } from "react-router-dom"
import axios from "axios"

function LocationSection() {
  const [courts, setCourts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCourt, setSelectedCourt] = useState(null)

  // Fetch data dari API
  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/courts")
        setCourts(response.data)
      } catch (error) {
        console.error("Gagal fetch courts:", error)
      }
    }
    fetchCourts()
  }, [])

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % courts.length)
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + courts.length) % courts.length)

  const visibleCourts = () => {
    const visible = []
    const visibleCount = isMobile ? 1 : 3
    for (let i = 0; i < visibleCount; i++) {
      if (courts.length === 0) break
      const index = (currentIndex + i) % courts.length
      visible.push(courts[index])
    }
    return visible
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              FIND BY LOCATION
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Discover padel court
              <br />
              in your area
            </h2>
            <div>
              <Link to="/lapangan">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full text-base font-medium">
                  View all padel courts
                </button>
              </Link>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="lg:w-3/3 relative w-full">
            <div className="flex gap-4 overflow-hidden justify-center">
              {visibleCourts().map((court) => (
                <div
                  key={court.id}
                  className="flex-shrink-0 w-72 sm:w-80 h-80 relative rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedCourt(court)}
                >
                  <img
                    src={`http://127.0.0.1:8000/storage/${court.image}`}
                    alt={court.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{court.name}</h3>
                    <p className="text-sm opacity-90">{court.courts} Padel Courts</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      {selectedCourt && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full relative p-6">
            <button
              onClick={() => setSelectedCourt(null)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <img
              src={`http://127.0.0.1:8000/storage/${selectedCourt.image}`}
              alt={selectedCourt.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{selectedCourt.name}</h2>
            <p className="text-gray-600 mb-2">{selectedCourt.location}</p>
            <p className="text-green-700 font-semibold">{selectedCourt.price}</p>
            <p className="mt-3 text-gray-700">{selectedCourt.description}</p>

            <button
              onClick={() => {
                const token = localStorage.getItem("token");
                if (!token) {
                  // kalau belum login, redirect ke /login
                  window.location.href = "/login";
                } else {
                  // kalau sudah login, arahkan ke halaman booking dengan ID lapangan
                  window.location.href = `/booking/${selectedCourt.id}`;
                }
              }}
              className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default LocationSection
