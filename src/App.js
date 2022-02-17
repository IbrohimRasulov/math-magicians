import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Calculator />
    );
  }
}
export default App;
