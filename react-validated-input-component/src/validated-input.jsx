import React from 'react';

class ValidatedPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.hideCheck = this.hideCheck.bind(this);
    this.hideXmark = this.hideXmark.bind(this);
    this.hideRequiredText = this.hideRequiredText.bind(this);
    this.hideShortText = this.hideShortText.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.hideCheck();
    this.hideXmark();
    this.hideRequiredText();
    this.hideShortText();
  }

  hideCheck() {
    const passwordInput = this.state.password;
    if (passwordInput.length < 8) return 'hidden';
  }

  hideXmark() {
    const passwordInput = this.state.password;
    if (passwordInput.length >= 8) return 'hidden';
  }

  hideRequiredText() {
    const passwordInput = this.state.password;
    if (passwordInput.length !== 0) return 'hidden';
  }

  hideShortText() {
    const passwordInput = this.state.password;
    if (passwordInput.length === 0 || passwordInput.length >= 8) return 'hidden';
  }

  render() {
    const checkView = this.hideCheck();
    const xmarkView = this.hideXmark();
    const requiredView = this.hideRequiredText();
    const shortView = this.hideShortText();
    return (
      <form>
        <label className='passwordtext'>
          Password
        </label>
        <input className="passwordbox" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        <i className={`fa-sharp fa-solid fa-xmark ${xmarkView}`}></i>
        <i className={`fa-solid fa-check ${checkView}`}></i>
        <p className={`required ${requiredView}`}>A password is required.</p>
        <p className={`short ${shortView}`}>Your password is too short.</p>
      </form>
    );
  }
}

const element = (
  <ValidatedPassword/>
);

export default element;
