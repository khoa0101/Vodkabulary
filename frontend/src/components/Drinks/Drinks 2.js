import React, { Component } from 'react';

import DrinkItem from '../../components/Drink/DrinkItem/DrinkItem';


class Drinks extends Component {
  constructor() {
      super()
      this.state = {
        drink_data: [],
      };
  }


  componentDidMount() {
      this.getSortedDrinkData(this);
  }

  render() {
    const { loading } = this.state;
    let drinks;

    if (!loading) {
      drinks = <div className="drinks-grid">
                  {this.state.drink_data.map(function(drink) {
                    return (
                      <DrinkItem key={drink._id} drink={drink} /> 
                    )
                  })}
              </div>
    }
    else {
      drinks = <Spinner />;
    }

    return (
      <div className="Drinks">
        <h1 className="drinks-header">Drinks</h1>
        { drinks }
      </div>
    );
  }
}

export default Drinks;