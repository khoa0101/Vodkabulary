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
       
        let { username } = this.props.review

        return (
            <div>
                <div className='rev-box'>
                    <div className='rev-author'>
                        <div className='photo-box'>
                            <img className='face-photo'
                                src={window.face} />
                        
                        <div className='author-name'>
                            {username}
                            <div className='review-item-rating'>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='rev-body'>
                        <p>{this.props.review.body}</p>
                    </div>
                    <div className="del-btn">{this.deleteButton()}</div>
                    <div className='time-stamp'>{date} </div>
                    
                </div>
            </div>
        )
    }

}

export default ReviewIndexItem