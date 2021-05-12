import React from "react";

class SubmitBtn extends React.Component {
  constructor(props){
    super(props);
    this.state = {clicked: false};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if ((prevProps.unclick !== this.props.unclick) && this.state.clicked === true){
      if(this.props.unclick){
        this.setState({clicked: false});
      }
    }
  }

  handleClick(){
    if(!this.props.unclick){
      this.setState({ clicked: true });
    }
  }
    render(){
      return (
        <button
          disabled={this.props.disabled}
          onClick={this.handleClick}
          className={this.state.clicked ? "submit-button button-loading" : "submit-button"}
        >
          {this.props.children}
        </button>
      );
    }

}

export default SubmitBtn;