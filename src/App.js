import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Search
            onSearch={username => {
              this.setState({ username });
            }}
          />
          <Card username={this.state.username} />
        </p>
      </div>
    );
  }
}

export default App;
