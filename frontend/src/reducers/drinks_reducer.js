import { RECEIVE_DRINKS, RECEIVE_USER_DRINKS, RECEIVE_DRINK, DELETE_DRINK } from '../actions/drink_actions';


 const DrinksReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_DRINKS:
        return action.drinks.data;
        
      case RECEIVE_USER_DRINKS:
     return action.drinks.data;
       
      case DELETE_DRINK:
        let newState = [...state]
        return newState.filter(drink => drink._id !== action.id)
      case RECEIVE_DRINK:
          let filteredState = state.filter(drink => drink._id !== action.drink.data._id);
          return [...filteredState, action.drink.data];
      default:
        return state;
    }
  };
  
  export default DrinksReducer;