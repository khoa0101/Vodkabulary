import React from 'react'
import { withRouter } from 'react-router-dom';
import './drink_form.scss'

class DrinkForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // busin_id: this.props.match.params.id,
            author: this.props.currentUser,
            title: '',
            category: '',
            ingredients: '',
            directions: '',
            photoFile: null,
            photoUrl: null
        }
        this.cat_array = ["Vodka", "Rum", "Whiskey", "Gin", "Tequila", "Beer", "Brandy"];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.submitR = this.submitR.bind(this);
    }

    // Comment back in when creating the edit form
    // componentDidMount() {
    //     this.props.fetchDrink(this.props.match.params.id)
    // };

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

    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('category', this.state.category);
    formData.append('ingredients', this.state.ingredients);
    formData.append('directions', this.state.directions);
    formData.append('author', this.props.currentUser);

    if (this.state.photoFile) {
      formData.append('photo', this.state.photoFile);
    }

    this.props.processForm(formData);
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
        let [name, extension] = file.name.split(".");
        extension = extension.toLowerCase();

        // If the extensions don't match the following, state will not be set.
        if ( extension !== "jpg" &&  extension !== "jpeg" ) return;

        this.setState({
            photoFile: file,
            photoUrl: fileReader.result,
            title: name,
        });
        }
        if (file) {
        fileReader.readAsDataURL(file);
        }
    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors).map((error, i) => (
                    <li className="drink-errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
             <div className='form-box'>

                {console.log(this.props)}
                <h1 className='ftitle'>Create a Drink!</h1>
                <br/>
                {this.renderErrors()}
                <form className='drink-form' onSubmit={this.handleSubmit}>  
                    <label>Title
                        <input type="string" value={this.state.title} className="drink-title" onChange={this.update("title")} placeholder="Title"/> 
                    </label>
                    <label>Category
                        <select value={this.state.category} className="drink-category" onChange={this.update("category")}>
                            <option id="default" value="">Category</option>
                            {this.cat_array.map((category, i) =>
                                <option  key={`${category}-${i}`} value={category}>{category}</option>
                            )}
                        </select>                                                        
                    </label>
                    <label>Ingredients
                        <textarea className='rtext' rows='15' cols='40'
                            value={this.state.ingredients}
                            onChange={this.update('ingredients')}
                            placeholder='Please leave the ingredients of your drink, seperated by comma!'
                        />
                    </label>
                    <label>Directions
                        <textarea className='rtext' rows='15' cols='40'
                            value={this.state.directions}
                            onChange={this.update('directions')}
                            placeholder='Please leave the directions of making your drink!'
                        />
                    </label>
                    <input
                        type="file"
                        accept="image/jpeg"
                        className="file-input"
                        required
                        onChange={this.handleFile}
                    />
                    <button className = 'submit-button'>Submit Drink</button>
                </form>
            </div>
        )
    }
}


export default withRouter(DrinkForm)