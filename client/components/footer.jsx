import React from 'react';

class Footer extends React.Component {
  render() {
    return (

      <div className="footer col-12 d-flex flex-row justify-content-around">
        <button>
          <i className="fas fa-search fa-5x"></i>
        </button>
        <button>
          <i className="far fa-heart fa-5x"></i>
        </button>
        <button>
          <i className="fas fa-user fa-5x"></i>
        </button>
      </div>

    );
  }
}

export default Footer;
