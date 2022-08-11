import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer.js'
// import BusinessList from './components/BusinessList.js';
// import SearchBar from './components/SearchBar.js';
// import Yelp from './util/Yelp.js';
// import WheelSpinner from './components/WheelSpinner.js';
import Navbar from './components/Navbar.js';
import { Routes, Route } from "react-router-dom";
import MyGalleries from './components/MyGalleries';
import Channels from './components/Channels';
import Home from './components/Home';

function App() {
  // const [businesses, setBusinesses] = useState([])

  // const searchYelp = (term, location, sortBy) => {
  //   Yelp.search(term, location, sortBy).then(businesses => {
  //     setBusinesses(businesses);
  //   });
  // }
  return (
    <div>
        {/* <h1>What should we eat?</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} /> */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mygalleries" element={<MyGalleries />} />
          <Route path="/channels" element={<Channels />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
