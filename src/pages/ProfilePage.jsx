import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Edit, LogOut } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // kalau belum login, lempar balik ke login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return null; // kalau belum ada user, jangan render dulu

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
        {/* Profile Picture */}
        <img
          src={user.avatar || "https://i.pravatar.cc/150?img=3"}
          alt={user.name}
          className="w-32 h-32 rounded-full mb-6 border-4 border-indigo-100 object-cover"
        />

        {/* User Info */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          {user.name}
        </h1>
        <p className="text-gray-500 mb-6">
          {user.membership || "Member"}
        </p>

        <div className="w-full space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Telepon</span>
            <span>{user.phone || "-"}</span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="mt-8 flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition">
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
