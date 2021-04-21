import React from "react";
import MovieShowContainer from "./movie_show_container";
import drinks_container from "../Drinks/drinks_container";

class MovieRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMovie: null,
            activeRow: false,
            toggle: false
        }

        this.showLeftArrow = false;
        this.transitioning = false;
        this.showRightArrow = false;

        this.setActiveMovie = this.setActiveMovie.bind(this);
                this.closeShow = this.closeShow.bind(this);
        this.shiftForward = this.shiftForward.bind(this);
        this.updateToggle = this.updateToggle.bind(this);
        this.switchOffTransition = this.switchOffTransition.bind(this);
        this.stopHoverPropagation = this.stopHoverPropagation.bind(this);
                this.shiftBack = this.shiftBack.bind(this);

        this.switchOnTransition = this.switchOnTransition.bind(this);


    }

    componentDidMount() {
        this.mounted = true;
        this.updateRightArrow();

        const moviescrolling = document.getElementById(`${this.props.name}-moviescrolling`);
        moviescrolling.addEventListener("transitionstart", this.switchOnTransition);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    setActiveMovie(movie) {
        if (!this.props.hideTitle) {
            this.props.history.push(`/browse/${movie.id}`)
        }




        this.setState({
            activeMovie: movie,
            activeRow: true
        })
    }

    shiftForward() {
        const moviescrolling = document.getElementById(`${this.props.name}-moviescrolling`);
        const wrapper = document.getElementById(`${this.props.name}-wrapper`);
        
        const shiftLength = (moviescrolling.offsetWidth - wrapper.offsetWidth) * -1;

        if (shiftLength < 0) {
            moviescrolling.style.transform = `translateX(${shiftLength + "px"})`;
            this.showRightArrow = false;
            this.showLeftArrow = true;
            this.updateToggle();
        }
    }



    shiftBack() {
        const moviescrolling = document.getElementById(`${this.props.name}-moviescrolling`);
        moviescrolling.style.transform ="";

        this.showRightArrow = true;
        this.showLeftArrow = false;
        this.updateToggle();
    }

    closeShow() {
        if (!this.props.hideTitle) this.props.history.push("/browse")

        if (this.mounted) {
            this.setState({
                activeMovie: null,
                activeRow: false
            })
        }
    }

    updateRightArrow() {
        const moviescrolling = document.getElementById(`${this.props.name}-moviescrolling`);


        const wrapper = document.getElementById(`${this.props.name}-wrapper`);

        const shiftLength = (moviescrolling.offsetWidth - wrapper.offsetWidth) * -1;

        this.showRightArrow = shiftLength < 0;
        this.setState({toggle: !this.state.toggle})
    }

    updateToggle() {
        this.setState({toggle: !this.state.toggle})
    }

    stopHoverPropagation(e) {
        if (this.transitioning) e.stopPropagation()
    }

    switchOnTransition(event) {
        if (event.srcElement.id.includes("moviescrolling")) {
            this.transitioning = true;
        } 
    }
    
    switchOffTransition(event) {
        this.transitioning = false;
    }



    render() {
        const { name, movies } = this.props;
        const { activeRow, activeMovie } = this.state;
        let movieItems = [];   
        
        for (let [title, details] of movies) {
            let activeStatus;
            if (activeMovie) {
                activeStatus = activeMovie.id === details.id;
            }

            const inProfileListRow = this.props.hideGenre;

            const movieItem = (
                <MovieContainer key={details.id} 
                    title={title} 
                   
                    activeRow={activeRow}
                     details={details} 
                    activeMovie={activeStatus}
                    setActiveMovie={this.setActiveMovie}
                    inProfileListRow={inProfileListRow}
                />
            )
            movieItems.push(movieItem)
        }

        let movieShow;
        if (activeRow) {
            movieShow = (
                <MovieShowContainer genre={name} details={activeMovie} close={this.closeShow} hideGenre={this.props.hideGenre} />
            )
        }

        let rightArrow;
        let leftArrow;
        let titleDiv;




        if (!this.props.hideTitle) titleDiv=(<h2 className="genre-title" >{name}</h2>)
        if (!this.props.hideTitle && this.showRightArrow) {
            rightArrow=(<div className="moviescrolling-right" onClick={this.shiftForward}></div>)
        } else {
            rightArrow=(<div className="moviescrolling-right invisible" onClick={this.shiftForward}></div>)
        }

        if (this.showLeftArrow) {
            leftArrow = (<div id={`${name}-moviescrolling-btn`} className="moviescrolling-left" onClick={this.shiftBack}></div>);
        } else {
            leftArrow = (<div id={`${name}-moviescrolling-btn`} className="moviescrolling-left invisible" onClick={this.shiftBack}></div>);
        }

        return (
            <div className="movie-row-main">
                {titleDiv}
                <div className="movies-container" onMouseEnter={this.stopHoverPropagation}>
                    {leftArrow}                    
                    <div id={`${name}-wrapper`} className="moviescrolling-wrapper">
                        <div id={`${name}-moviescrolling`} onTransitionEnd={this.switchOffTransition}  className="moviescrolling">
                            {movieItems}
                        </div>
                    </div>
                    {rightArrow}
                </div>

                {movieShow}
            </div>
        )
    }

}

export default DrinkRow;