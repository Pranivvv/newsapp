// apiKey = 56593e3a139c4e5f8b5c1a1e474239e6


import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    const router = createBrowserRouter([
      {
        path: "/",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='general'/>,
    },
    {
        path: "/business",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='business'/>,
    },
    {
        path: "/entertainment",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='entertainment'/>,
    },
    {
        path: "/general",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='general'/>,
    },
    {
        path: "/health",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='health'/>,
    },
    {
        path: "/science",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='science'/>,
    },
    {
        path: "/sports",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='sports'/>,
    },
    {
        path: "/technology",
        element: <News mode={this.state.mode} apiKey= {this.state.apiKey} pageSize={this.state.pageSize} country={this.state.country} category='technology'/>,
    }
    ]);

    return (
      <>
        <Navbar mode={this.state.mode} changeMode={this.changeMode}/>
        <RouterProvider router={router} />
      </>
    )
  }
}

