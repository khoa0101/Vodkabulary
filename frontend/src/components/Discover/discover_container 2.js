import { connect } from "react-redux"
import Discover from "./discover";
import { fetchDrinks } from '../../actions/drink_actions';


const msp = (state, ownProps) => ({
 drinks: Object.values(state.entities.drinks),
})

const mdp = dispatch => ({
    fetchDrinks: () => dispatch(fetchDrinks())

})

export default connect(msp, mdp)(Discover);