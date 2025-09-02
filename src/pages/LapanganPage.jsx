import { useState, useEffect } from "react"
import { Calendar, MapPin } from "lucide-react"
import axios from "axios"

export default function LapanganPage() {
  const [courts, setCourts] = useState([])

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

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Daftar Lapangan Padel
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        {courts.map((court) => (
          <div
            key={court.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Gambar Lapangan */}
            <img
              src={`http://127.0.0.1:8000/storage/${court.image}`}
              alt={court.name}
              className="w-full h-48 object-cover"
            />

            {/* Isi Card */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {court.name}
              </h2>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{court.location}</span>
              </div>

              <p className="text-lg font-bold text-green-700">
                {court.price} / jam
              </p>

              <button className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition">
                <Calendar className="w-4 h-4" />
                Booking Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
