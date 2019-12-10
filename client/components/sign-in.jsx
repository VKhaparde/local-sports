import React from 'react';

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
          <div className="liked-event-border mt-5 p-1">
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='username'
              type='text'
              placeholder='Username'
              value={this.state.username}
              onChange={this.updateField}></input>
            <i className="fas fa-user text-muted username-password-icons"></i>
          </div>
          <div className="liked-event-border p-1 mt-4">
            <input className='block-text-font-oswald w-100 p-1 pl-2'
              name='password'
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateField}></input>
            <i className="fas fa-lock text-muted username-password-icons"></i>
          </div>
          <div className='button mt-5 headers-font-ubuntu'>
            <button className='btn btn-primary block submit-button'>Sign In</button>
            <button className='btn btn-primary block mt-4 create-account-button'>Create an Account</button>
            <br></br>
            <button className='btn btn-primary block mt-4 skip-button'>
              Skip
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </form >
      </div>
    );
  }
}

export default SignIn;
