import React from "react";
import Home from "./pages/Home";
import MediaDetail from "./pages/MediaDetail";
import AdminRedirect from "./pages/AdminRedirect";
import Media from "./pages/Media";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/media/:id" element={<MediaDetail />} />
        <Route path="/superpanel" element={<AdminRedirect />} />
      </Routes>
    </>
  );
};

export default App;
