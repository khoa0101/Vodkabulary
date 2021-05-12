import * as drinkAPIUtil from '../util/drink_api_util'

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_DRINKS_ERRORS = "RECEIVE_DRINKS_ERRORS";
export const RECEIVE_USER_DRINKS = "RECEIVE_USER_DRINKS";
export const RECEIVE_DRINK = "RECEIVE_DRINK";
export const DELETE_DRINK = 'DELETE_DRINK'

export const receiveDrinks = drinks => ({
  type: RECEIVE_DRINKS,
  drinks
});

export const receiveUserDrinks = drinks => ({
  type: RECEIVE_USER_DRINKS,
  drinks
});

export const receiveDrink = drink => ({
  type: RECEIVE_DRINK,
  drink
})

export const receiveErrors = errors => ({
  type: RECEIVE_DRINKS_ERRORS,
  errors
});

export const removeDrink = id => ({
  type: DELETE_DRINK,
  id
});

export const fetchDrinks = () => dispatch => (
  drinkAPIUtil.getDrinks()
    .then(drinks => dispatch(receiveDrinks(drinks)))
    .catch(err => { 
  
      dispatch(receiveErrors(err.response.data));
    })
);

export const fetchDrink = id => dispatch => (
  drinkAPIUtil.getDrink(id).then(
        drink => (
            dispatch(receiveDrink(drink))
    ))
);

export const deleteDrink = id => dispatch => (
  drinkAPIUtil.deleteDrink(id).then(
        () => (
            dispatch(removeDrink(id))
    ))
);

export const fetchUserDrinks = id => dispatch => (
  drinkAPIUtil.getUserDrinks(id)
    .then(drinks => dispatch(receiveUserDrinks(drinks)))
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
);

export const createDrink = (drink, redirect) => dispatch => (
  drinkAPIUtil.createDrink(drink)
    .then(drink => {
      redirect();
      dispatch(receiveDrink(drink));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
);

export const updateDrink = (id, drink, redirect) => dispatch => (
  drinkAPIUtil.updateDrink(id, drink)
    .then(drink => {
      redirect();
      dispatch(receiveDrink(drink));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
);

export const searchDrinks = searchTerm => dispatch =>
  drinkAPIUtil
    .searchDrinks(searchTerm)
    .then((drinks) => dispatch(receiveDrinks(drinks)));