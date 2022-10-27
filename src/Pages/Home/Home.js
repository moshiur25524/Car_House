import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';

const Home = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <Banner/>
            <h1 className='text-primary'>Customer Reviews: ({reviews.length})</h1>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;