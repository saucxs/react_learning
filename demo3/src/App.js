import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Components/Table'
import Form from './Components/Form'

class App extends Component {
  state = {
      characters: [{
          name: 'saucxs',
          age: 19
      }]
  }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

  render () {
      const {characters} = this.state;
      return (
          <div className="App">
              <Table
                  characterData = {characters}
              />
              <hr />
              <Form handleSubmit={this.handleSubmit}  />
          </div>
      )
  }
}

export default App;
