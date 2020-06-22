import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
				<Header />
	        <h1>Hello</h1>
				<Footer />
      </div>
    )
  }
}