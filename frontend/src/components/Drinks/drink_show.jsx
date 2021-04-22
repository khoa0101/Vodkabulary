import React from "react";

import { Link } from "react-router-dom";


class DrinkShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.addDrinkToList = this.addDrinkToList.bind(this);
        this.removeDrinkFromList = this.removeDrinkFromList.bind(this);
    }

       componentDidMount(){
        this.props.fetchDrink(this.props.match.params.id)  
      
    }
    
    render() {

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
                </div>
            
             
        </div>
         </div>
         </div>
           
           
        )
    }
}

export default DrinkShow;