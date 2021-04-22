import React from "react";
import DrinkRow from "./movie_row";

import Nav from "../nav_container";
import { Link } from "react-router-dom";

class MyList extends React.Component {
    constructor(props) {
        super(props);

        this.setDefaultProfile = this.setDefaultProfile.bind(this);
    }

    componentDidMount() {
        const { activeProfile, currentUserId } = this.props;

        if (!activeProfile) {
            this.props.getUserProfiles(currentUserId)
                .then(() => this.setDefaultProfile());
        }
    }

    setDefaultProfile() {
        const firstProfile = Object.values(userProfiles)[0];
        
        const { activeProfile, userProfiles, getProfileList, setActiveProfile } = this.props;


        if (!activeProfile) {
            setActiveProfile(firstProfile)
            getProfileList(firstProfile.listId)
        }
    }

    parseMovies(movies) {
        let movieRowArrays = [];

        while (movies.length > 0) {
            let row = movies.splice(0, 5);
            movieRowArrays.push(row);
        }

        let movieRowElements = movieRowArrays.map((rowMovies, index) => {
            let moviesObj = {};

            rowMovies.forEach(movie => moviesObj[movie.title] = movie)
            moviesObj = Object.entries(moviesObj)

            return (
                <MovieRow key={`mylist-${index}`} name={"My List"} movies={moviesObj} history={this.props.history} hideTitle={true} hideGenre={true} />
            )
        })

        return movieRowElements;
    }

    render() {
        if (typeof this.props.profileList.movies !== "object") return (<div></div>);

        let listMovies = this.props.profileList.movies.slice();
        let listRows;

        if (listMovies && listMovies.length > 0) {
            listRows = this.parseMovies(listMovies)
        } else {
            listRows=(
                <div className="no-movies-text-box">
                    <div className="no-movies-text">You haven't added any titles to your list yet.</div>
                </div>
            )
        }

        return (
            <div className="my-list-main">
                <Nav page="browse" onList={true} />
                <div className="list-container">
                    <div className="list-header unselectable-text">My List</div>
                    <div className="list-rows-container">
                        {listRows}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MyList;