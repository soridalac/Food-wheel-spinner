import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer.js'
// import BusinessList from './components/BusinessList.js';
// import SearchBar from './components/SearchBar.js';
// import Yelp from './util/Yelp.js';
// import WheelSpinner from './components/WheelSpinner.js';
// import NavBar from './components/NavBar.js';

function App() {
  // const [businesses, setBusinesses] = useState([])

  // const searchYelp = (term, location, sortBy) => {
  //   Yelp.search(term, location, sortBy).then(businesses => {
  //     setBusinesses(businesses);
  //   });
  // }
  return (
    <div className="App">
      <MainContainer />
        {/* <h1>What should we eat?</h1>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} /> */}
      </div>
  )
}

export default App;
