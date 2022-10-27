import React from 'react';
import "./Home.css";
import banner from "../Assests/banner.jpg"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home-container'>
            <div className='left-side'>
                <h1>Build Your Carrer<br/> <span className='text-danger'>With The Best One</span></h1>
                <Link to="/courses"><button className='btn px-5'>Our Courses</button></Link>
            </div>
            <div className='right-side'>
                <img className='' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;