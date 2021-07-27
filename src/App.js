import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: 'Frankeinstein', id: '112'},
        { name: 'Dracula', id: '113'},
        { name: 'Zombie', id: '114'}
      ]
    }
  };

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster => (<h1 key={monster.id}>{monster.name}</h1>) )
        }
      </div>
    )
  }
}

export default App;
