import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      .then(data => data.json())
      .then(data => data);
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="eventList mt-3 mb-2 flex-column text-center">
        <form className='form d-flex flex-column ml-5 mr-5'
          onSubmit={this.submitForm}>
          <div className="eventListTitle mt-5 headers-font-ubuntu">
            Sign In
          </div>
          <div className="liked-event-border d-flex mt-5 p-1">
            <i className="fas fa-user text-muted username-password-icons"></i>
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border d-flex p-1 mt-4">
            <i className="fas fa-lock text-muted username-password-icons"></i>
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='password'
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateField}></input>
          </div>
          <div className='button mt-5 headers-font-ubuntu'>
            <button className='btn btn-primary block submit-button'>Sign In</button>
          </div>
        </form >
        <div className='button mt-2 headers-font-ubuntu'>
          <Link to='/createAccount'>
            <button className='btn btn-primary block mt-4 mb-5 create-account-button'>Create an Account</button>
          </Link>
          <br />
          <Link to='/search'>
            <button className='btn btn-primary block mt-5 skip-button'>
              Skip
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SignIn;
