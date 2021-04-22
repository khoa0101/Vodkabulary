import { combineReducers } from "redux";
import drinksReducer from './drinks_reducer'
import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
   drinks: drinksReducer,
   users: usersReducer
});

export default entitiesReducer;