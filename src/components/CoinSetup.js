import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class CoinSetup extends Component {
    state = {
      value: 1,
      secondSlider: 50,
    };

    handleChange = (event, index, value) => this.setState({value});

    handleSecondSlider = (event, value) => {
      this.setState({secondSlider: value});
    };
    
    render() {
        return (
            <div className="coin-setup">
                <h2>Coin Setup</h2>
                <div>
                    <div className="input-text">
                      <TextField hintText="Book Name"/><br />
                    </div>
                    <div className="public-equity"> 
                        <p>
                            <span>{'Public Equity Reserve '}</span>
                            <span className="equity-percentage">{this.state.secondSlider}{' %'}</span>
                        </p>    
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={this.state.secondSlider}
                            onChange={this.handleSecondSlider}
                        />
                    </div>
                    <div className="gov">
                        <p>Governance</p>
                        <SelectField
                        value={this.state.value}
                        onChange={this.handleChange}
                        >
                            <MenuItem value={'Boardroom Integration'} primaryText="Board Room Integration" />
                            <MenuItem value={'Traditional Equity Based'} primaryText="Traditional Equity Based" />
                        </SelectField>
                        <br />
                    </div>
                    <div>
                      <TextField hintText="Coin Name (i.e. Ether)"/><br />
                    </div>
                    <div>
                      <TextField hintText="Coin Acronym (i.e. ETH)"/><br />
                    </div>
                </div>
                <Link to="/dashboard">
                  <button>Create</button>
                </Link>
            </div>
        )
    }
}

export default CoinSetup;
