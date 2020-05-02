import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" />
        <UserItem />
        <h1>Hello</h1>
      </div>
    )
  }
}