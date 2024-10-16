import { AboutSection } from "@/components/AboutSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { InitSection } from "@/components/InitSection";
import { PriceSection } from "@/components/PriceSection";
import { WorkSection } from "@/components/WorkSection";

// Exemplo em um componente React
export default function Home() {
  return (
    <div className="max-h-screen overflow">
      <Header/>
      <InitSection/>
      <AboutSection/>
      <WorkSection  />
      <PriceSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
