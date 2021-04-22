import React from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom';

class DrinkForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // busin_id: this.props.match.params.id,
            author_id: this.props.currentUser,
            title: '',
            category: '',
            ingredients: '',
            directions: '',
            photoFile: null,
            photoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
    //     e.preventDefault();
    //    if(this.props.currentUser){
    //     this.props.createDrink(this.state)
    //     this.submitR()
    //    }else{
    //        this.loginMust()
    //    }

    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('category', this.state.category);
    formData.append('ingredients', this.state.ingredients);
    formData.append('directions', this.state.directions);
    formData.append('author', this.props.currentUser);

    if (this.state.photoFile) {
      formData.append('photo', this.state.photoFile);
    }

   
    this.props.processForm(formData, (postId) =>
      this.props.history.push(`/posts/${postId}`)
    );
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
        } else {
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
                                 <input
                                    type="file"
                                    accept="image/jpeg"
                                    className="file-input"
                                    required
                                    // onChange={props.handleFile}
                                    />
                                <div className='rform-button'>
                                    <button className = 'submit-review'>Submit Drink</button>
                                </div>
                            </div>
                        </form>
                </div>
          
        )}
        
    }
}


export default withRouter(DrinkForm)