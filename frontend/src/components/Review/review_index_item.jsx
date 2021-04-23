import React from 'react'

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

    // componentDidMount() {
    //     this.props.fetchUsers()
    // }

    deleteButton() {
        // if (this.props.currentUser === this.props.author.id)
            return (
                <div className='rev-btn-place'>
                    <div className="rev-delete-btn"
                        onClick={this.handleDelete()}>        
                    </ div>
                </div>
            )
    }

    render() {
       
        let { username } = this.props.review.author

        return (
            <div>
                <div className='rev-box'>
                    <div className='author-name-rate'>
                        {username}&nbsp;
                        {this.starPower()}
                    </div>
                    <div className='rev-body'>
                        <p>{this.props.review.body}</p>
                    </div>
                    <div className="del-btn">{this.deleteButton()}</div>               
                </div>
            </div>
        )
    }

}

export default ReviewIndexItem