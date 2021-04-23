import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import DiscoverContainer from './Discover/discover_container'
// import DiscoverContainer from './Discover/discover_container'
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DrinkCreateContainer from './Drinks/drink_form_container';
import Footer from './main/footer';
import DrinkShowContainer from './Drinks/drink_show_container'
import ReviewFormContainer from './Review/review_form_container';
import PageNotFound from "./error/error";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/discover" component={DiscoverContainer} /> 
      <ProtectedRoute exact path="/createDrink" component={DrinkCreateContainer}/>
      <ProtectedRoute exact path="/drink/:id" component={DrinkShowContainer}/>
       {/* test route */}
      <ProtectedRoute exact path="/review/drink/:id" component={ReviewFormContainer}/>

      <PageNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;