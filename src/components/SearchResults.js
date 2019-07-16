import React from 'react';

export default class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.beerList.map((beer) => (
            <li key={beer.id}>{beer.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}