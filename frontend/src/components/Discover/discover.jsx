import React from "react";
import DrinkRow from "../DrinkRow/drink_row";
import "./discover.scss";

class Discover extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        const { fetchDrinks } = this.props;
    }
    
    render() {
        const { drinks } = this.props;
       
        let drinkRows = [];

        //     () {
        //     drinks = Object.entries(drinks)
        //     let drinkRow = (
        //         <movie key={title} title={title} drinks={drinks} history={this.props.history} />
        //     )
        //     drinkRows.push(drinkRow);
        // }

        // if (profileList.drinks && profileList.drinks.length > 0) {

        //     let formattedDrinks = {};
        //     let listDrinks = profileList.drinks;
        

        //     listDrinks.forEach(drink => {
        //         formattedDrinks[drink.title] = drink
        //     })

        //     formattedDrinks = Object.entries(formattedDrinks);

        //     let listDrinkRow = (
        //         <DrinkRow key={"myList"} title={"My List"} drinks={formattedDrinks} history={this.props.history} hideTitle={false} hideGenre={true} />
        //     )

        //     drinkRows.unshift(listDrinkRow);
        // }
        
        return (
            <main className="discover-main">
                <section className="discover-hero-container">             
                </section>

                <section className="discover-rows-container">
                    {drinkRows}
                </section>
            </main>
        )
    }

}

export default Discover;