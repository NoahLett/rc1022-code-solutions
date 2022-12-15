import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      return this.setState({ isClicked: true });
    } else {
      return this.setState({ isClicked: false });
    }
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div>
          <div onClick={this.handleClick} className='on'>
            <div className='right'></div>
          </div>
          <p className='label'>ON</p>
        </div>
      );
    } else {
      return (
        <div>
          <div onClick={this.handleClick} className='off'>
            <div className='left'></div>
          </div>
          <p className='label'>OFF</p>
        </div>
      );
    }
  }
}

const element = (
  <ToggleSwitch/>
);

export default element;
