import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks <= 3) {
      return <button onClick={this.handleClick} className="button cold"> Hot Button </button>;
    } else if (this.state.clicks > 3 && this.state.clicks <= 6) {
      return <button onClick={this.handleClick} className="button cool"> Hot Button </button>;
    } else if (this.state.clicks > 6 && this.state.clicks <= 9) {
      return <button onClick={this.handleClick} className="button tepid"> Hot Button </button>;
    } else if (this.state.clicks > 9 && this.state.clicks <= 12) {
      return <button onClick={this.handleClick} className="button warm"> Hot Button </button>;
    } else if (this.state.clicks > 12 && this.state.clicks <= 15) {
      return <button onClick={this.handleClick} className="button hot"> Hot Button </button>;
    } else if (this.state.clicks > 15) {
      return <button onClick={this.handleClick} className="button nuclear"> Hot Button </button>;
    }
  }
}

const element = (
  <div>
    <HotButton />
  </div>
);

export default element;
