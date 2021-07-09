import React from "react";
import { Link } from "react-router-dom";
import ReviewIndexContainer from "../Review/review_index_container";
import "./drink_show.scss";

class DrinkShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.favorite = this.favorite.bind(this);
  }

  componentDidMount() {
    this.props.fetchDrink(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  favorite() {
    const { drink, currentUser } = this.props;
    console.log(drink._id, currentUser.id);
    // drink._id is drinkId
    this.props.createFavorite({drinkId: drink._id, userId: currentUser.id})
  }

  render() {
    if (this.props.drink === undefined) return null;
    const { drink } = this.props;
    return (
      <div key={drink._id} className="Drink-Container">
        <div className="Drink-Pic">
          <div className="Drink-info">
            <div className="title">
              <h1>{drink.title}</h1>
              <h3>Recipe by {drink.user.username}</h3>
              <img src={`${drink.photo}`} alt="" />
            </div>
            <div className="in-di">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {drink.ingredients.map((ingre, i) => (
                    <li key={i}>{ingre}</li>
                  ))}
                </ul>
              </div>
              <div className="directions">
                <h2>Directions</h2>
                <p>{drink.directions}</p>
              </div>
            </div>
            <button onClick={this.favorite}  >
              {drink.favorites.filter(user => user._id === this.props.currentUser.id)[0] ? 'unfavorite' : 'favorite'}
            </button>
          </div>
          <h2 className="review-header">Reviews</h2>
          <ReviewIndexContainer users={this.props.users} drinkId={drink._id} />
          <div className="review-button">
            <Link to={`/review/drink/${drink._id}`}>Leave a review!</Link>
          </div>
          {this.props.currentUser.id === this.props.drink.user._id && (
            <Link to={`/drink/${drink._id}/edit`} className="edit-drink">
              Edit Drink
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default DrinkShow;
