import React from 'react';
import './beerItem.scss';

export default class BeerItem extends React.Component {
  render() {
    return (
      <div className="beer-item-container">
        <div className="flex-container">
          <div className="image-container beer-item">
            <img className="beer-image beer-item" src={this.props.beer.image_url} />
          </div>
          <div className="beer-information">
            <h3 className="beer-item-name">{this.props.beer.name}</h3>
            <p className="beer-item-desc">{this.props.beer.description}</p>
          </div>
        </div>
      </div>
    );
  }
}