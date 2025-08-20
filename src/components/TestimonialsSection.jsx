"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmad Rizki",
    location: "Jakarta",
    rating: 5,
    comment:
      "Lapangan sangat bagus dan bersih. Pelayanan ramah dan booking online sangat mudah. Pasti akan kembali lagi!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Sari Dewi",
    location: "Surabaya",
    rating: 5,
    comment: "Fasilitas lengkap dan harga terjangkau. Anak-anak juga suka bermain di sini. Recommended banget!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Budi Santoso",
    location: "Bandung",
    rating: 4,
    comment: "Lokasi strategis dan mudah dijangkau. Lapangan standar internasional, cocok untuk latihan serius.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Maya Putri",
    location: "Bali",
    rating: 5,
    comment: "Pengalaman bermain padel terbaik! Staff profesional dan lapangan selalu dalam kondisi prima.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

// Komponen SVG Bintang
function StarIcon({ filled }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Panah kiri & kanan
function ArrowLeftIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni & Review</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengar langsung dari para pemain yang telah merasakan pengalaman bermain di lapangan kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm relative">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.avatar || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < currentTestimonial.rating} />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                  "{currentTestimonial.comment}"
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-50"
            >
              <ArrowRightIcon />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
