import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            drinkId: this.props.match.params.id,
            author: this.props.currentUser,
            rating: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitR = this.submitR.bind(this);
    }

    componentDidMount() {
        this.props.fetchDrink(this.props.match.params.id)
    };

    loginMust() {
        alert('Log In User before submitting Review')
    }

    submitR() {
        this.props.history.push(`/drink/${this.props.match.params.id}`);
    }

    update(v) {
        return e => this.setState({
            [v]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    //    if(this.props.currentUser){
        console.log("help",this.state)
        this.props.createReview(this.props.match.params.id,this.state)
        this.submitR()
    //    }else{
    //        this.loginMust()
    //    }
    }

    renderErrors() {
        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="review-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        console.log("helper",this.props)
       if (this.props.drink === undefined) return null
        return (
            <div>
            
                <div className='form-box'>
                    <div className='rtitle'>Write a Review for {this.props.drink.title}!</div>
                    <div className='rinfo-box'>
                        <form className='rform' onSubmit={this.handleSubmit}>
                                    <div className='rating-text'>Please select below a rating from 1 through 5! </div>
                                    <input type="number" value={this.state.rating} className="rating-rev" min="1" max="5" onChange={this.update("rating")} />                              
                                
                                <div className='rbody'>
                                    <textarea className='rtext' rows='15' cols='40'
                                        value={this.state.body}
                                        onChange={this.update('body')}
                                        placeholder='Please leave a review for this drink!'
                                    />
                                </div>
                            <div className='submit-button-box'>
                                <div className='rform-button'>
                                    <button className = 'submit-review'>Submit Review</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
        
}

export default withRouter(ReviewForm)




