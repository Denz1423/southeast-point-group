import Footer from "@/components/Footer/Footer";
import About from "@/pages/About/AboutPage";
import ServicesPage from "@/pages/Services/ServicesPage";
import GalleryPage from "@/pages/Gallery/GalleryPage";
import ContactPage from "@/pages/Contact/ContactPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <HomePage />
      <About />
      <ServicesPage />
      <GalleryPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
