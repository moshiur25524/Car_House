import React from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetail = () => {
    const {reviewId} = useParams()
    return (
        <div>
            <h1 className='text-center'>Here will be the details of the Reviews: {reviewId}</h1>
        </div>
    );
};

export default ReviewDetail;