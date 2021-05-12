import { connect } from "react-redux";
import DrinkForm from "./drink_form.js";
import { fetchDrink, deleteDrink, updateDrink} from "../../actions/drink_actions";
import React from "react";

class EditDrink extends React.Component {
  componentDidMount(){
    this.props.fetchDrink(this.props.match.params.id);
  }

  render(){
    if (!this.props.drinkPrefill) return null;
    return (<div>
      <DrinkForm {...this.props} />
    </div>)
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.user.id,
  drink: state.entities.drinks[ownProps.match.params.id],
  errors: state.errors.drinks,
  formType: "edit",
  drinkPrefill: state.entities.drinks.filter(drink => drink._id === ownProps.match.params.id)[0]
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (id, drink, redirect) => dispatch(updateDrink(id, drink, redirect)),
  fetchDrink: (id) => dispatch(fetchDrink(id)),
  deleteDrink: (id) => dispatch(deleteDrink(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDrink);
