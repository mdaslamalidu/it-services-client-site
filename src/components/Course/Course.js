import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./Course.css";

const Course = () => {
    const singleCourse = useLoaderData();
    const { img, title, desc, name, duration, price, _id } = singleCourse;
    return (
        <div>
            <div className='text-end mt-3 me-3'><button className='btn btn-danger'>Download Pdf</button></div>
             <div className='course-style'>
                <div>
                    <h2 className='fs-4 text-danger'>Welcome to Course details page!!!!!</h2>
                    <p className=''>If you are looking for several courses that you can opt for after your primary school studies this is the right place for you. You will find the right course that you can study from the list of options available. We are sure you will not regret the course you have chosen as you will get complete details related to the particular course. Courses under Various streams are arranged and you can choose your dream ones and study accordingly.</p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZNimJx83Q3teTeZtZn9xwK608k1B2nM3Ow&usqp=CAU" alt="" />
             </div>
                <div className='courseDetailsContainer'>
                    <h1 className='text-danger mt-5 text-center mb-4'>About Course</h1>
                    <div className='courseDetails'>
                        <img src={img} className="rounded"/>
                        <div className='course-items'>
                            <h5>Course Title: <small>{title}</small></h5>
                            <h5>Course Name: <small>{name}</small></h5>
                            <h5>Course Price: <small>{price} $</small></h5>
                            <h5>Course Duration: <small>{duration} Months</small></h5>
                        <Link to={`/checkout/${_id}`}><button className='btn btn-warning py-0 mt-2 w-75 fs-5'>CheckOut</button></Link>
                        </div>
                    </div>
                    <p className='mt-4 bg-danger text-white p-2 fs-5'>
                        {desc}
                    </p>
                </div>
            </div>
        
    );
};

export default Course;