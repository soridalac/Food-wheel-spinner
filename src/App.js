import React from 'react';
import Navbar from './components/Navbar.js';
import { Routes, Route } from "react-router-dom";
import FoodGalleries from './components/FoodGalleries.js';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodgalleries" element={<FoodGalleries />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
