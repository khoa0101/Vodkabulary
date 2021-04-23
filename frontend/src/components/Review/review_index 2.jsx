import React from "react";
import ReviewIndexItem from "./review_index_item";

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews()
    }
    render() {
        let reviews=this.props.reviews
        // if(this.props.reviews.length === 0) return null;
        return (
            <div>
                {reviews.map((r, idx) => {
                    let author = Object.assign({}, this.props.users[r.author_id])
                        return (
                            <ReviewIndexItem key={idx} review={rev} author={author} currentUser={this.props.currentUser} deleteReview={this.props.deleteReview}/>
                        )
                    }
                )}
            </div>
        )
    }
}


export default ReviewIndex;