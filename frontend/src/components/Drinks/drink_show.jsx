import React from "react";
import { Link } from "react-router-dom";
import ReviewIndexContainer from '../Review/review_index_container';
import'./drink_show.scss';

class DrinkShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        // this.addDrinkToList = this.addDrinkToList.bind(this);
        // this.removeDrinkFromList = this.removeDrinkFromList.bind(this);

    }

       componentDidMount(){
        this.props.fetchDrink(this.props.match.params.id)  
      
    }

    render() {
     
        if (this.props.drink === undefined) return null
             const {drink} = this.props;
        return(
        <div key={drink._id} className="Drink-Container">
            <div className='Drink-Pic'>
                <div className="Drink-info">
                    <div className="title">
                        <h1>{drink.title}</h1>
                        <h3>Recipe by {drink.user.username}</h3>
                        <img src={`${drink.photo}`} alt="" />
                    </div>
                    <div className="in-di">
                        <div className="ingredients">
                            <h2>Ingredients</h2>
                            <ul>
                                {drink.ingredients.map((ingre, i) => 
                                    <li key={i}>{ingre}</li>    
                                )}
                            </ul>
                        </div>
                        <div className="directions">
                            <h2>Directions</h2>
                            <p>{drink.directions}</p>
                        </div>
                    </div>
                </div>
                <h2 className="review-header">Reviews</h2>
                <ReviewIndexContainer users={this.props.users} drinkId={drink._id} />
                <div className="review-button"><Link to={`/review/drink/${drink._id}`}>Leave a review!</Link></div>
             {(this.props.currentUser.id === this.props.drink.user._id) && <Link to={`/drink/${drink._id}/edit`} className="edit-drink">Edit Drink</Link>}
            </div>
         </div>
        )
    }
}

export default DrinkShow;