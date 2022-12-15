import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      isClicked2: false,
      tick: 0
    };
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
    this.ticker = this.ticker.bind(this);
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleStartStopClick() {
    if (!this.state.isClicked) {
      this.start();
      return this.setState({ isClicked: true });
    } else {
      this.stop();
      return this.setState({ isClicked: false });
    }
  }

  ticker() {
    return this.setState({ tick: this.state.tick + 1 });
  }

  start() {
    this.timer = setInterval(this.ticker, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  clear() {
    return this.setState({ tick: 0 });
  }

  handleFaceClick() {
    if (!this.state.isClicked) {
      return this.setState({ isClicked2: true });
    } else {
      return this.setState({ isClicked2: false });
    }
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div>
          <i onClick={this.clear} className="fa-regular fa-circle"></i>
          <i onClick={this.handleStartStopClick} className="fa-solid fa-play"></i>
          <p className='time'>{this.state.tick}</p>
        </div>
      );
    } else if (this.state.isClicked) {
      return (
        <div>
          <i className="fa-regular fa-circle"></i>
          <i onClick={this.handleStartStopClick} className="fa-solid fa-pause"></i>
          <p className='time'>{this.state.tick}</p>
        </div>
      );
    } else if (this.state.isClicked2) {
      return (
        <div>
          <i onClick={this.clear} className="fa-regular fa-circle"></i>
          <i onClick={this.handleStartStopClick} className="fa-solid fa-play"></i>
          <p className='time'>{this.state.tick}</p>
        </div>
      );
    }
  }
}

const element = (
  <StopWatch/>
);

export default element;
