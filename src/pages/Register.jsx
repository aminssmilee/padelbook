import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import bg from "../assets/images/padel.jpg";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: password,
      });

      // Register berhasil, redirect ke login
      navigate("/login");
    } catch (err) {
      console.error(err);

      if (err.response && err.response.data) {
        setError(err.response.data.message || "Terjadi kesalahan saat register");
      } else {
        setError("Tidak bisa terhubung ke server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bg} alt="Padel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 z-20"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Form */}
      <div className="relative z-10 mt-auto bg-white rounded-t-3xl shadow-lg px-6 py-10 max-h-[90vh] overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-2">
            Buat Akun
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Daftar sekarang dan mulai booking lapangan padel favoritmu 🎾
          </p>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <span className="text-gray-600">
                Saya setuju dengan{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  syarat layanan
                </a>{" "}
                dan{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  kebijakan privasi
                </a>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium"
            >
              {loading ? "Loading..." : "Daftar"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
