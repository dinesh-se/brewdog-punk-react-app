import React from 'react';
import './beerBanner.scss';

export default class BeerBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      beerInfo: ''
    };
    this.getAnotherBeer = this.getAnotherBeer.bind(this);
  }

  fetchRandomBeer() {
    return fetch("https://api.punkapi.com/v2/beers/random")
      .then(res => res.json());
  }

  componentDidMount() {
    this.getAnotherBeer();
  }

  getAnotherBeer() {
    this.fetchRandomBeer()
      .then((response) => {
        if (!response[0].description || ! response[0].image_url) {
          this.getAnotherBeer();
        }
        this.setState(() => ({
          isLoaded: true,
          beerInfo: response[0]
        }))
      }, (error) => {
        this.setState(() => ({
          isLoaded: true,
          error
        }));
      });
  }

  render() {
    const { error, isLoaded, beerInfo } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="banner-container">
          <h3 className="beer-name">{beerInfo.name}</h3>
          <div className="flex-container">
            <div className="image-container">
              <img className="beer-image" src={beerInfo.image_url} />
            </div>
            <div className="beer-desc">
              {beerInfo.description}
            </div>
            <div className="switch-beer">
              <button className="button primary-btn" onClick={this.getAnotherBeer}>Another Beer</button>
              <button className="button primary-btn" onClick={this.getAnotherBeer}>Random Non-Alcoholic Beer</button>
            </div>
          </div>
        </div>
      )
    }
  }
}