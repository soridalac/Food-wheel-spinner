import React from 'react';
import Navbar from './components/Navbar.js';
import { Routes, Route } from "react-router-dom";
import MyGalleries from './components/MyGalleries';
import Home from './components/Home';
import WheelSpinner from './components/WheelSpinner.js';
import './App.css';

function App() {
  // const [businesses, setBusinesses] = useState([])

  // const searchYelp = (term, location, sortBy) => {
  //   Yelp.search(term, location, sortBy).then(businesses => {
  //     setBusinesses(businesses);
  //   });
  // }
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mygalleries" element={<MyGalleries />} />
          <Route path="/wheelspinner" element={<WheelSpinner />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
