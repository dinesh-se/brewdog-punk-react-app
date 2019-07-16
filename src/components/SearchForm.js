import React from 'react';
import SearchResults from './SearchResults';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      isLoaded: false,
      error: null
    };
    this.searchBeer = this.searchBeer.bind(this);
  }

  searchBeer(e) {
    e.preventDefault();
    const stringValue = e.target.elements.search_input.value;
    const searchBy = e.target.elements.search.value;
    this.fetchBeer(searchBy, stringValue)
      .then((response) => {
        this.setState(() => ({
          beerList: response,
          isLoaded: true
        }));
        console.log('beer list', this.state);
      }, (error) => {
        this.setState(() => ({
          error,
          isLoaded: true
        }));
      });
  }

  fetchBeer(type, value) {
    const formattedValue = this.spaceToUnderscore(value);
    return fetch(`https://api.punkapi.com/v2/beers?${type}=${formattedValue}`)
      .then(res => res.json());
  }

  spaceToUnderscore(string) {
    return string.replace(/ /g, '_');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.searchBeer}>
          <input type="text" id="search_input" placeholder="string" />
          <div>
            <div>
              <input type="radio" id="name" name="search" value="brew_name" defaultChecked />
              <label htmlFor="name">by name</label>
            </div>
            <div>
              <input type="radio" id="brew" name="search" value="brewed_before" />
              <label htmlFor="brew">by brewed before date</label>
            </div>
          </div>
          <button type="submit" className="search">Search</button>
        </form>
        <SearchResults beerList={this.state.beerList} />
      </div>
    );
  }
}