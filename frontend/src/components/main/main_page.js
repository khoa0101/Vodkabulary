import React from 'react';
import "./main_page.scss";

class MainPage extends React.Component {

  render() {
    return (
      <div className="welcome">
        <div>
          <h1>Welcome to Vodkabulary</h1>
        </div>
        <div className="welcome-copy">
          <p>The ultimate destination for cocktail enthusiasts! Our web app is designed to be your go-to resource for all things mixology.
            With Vodkabulary, you can browse many delicious cocktail recipes, from classic favorites to creative new concoctions.
            Plus, our search functionality allows you to easily find exactly what you're looking for.
          </p>
          <p >
            But that's not all - Vodkabulary also lets you save your favorite recipes, create and share your own creations, and even get personalized recommendations based on your taste preferences.
            Join the Vodkabulary community today and discover a world of endless cocktail possibilities!
          </p>
        </div>


      </div>
    );
  }
}

export default MainPage;