import React, { useState } from 'react';
import { Header, Divider } from 'semantic-ui-react';
import '../App.css';
import BusinessList from './BusinessList.js';
import SearchBar from './SearchBar.js';
import Yelp from '../util/Yelp.js';

const MyGalleries = () => {

    const [businesses, setBusinesses] = useState([])

    const searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then(businesses => {
        setBusinesses(businesses);
        });
    }
        return (
            <div
                className = "MyGalleries">
                <Header as='h2'>MyGalleries</Header>
                <Divider style={{ width: '60%', margin: 'auto', marginBottom: '20px' }}/>
                <h1>What should we eat?</h1>
                <SearchBar searchYelp={searchYelp} />
                <BusinessList businesses={businesses} />
            </div>
        )
    }

export default MyGalleries;