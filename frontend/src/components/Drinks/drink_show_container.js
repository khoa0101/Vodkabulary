import { connect } from "react-redux";
import {fetchDrink} from "../../actions/drink_actions"
// import { addDrinkToList, removeDrinkFromList } from "../../actions/list_actions";
 
import DrinkShow from "./drink_show"

const msp = (state, ownProps) => ({
   loggedIn: state.session.isAuthenticated,
   currentUser: state.session.user,
   drink: state.entities.drinks[ownProps.match.params.id]
   
});
const mdp = dispatch => ({
   fetchDrink: (id) => dispatch(fetchDrink(id)),
    
    // deleteDrink: (id) => dispatch(deleteDrink(id)),
   
    // addDrinkToList: listItemInfo => dispatch(addDrinkToList(listItemInfo)),
    // removeDrinkFromList: listItemId => dispatch(removeDrinkFromList(listItemId)),
})

export default connect(msp, mdp)(DrinkShow);