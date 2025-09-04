import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, LogOut, Star, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewing, setReviewing] = useState(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    async function fetchBookings() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8000/api/bookings?user_id=${parsedUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        if (!res.ok) throw new Error("Gagal memuat booking");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSubmitReview = async (bookingId) => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("http://127.0.0.1:8000/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        booking_id: bookingId,
        rating: rating,
        comment: review, // ✅ ubah review -> comment
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error Response:", errorData);
      throw new Error("Gagal mengirim review");
    }

    const data = await res.json();
    alert("Review berhasil dikirim!");

    // reset state
    setReviewing(null);
    setRating(0);
    setReview("");

    // update booking agar ada info review
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId ? { ...b, review: data.review } : b
      )
    );
  } catch (err) {
    console.error(err);
    alert("Gagal mengirim review, coba lagi!");
  }
};


  const handleCancelBooking = async (bookingId) => {
    if (!window.confirm("Apakah kamu yakin ingin membatalkan booking ini?"))
      return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/bookings/${bookingId}`, {
        method: "DELETE", // atau PATCH kalau API cancel pakai status
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Gagal membatalkan booking");

      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
      alert("Booking berhasil dibatalkan");
    } catch (err) {
      console.error(err);
      alert("Gagal cancel booking, coba lagi!");
    }
  };

  // Bayar booking → redirect ke halaman checkout
  const handlePay = (booking) => {
    navigate(`/checkout/${booking.id}`, { state: booking });
  };

  // Lihat detail tiket → redirect ke halaman detail booking
  const handleViewDetail = (booking) => {
    navigate(`/bookings/${booking.id}`, { state: booking });
  };

  if (!user) return null;

  return (
    <div className="max-w-md mx-auto py-12 px-4">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Kembali ke Beranda</span>
      </Link>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center">
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=3"}
          alt={user.name}
          className="w-32 h-32 rounded-full mb-6 border-4 border-indigo-100 object-cover"
        />

        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {user.name}
        </h1>
        <p className="text-gray-500 mb-6">{user.membership || "Member"}</p>

        {/* Info user */}
        <div className="w-full space-y-4 text-gray-700 mb-8">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Telepon</span>
            <span>{user.phone || "-"}</span>
          </div>
        </div>

        {/* Booking Section */}
        <div className="w-full text-left mb-6">
          <h2 className="text-xl font-semibold mb-3">Pesanan Saya</h2>

          {loading ? (
            <p className="text-gray-500 text-sm">Loading...</p>
          ) : bookings.length > 0 ? (
            <ul className="space-y-4">
              {bookings.map((b) => (
                <li
                  key={b.id}
                  className="border rounded-xl p-4 shadow-sm bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-indigo-700">
                        {b.court?.name || b.court_name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {b.date} | {b.start_time} - {b.end_time}
                      </p>
                      <p className="text-xs text-gray-400">
                        Nomor Booking: #{b.id}
                      </p>
                    </div>
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded-full ${b.payment_status === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                        }`}
                    >
                      {b.payment_status}
                    </span>
                  </div>

                  {/* Tombol aksi */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {b.payment_status !== "paid" ? (
                      <>
                        <button
                          onClick={() => handlePay(b)}
                          className="text-sm px-3 py-1 rounded-lg border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
                        >
                          Bayar
                        </button>
                        <button
                          onClick={() => handleCancelBooking(b.id)}
                          className="flex items-center gap-1 text-sm px-3 py-1 rounded-lg border border-red-500 text-red-600 hover:bg-red-50"
                        >
                          <XCircle className="w-4 h-4" />
                          Batalkan
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setReviewing(b.id)}
                        className="text-sm px-3 py-1 rounded-lg border border-indigo-500 text-indigo-600 hover:bg-indigo-50"
                      >
                        Beri Penilaian
                      </button>
                    )}
                    <button
                      onClick={() => handleViewDetail(b)}
                      className="text-sm px-3 py-1 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                    >
                      Lihat Detail
                    </button>
                  </div>

                  {/* Form Penilaian */}
                  {reviewing === b.id && (
                    <div className="mt-4 border-t pt-3">
                      <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 cursor-pointer ${rating >= star
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                              }`}
                            onClick={() => setRating(star)}
                          />
                        ))}
                      </div>
                      <textarea
                        className="w-full border rounded-lg p-2 text-sm mb-2"
                        rows="2"
                        placeholder="Tulis ulasanmu..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                      />
                      <button
                        onClick={() => handleSubmitReview(b.id)}
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm hover:bg-indigo-700"
                      >
                        Kirim
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Belum ada pesanan.</p>
          )}
        </div>

        {/* Edit Button */}
        <button className="mt-2 flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
          <Edit className="w-5 h-5" />
          Edit Profil
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-4 flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-medium transition"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
