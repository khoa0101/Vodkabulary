import React from 'react'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props)

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
                        {this.props.review.rating}
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