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
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };

    fetch('/api/login', request)
      .then(response => response.json())
      // tomas fix this area here, data is the error code from the api "user name or password is incorrect" or welcoming user
      .then(data => console.error(data))
      .catch(error => console.error('Error', error));
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <div className="eventList mt-3">
        <h1 className="eventListTitle text-center p-2 sticky-top bg-white">Welcome</h1>
        <h2 className="text-center mt-4">Sign in</h2>
        <form className='form container text-center mt-5'
          onSubmit={this.submitForm}>
          <div className="h3 text-center"> UserName </div>
          <label className=''>
            <input className='text-center'
              name='username'
              type='text'
              placeholder='OldManJenkins'
              value={this.state.username}
              onChange={this.updateField}></input>
          </label>
          <div className="h3 text-center"> Password </div>
          <label className=''>
            <input className='text-center'
              name='password'
              type='text'
              placeholder='Werd to Ur mother'
              value={this.state.password}
              onChange={this.updateField}></input>
          </label>
          <div className='button mt-3'>
            <button className='btn btn-primary block'>Submit</button>
          </div>
        </form >
      </div >
    );
  }
}

export default Welcome;
