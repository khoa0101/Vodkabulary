import React from 'react';
import {Link} from 'react-router-dom';

class ReviewIndexItem extends React.Component {
    starPower(){
        let starPower =[];
        let rate = parseInt(this.props.review.rating);
        let max = 5; // maximum rating
        for (let i = 0; i < rate; i++) {
            starPower.push(<span key={i} className="material-icons black"> grade </span>);
        }
        while(max > rate) {
            starPower.push(<span key={max} className="material-icons white"> star_outline </span>);
            max--;
        }

        return starPower;
    }

    handleDelete() {
        return(e)=> { 
        e.preventDefault();
        this.props.deleteReview(this.props.review.id)
            .then(window.location.reload())
        }
    }

    editButton(){
        return(
            <Link to={`/review/drink/${this.props.drinkId}/edit/${this.props.review._id}`}>
                Edit
            </Link>
        )
    }

    render() {
       
        let { username } = this.props.review.author

        return(
            <div>
                <div className='rev-box'>
                    <div className='author-name-rate'>
                        {username}&nbsp;
                        {this.starPower()}
                    </div>
                    <div className='rev-body'>
                        <p>{this.props.review.body}</p>
                    </div>
                  {this.props.currentUser === this.props.review.author._id && this.editButton()}     
                </div>
            </div>
        )
    }

}


export default ReviewIndexItem