import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import getWeb3 from '../utils/getWeb3';
import contract from 'truffle-contract';
import BookPub from '../contracts/BookPub';

let bookPub;
let web3;
getWeb3().then(web3Instance => {
  web3 = web3Instance;
  const network = Object.keys(BookPub.networks)[0];
  bookPub = contract(BookPub);
  console.log('web3: ', web3.currentProvider);
  bookPub.setProvider(web3.currentProvider);
  bookPub.deployed().then(instance => {
    console.log(instance);
    bookPub = instance;
  });
})




class CoinSetup extends Component {
  state = {
    readershipStake: 100,
  };

  handleChange = (fieldName, event) => {
    const state = {
      ...this.state,
    };
    state[fieldName] = event.target.value;
    this.setState(state);
  };

  handleReadershipStake = (event, value) => {
    this.setState({ readershipStake: value });
  };

  create = () => {
    const {
      readershipStake,
      goal,
      toBeShipped,
      userCount,
      eligibleCount,
      initialAmount,
      coinName,
      symbol,
      decimalUnits,
    } = this.state;
    console.log(
      readershipStake,
      goal,
      toBeShipped,
      userCount,
      eligibleCount,
      initialAmount,
      coinName,
      decimalUnits,
      symbol,

      { from: web3.eth.accounts[0] },
    );
    bookPub.publishBook(
      readershipStake,
      goal,
      toBeShipped,
      userCount,
      eligibleCount,
      initialAmount,
      coinName,
      decimalUnits,
      symbol,
      { from: web3.eth.accounts[0] },
    );
  };

  render() {
    return (
      <div className="coin-setup">
        <h2>Coin Setup</h2>
        <div>
          <div className="input-text">
            <TextField
              hintText="Book Name"
              onChange={this.handleChange.bind(this, 'name')}
            />
            <br />
          </div>
          <div className="public-equity">
            <p>
              <span>{'Public Equity Reserve '}</span>
              <span className="equity-percentage">
                {this.state.secondSlider}
                {' %'}
              </span>
            </p>
            <Slider
              min={0}
              max={100}
              step={1}
              value={this.state.readershipStake}
              onChange={this.handleReadershipStake}
            />
          </div>
          <div className="gov">
            <p>Governance</p>
            <SelectField value={this.state.value} onChange={this.handleChange}>
              <MenuItem
                value={'Boardroom Integration'}
                primaryText="Board Room Integration"
              />
              <MenuItem
                value={'Traditional Equity Based'}
                primaryText="Traditional Equity Based"
              />
            </SelectField>
            <br />
          </div>
          <div>
            <TextField
              hintText="Coin Name (i.e. Ether)"
              onChange={this.handleChange.bind(this, 'coinName')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="Coin Acronym (i.e. ETH)"
              onChange={this.handleChange.bind(this, 'symbol')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="Goal"
              onChange={this.handleChange.bind(this, 'goal')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="To be shipped"
              onChange={this.handleChange.bind(this, 'toBeShipped')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="User count"
              onChange={this.handleChange.bind(this, 'userCount')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="Eligible count"
              onChange={this.handleChange.bind(this, 'eligibleCount')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="Initial amount"
              onChange={this.handleChange.bind(this, 'initialAmount')}
            />
            <br />
          </div>
          <div>
            <TextField
              hintText="Decimal units"
              onChange={this.handleChange.bind(this, 'decimalUnits')}
            />
            <br />
          </div>
        </div>
        <Link to="/dashboard">
          <button onClick={this.create}>Create</button>
        </Link>
      </div>
    );
  }
}

export default CoinSetup;
