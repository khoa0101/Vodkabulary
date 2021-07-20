import React from "react";
import "./discover.scss";
import { Link } from "react-router-dom";
class Discover extends React.Component {
  componentDidMount() {
    const {
      fetchDrinks,
      favorites,
      avoidFetch,
      getUserLikedDrinks,
      currentUserId,
    } = this.props;

    if (!avoidFetch && favorites) {
      getUserLikedDrinks(currentUserId);
    } else if (!avoidFetch) {
      fetchDrinks();
    }
  }

  render() {
    const { drinks } = this.props;
    return (
      <main className="discover-main">
        <section className="discover-hero-container"></section>

        <section className="discover-rows-container">
          <ul>
            {drinks.map((drink) => (
              <li key={`${drink.title}-${drink._id}`}>
                <Link to={`/drink/${drink._id}`}>
                  {drink.title}
                  <img src={drink.photo} alt={drink.title} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default Discover;
