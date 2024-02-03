//import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import './App.css';

// Functional Component of APP.
// Comment out when testing class component below.  
const App = () => {
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) 
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]); 

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  } 

  return (
  <div className="App">
    <h1 className="app-title"> Monsters Rolodex </h1>
    <SearchBox
      className='monsters-search-box'
      onChangeHandler={onSearchChange}
      placeholder='search monsters' 
    />
    <CardList monsters={filteredMonsters} />
  </div>
  );
}

// Class Component of APP.

/* class App extends Component {
  // method available for class components. 'whenever app is built 
  // run this first and call super(). super calls underlying constructor method
  // constructor always needs super
  constructor() {
    super();
    // state object from json
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json()) //converting rresponse from url to json object
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });  
  } 
  
  render() {   
    // if modifying an array, create new array with modification.
    // examples are .map, .filter, .reduce  
    const { monsters, searchField } = this.state; // get monsters + search field
    const { onSearchChange } = this; // we have cast this + this.state to variables
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    // the CardList must be capitilized for react to see it
    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex </h1>
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
} */

export default App;
