import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';



export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews,
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
        dispatch(receiveReview(review))))
);

export const fetchReview = id => dispatch => (
    APIUtil.fetchReview(id).then(review => (
        dispatch(receiveReview(review))))

);

export const fetchDrinkReviews = () => dispatch => (
    APIUtil.fetchDrinkqReviews().then(reviews => (
        dispatch(receiveReviews(reviews))))
);

export const updateReview = (review) => dispatch => (
    APIUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (reviewId) => dispatch => (
    APIUtil.deleteReview(reviewId).then((reviewId) => dispatch(removeReview(reviewId)))
);