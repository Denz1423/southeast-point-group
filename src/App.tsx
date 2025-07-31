import "@/App.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import About from "@/pages/About/AboutPage";
import ServicesPage from "@/pages/Services/ServicesPage";
import GalleryPage from "@/pages/Gallery/GalleryPage";
import ContactPage from "@/pages/Contact/ContactPage";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <About />
      <ServicesPage />
      <GalleryPage />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
