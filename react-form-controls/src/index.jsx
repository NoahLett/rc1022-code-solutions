import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.hanldeUsernameChange = this.hanldeUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hanldeUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.hanldeUsernameChange}/>
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </label>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const element = (
  <RegistrationForm/>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(element);
