import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DiscoverContainer from './Discover/discover_container'
// import DiscoverContainer from './Discover/discover_container'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DrinkItemContainer from './Drinks/drink_item_container';
import Footer from './main/footer';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/discover" component={DiscoverContainer} /> 
      <ProtectedRoute exact path="/createDrink" component={DrinkItemContainer}/>
    </Switch>
    <Footer />
  </div>
);

export default App;