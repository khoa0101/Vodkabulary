import axios from 'axios';
const preUrl = '/api/favorites';

export const createFavorite = (ids) => {
  return axios.post(preUrl, ids);
}

export const deleteFavorite = (drinkId, userId) => {
  return axios.post(preUrl + drinkId, userId);
}

export const getUserLikedPost = (userId) => {
  return axios.get(preUrl + userId);
}