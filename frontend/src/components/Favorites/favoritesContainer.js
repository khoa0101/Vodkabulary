import { connect } from "react-redux";
import Discover from "../Discover/discover";
import { getUserLikedDrinks } from "../../actions/favorite_actions";

const msp = (state) => ({
  drinks: Object.values(state.entities.drinks),
  currentUserId: state.session.user.id,
  favorites: true
});

const mdp = (dispatch) => ({
  getUserLikedDrinks: (currentUserId) => dispatch(getUserLikedDrinks(currentUserId)),
});

export default connect(msp, mdp)(Discover);
