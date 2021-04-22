import React from 'react';
import { Link } from 'react-router-dom';
import drink from '../../../../validation/drink';

const drinkItem = (props) => (
    <div className='DrinkItem'>
        <Link to={{pathname: '/drink/'+ props.drink.drink_title}}>
            {/*<img className='drink-image' src={props.drink.drink_image}/> */}
            <h4 className="drink-title">{props.drink.drink_title}</h4>
        </Link>
    </div>
);

// drinkItem.propTypes = {
//     drink: PropTypes.object.isRequired
// };


// const styles = () => {
//   return {
//     drinkRows: {
//       justifyContent: "center"
//     }
//   };
// };

// const drinkItem = ({ classes, displayedCocktails }) => {
//   return (
//     <DrinkRows className={classes.drinkRows}>
//       {displayedCocktails.map(cocktail => (
//         <DrinkItem key={drink.title} drink={drink} />
//       ))}
//     </DrinkRows>
//   );
// };

// export default withStyles(styles)(CardView);





export default drinkItem;



