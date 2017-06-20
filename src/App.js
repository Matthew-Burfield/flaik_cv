import React, { Component } from 'react';
import { Icons } from './Icons'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <div className="logo">
              <svg viewBox="-3 -3 114 63">
                <g id="Page-1" stroke="none" strokeWidth="10" fill="none" fillRule="evenodd">
                  <path d="M25.3950617,52.0033881 C23.3950617,47.0033881 22.3950617,50.0033881 14.3950617,56.0033881 C11.5337383,58.1493806 5.72578149,56.916273 3.39506173,55.0033881 C-1.60493827,51.0033881 0.395061728,50.0033881 0.395061728,50.0033881 L48.3950617,2.96707729 C48.3950617,2.96707729 51.7043274,-0.116147455 53.8950617,0.00338805258 C56.0857961,0.12292356 58.3950617,2.00338805 58.3950617,2.00338805 C58.3950617,2.00338805 106.395062,48.0033881 107.395062,51.0033881 C108.395062,54.0033881 106.968007,58.2655457 93.3950617,56.0033881 C79.8221161,53.7412304 59.4946545,15.0303307 48.3950617,24.8526402 C37.2954689,34.6749497 64.2268422,44.1716075 54.3950617,54.0033881 C41.9906611,66.4077887 35.1931179,39.7227529 27,43"></path>
                </g>
              </svg>
              <span>Matthew Burfield</span>
            </div>
            <div className="buttons">
              <button name="btn1">Button 1</button>
              <button name="btn2">Button 2</button>
            </div>
          </header>
          <section className="content">
            <h1>Enthusiastic Frontend Developer.</h1>
            <h2>I build cool shit.</h2>
          </section>
          <Icons />
        </div>
      </div>
    );
  }
}

export default App;