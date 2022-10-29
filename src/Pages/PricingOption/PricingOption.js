import React from 'react';

const PricingOption = ({ option }) => {
    const { name, price } = option;
    return (
        <div className='bg-white rounded'>
            <h1 className='text-center font-weight-bold'>{name}</h1>
            <span className='text-center display-3'>{price}</span>
            <span className='text-secondary text-center'>/mon</span>

        </div>
    );
};

export default PricingOption;