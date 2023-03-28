import React, { Component } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';

class App extends Component {
  render() {
    return (
       <div>
          <Header></Header>
          <Shop></Shop>
       </div>
    );
  }
}

export default App;