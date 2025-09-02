import { useParams, useNavigate } from "react-router-dom";

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBooking = () => {
    alert("Booking lapangan berhasil!");
    navigate("/checkout/" + id);
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Booking Lapangan #{id}</h1>
      <p className="mb-4">
        Lapangan Futsal A <br />
        Tanggal: 10 September 2025 <br />
        Jam: 19:00 - 20:00
      </p>
      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Konfirmasi Booking
      </button>
    </div>
  );
}
