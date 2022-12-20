import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: 0
    };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.viewJump = this.viewJump.bind(this);
    this.infiniteScroll = this.infiniteScroll.bind(this);
    this.automatedSwap = this.automatedSwap.bind(this);
  }

  handleLeft() {
    for (var i = 0; i < this.props.images.length; i++) {
      if (this.state.viewIndex === 0) {
        this.setState({ viewIndex: this.props.images.length - 1 });
      } else {
        this.setState({ viewIndex: this.state.viewIndex - 1 });
      }
    }
    clearInterval(this.swapper);
    this.automatedSwap();
  }

  handleRight() {
    for (var i = 0; i < this.props.images.length; i++) {
      if (this.state.viewIndex === this.props.images.length - 1) {
        this.setState({ viewIndex: 0 });
      } else {
        this.setState({ viewIndex: this.state.viewIndex + 1 });
      }
    }
    clearInterval(this.swapper);
    this.automatedSwap();
  }

  viewJump(event) {
    this.setState({ viewIndex: Number(event.target.id) });
    clearInterval(this.swapper);
    this.automatedSwap();
  }

  infiniteScroll() {
    if (this.state.viewIndex === this.props.images.length - 1) {
      this.setState({ viewIndex: 0 });
    } else {
      this.setState({ viewIndex: this.state.viewIndex + 1 });
    }
  }

  automatedSwap() {
    this.swapper = setInterval(this.infiniteScroll, 3000);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-fifth'>
            <i className="fa-solid fa-chevron-left" onClick={this.handleLeft}></i>
          </div>
          <div className='column-three-fifths'>
            <img className='image' src={`../${this.props.images[this.state.viewIndex].imageUrl}`} alt={this.props.images[this.state.viewIndex].name}/>
          </div>
          <div className='column-fifth'>
            <i className="fa-solid fa-chevron-right" onClick={this.handleRight}></i>
          </div>
          <div className='row'>
            <span className='circles'>
              <i id='0' key={0} className={this.state.viewIndex === 0 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={this.viewJump}></i>
              <i id='1' key={1} className={this.state.viewIndex === 1 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={this.viewJump}></i>
              <i id='2' key={2} className={this.state.viewIndex === 2 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={this.viewJump}></i>
              <i id='3' key={3} className={this.state.viewIndex === 3 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={this.viewJump}></i>
              <i id='4' key={4} className={this.state.viewIndex === 4 ? 'fa-solid fa-circle' : 'fa-regular fa-circle'} onClick={this.viewJump}></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
