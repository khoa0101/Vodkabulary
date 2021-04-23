import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDrinkReviews()
    }
    render() {
        console.log("reviewsprops", this.props)
        let reviews=this.props.reviews
        if(this.props.reviews.length === 0) return null;
        return (
            <div className="reviews">
                <h2>Reviews</h2>
                {reviews.map((r, idx) => {
                    // let author = Object.assign({}, this.props.users[r.author_id])
                        return (
                            <ReviewIndexItem key={idx} review={r}  currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/>
                        )
                    }
                )}
            </div>
        )
    }
}


export default ReviewIndex;