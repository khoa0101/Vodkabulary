import axios from 'axios';

export const getDrinks = () => {
  return axios.get('/api/drinks');
};

export const getUserDrinks = id => {
  return axios.get(`/api/drinks/user/${id}`);
};

export const getDrink = id => {
  return axios.get(`/api/drinks/${id}`);
};


export const deleteDrink = id => {
  return axios.delete(`/api/drinks/${id}`);
};

export const createDrink = (drink) => {
  return axios.post(`/api/drinks/`, drink);
};


export const updateDrink = (id, drink) => {
  return axios.patch(`/api/drinks/${id}`, drink);
};

export const searchDrinks = (searchTerm) => {
  return axios.get(`/api/drinks/search?term=${searchTerm}`);
};