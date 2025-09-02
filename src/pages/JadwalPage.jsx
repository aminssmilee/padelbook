/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function JadwalPage() {
  const [courts, setCourts] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().split("T")[0]
  );
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ambil daftar lapangan
  useEffect(() => {
    async function fetchCourts() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/courts");
        const data = await res.json();
        setCourts(data);
        if (data.length > 0) setSelectedCourt(data[0].id);
      } catch (err) {
        setError("Gagal memuat daftar lapangan");
      }
    }
    fetchCourts();
  }, []);

  // Ambil jadwal
  useEffect(() => {
    async function fetchSchedules() {
      if (!selectedCourt) return;
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/courts/${selectedCourt}/schedule?date=${date}`
        );
        if (!res.ok) throw new Error("Gagal mengambil jadwal");
        const data = await res.json();
        // API kamu ngembalikan object { court_id, court, date, slots: [...] }
        setSchedules(data.slots || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSchedules();
  }, [selectedCourt, date]);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Jadwal Booking</h1>

      {/* Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <select
          value={selectedCourt}
          onChange={(e) => setSelectedCourt(e.target.value)}
          className="border rounded-lg p-2"
        >
          {courts.map((court) => (
            <option key={court.id} value={court.id}>
              {court.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-lg p-2"
        />
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}

      {/* Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Tabel Jadwal */}
      {!loading && !error && (
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Jam</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {schedules.length > 0 ? (
              schedules.map((slot, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-50">
                  <td className="border p-2">
                    {slot.start} - {slot.end}
                  </td>
                  <td className="border p-2">
                    {slot.status === "booked" ? (
                      <span className="text-red-500 font-medium">Booked</span>
                    ) : (
                      <span className="text-green-600 font-medium">
                        Available
                      </span>
                    )}
                  </td>
                  <td className="border p-2">
                    {slot.status === "available" ? (
                      <Link
                        to={`/booking/${selectedCourt}?time=${slot.start}&date=${date}`}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
                      >
                        Booking
                      </Link>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-gray-500 text-center">
                  Tidak ada jadwal tersedia
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
