import {
  RECEIVE_DRINKS_ERRORS,
  RECEIVE_DRINKS,
  RECEIVE_DRINK,
  RECEIVE_USER_DRINKS
} from '../actions/drink_actions';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DRINKS_ERRORS:
      return action.errors;
    case RECEIVE_DRINKS:
      return _nullErrors;
    case RECEIVE_DRINK:
      return _nullErrors;
    case RECEIVE_USER_DRINKS:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;