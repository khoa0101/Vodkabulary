import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from "../../actions/review_actions";
import { fetchDrink } from "../../actions/drink_actions"

const mapStateToProps = (state, ownProps) => ({   
        currentUser: state.session.id,
        drink: state.entities.drinks[ownProps.match.params.id]
        
    })

const mapDispatchToProps = dispatch => ({
    action: review => dispatch(createReview(review)),
    createReview: review => dispatch(createReview(review)),
    fetchDrink: id => dispatch(fetchDrink(id)) 

});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
