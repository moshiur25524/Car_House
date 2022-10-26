import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, customer, rating, description } = review;
    return (
        <div>
            <div class="card " style={{width: '18rem'}}>
                <div class="card-body card-style">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{customer}</h6>
                    <p><small>Ratings: {rating}</small></p>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;