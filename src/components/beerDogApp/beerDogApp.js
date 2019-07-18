import React from 'react';
import Header from '../header/Header';
import BeerBanner from '../beerBanner/beerBanner';
import SearchForm from '../searchForm/searchForm';
import './beerDogApp.scss';


const appInfo = {
  name: "BrewDog"
};

export default class BeerDog extends React.Component {
  render() {
    return (
      <div>
        <Header title={appInfo.name} subtitle={appInfo.subtitle} />
        <section className="container">
          <BeerBanner />
          <SearchForm />
        </section>
        <footer className="footer-section">
          <small>Developed by Dinesh Haribabu</small>
        </footer>
      </div>
    )
  }
}