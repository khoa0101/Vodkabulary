import React from 'react'
import { withRouter } from 'react-router-dom';
import SubmitBtn from './SubmitBtn';
import './drink_form.scss'

class DrinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.drinkPrefill;
    this.cat_array = [
      "Vodka",
      "Rum",
      "Whiskey",
      "Gin",
      "Tequila",
      "Beer",
      "Brandy",
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.submitR = this.submitR.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === "edit") {
      this.props.fetchDrink(this.props.match.params.id);
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props
      .deleteDrink(this.state._id)
      .then(this.props.history.push("/discover/"));
  }

  submitR() {
    this.props.history.push(`/discover`);
  }

  update(f) {
    return (e) =>
      this.setState({
        [f]: e.target.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("category", this.state.category);
    formData.append("ingredients", this.state.ingredients);
    formData.append("directions", this.state.directions);
    formData.append("author", this.props.currentUser);

    if (this.state.photoFile) {
      formData.append("photo", this.state.photoFile);
    }
    if (this.props.formType === "edit") {
      const editedDrink = {
        title: this.state.title,
        ingredients: Array.isArray(this.state.ingredients)
          ? this.state.ingredients.join(",")
          : this.state.ingredients,
        directions: this.state.directions,
        category: this.state.category,
        author: this.props.currentUser,
      };
      this.props.processForm(this.state._id, editedDrink, this.submitR);
    } else {
      this.props.processForm(formData, this.submitR);
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      let extension = file.name.split(".")[1];
      extension = extension.toLowerCase();

      // If the extensions don't match the following, state will not be set.
      if (extension !== "jpg" && extension !== "jpeg") return;

      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
      });
    };
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
      <div className="form-box">
        <h1 className="ftitle">Create a Drink!</h1>
        <br />
        {this.renderErrors()}
        <form className="drink-form" onSubmit={this.handleSubmit}>
          <label>
            Title
            <input
              type="string"
              value={this.state.title}
              className="drink-title"
              onChange={this.update("title")}
              placeholder="Title"
            />
          </label>
          <label>
            Category
            <select
              value={this.state.category}
              className="drink-category"
              onChange={this.update("category")}
            >
              <option id="default" value="">
                Category
              </option>
              {this.cat_array.map((category, i) => (
                <option key={`${category}-${i}`} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label>
            Ingredients
            <textarea
              className="rtext"
              rows="15"
              cols="40"
              value={this.state.ingredients}
              onChange={this.update("ingredients")}
              placeholder="Please leave the ingredients of your drink, seperated by comma!"
            />
          </label>
          <label>
            Directions
            <textarea
              className="rtext"
              rows="15"
              cols="40"
              value={this.state.directions}
              onChange={this.update("directions")}
              placeholder="Please leave the directions of making your drink!"
            />
          </label>

          {this.props.formType === "create" && (
            <input
              type="file"
              accept="image/jpeg"
              className="file-input"
              required
              onChange={this.handleFile}
            />
          )}
          {this.props.formType === "edit" && (
            <button className="del-drink" onClick={this.handleDelete}>
              Delete Drink
            </button>
          )}
          <SubmitBtn
            disabled={
              !this.state.photoFile && this.props.formType === "create" 
            }
            unclick={!!Object.keys(this.props.errors).length}
            >
            Submit Drink
          </SubmitBtn>
        </form>
      </div>
    );
  }
}


export default withRouter(DrinkForm)