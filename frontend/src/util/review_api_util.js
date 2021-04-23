import axios from 'axios';

export const fetchReview = (id) => {
    return axios.get(`/api/reviews/${id}`)
}; 

export const fetchDrinkReviews = (drinkId) => {
    return axios.get(`/api/reviews/drink/${drinkId}`)
}; 

export const fetchUserReviews = (userId) => {
    return axios.get(`/api/reviews/author/${userId}`)
}; 

export const deleteReview = (id) => {
    return axios.delete(`/api/reviews/${id}`)
}; 

export const updateReview = (id, review) => {
    return axios.patch(`/api/reviews/${id}`,review)
}; 

export const createReview = (drinkId, review) => {
    return axios.post(`/api/reviews/drink/${drinkId}`,review)
}; 


