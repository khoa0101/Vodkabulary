import { connect } from 'react-redux';
import DrinkForm from './drink_form.js';
import { createDrink, fetchDrink } from "../../actions/drink_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user.id,
  drink: state.entities.drinks[ownProps.match.params.id],
  errors: state.errors.drinks,
  formType: "create",
  drinkPrefill: {
    author: state.session.user.id,
    title: "",
    category: "",
    ingredients: "",
    directions: "",
    photoFile: null,
    photoUrl: null,
  },
});

const mapDispatchToProps = dispatch => ({
    action: drink => dispatch(createDrink(drink)),
    processForm: (drink, redirect) => dispatch(createDrink(drink, redirect)),
    fetchDrink: id => dispatch(fetchDrink(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
