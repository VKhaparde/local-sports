import React from 'react';

class SearchTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.displayMenu = this.displayMenu.bind(this);
    // console.log('this.state before click', this.state);
  }

  handleClick() {
    this.displayMenu();
    // console.log('Menu icon is clicked');
  }

  displayMenu() {
    this.setState({ isClicked: !this.state.isClicked });
    // console.log('this.state:', this.state);
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className="outerSearchDiv p-0 col-12">
          <div className="searchArea">
            <div className="searchBar fa-2x m-2 d-flex justify-content-between">
              <div className="" >
                <i className="fas fa-search m-2"></i>Soccer
              </div>
              <div onClick={this.handleClick}>
                <i className="fas fa-bars m-2"></i>
              </div>
            </div>
          </div>
          <div className="menuDropDown">
            <div className="settings p-2">Settings</div>
            <div className="signOut p-2">Sign Out</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="outerSearchDiv p-0 col-12">
          <div className="searchArea">
            <div className="searchBar fa-2x m-2 d-flex justify-content-between">
              <div>
                <i className="fas fa-search m-2"></i>Soccer
              </div>
              <div onClick={this.handleClick}>
                <i className="fas fa-bars m-2"></i>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SearchTab;
