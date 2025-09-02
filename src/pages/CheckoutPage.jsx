
import { useParams, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Pembayaran berhasil!");
    navigate("/riwayat");
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-4">Checkout Booking #{id}</h1>
      <p className="mb-4">
        Lapangan Futsal A <br />
        Harga: Rp 150.000 <br />
        Tanggal: 10 September 2025 <br />
        Jam: 19:00 - 20:00
      </p>
      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Bayar Sekarang
      </button>
    </div>
  );
}
