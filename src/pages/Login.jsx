import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/padel.jpg";

export default function Login() {
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
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      // ✅ simpan token & user ke localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ redirect ke halaman profil (atau home)
      navigate("/profil");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={bg} alt="Padel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Tombol Back */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm rounded-full px-3 py-2 z-20"
      >
        <FaArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* Form Container */}
      <div className="relative z-10 mt-auto bg-white rounded-t-3xl shadow-lg px-6 py-8">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8">
            Get Started
          </h2>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
