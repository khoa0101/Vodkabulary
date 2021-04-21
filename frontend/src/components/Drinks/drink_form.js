import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';

class DrinkForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            business_id: this.props.match.params.id,
            author_id: this.props.currentUser,
            title: '',
            category: '',
            ingredients: '',
            directions: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submitR = this.submitR.bind(this);
    }

     componentDidMount() {
        this.props.fetchDrink(this.props.match.params.id)
    };

      loginMust() {
        alert('Log In User before submitting a Drink')
    }

    submitR() {
        this.props.history.push(`/drinks/${this.props.match.params.id}`);
    }

    update(f) {
        return e => this.setState({
            [f]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
       if(this.props.currentUser){
        this.props.createDrink(this.state)
        this.submitR()
       }else{
           this.loginMust()
       }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="drink-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.drink === undefined) { return null 
        }else{
        return (
             <div className='form-box'>
                    <div className='ftitle'>Create a Drink!</div>
                        <form className='drink-form' onSubmit={this.handleSubmit}>  
                                <div className='title-text'>Please input below a title and category! </div>
                                    <input type="string" value={this.state.title} className="drink-title" onChange={this.update("title")} /> 
                                    <input type="string" value={this.state.category} className="drink-category" onChange={this.update("category")} />                                                        
                                <div className='ingredients'>
                                    <textarea className='rtext' rows='15' cols='40'
                                        value={this.state.ingredients}
                                        onChange={this.update('ingredients')}
                                        placeholder='Please leave the ingredients of your drink!'
                                    />
                                </div>
                                 <div className='directions'>
                                    <textarea className='rtext' rows='15' cols='40'
                                        value={this.state.directions}
                                        onChange={this.update('directions')}
                                        placeholder='Please leave the directions of making your drink!'
                                    />
                                </div>
                            <div className='submit-button-box'>
                                <div className='rform-button'>
                                    <button className = 'submit-review'>Submit Drink</button>
                                </div>
                            </div>
                        </form>
                </div>
          
        )}
        
    }
}


}

export default withRouter(DrinkForm)