import React from 'react';
import { deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps= (state,ownProps) => {
    return ({
        currentUser: state.session.id,
        ownProps,
        reviews: Object.values(state.entities.reviews)
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        fetchReviews: () => dispatch(fetchReviews()),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);