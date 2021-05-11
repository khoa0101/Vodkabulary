import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from "../../actions/review_actions";
import { fetchDrink } from "../../actions/drink_actions"

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user.id,
  drink: state.entities.drinks.filter(
    (drink) => drink._id === ownProps.match.params.id
  )[0],
  review: {
    drinkId: ownProps.match.params.id,
    author: state.session.user.id,
    rating: "",
    body: ""
  }
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    action: review => dispatch(createReview(review)),
    createReview: (drinkId, review) => dispatch(createReview(drinkId, review)),
    fetchDrink: () => dispatch(fetchDrink(ownProps.match.params.id)) 

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
