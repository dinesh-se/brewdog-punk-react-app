import React from 'react';
import './searchResults.scss';
import BeerItem from '../beerItem/beerItem';

export default class SearchResults extends React.Component {
  getTemplate(beerList) {
    if (!beerList.length) {
      return <p className="no-results">No search results found.</p>
    } else {
      return (
        <div>
          <h3>Search Results</h3>
          <ul className="beer-search-results">
            {this.props.beerList.map((beer) => (
              <li key={beer.id}>
                <BeerItem beer={beer} />
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    return this.getTemplate(this.props.beerList);
  }
}