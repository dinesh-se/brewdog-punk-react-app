class SearchForm extends React.Component {
  render() {
    return <p>This is from searchFrom component.</p>
  }
}

const appInfo = {
  name: "BrewDog's Beer Application",
  subtitle: "Your beer helper"
};

const searchBeer = (e) => {
  e.preventDefault();
  console.log(e.target.elements);
  const stringValue = e.target.elements.search_input.value;
  const searchBy = e.target.elements.search.value;
  console.log(stringValue, searchBy);
  e.target.elements.search_input.value = '';
};

const jsx = (
  <div>
    <h2>{appInfo.name}</h2>
    {appInfo.subtitle && <p>{appInfo.subtitle}</p>}
    <form onSubmit={searchBeer}>
        <input type="text" id="search_input" placeholder="string" />
        <div>
          <div>
            <input type="radio" id="name" name="search" value="brew_name" defaultChecked/>
            <label htmlFor="name">by name</label>
          </div>
          <div>
            <input type="radio" id="brew" name="search" value="brewed_before"/>
            <label htmlFor="brew">by brewed before date</label>
          </div>
        </div>
        <button type="submit" className="search">Search</button>
      </form>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(jsx, appRoot);