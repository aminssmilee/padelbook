import Banner from "../components/Banner";
import PadelCourts from "../components/PadelCourts";
import { FeaturesSection } from "../components/FeaturesSection";
import AdvantagesSection from "../components/AdvantagesSection";
import TestimonialsSection from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <PadelCourts />
      <FeaturesSection />
      <AdvantagesSection />
      <TestimonialsSection />
    </>
  );
}
