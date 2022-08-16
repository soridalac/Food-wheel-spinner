import React, { useState } from 'react';
import './FoodGalleries.css';
import BusinessList from './BusinessList.js';
import SearchBar from './SearchBar.js';
import Yelp from '../util/Yelp.js';
import WheelSpinner from './WheelSpinner.js';

const FoodGalleries = () => {

    const [businesses, setBusinesses] = useState([])

    const searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then(businesses => {
        setBusinesses(businesses);
        });
    }

    return (
            <div>
                <div className='App'>
                    <h1>What to eat</h1>
                    <SearchBar searchYelp={searchYelp} />
                    <WheelSpinner />
                    <BusinessList businesses={businesses} />
                </div>
            </div>
        )
}

export default FoodGalleries;
