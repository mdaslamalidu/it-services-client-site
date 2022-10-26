import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkout = useLoaderData();
    const {img, name, title } = checkout;
    return (
        <div className='w-50 mx-auto text-center'>
            <h1>Thank yor for your <span className='text-warning'>{name}</span> course</h1>
            <img src={img} alt=""/>
            <Link to="/courses" className='d-block'><button className='btn btn-danger mt-5'>Back to your courses</button></Link>
        </div>
    );
};

export default Checkout;