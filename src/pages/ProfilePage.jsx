import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "Budi Santoso",
    email: "budi@example.com",
    phone: "0812-3456-7890",
    membership: "Gold Member",
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-6">
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Kembali ke Beranda</span>
      </Link>

      {/* Profile Card */}
      <div className="border rounded-2xl shadow-lg p-8 bg-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Profil Saya</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Nama:</span> {user.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Telepon:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Membership:</span> {user.membership}
          </p>
        </div>
        <button className="mt-8 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Edit Profil
        </button>
      </div>
    </div>
  );
}
