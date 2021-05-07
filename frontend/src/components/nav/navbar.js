import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss';
import SearchContainer from '../search/SearchContainer';

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
                {/* <Link to={'/profile'}>Profile</Link> */}
                <SearchContainer />
                <Link to={'/createDrink'}>Create a Drink!</Link>
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
            <Link to={'/'}><h1 className="logo"><img src="brindis-of-soda-glasses-couple.svg" alt="logo"/>Vodkabulary</h1></Link>
            { this.getLinks() }
        </div>
      );
  }
}
export default NavBar;