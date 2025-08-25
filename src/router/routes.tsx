import HomePage from "@/pages/Home/HomePage";
import ServicesPage from "@/pages/Services/ServicesPage";
import GalleryPage from "@/pages/Gallery/GalleryPage";
import ContactPage from "@/pages/Contact/ContactPage";
import { Routes, Route } from "react-router";
import Layout from "@/pages/Layout/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
