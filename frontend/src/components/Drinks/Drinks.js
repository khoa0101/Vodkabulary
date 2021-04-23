// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import DrinkItem from '../../components/DrinkItem/DrinkItem.js';


// class Drinks extends Component {
//   constructor() {
//       super()
//       this.state = {
//         drink_data: [],
//       };
//   }


//   componentDidMount() {
//       this.getSortedDrinkData(this);
//   }

//     deleteDrink(id) {
//         this.props.deleteDrink(id)
  
       
//     }

//   render() {
//     const { loading } = this.state;
//     let drinks;

//     if (!loading) {
//       drinks = <div className="drinks-grid">
//                   {this.state.drink_data.map(function(drink) {
//                     return (
//                       <DrinkItem key={drink.__id} drink={drink} /> 
//                     )
//                   })}
//               </div>
//     }
 

//     return (
//       <div className="Drinks">
//        <div className='Drink'>
//                 <Link to={`/users/${drink.user.id}`}>
//                     {drink.user.id} 
//                 </Link>
//                      
//                 </div>
//     <div className='the picture of the Drink'>
//     <img src='bloodymary.jpeg' alt="" />
    
//     </div>


                
//       </div>
//     );
//   }
// }

// export default Drinks;
