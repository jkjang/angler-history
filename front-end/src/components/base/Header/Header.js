// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'components/base/Header/Header.scss';
import Modal from 'react-responsive-modal';
import { openSignInModal } from 'redux/actions/actions';
import AuthForm from 'components/signin/AuthForm';

const signInModalStateToProps = state => ({ open: state.open });

type State = {
  open: boolean,
};
class Header extends Component<State> {
  state = {
    open: false,
  };

  onOpen = () => {
    this.setState({
      open: true,
    });
  };

  onClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    // const { onOpen, onClose } = this;
    const { open } = this.state;

    return (
      <header className="header py-3">
        <div className="row">
          <div className="flex-3 d-flex">
            {/* <a className="text-muted" href="#">

            </a> */}
          </div>
          <div className="flex-3 text-center">
            <a className="header-logo text-dark" href="#">
              Fishing History
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
                className="search"
              >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="21" y1="21" x2="15.8" y2="15.8" />
              </svg>
            </a>
            <a className="btn no-outline " href="#" onClick={this.onOpen}>
              Sign in
            </a>
            <Modal open={open} onClose={this.onClose} center>
              <h2>Simple centered modal</h2>
            </Modal>
            <a className="btn" href="#">
              Get Started
            </a>
          </div>
        </div>
      </header>
    );
  }
}

// export default Header;

export default connect(
  signInModalStateToProps,
  { openSignInModal },
)(Header);
