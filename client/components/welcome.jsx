import React from 'react';

class Welcome extends React.Component {
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
    // fetch goes here
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="eventList mt-3 d-flex flex-column text-center">
        <h1 className="eventListTitle mt-2 p-3 headers-font-ubuntu">Welcome</h1>
        <form className='form container'
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
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.updateField}></input>
          </div>
          <div className='button mt-4'>
            <button className='btn btn-primary block submit-button headers-font-ubuntu'>Sign In</button>
          </div>
          <div className='button mt-4'>
            <button className='btn btn-primary block headers-font-ubuntu create-account-button'>Create an Account</button>
          </div>
          <div className='button mt-4'>
            <button className='btn btn-primary block headers-font-ubuntu skip-button'>Skip
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </div>
        </form >
      </div>
    );
  }
}

export default Welcome;
