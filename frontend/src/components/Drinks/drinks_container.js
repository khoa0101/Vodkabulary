import { connect } from 'react-redux';
import { fetchDrinks } from '../../actions/drink_actions';
import Drinks from './Drinks';

const mapStateToProps = (state) => {
  return {
    drinks: Object.values(state.drinks.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDrinks: () => dispatch(fetchDrinks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);