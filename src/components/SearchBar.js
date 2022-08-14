/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import './SearchBar.css';

// const SearchBar = (props) => {
//   const [term, setTerm] = useState('');
//   const [location, setLocation] = useState('');
//   const [sortBy, setSortBy] = useState('best_match');

//   const sortByOptions = {
//     'Best Match': 'best_match',
//     'Highest Rated': 'rating',
//     'Most Reviewed': 'review_count'
//   }

//   const getSortByClass = (sortByOption)=> {
//     if (sortBy === sortByOption) {
//       return 'active';
//     }
//     return '';
//   }
  
  // const handleSortByChange = (sortByOption) => {
  //   setSortBy({sortBy: sortByOption});
  // }
//   const handleSortByChange = (sortByOption) => {setSortBy(sortByOption)};


//   const handleTermChange = (event) => {
//     setTerm(event.target.value);
//   }

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   }

//   const handleSearch = (event) => {
//     event.preventDefault();
//     props.searchYelp(term, location, sortBy);
//   }
  
//   const renderSortByOptions = () => {
//     return Object.keys(sortByOptions).map(sortByOption => {
//       let sortByOptionValue = sortByOptions[sortByOption];
//       return (<li className={getSortByClass(sortByOptionValue)}
//                   key={sortByOptionValue}
//                   onClick={handleSortByChange}>
//                 {sortByOption}
//              </li>);
//     });
//   }
//   return (
//     <div className="SearchBar">
//         <div className="SearchBar-sort-options">
//           <ul>
//             {renderSortByOptions()}
//           </ul>
//         </div>
//         <div className="SearchBar-fields">
//           <input placeholder="Search Businesses" onChange={handleTermChange} />
//           <input placeholder="Where?" onChange={handleLocationChange}/>
//         </div>
//         <div className="SearchBar-submit">
//           <a onClick={handleSearch}>Let's Go</a>
//         </div>
//       </div>
//   )
//   }

// export default SearchBar;

import React from 'react';
import './SearchBar.css';
import WheelSpinner from './WheelSpinner.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.channel = new BroadcastChannel('react_connect');

    this.channel.onmessage = res => {
      if (res.data.to === 'spin_wheel') {
        this.state.term = res.data.msg;
      }
    }

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {

    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;