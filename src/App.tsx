import "@/App.css";
import Header from "@/components/Header/Header";
import About from "@/pages/About/AboutPage";
import ServicesPage from "@/pages/Services/ServicesPage";
import GalleryPage from "@/pages/Gallery/GalleryPage";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <About />
      <ServicesPage />
      <GalleryPage />
    </>
  );
}

export default App;
