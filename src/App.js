import './App.css';
import Navigation from './Components/navigation';

import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  c = 'ajay';
  render() {
    
    return (
      <div>
        <Navigation />
        <News />
      </div>
    )
  }
}
