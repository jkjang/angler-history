import React, { Component } from 'react';
import header from 'components/base/Header/Header.scss';

class Header extends Component {
  render() {
    return (
      <div className={header}>
        <div className="container">Anglar History</div>
      </div>
    );
  }
}

export default Header;
