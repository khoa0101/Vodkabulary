import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW, REPLACE_REVIEW } from '../actions/review_actions';

const reviewsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews.data;
        case RECEIVE_REVIEW:
            return [...state, action.review.data]
        case REPLACE_REVIEW:
            const newState = state.map(review => {
                if (review._id === action.review.data._id){
                    return action.review.data
                } else {
                    return review
                }
            })
            return newState;
        case REMOVE_REVIEW:
           let filteredState = state.filter(review => review._id !== action.reviewId)
            
            return filteredState;

        default:
            return state;
    }
};

export default reviewsReducer;