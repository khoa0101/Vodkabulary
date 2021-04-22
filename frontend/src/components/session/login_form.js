import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_form.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  // Once the user has been authenticated, redirect to the main page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/discover');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  loginDemo(e) {
    e.preventDefault();
    const demo = Object.assign({email: 'demo@mail.com', password: 'password'})
    this.props.login(demo);
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <h1>Login</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <label>Email
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            </label>
            <br/>
            <label>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            </label>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
        <button className="demo-login" onClick={this.loginDemo}>Demo User</button>
      </div>
    );
  }
}

export default withRouter(LoginForm);