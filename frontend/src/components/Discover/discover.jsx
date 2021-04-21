import React from "react";

class Discover extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const { fetchDrinks } = this.props;
        

    }

    // setDefaultProfile() {
    //     const { activeProfile, userProfiles, setActiveProfile, getProfileList } = this.props;
    //     const firstProfile = Object.values(userProfiles)[0];
        
    //     if (!activeProfile) {
    //         setActiveProfile(firstProfile)
    //         getProfileList(firstProfile.listId)
    //     } 
    // }

    render() {
        const { drinks } = this.props;
       

        // movies == drinks
        let drinkRows = [];

        for (let [name, drinks] of genres) {
            drinks = Object.entries(drinks)
            let drinkRow = (
                <DrinkRow key={name} name={name} drinks={drinks} history={this.props.history} />
            )
            drinkRows.push(drinkRow);
        }

        if (profileList.drinks && profileList.drinks.length > 0) {

            let formattedDrinks = {};
            let listDrinks = profileList.drinks;
        

            listDrinks.forEach(drink => {
                formattedDrinks[drink.title] = drink
            })

            formattedDrinks = Object.entries(formattedDrinks);

            let listDrinkRow = (
                <DrinkRow key={"myList"} name={"My List"} drinks={formattedDrinks} history={this.props.history} hideTitle={false} hideGenre={true} />
            )

            drinkRows.unshift(listDrinkRow);
        }


            

        
        return (
            <main className="browse-main">
                <NavContainer page="browse" />
                <section className="browse-hero-container">
                   
                </section>

                <section className="browse-rows-container">
                    {drinkRows}
                </section>
            </main>
        )
    }

}

export default Discover;