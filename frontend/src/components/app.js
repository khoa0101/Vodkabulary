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
import EditFormContainer from './Drinks/edit_drink_form_container';
import SearchResults from './search/SearchResults';
import EditReviewFormContainer from './Review/edit_review_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/discover" component={DiscoverContainer} /> 
      <ProtectedRoute exact path="/results" component={SearchResults} /> 
      <ProtectedRoute exact path="/createDrink" component={DrinkCreateContainer}/>
      <ProtectedRoute exact path="/drink/:id" component={DrinkShowContainer}/>
      <ProtectedRoute exact path="/review/drink/:id" component={ReviewFormContainer}/>
      <ProtectedRoute exact path="/review/drink/:id/edit/:reviewId" component={EditReviewFormContainer}/>
      <ProtectedRoute exact path="/drink/:id/edit" component={EditFormContainer}/>

      <PageNotFound />
    </Switch>
    <Footer />
  </div>
);

export default App;