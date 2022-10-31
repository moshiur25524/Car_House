import React from 'react';
import { useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers()
    const [searchResult, setSearchResult] = useState([])

    const handleSearchChange = e => {
        const searchText = e.target.value;
        const match = volunteers.filter(v => v.title.includes(searchText))
        setSearchResult(match)
    }
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-center'>All the Volunteers: {volunteers.length}</h1>

            <div className='m-5'>
                <input onChange={handleSearchChange} placeholder='Search Volunteers' type="text" name="" id="" />
            </div>

            <div className='volunteer-container container'>
                {
                    searchResult.map(activity => <VolunteerActivity
                        key={activity._id}
                        activity={activity}
                    ></VolunteerActivity>)
                }
            </div>

        </div>
    );
};

export default Volunteers;