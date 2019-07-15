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

var Search = function (_React$Component2) {
  _inherits(Search, _React$Component2);

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

var SearchForm = function (_React$Component3) {
  _inherits(SearchForm, _React$Component3);

  function SearchForm(props) {
    _classCallCheck(this, SearchForm);

    var _this3 = _possibleConstructorReturn(this, (SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call(this, props));

    _this3.searchBeer = _this3.searchBeer.bind(_this3);
    return _this3;
  }

  _createClass(SearchForm, [{
    key: "searchBeer",
    value: function searchBeer(e) {
      e.preventDefault();
      console.log("this object", this);
      console.log(e.target.elements);
      var stringValue = e.target.elements.search_input.value;
      var searchBy = e.target.elements.search.value;
      console.log(stringValue, searchBy);
      e.target.elements.search_input.value = '';
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
        )
      );
    }
  }]);

  return SearchForm;
}(React.Component);

var SearchButton = function (_React$Component4) {
  _inherits(SearchButton, _React$Component4);

  function SearchButton() {
    _classCallCheck(this, SearchButton);

    return _possibleConstructorReturn(this, (SearchButton.__proto__ || Object.getPrototypeOf(SearchButton)).apply(this, arguments));
  }

  _createClass(SearchButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { type: "submit", className: "search", onClick: this.searchBeer },
        "Search"
      );
    }
  }]);

  return SearchButton;
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
  React.createElement(Search, null)
);

var appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);
