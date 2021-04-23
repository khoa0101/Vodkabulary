import React from "react";

import { Link } from "react-router-dom";
import ReviewIndexContainer from '../Review/review_index_container'



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
    
  handleDelete(){ 
        return(e)=>{
        e.preventDefault();
            this.props.deleteDrink(this.props.drinkId).then(window.location.reload())
        }
    }
    render() {
        if (this.props.drink === undefined) return null
             const {drink} = this.props;
        return(
           
            <div key={drink._id} className="Drink-Container">

            <div className='Drink-Name'>
                <Link to={`/users/${drink.user}`}>
                    User Profile
                </Link>
                      
                <div>
                <div className='Drink-Pic'>
                <img src={`${drink.photo}`} alt="" />
                <ReviewIndexContainer users={this.props.users} drinkId={drink._id} />
                </div>
            
             
        </div>
         </div>
         </div>
           
           
        )
    }
}

export default DrinkShow;