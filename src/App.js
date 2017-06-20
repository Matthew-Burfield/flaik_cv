import React, { Component } from 'react';
import { Icons } from './Icons'
import { Header } from './Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page1">
          <div className="container">
            <Header fontColor='#fff' borderColor='rgba(255, 255, 255, .3)' />
            <section className="content">
              <h1>Enthusiastic Frontend Developer.</h1>
              <h2>I build cool shit.</h2>
            </section>
            <Icons />
          </div>
        </div>
        <div className="page2">
          <div className="container">
            <Header fontColor='#1C232B' borderColor='#1C232B' />
            <section className="content">
              <h1>Experience</h1>
              <ul>
                <li>uniDap Solutions</li>
                <li>Magikhack</li>
                <li>Givebackathon</li>
                <li>Chingu</li>
                <li>Personal Portfolio</li>
                <li>SVG/sketch</li>
                <li>Meetups</li>
                <li>Free code camp</li>
                <li>Coder dojo</li>
                <li>Digital8</li>
                <li></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;