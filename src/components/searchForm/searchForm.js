import React from 'react';
import SearchResults from '../searchResults/searchResults';
import './searchForm.scss';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: [],
      searchBy: 'beer_name',
      isLoaded: false,
      error: null
    };
    this.searchBeer = this.searchBeer.bind(this);
    this.changeSearchBy = this.changeSearchBy.bind(this);
    this.inputRef = React.createRef();
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
      }, (error) => {
        this.setState(() => ({
          error,
          isLoaded: true
        }));
      });
  }

  fetchBeer(type, value) {
    const formattedValue = type === 'beer_name' ? this.spaceToUnderscore(value) : this.formatDate(value);
    return fetch(`https://api.punkapi.com/v2/beers?${type}=${formattedValue}`)
      .then(res => res.json());
  }

  changeSearchBy(e) {
    e.persist();
    this.setState(() => ({
      searchBy: e.target.value
    }));
    // clear the input value on switching between radio buttons
    this.inputRef.current.value = '';
  }

  formatDate(date) {
    // I feel string formatting easier that working on Date objects in this case
    // If any third party library like moment.js was utilized, I would prefer working on Date objects
    const splitDate = date.split('-');
    return `${splitDate[1]}-${splitDate[0]}`;
  }

  spaceToUnderscore(string) {
    return string.replace(/ /g, '_');
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-form">
          <h3>Search</h3>
          <form className="form-search" onSubmit={this.searchBeer}>
            <input id="search_input" className="search-input" placeholder='eg: lager' ref={this.inputRef}
              type={this.state.searchBy === 'beer_name' ? 'text' : 'date'} />
            <div className="search-radio-group">
              <span>
                <input type="radio" id="name" name="search" className="radio-button"
                  value="beer_name" defaultChecked onChange={this.changeSearchBy} />
                <label className="radio-label" htmlFor="name">by name</label>
              </span>
              <span>
                <input type="radio" id="brew" name="search" className="radio-button"
                  value="brewed_before" onChange={this.changeSearchBy} />
                <label className="radio-label" htmlFor="brew">by brewed before date</label>
              </span>
            </div>
            <button className="button primary-btn search-button" type="submit">Search</button>
          </form>
        </div>
        <SearchResults beerList={this.state.beerList} />
      </div>
    );
  }
}