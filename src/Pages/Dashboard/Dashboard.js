import React from 'react';
import MyAreaChart from '../Chart/MyAreaChart';
import MyLineChart from '../Chart/MyLineChart';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center'>Full Production Rechorts</h1>
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <MyLineChart></MyLineChart>
            <h2>Area chart of prouducts</h2>
            <MyAreaChart></MyAreaChart>
            </div>
        </div>
    );
};

export default Dashboard;