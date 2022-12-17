import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ isClicked: true });
  }

  handleCloseClick() {
    this.setState({ isClicked: false });
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div className='container'>
          <i onClick={this.handleMenuClick} className="fa-sharp fa-solid fa-bars"></i>
          <div className='sidebar'>
            <ul>
              <li className='menu-header' onClick={this.handleCloseClick}>Menu</li>
              <li className='menu-item' onClick={this.handleCloseClick}>About</li>
              <li className='menu-item' onClick={this.handleCloseClick}>Get Started</li>
              <li className='menu-item' onClick={this.handleCloseClick}>Sign In</li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className='container overlay' onClick={this.handleCloseClick}>
          <i onClick={this.handleMenuClick} className="fa-sharp fa-solid fa-bars"></i>
          <div className='sidebar active'>
            <ul>
              <li className='menu-header' onClick={this.handleCloseClick}>Menu</li>
              <li className='menu-item' onClick={this.handleCloseClick}>About</li>
              <li className='menu-item' onClick={this.handleCloseClick}>Get Started</li>
              <li className='menu-item' onClick={this.handleCloseClick}>Sign In</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

const element = (
  <Drawer/>
);

export default element;
