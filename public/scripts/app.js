"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appInfo = {
  name: "BrewDog's Beer Application",
  subtitle: "Your beer helper"
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h2",
          null,
          this.props.title
        ),
        React.createElement(SubTitle, { subtitle: appInfo.subtitle })
      );
    }
  }]);

  return Header;
}(React.Component);

// Stateless functional component


var SubTitle = function SubTitle(props) {
  return props.subtitle && React.createElement(
    "p",
    null,
    props.subtitle
  );
};

// class SubTitle extends React.Component {
//   render() {
//     return (this.props.subtitle && <p>{this.props.subtitle}</p>);
//   }
// }

var BeerBanner = function (_React$Component2) {
  _inherits(BeerBanner, _React$Component2);

  function BeerBanner(props) {
    _classCallCheck(this, BeerBanner);

    var _this2 = _possibleConstructorReturn(this, (BeerBanner.__proto__ || Object.getPrototypeOf(BeerBanner)).call(this, props));

    _this2.state = {
      error: null,
      isLoaded: false,
      beerInfo: ''
    };
    _this2.getAnotherBeer = _this2.getAnotherBeer.bind(_this2);
    return _this2;
  }

  _createClass(BeerBanner, [{
    key: "fetchRandomBeer",
    value: function fetchRandomBeer() {
      return fetch("https://api.punkapi.com/v2/beers/random").then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAnotherBeer();
    }
  }, {
    key: "getAnotherBeer",
    value: function getAnotherBeer() {
      var _this3 = this;

      this.fetchRandomBeer().then(function (response) {
        _this3.setState(function () {
          return {
            isLoaded: true,
            beerInfo: response[0]
          };
        });
        console.log(_this3.state);
      }, function (error) {
        _this3.setState(function () {
          return {
            isLoaded: true,
            error: error
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          beerInfo = _state.beerInfo;

      if (error) {
        return React.createElement(
          "div",
          null,
          "Error: ",
          error.message
        );
      } else if (!isLoaded) {
        return React.createElement(
          "div",
          null,
          "Loading..."
        );
      } else {
        return React.createElement(
          "div",
          null,
          React.createElement("img", { src: beerInfo.image_url }),
          React.createElement(
            "h3",
            null,
            beerInfo.name
          ),
          React.createElement(
            "p",
            null,
            beerInfo.description
          ),
          React.createElement(
            "button",
            { onClick: this.getAnotherBeer },
            "Another Beer"
          )
        );
      }
    }
  }]);

  return BeerBanner;
}(React.Component);

var Search = function (_React$Component3) {
  _inherits(Search, _React$Component3);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(SearchForm, null)
      );
    }
  }]);

  return Search;
}(React.Component);

var SearchForm = function (_React$Component4) {
  _inherits(SearchForm, _React$Component4);

  function SearchForm(props) {
    _classCallCheck(this, SearchForm);

    var _this5 = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

    _this5.state = {
      beerList: [],
      isLoaded: false,
      error: null
    };
    _this5.searchBeer = _this5.searchBeer.bind(_this5);
    return _this5;
  }

  _createClass(SearchForm, [{
    key: "searchBeer",
    value: function searchBeer(e) {
      var _this6 = this;

      e.preventDefault();
      var stringValue = e.target.elements.search_input.value;
      var searchBy = e.target.elements.search.value;
      this.fetchBeer(searchBy, stringValue).then(function (response) {
        _this6.setState(function () {
          return {
            beerList: response,
            isLoaded: true
          };
        });
        console.log('beer list', _this6.state);
      }, function (error) {
        _this6.setState(function () {
          return {
            error: error,
            isLoaded: true
          };
        });
      });
    }
  }, {
    key: "fetchBeer",
    value: function fetchBeer(type, value) {
      var formattedValue = this.spaceToUnderscore(value);
      return fetch("https://api.punkapi.com/v2/beers?" + type + "=" + formattedValue).then(function (res) {
        return res.json();
      });
    }
  }, {
    key: "spaceToUnderscore",
    value: function spaceToUnderscore(string) {
      return string.replace(/ /g, '_');
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.searchBeer },
          React.createElement("input", { type: "text", id: "search_input", placeholder: "string" }),
          React.createElement(
            "div",
            null,
            React.createElement(
              "div",
              null,
              React.createElement("input", { type: "radio", id: "name", name: "search", value: "brew_name", defaultChecked: true }),
              React.createElement(
                "label",
                { htmlFor: "name" },
                "by name"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement("input", { type: "radio", id: "brew", name: "search", value: "brewed_before" }),
              React.createElement(
                "label",
                { htmlFor: "brew" },
                "by brewed before date"
              )
            )
          ),
          React.createElement(
            "button",
            { type: "submit", className: "search" },
            "Search"
          )
        ),
        React.createElement(SearchResults, { beerList: this.state.beerList })
      );
    }
  }]);

  return SearchForm;
}(React.Component);

var SearchResults = function (_React$Component5) {
  _inherits(SearchResults, _React$Component5);

  function SearchResults() {
    _classCallCheck(this, SearchResults);

    return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
  }

  _createClass(SearchResults, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ul",
          null,
          this.props.beerList.map(function (beer) {
            return React.createElement(
              "li",
              { key: beer.id },
              beer.name
            );
          })
        )
      );
    }
  }]);

  return SearchResults;
}(React.Component);

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handlePlusOne = this.handlePlusOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0
//     }
//   }
//   handlePlusOne() {
//     console.log('plus');
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }));
//   }
//   handleMinusOne() {
//     console.log('minus');
//     this.setState((prevState) => ({
//       count: prevState.count - 1
//     }));
//   }
//   handleReset() {
//     console.log('reset');
//     this.setState((prevState) => ({
//       count: 0
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handlePlusOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }

var jsx = React.createElement(
  "div",
  null,
  React.createElement(Header, { title: appInfo.name, subtitle: appInfo.subtitle }),
  React.createElement(BeerBanner, null),
  React.createElement(Search, null)
);

var appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);
