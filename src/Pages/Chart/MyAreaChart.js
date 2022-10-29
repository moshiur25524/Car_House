import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = () => {
    const data = [
        {
            "name": "Moshiur",
            "price": 4000,
            "sales": 2400,
            "amt": 2400
        },
        {
            "name": "Nahid",
            "price": 3000,
            "sales": 1398,
            "amt": 2210
        },
        {
            "name": "Sayma",
            "price": 2000,
            "sales": 9800,
            "amt": 2290
        },
        {
            "name": "Tazrin",
            "price": 2780,
            "sales": 3908,
            "amt": 2000
        },
        {
            "name": "Hafiz",
            "price": 1890,
            "sales": 4800,
            "amt": 2181
        },
        {
            "name": "Osman",
            "price": 2390,
            "sales": 3800,
            "amt": 2500
        },
        {
            "name": "Salehin",
            "price": 3490,
            "sales": 4300,
            "amt": 2100
        }
    ]

    return (
        <div>
                <AreaChart width={800} height={400}  data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend/>
                    <ReferenceLine x="Sayma" stroke="green" label="Min PAGE" />
                    <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
          
        </div>
    );
};

export default MyAreaChart;