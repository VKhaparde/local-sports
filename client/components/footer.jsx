import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    const navStyle = {
      color: 'black'
    };

    return (

      <footer className="footer col-12 d-flex flex-row justify-content-around">
        <button className="navigation">
          <Link to='/search' style={navStyle}>
            <i className="fas fa-search fa-7x"></i>
          </Link>
        </button>
        <button className="navigation">
          <i className="far fa-heart fa-7x"></i>
        </button>
        <button className="navigation">
          <i className="fas fa-user fa-7x"></i>
        </button>
      </footer>

    );
  }
}

export default Footer;
