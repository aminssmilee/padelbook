import AdvantagesSection from "./components/AdvantagesSection";
import Banner from "./components/Banner";
import CourtListSection from "./components/CourtListSection";
import { FeaturesSection } from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PadelCourts from "./components/PadelCourts";
import TestimonialsSection from "./components/TestimonialsSection";
// import HomePage from "./pages/HomePage";





function App() {
  return (
    <div className="font-jakarta">
      <Navbar />
      <Banner />
      <PadelCourts />
      <FeaturesSection />
      <AdvantagesSection />
      {/* <CourtListSection /> */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
