import { connect } from "react-redux";
import DrinkForm from "./drink_form.js";
import { fetchDrink, deleteDrink, updateDrink} from "../../actions/drink_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user.id,
  drink: state.entities.drinks[ownProps.match.params.id],
  errors: state.errors.drinks,
  formType: "edit",
  drinkPrefill: state.entities.drinks.filter(drink => drink._id === ownProps.match.params.id)[0]
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (id, drink) => dispatch(updateDrink(id, drink)),
  fetchDrink: (id) => dispatch(fetchDrink(id)),
  deleteDrink: (id) => dispatch(deleteDrink(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DrinkForm);
