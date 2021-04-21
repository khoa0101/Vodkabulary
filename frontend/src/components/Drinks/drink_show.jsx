import React from "react";
import { Link } from "react-router-dom";


class DrinkShow extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            // muted: true
        }

        this.toggleMute = this.toggleMute.bind(this);
        this.addDrinkToList = this.addDrinkToList.bind(this);
        this.removeDrinkFromList = this.removeDrinkFromList.bind(this);
    }

    toggleMute() {
        this.setState({
            muted: !this.state.muted
        })
    }

    addDrinkToList(e) {
        const listDrinkInfo = {
            list_id: this.props.profileList.id,
            drink_id: Number(e.currentTarget.dataset.drinkId)
        }

        this.props.addDrinkToList(listDrinkInfo)
    }

    removeDrinkFromList(e) {
        const { hideGenre, hideTitle, close, removeDrinkFromList } = this.props;
        const shouldClose = hideGenre || hideTitle;

        removeDrinkFromList(e.currentTarget.dataset.drinkAssociation)
            .then(() => { if (shouldClose) close()})
    }

    render() {
        const listDrinks = this.props.profileList.drinks;
        
        
        const { genre, details } = this.props;

        const listDrinkAssociations = this.props.profileList.drinkAssociations;
       



        const logo = this.props.details.logo ? <img src={this.props.details.logo} className="show-logo"/> 
            : <div className="logo-backup">{details.title.toUpperCase()}</div>

            
        let genreDiv;
        if (!this.props.hideGenre) genreDiv=(<div className="show-text"><span className="show-section">Genre: </span>{genre}</div>)
        
        let addButton;
        const inProfileList = listDrinks.map(drink => drink.id).includes(details.id);
        
        if (inProfileList) {
            let drinkAssociation = listDrinkAssociations.filter(assoc => assoc.drink_id === details.id)[0];

            addButton=(
                <div onClick={this.removeDrinkFromList} data-drink-association={drinkAssociation.id} className="show-list-button" >
                    <div className="show-check-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>
            )
        } else {
            addButton=(
                <div onClick={this.addDrinkToList} data-drink-id={details.id} className="show-list-button">
                    <div className="show-list-icon"></div>
                    <p className="show-btn-text">My List</p>
                </div>        
            )
        }


        return(
            <div className="drink-show-main">
                <section className="show-info-container">
                    <div className="show-info-box">
                        {logo}
                        <div className="show-details-container">
                        
                            <p className="show-details-text">{details.year}</p>
                            <p className="show-details-text show-rating">{maturity_rating}</p>
                            <p className="show-details-text">{details.duration}</p>
                        </div>
                        <div className="show-description">{details.description}</div>
                        <div className="show-buttons-container">
                            <Link to={{ pathname: `/browse/${details.id}/watch`, movieDetails: this.props.details}} className="show-play-button">
                                <div className="show-play-icon"></div>
                                <p className="show-btn-text">Play</p>
                            </Link>
                            {addButton}
                        </div>
                        <div className="show-text"><span className="show-section">Director: </span>{details.director}</div>
                        <div className="show-text"><span className="show-section">Cast: </span>{details.cast}</div>
                        {genreDiv}
                    </div>
                </section>

                <section className="show-trailer-container">
                    <div className="show-trailer-btns">
                        <div className="show-close-btn" onClick={this.props.close}></div>
                        {muteButton}
                    </div>                        
                    <video 
                        className="show-trailer"
                        src={trailer}
                        autoPlay
                        muted={muted}
                        loop 
                    />
                </section>
            </div>
        )
    }
}

export default DrinkShow;