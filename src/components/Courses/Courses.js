import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCart from '../pages/SummaryCart/SummaryCart';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='grid-style'>
            {
                courses.map(course => <SummaryCart key={course.id} course={course}></SummaryCart>)
            }
        </div>
    );
};

export default Courses;