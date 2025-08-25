import AboutSection from "@/pages/About/AboutSection";
import ServicesSection from "@/pages/Services/ServicesSection";
import GallerySection from "@/pages/Gallery/GallerySection";
import ContactSection from "@/pages/Contact/ContactSection";
import HeroSection from "@/pages/Home/HeroSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
