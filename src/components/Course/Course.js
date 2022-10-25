import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Course = () => {
    const singleCourse = useLoaderData();
    const {img, title, desc, name} = singleCourse;
    return (
        <div>
            <h3>This is single Course page</h3>
            <Card>
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <h5>Course Title: <small>{title}</small></h5>
                    <h5>Course Name: <small>{name}</small></h5>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Link to='checkOut'><button className='btn btn-warning py-0'>CheckOut</button></Link>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Course;