import React from 'react';

class SearchTab extends React.Component {

  handleClick(event) {
    return (
      <div></div>
    );
  }

  render() {
    return (
      <div className="searchArea col-12">
        <div className="searchBar fa-2x m-2 d-flex justify-content-between">
          <div className="" onClick={this.handleClick} >
            <i className="fas fa-search m-2"></i>Soccer
          </div>
          <i className="fas fa-bars m-2"></i>
        </div>
      </div>
    );
  }
}

export default SearchTab;
