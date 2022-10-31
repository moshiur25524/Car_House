import React from 'react';

const VolunteerActivity = ({activity}) => {
    const { img, title, descrip} = activity;
    return (
        <div className='border border-dark p-4'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{descrip}</p>
        </div>
    );
};

export default VolunteerActivity;