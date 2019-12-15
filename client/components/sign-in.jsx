import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginError: null
    };

    this.submitForm = this.submitForm.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  submitForm(event) {
    event.preventDefault();

    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    };
    fetch('/api/login', req)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        console.error(`/api/login returned status ${response.status}`);
        return response.json();
      })
      .then(data => {

        if (data.error) {
          this.setState({
            username: '',
            password: '',
            loginError: data.error
          });
        } else {
          this.props.history.push('/search');
          this.props.callbackSignIn();
        }
      });
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const message = this.state.loginError && <div className="errorMessage mt-2">
      {this.state.loginError}</div>;

    return (
      <div className="welcome-signin-createaccount-pages mt-3 mb-2 d-flex flex-column text-center">
        <form className='form mt-2 container'
          onSubmit={this.submitForm}>
          <div className="eventListTitle mt-5 headers-font-ubuntu">
            <h2>Sign In</h2>
          </div>
          <div className="liked-event-border account-input-container mt-5 p-1">
            <i className="fas fa-user username-password-icons"></i>
            <input className='block-text-font-oswald account-input-field'
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border account-input-container p-1 mt-4">
            <i className="fas fa-lock username-password-icons"></i>
            <input className='block-text-font-oswald account-input-field'
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateField}></input>
          </div>
          {message}
          <div className='button mt-5 headers-font-ubuntu'>
            <button className='btn block submit-button text-white'>Sign In</button>
          </div>
        </form >
        <Link to='/createAccount' >
          <div className='button mt-5'>
            <button className='btn block headers-font-ubuntu create-account-button'>Create an Account</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default SignIn;
