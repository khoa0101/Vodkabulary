import { connect } from 'react-redux';
import DrinkForm from './drink_form.js';
import { createDrink } from "../../actions/drink_actions";
import { fetchDrink } from "../../actions/drink_actions"

const mapStateToProps = (state, ownProps) => ({   
        currentUser: state.session.user.id,
        drink: state.entities.drinks[ownProps.match.params.id],
        errors: state.errors.drinks
    })

const mapDispatchToProps = dispatch => ({
    action: drink => dispatch(createDrink(drink)),
    processForm: drink => dispatch(createDrink(drink)),
    fetchDrink: id => dispatch(fetchDrink(id)) 

});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
