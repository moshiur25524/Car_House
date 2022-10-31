import React from 'react';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';
import useVolunteers from '../../Hooks/useVolunteers';
import './About.css'

const About = () => {
const [volunteers] = useVolunteers()
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h1>About page</h1>
            <h2>Total Volunteers result: {volunteers.length}</h2>
            <div className='volunteer-container container'>
                {
                    volunteers.map(activity => <VolunteerActivity
                    key={activity._id}
                    activity ={activity}
                    />)
                }
            </div>
           
        </div>
    );
};

export default About;