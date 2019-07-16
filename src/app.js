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

class BeerBanner extends React.Component {
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
    this.state = {
      beerList: [],
      isLoaded: false,
      error: null
    };
    this.searchBeer = this.searchBeer.bind(this);
  }

  searchBeer(e) {
    e.preventDefault();
    const stringValue = e.target.elements.search_input.value;
    const searchBy = e.target.elements.search.value;
    this.fetchBeer(searchBy, stringValue)
      .then((response) => {
        this.setState(() => ({
          beerList: response,
          isLoaded: true
        }));
        console.log('beer list', this.state);
      }, (error) => {
        this.setState(() => ({
          error,
          isLoaded: true
        }));
      });
  }

  fetchBeer(type, value) {
    const formattedValue = this.spaceToUnderscore(value);
    return fetch(`https://api.punkapi.com/v2/beers?${type}=${formattedValue}`)
      .then(res => res.json());
  }

  spaceToUnderscore(string) {
    return string.replace(/ /g, '_');
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
        <SearchResults beerList={this.state.beerList} />
      </div>
    );
  }
}

class SearchResults extends React.Component {
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
    <BeerBanner />
    <Search />
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);