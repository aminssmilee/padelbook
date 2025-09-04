import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const { id } = useParams(); // court_id
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil parameter dari JadwalPage
  const queryParams = new URLSearchParams(location.search);
  const initialDate = queryParams.get("date") || new Date().toISOString().split("T")[0];
  const initialTime = queryParams.get("time");

  const [court, setCourt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [schedules, setSchedules] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Ambil detail lapangan
  useEffect(() => {
    async function fetchCourt() {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/courts/${id}`);
        if (!res.ok) throw new Error("Gagal ambil data lapangan");
        const data = await res.json();
        setCourt(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourt();
  }, [id]);

  // Ambil jadwal dari API
  useEffect(() => {
    async function fetchSchedule() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/courts/${id}/schedule?date=${selectedDate}`
        );
        if (!res.ok) throw new Error("Gagal ambil jadwal");
        const data = await res.json();
        setSchedules(data.slots || []);
        // kalau user datang dari JadwalPage, langsung select slot yg dipilih
        if (initialTime) {
          const slot = (data.slots || []).find((s) => s.start === initialTime);
          if (slot && slot.status === "available") {
            setSelectedSlot(slot);
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (selectedDate) fetchSchedule();
  }, [id, selectedDate, initialTime]);

  const handleBooking = async () => {
    if (!selectedSlot) {
      alert("Pilih jam dulu!");
      return;
    }

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!token || !user) {
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          court_id: id,
          date: selectedDate,
          start_time: selectedSlot.start,
          end_time: selectedSlot.end,
          payment_status: "pending",
        }),
      });

      if (!res.ok) throw new Error("Gagal booking lapangan");
      const booking = await res.json();

      navigate(`/checkout/${booking.id}`, { state: booking });
    } catch (err) {
      console.error(err);
      alert("Booking gagal, coba lagi!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!court) return <p className="text-center mt-10">Lapangan tidak ditemukan</p>;

  return (
    <div className="max-w-lg mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Booking Lapangan: {court.name}</h1>

      {/* Pilih Tanggal */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Tanggal</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Pilih Jam */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {schedules.map((slot, i) => {
          const isBooked = slot.status === "booked";
          const isSelected = selectedSlot?.start === slot.start;

          return (
            <button
              key={i}
              disabled={isBooked}
              onClick={() => setSelectedSlot(slot)}
              className={`p-3 rounded-lg border text-sm font-medium transition ${
                isBooked
                  ? "bg-red-500 text-white cursor-not-allowed"
                  : isSelected
                  ? "bg-blue-600 text-white"
                  : "bg-green-100 hover:bg-green-200"
              }`}
            >
              {slot.start} - {slot.end}
            </button>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="flex justify-between text-sm mb-6">
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-200 rounded"></span> Tersedia
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-600 rounded"></span> Dipilih
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded"></span> Sudah dibooking
        </span>
      </div>

      {/* Tombol Konfirmasi */}
      <button
        onClick={handleBooking}
        disabled={!selectedSlot}
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
      >
        Konfirmasi Booking
      </button>
    </div>
  );
}
