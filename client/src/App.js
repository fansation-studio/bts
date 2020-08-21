import React, { Component } from 'react';
import { Navbar } from './components/';
import Routes from './Routes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeLink: document.location.pathname,
    };

  };

  handleClick = pathname => {
    this.setState({
      activeLink: pathname,
    });
  };

  render() {
    const { activeLink } = this.state;
    return (
      <div>
        <Navbar activeLink={activeLink} handleClick={this.handleClick} />
        <div className="content">
          <Routes handleClick={this.handleClick} />
        </div>
      </div>
    );
  };
};
