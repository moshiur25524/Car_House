import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useReviews()
    
    return (
        <div>
            {/* <h1>Review Page : {reviews.length}</h1> */}

            <div className='reviews container'>
                {
                    reviews.map(review => <Review
                    review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;