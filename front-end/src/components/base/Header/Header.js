import React, { Component } from 'react';
import 'components/base/Header/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header py-3">
        <div className="row">
          <div className="flex-3 d-flex">
            {/* <a className="text-muted" href="#">

            </a> */}
          </div>
          <div className="flex-3 text-center">
            <a className="header-logo text-dark" href="#">
              Fishing Story
            </a>
          </div>
          <div className="flex-3 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="21" y1="21" x2="15.8" y2="15.8" />
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
