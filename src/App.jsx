import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import LapanganPage from "./pages/LapanganPage";
import JadwalPage from "./pages/JadwalPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingPage from "./pages/BookingPage";
import CheckoutPage from "./pages/CheckoutPage";
import HistoryPage from "./pages/HistoryPage";

// ✅ Komponen untuk proteksi route
function PrivateRoute() {
  const token = localStorage.getItem("token"); // cek login
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

// ✅ Layout wrapper untuk Navbar + Footer
function Layout({ children }) {
  const location = useLocation();
  const noLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="font-jakarta">
      {!noLayout && <Navbar />}
      <main>{children}</main>
      {!noLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/lapangan" element={<LapanganPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/riwayat" element={<HistoryPage />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
