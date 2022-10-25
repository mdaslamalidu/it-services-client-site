import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCart from '../pages/SummaryCart/SummaryCart';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3>This is Home page</h3>
            {
                courses.map(course => <SummaryCart key={course.id} course={course}>
                </SummaryCart>)
            }
        </div>
    );
};

export default Home;