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
        this.handleDelete = this.handleDelete.bind(this);
    }

       componentDidMount(){
        this.props.fetchDrink(this.props.match.params.id)  
      
    }
    
  handleDelete(e){ 
        // return(e)=>{
        e.preventDefault();
            this.props.deleteDrink(this.props.drink._id).then(this.props.history.push('/discover/'))
        // }
    }
    render() {
     
        if (this.props.drink === undefined) return null
             const {drink} = this.props;
        return(
        <div key={drink._id} className="Drink-Container">
            <div className='Drink-Name'>
            <Link to={`/users/${drink.user}`}>
                Made by {drink.user.username}
            </Link>
            </div>    
             <div className='Drink-Pic'>
                <div className="title">
                    <h2>{drink.title}</h2>
                    <img src={`${drink.photo}`} alt="" />
                </div>
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
                <ReviewIndexContainer users={this.props.users} drinkId={drink._id} />
                <div className="review-button"><Link to={`/review/drink/${drink._id}`}>Leave a review!</Link></div>
            </div>
             {(this.props.currentUser.id === this.props.drink.user._id) && <button className='del-drink' onClick={this.handleDelete}>Delete Drink</button>}
         </div>
        )
    }
}

export default DrinkShow;