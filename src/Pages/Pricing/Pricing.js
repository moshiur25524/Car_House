import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import './Pricing.css'

const Pricing = () => {
    const pricingItems = [
        {id: 1, name: 'Free', price: 0},
        {id: 2, name: 'Regular', price: 9.99},
        {id: 3, name: 'Premium', price: 23.45}
    ]
    return (
        <div className='pricing-body container'>
            <h1 className='text-center'>The Best Deal of price </h1>
            <div className='pricing'>
                {
                    pricingItems.map(item => <PricingOption
                    key={item.id}
                    option = {item}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;