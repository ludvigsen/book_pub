import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import CoinSetup from './CoinSetup';
import Footer from './Footer';
import '../styles/App.css';

class MainComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-first">
          <h1>Book Pub</h1>
          <p>A framework to help you publish your book</p>
          <button>
            <Link to="/coinsetup">Publish Your Book</Link>
          </button>
        </div>
        <div className="App-second">
          <div className="App-sub-second">
            <img src="http://via.placeholder.com/150x350" />
            <p>Create your Book Pub coin</p>
          </div>
          <div className="App-sub-second">
            <img src="http://via.placeholder.com/150x350" />
            <p>Users buy these coins to buy your book and invest</p>
          </div>
          <div className="App-sub-second">
            <img src="http://via.placeholder.com/150x350" />
            <p>You get money to publish your book</p>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default MainComponent;
