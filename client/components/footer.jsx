import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    const navStyle = {
      color: 'black'
    };

    return (

      <footer className="footer col-12 d-flex flex-row justify-content-around">
        <button className="navigation pt-1 m-1">
          <Link to='/search' style={navStyle}>
            <i className="fas fa-search fa-5x"></i>
          </Link>
        </button>
        <button className="navigation pt-1 m-1">
          <Link to='/likedEvents' style={navStyle}>
            <i className="far fa-heart fa-5x"></i>
          </Link>
        </button>
        <button className="navigation pt-1 m-1">
          <Link to='/settings' style={navStyle}>
            <i className="fas fa-cog fa-5x"></i>
          </Link>
        </button>
      </footer>

    );
  }
}

export default Footer;
