import { RECEIVE_DRINKS, RECEIVE_USER_DRINKS, RECEIVE_NEW_DRINK } from '../actions/drink_actions';


 const DrinksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_DRINKS:
        newState = action.drinks.data;
        return newState;
      case RECEIVE_USER_DRINKS:
        newState = action.drinks.data;
        return newState;
      case RECEIVE_NEW_DRINK:
          newState[action.drink.data.id ] = action.drink.data;
          return newState;
      default:
        return state;
    }
  };
  
  export default DrinksReducer;