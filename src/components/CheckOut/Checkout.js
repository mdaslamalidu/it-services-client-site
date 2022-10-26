import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./Checkout.css";

const Checkout = () => {
    const checkout = useLoaderData();
    const {img, name } = checkout;
    return (
        <div className='checkout-page'>
            <h1>Thank yor for your <span className='text-warning'>{name}</span> course</h1>
            <img src={img} alt="" className='rounded'/>
            <Link to="/courses" className='d-block'><button className='btn btn-danger mt-5'>Back to your courses</button></Link>
        </div>
    );
};

export default Checkout;