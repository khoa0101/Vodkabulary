import React from "react";
import DrinkRow from "../DrinkRow/drink_row";
import "./discover.scss";
import {Link} from 'react-router-dom';
class Discover extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        const { fetchDrinks } = this.props;
        fetchDrinks()
    }

    // componentDidMount() {
    //     const { fetchDrinks } = this.props;
    // }
    
    render() {
        const { drinks } = this.props;
       console.log(drinks)
        let drinkRows = [];

        
       
       
        return (
            <main className="discover-main">
                <section className="discover-hero-container">             
                </section>

                <section className="discover-rows-container">
                    <ul>
                    {drinks.map(drink =>(
            
                         <li key={drink._id}>   
                                <Link to={`/drink/${drink._id}`}>
                                 {drink.title}
                                <img src={drink.photo}/> 

                                
                                </Link>
                               

            
            
                        </li>)

                        

                    )}
                    </ul>
                </section>
            </main>
        )
    }

}

export default Discover;