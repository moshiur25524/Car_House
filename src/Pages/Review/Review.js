import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Review.css'

const Review = ({ review }) => {
    const {id, name, customer, rating, description } = review;

    const navigate = useNavigate()

    const handleReviewsButton =() =>{
        navigate(`/reviews/${id}`)
    }
    return (
        <div className='review'>
            <div className="card box-shadow" style={{width: '18rem'}}>
                <div className="card-body card-style">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{customer}</h6>
                    <p><small>Ratings: {rating}</small></p>
                    <p className="card-text">{description}</p>
                    <button onClick={handleReviewsButton}>{name} {id}</button>
                </div>
            </div>
        </div>
    );
};

export default Review;