import React from 'react';
import "./Home.css";
import { useLoaderData } from 'react-router-dom';
import SummaryCart from '../pages/SummaryCart/SummaryCart';
import SideNavbar from '../SideNavbar/SideNavbar';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>This is Home page</h3>
        </div>
    );
};

export default Home;