import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from "../../actions/review_actions";
import { fetchDrink } from "../../actions/drink_actions"

const mapStateToProps = (state, ownProps) => ({   
        currentUser: state.session.id,
        drink: state.entities.drinks[ownProps.match.params.id]
        
    })

const mapDispatchToProps = (dispatch,ownProps) => ({
    action: review => dispatch(createReview(review)),
    createReview: review => dispatch(createReview(review)),
    fetchDrink: () => dispatch(fetchDrink(ownProps.match.params.id)) 

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
