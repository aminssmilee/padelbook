import { FaPlay, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import logobanner from "../assets/images/Padel.jpg"

export default function Banner() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={logobanner} // nanti ganti dengan gambar lapangan padel
          alt="Lapangan Padel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Selamat Datang di{" "}
          <span className="text-yellow-400">PadelBook</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Pesan lapangan padel favoritmu dengan mudah dan cepat!
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
            <FaPlay /> Mulai Booking
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
          <div className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            Lokasi Strategis
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaClock className="text-yellow-400" />
            24/7 Booking Online
          </div>
          <div className="flex items-center justify-center gap-2">
            ⭐ Fasilitas Premium
          </div>
        </div>
      </div>
    </section>
  );
}
