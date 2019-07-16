import React from 'react';

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
        this.setState(() => ({
          isLoaded: true,
          beerInfo: response[0]  
        }))
        console.log(this.state);
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
        <div>
          <img src={beerInfo.image_url} />
          <h3>{beerInfo.name}</h3>
          <p>{beerInfo.description}</p>
          <button onClick={this.getAnotherBeer}>Another Beer</button>
        </div>
      )
    }
  }
}