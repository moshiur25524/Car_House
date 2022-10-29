import React from 'react';
import MyAreaChart from '../Chart/MyAreaChart';
import MyLineChart from '../Chart/MyLineChart';
import MyPieChart from '../Chart/MyPieChart';
import MySpecialChart from '../Chart/MySpecialChart';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center'>Full Production Records</h1>
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <MyLineChart></MyLineChart>
            <h2>Area chart of prouducts</h2>
            <MyAreaChart></MyAreaChart>
            <h2>Pie Chart of Products</h2>
            <MyPieChart />
            <h2>Bar Chart of Products</h2>
            <MySpecialChart></MySpecialChart>
            </div>
        </div>
    );
};

export default Dashboard;