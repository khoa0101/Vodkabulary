import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav_buttons">
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="nav_buttons">
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="nav_bar">
            <Link to={'/'}><h1 className="logo"><img src="https://www.flaticon.com/svg/vstatic/svg/37/37600.svg?token=exp=1618870603~hmac=11bc5b4e5afb70bb7b8d0839412a2aae"/>Vodkabulary</h1></Link>
            { this.getLinks() }
        </div>
      );
  }
}
export default NavBar;