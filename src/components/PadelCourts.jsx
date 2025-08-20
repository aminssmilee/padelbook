"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "../assets/images/Padel.jpg"

const PadelCourts = [
  { id: 1, name: "Jakarta Padel", courts: 8, image: Image },
  { id: 2, name: "Surabaya Padel", courts: 4, image: Image },
  { id: 3, name: "Bandung Padel", courts: 6, image: Image },
  { id: 4, name: "Bali Padel", courts: 5, image: Image },
]

function LocationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024) // < 1024px = mobile/tablet
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PadelCourts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PadelCourts.length) % PadelCourts.length)
  }

  const visibleCourts = () => {
    const courts = []
    const visibleCount = isMobile ? 1 : 3 // tampil 1 di mobile, 3 di desktop
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % PadelCourts.length
      courts.push(PadelCourts[index])
    }
    return courts
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-9xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="lg:w-1/3 space-y-6 text-center lg:text-left">
            <div>
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
                FIND BY LOCATION
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Discover padel court
                <br />
                in your area
              </h2>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full text-base font-medium">
              View all padel courts
            </button>
          </div>

          {/* Right Carousel */}
          <div className="lg:w-3/3 relative w-full">
            <div className="flex gap-4 overflow-hidden justify-center">
              {visibleCourts().map((court) => (
                <div
                  key={court.id}
                  className="flex-shrink-0 w-72 sm:w-80 h-80 relative rounded-2xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={court.image || "/placeholder.svg"}
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
    </section>
  )
}

export default LocationSection
