import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h2 className="app-logo">{this.props.title}</h2>
        {this.props.subtitle && <p>{this.props.subtitle}</p>}
      </header>
    );
  }
}