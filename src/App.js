import React, {Component} from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import {SearchBox } from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lsMonsters: [],
      setInput: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => this.setState({lsMonsters: response}))
  }
  handleChange = (e) => {
    this.setState({setInput: e.target.value})
  }
  render() {
    return (
      <div className = 'App'>
        <h1> Monster Relodox </h1>
        <SearchBox placeholder = 'Monster Name' 
          handleChange = {this.handleChange}/>
        <CardList monsters = {this.state} />
      </div>
    );
  }
}

export default App;
