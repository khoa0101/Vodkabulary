import axios from 'axios';
const preUrl = '/api/favorites/';

export const createFavorite = (ids) => {
  return axios.post(preUrl, ids);
}

export const deleteFavorite = (drinkId, userId) => {
  const url = `${preUrl}${drinkId}/${userId}`;
  return axios.delete(url);
}

export const getUserLikedDrinks = (userId) => {
  return axios.get(preUrl + userId);
}