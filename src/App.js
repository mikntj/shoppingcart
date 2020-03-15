
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
        </div>
      </Router>
    )
  }
}
/*function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}*/

export default App;
