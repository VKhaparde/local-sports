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
      // .then(data => { console.log('data', data); return data })
      .then(data => {

        if (data.error) {
          this.setState({
            username: '',
            password: '',
            loginError: data.error
          });
        } else {
          this.props.history.push('/search');
        }
      });
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const message = this.state.loginError && <div className="errorMessage">
      {this.state.loginError}</div>;

    return (
      <div className="eventList mt-5 d-flex flex-column text-center">
        {message}
        <form className='form mt-2 container'
          onSubmit={this.submitForm}>
          <div className="liked-event-border p-1 mt-5">
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border p-1 mt-4">
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='password'
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateField}></input>
          </div>
          <div className='button mt-4'>
            <button className='btn btn-primary block submit-button headers-font-ubuntu'>Sign In</button>
          </div>
        </form >
        <Link to='/createAccount' >
          <div className='button mt-4'>
            <button className='btn btn-primary block headers-font-ubuntu create-account-button'>Create an Account</button>
          </div>
        </Link>
        <Link to='/search' >
          <div className='button mt-4 mb-4'>
            <button className='btn btn-primary block headers-font-ubuntu skip-button'>Skip
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </Link>
      </div>
    );

  }
}

export default SignIn;
