import React, { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList.js';
import SearchBar from './components/SearchBar.js';
import Yelp from './util/Yelp.js';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    Yelp.searchYelp(term, location, sortBy)
    .then(businesses => {
      setBusinesses(businesses);
    });
  }
  return (
    <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
  );
}

export default App;
