import { connect } from "react-redux";
import { addDrinkToList, removeDrinkFromList } from "../../actions/list_actions";

import DrinkShow from "./drink_show"

const msp = state => ({
    profileList: state.entities.list
})

const mdp = dispatch => ({
    addDrinkToList: listItemInfo => dispatch(addDrinkToList(listItemInfo)),
    removeDrinkFromList: listItemId => dispatch(removeDrinkFromList(listItemId)),
})

export default connect(msp, mdp)(DrinkShow);