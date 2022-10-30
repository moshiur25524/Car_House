import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <section className='px-4 pt-5 pb-5 mx-auto mw-75'>
            <div className='d-flex flex-column justify-content-between align-items-center'>
                <h1 className='display-4 text-center'>
                    Contact Us, Our Office Address Down Below
                </h1>

                <div className='d-flex justify-content-between align-items-center'>
                    <Link
                        to='bd-address'
                        className='py-1 px-3 text-white text-decoration-none mt-3 mx-1 bg-success w-auto'
                    >
                        BD Address
                    </Link>
                    <Link
                        to='us-address'
                        className='  py-1 px-3 text-white text-decoration-none mt-3 mx-1 bg-info w-auto'
                    >
                        US Address
                    </Link>
                </div>
                <div className='d-flex justify-content-between align-items-center w-100 py-5'>
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default Contact;