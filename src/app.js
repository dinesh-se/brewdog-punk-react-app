const appInfo = {
  name: "BrewDog's Beer Application",
  subtitle: "Your beer helper"
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <SubTitle subtitle={appInfo.subtitle} />
      </div>
    );
  }
}

// Stateless functional component
const SubTitle = (props) => {
  return (props.subtitle && <p>{props.subtitle}</p>);
}

// class SubTitle extends React.Component {
//   render() {
//     return (this.props.subtitle && <p>{this.props.subtitle}</p>);
//   }
// }

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchForm />
      </div>
    );
  }
}

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.searchBeer = this.searchBeer.bind(this);
  }
  searchBeer(e) {
    e.preventDefault();
    console.log("this object", this);
    console.log(e.target.elements);
    const stringValue = e.target.elements.search_input.value;
    const searchBy = e.target.elements.search.value;
    console.log(stringValue, searchBy);
    e.target.elements.search_input.value = '';
  }
  render() {
    return (
      <div>
        <form onSubmit={this.searchBeer}>
          <input type="text" id="search_input" placeholder="string" />
          <div>
            <div>
              <input type="radio" id="name" name="search" value="brew_name" defaultChecked />
              <label htmlFor="name">by name</label>
            </div>
            <div>
              <input type="radio" id="brew" name="search" value="brewed_before" />
              <label htmlFor="brew">by brewed before date</label>
            </div>
          </div>
          <button type="submit" className="search">Search</button>
        </form>
      </div>
    );
  }
}

class SearchButton extends React.Component {
  render() {
    return <button type="submit" className="search" onClick={this.searchBeer}>Search</button>;
  }
}

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

const jsx = (
  <div>
    <Header title={appInfo.name} subtitle={appInfo.subtitle} />
    <Search />
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);