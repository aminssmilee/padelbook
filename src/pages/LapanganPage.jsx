import { Calendar, MapPin } from "lucide-react"; // icon modern

export default function LapanganPage() {
  const courts = [
    { id: 1, name: "Lapangan Padel A", location: "Surabaya", price: "Rp150.000 / jam", image: "https://source.unsplash.com/400x250/?court,sport" },
    { id: 2, name: "Lapangan Padel B", location: "Jakarta", price: "Rp200.000 / jam", image: "https://source.unsplash.com/400x250/?tennis,court" },
    { id: 3, name: "Lapangan Padel C", location: "Bandung", price: "Rp180.000 / jam", image: "https://source.unsplash.com/400x250/?stadium,court" },
  ];

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
              src={court.image}
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

              <p className="text-lg font-bold text-green-700">{court.price}</p>

              <button className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition">
                <Calendar className="w-4 h-4" />
                Booking Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
