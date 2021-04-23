import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import DrinksErrorReducer from './drinks_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  drinks: DrinksErrorReducer
});



