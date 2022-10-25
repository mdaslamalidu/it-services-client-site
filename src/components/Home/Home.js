import React from 'react';
import "./Home.css";
import { useLoaderData } from 'react-router-dom';
import SummaryCart from '../pages/SummaryCart/SummaryCart';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>This is Home page</h3>
            <div className='grid-style'>
                {
                    courses.map(course => <SummaryCart key={course.id} course={course}>
                    </SummaryCart>)
                }
                </div>
        </div>
    );
};

export default Home;