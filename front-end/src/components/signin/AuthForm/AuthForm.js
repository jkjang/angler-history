// @flow
import React, { Component } from 'react';
import './AuthForm.scss';

type Props = {
  email: string,
  password: string,
};

class AuthForm extends Component<Props> {
  onEmailChange = () => {};

  doLogin = () => {};

  onSendVerification = () => {};

  onPasswordChange = () => {};

  render() {
    const { onEmailChange, doLogin, onSendVerification, onPasswordChange } = this;
    const { email, password } = this.props;
    return (
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">F1 Admin Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">
          이메일
        </label>
        <input
          type="email"
          id="inputEmail"
          value={email}
          onChange={onEmailChange}
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          비밀번호
        </label>
        <input
          type="password"
          id="inputPassword"
          value={password}
          onChange={onPasswordChange}
          className="form-control"
          placeholder="Password"
          required
        />
        <div className="checkbox mb-3">
          <label htmlFor="firstName">
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" onClick={doLogin} type="submit">
          로그인
        </button>
      </form>
    );
  }
}

export default AuthForm;
