import React, { Component } from 'react';
import './App.css';

import { Cart } from './components';

class App extends Component {
  render() {
    return (
      <div className="outer-container">
        <Cart />
      </div>
    );
  }
}

export default App;
