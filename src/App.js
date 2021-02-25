import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import { Cardlist } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState ({monsters:users}));
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
      <SearchBox placeholder="Search monster" handleChange={e => this.setState({ searchField: e.target.value})}/>
      <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
