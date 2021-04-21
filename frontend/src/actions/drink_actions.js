import * as drinkAPIUtil from '../util/drink_api_util'

export const RECEIVE_DRINKS = "RECEIVE_DRINKS";
export const RECEIVE_USER_DRINKS = "RECEIVE_USER_DRINKS";
export const RECEIVE_NEW_DRINK = "RECEIVE_NEW_DRINK";

export const receiveDrinks = drinks => ({
  type: RECEIVE_DRINKS,
  drinks
});

export const receiveUserDrinks = drinks => ({
  type: RECEIVE_USER_DRINKS,
  drinks
});

export const receiveNewDrink = drink => ({
  type: RECEIVE_NEW_DRINK,
  drink
})

export const fetchDrinks = () => dispatch => (
  drinkAPIUtil.getDrinks()
    .then(drinks => dispatch(receiveDrinks(drinks)))
    .catch(err => console.log(err))
);

export const fetchUserDrinks = id => dispatch => (
  drinkAPIUtil.getUserDrinks(id)
    .then(drinks => dispatch(receiveUserDrinks(drinks)))
    .catch(err => console.log(err))
);

export const createDrink = data => dispatch => (
  drinkAPIUtil.createDrink(data)
    .then(drink => dispatch(receiveNewDrink(drink)))
    .catch(err => console.log(err))
);