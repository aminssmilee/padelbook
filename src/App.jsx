import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LapanganPage from "./pages/LapanganPage";
import JadwalPage from "./pages/JadwalPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Layout({ children }) {
  const location = useLocation();

  // path yang tidak butuh navbar & footer
  const hideLayout = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="font-jakarta">
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lapangan" element={<LapanganPage />} />
          <Route path="/jadwal" element={<JadwalPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
