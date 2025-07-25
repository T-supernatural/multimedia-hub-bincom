import React from 'react'
import Home from './pages/Home'
import MediaDetail from "./pages/MediaDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media/:id" element={<MediaDetail />} />
    </Routes>
  );
}

export default App
