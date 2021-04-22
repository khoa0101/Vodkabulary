import { combineReducers } from "redux";
import drinksReducer from './drinks_reducer'
import usersReducer from './users_reducer'
import reviewsReducer from './reviews_reducer';


const entitiesReducer = combineReducers({
   drinks: drinksReducer,
   users: usersReducer,
   reviews: reviewsReducer,

});

export default entitiesReducer;