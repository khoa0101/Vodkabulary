import React from 'react';
import { deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { fetchDrinkReviews } from '../../actions/review_actions';
import { withRouter } from "react-router-dom";

const mapStateToProps= (state,ownProps) => {
    return ({
        currentUser: state.session.user.id,
        ownProps,
        reviews: Object.values(state.entities.reviews)
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return ({
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        fetchDrinkReviews: () => dispatch(fetchDrinkReviews(ownProps.drinkId)),
    })
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));