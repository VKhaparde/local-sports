import React from 'react';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      isUserAccountCreated: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateField = this.updateField.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        confirm_password: this.state.confirmPassword
      })
    };
    fetch('/api/registration', req)
      .then(response => response.json())
      .then(data => data);
    this.displayMessage();
  }

  updateField(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  displayMessage() {
    this.setState({ isUserAccountCreated: !this.state.isUserAccountCreated });
  }

  render() {
    if (this.state.isUserAccountCreated) {
      return (
        <div className="eventList mt-1 mb-2 d-flex flex-column text-center">
          <div className="eventListTitle mt-5 headers-font-ubuntu">
            Your account has been created successfully.
          </div>
          <Link to='/search'>
            <div className='m-4'>
              <button className='btn btn-success submit-button headers-font-ubuntu'>
                Click here to continue</button>
            </div>
          </Link>
        </div>
      );
    }
    return (
      <div className="eventList mt-2 d-flex flex-column text-center">
        <div className="createAccount  headers-font-ubuntu">Create Account</div>
        <form className='form mt-4 container'
          onSubmit={this.submitForm}>
          <div className="eventListTitle mt-5 headers-font-ubuntu">
            <h2>Create an Account</h2>
          </div>
          {/* <div className="liked-event-border p-1 mt-2 ">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='name'
              type='text'
              placeholder='Fullname' autoComplete='off'
              value={this.state.name} required
              onChange={this.updateField}></input>
          </div> */}
          {/* <div className="liked-event-border p-1 mt-2">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='email'
              type='email'
              placeholder='Email' autoComplete='off'
              value={this.state.email}
              onChange={this.updateField}></input>
          </div> */}
          {/* <div className="liked-event-border p-1 mt-2">
            <input className='form-control block-text-font-oswald w-100 p-1 pl-2'
              name='phone'
              type='text'
              placeholder='Phonenumber' autoComplete='off'
              value={this.state.phone} required
              onChange={this.updateField}></input>
          </div> */}
          {/* <div className="liked-event-border p-1 mt-2">
            <select className='form-control custom-select block-text-font-oswald w-100 p-1 pl-2'
              name='gender'
              type='text'
              value={this.state.gender}
              onChange={this.updateField}>
              <option value="Gender">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="nopref">No Pref</option>
            </select>
          </div> */}
          <div className="liked-event-border mt-4 p-1 account-input-container">
            <i className="fas fa-user username-password-icons"></i>
            <input className='form-control block-text-font-oswald account-input-field'
              name='username'
              type='text'
              placeholder='Username' autoComplete='off'
              value={this.state.username} required
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border p-1 mt-2 account-input-container">
            <i className="fas fa-lock username-password-icons"></i>
            <input className='form-control block-text-font-oswald account-input-field'
              name='password'
              type='password'
              placeholder='Password' autoComplete='off'
              value={this.state.password} required
              onChange={this.updateField}></input>
          </div>
          <div className="liked-event-border p-1 mt-2 account-input-container">
            <i className="fas fa-lock username-password-icons"></i>
            <input className='form-control block-text-font-oswald'
              name='confirmPassword'
              type='password' autoComplete='off'
              placeholder='Confirm Password'
              value={this.state.confirmPassword} required
              onChange={this.updateField}></input>
          </div>
          <div className='button mt-4 headers-font-ubuntu'>
            <button className='btn btn-success block submit-button headers-font-ubuntu'>Create an Account</button>
          </div>
        </form >
        <div className='button mt-2 headers-font-ubuntu'>
          <Link to='/signIn'>
            <button className='btn btn-primary block create-account-button mt-4'>Back to Sign In</button>
          </Link>
          <br></br>
          {/* <Link to='/search'>
            <button className='btn btn-primary block mt-4 skip-button'>
              Skip
              <i className="fas fa-chevron-right ml-2"></i>
            </button>
          </Link> */}
        </div>
      </div>
    );
  }

}
export default CreateAccount;
