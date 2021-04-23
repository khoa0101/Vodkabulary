import { connect } from "react-redux";
import {fetchDrink } from "../../actions/drink_actions"
 
import DrinkShow from "./drink_show"

const msp = (state, ownProps) => ({
   loggedIn: state.session.isAuthenticated,
   currentUser: state.session.user,
   drink: state.entities.drinks.filter(drink => drink._id === ownProps.match.params.id)[0]

});
const mdp = dispatch => ({
   fetchDrink: (id) => dispatch(fetchDrink(id)),
})

export default connect(msp, mdp)(DrinkShow);