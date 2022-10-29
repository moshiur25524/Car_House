import React, { useState } from 'react';
import MyAreaChart from '../Chart/MyAreaChart';
import MyLineChart from '../Chart/MyLineChart';
import MyPieChart from '../Chart/MyPieChart';
import MySpecialChart from '../Chart/MySpecialChart';
import { useSpring, animated } from 'react-spring'

const Dashboard = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
      onRest: () => set(!flip),
    })
    return (
        <div>
            <animated.h1 style={props} className='text-center'>Full Production Records</animated.h1>
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