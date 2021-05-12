import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { fetchReview, deleteReview, updateReview} from "../../actions/review_actions";
import { fetchDrink } from "../../actions/drink_actions";
import React from "react";

class EditReview extends React.Component {
  componentDidMount(){
    this.props.fetchReview();
    this.props.fetchDrink(); 
  }

  render(){
    if (!this.props.review) return null
      return (
        <div>
          <ReviewForm {...this.props}/>
        </div>
        )
  }
}


const mapStateToProps = (state, ownProps) => ( {
    currentUser: state.session.user.id,
    review: state.entities.reviews.filter(
      (review) => review._id === ownProps.match.params.reviewId
    )[0],
    drink: state.entities.drinks.filter(
      (drink) => drink._id === ownProps.match.params.id
    )[0],
    formtype: "updateForm"
  }
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: (id, review) => dispatch(updateReview(id, review)),
  fetchReview: () => dispatch(fetchReview(ownProps.match.params.reviewId)),
  deleteReview: (id) => dispatch(deleteReview(id)),
  fetchDrink: () => dispatch(fetchDrink(ownProps.match.params.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditReview);