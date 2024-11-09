// apiKey = 56593e3a139c4e5f8b5c1a1e474239e6


import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      mode: 'light',
      apiKey:  '56593e3a139c4e5f8b5c1a1e474239e6',
      pageSize: 8,
      country: 'us',
      category: 'general'
    };
  }

  changeMode = () => {
    this.setState((prevState) => {
      const newMode = prevState.mode === 'light' ? 'dark' : 'light';
      document.body.style.backgroundColor = newMode === 'dark' ? '#212529' : '#fff';
      document.body.style.color = newMode === 'dark' ? '#fff' : '#212529';
      return { mode: newMode };
    });
  };
  
  render() {
    return (
      <>
        <Navbar mode={this.state.mode} changeMode={this.changeMode}/>
        <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category={this.state.category}/>
      </>
    )
  }
}

