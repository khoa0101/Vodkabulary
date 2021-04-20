import React from 'react';
import { withRouter } from 'react-router-dom';
import './session_form.scss';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      age: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      age: this.state.age,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
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
        <h1>Signup</h1>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div className="session-form">
            <br/>
              <label>Email
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email"
                />
              </label>
            <br/>
              <label>Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                />
              </label>  
            <br/>
              <label>Age
                <input type="number"
                  value={this.state.age}
                  onChange={this.update('age')}
                  placeholder="Age"
                  min = '21'
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
              <label>Confirm Password
                <input type="password"
                  value={this.state.password2}
                  onChange={this.update('password2')}
                  placeholder="Confirm Password"
                />
              </label>
            <br/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);