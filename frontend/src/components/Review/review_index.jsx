import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    componentDidMount() {
        this.props.fetchDrinkReviews()
    }
    render() {

        let reviews=this.props.reviews
        if(this.props.reviews.length === 0) return (
            <div className="no-reviews">
                <h3>Be the first to leave a review!</h3>
            </div>
        );
        return (
            <div className="reviews"> 
                {reviews.map((r, idx) => {
                        return (
                            <ReviewIndexItem key={idx} review={r} drinkId={this.props.drinkId} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/>
                        )
                    }
                )}
            </div>
        )
    }
}


export default ReviewIndex;