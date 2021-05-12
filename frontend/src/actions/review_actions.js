import * as APIUtil from '../util/review_api_util';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REPLACE_REVIEW = 'REPLACE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});
export const replaceReview = review => ({
    type: REPLACE_REVIEW,
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

export const createReview = (drinkId,review) => dispatch => (
    APIUtil.createReview(drinkId,review).then(review => (
        dispatch(receiveReview(review))))
);

export const fetchReview = id => dispatch => (
    APIUtil.fetchReview(id).then((review) => dispatch(receiveReview(review)))
);

export const fetchDrinkReviews = (drinkId) => dispatch => (
    APIUtil.fetchDrinkReviews(drinkId).then(reviews => (
        dispatch(receiveReviews(reviews))))
);

export const updateReview = (drinkId, review) => dispatch => (
    APIUtil.updateReview(drinkId, review).then(review => dispatch(replaceReview(review)))
);

export const deleteReview = (reviewId) => dispatch => (
    APIUtil.deleteReview(reviewId).then((msg) => dispatch(removeReview(reviewId)))
);