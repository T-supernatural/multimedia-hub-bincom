import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MediaDetail from "./pages/MediaDetail";
import AdminRedirect from "./pages/AdminRedirect";
import Media from "./pages/Media";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/media" element={<Media />} />
        <Route path="/media/:id" element={<MediaDetail />} />
        <Route path="/superpanel" element={<AdminRedirect />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
