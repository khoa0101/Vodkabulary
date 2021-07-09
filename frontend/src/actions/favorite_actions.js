import * as APIUtil from "../util/favorites_api_util";
import {receiveDrink} from "./drink_actions";
import {receiveUserDrinks} from "./drink_actions";

export const createFavorite = (ids) => (dispatch) => {
  APIUtil.createFavorite(ids).then((drink) => {
    dispatch(receiveDrink(drink));
  });
};
export const deleteFavorite = (drinkId, userId) => (dispatch) => {
  APIUtil.deleteFavorite(drinkId, userId).then((drink) => {
    dispatch(receiveDrink(drink));
  });
};
export const getUserLikedDrinks = (userId) => (dispatch) => {
  APIUtil.getUserLikedDrinks(userId).then((drinks) => {
    dispatch(receiveUserDrinks(drinks));
  });
};
