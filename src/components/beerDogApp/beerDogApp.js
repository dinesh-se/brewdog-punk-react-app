import React from 'react';
import Header from '../header/Header';
import BeerBanner from '../BeerBanner';
import SearchForm from '../SearchForm';
import './beerDogApp.scss';


const appInfo = {
  name: "BrewDog's Beer Application",
  subtitle: "Your beer helper"
};

export default class BeerDog extends React.Component {
  render() {
    return (
      <div>
        <Header title={appInfo.name} subtitle={appInfo.subtitle} />
        <div className="container">
          <BeerBanner />
          <SearchForm />
        </div>
      </div>
    )
  }
}