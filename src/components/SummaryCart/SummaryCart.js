import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const SummaryCart = ({ course }) => {
    const { desc, title, name, _id, img } = course;
    return (
        <div>
            <div className='mb-5'>
                <Card className='shadow-lg'>
                    <Card.Img variant="top" src={img} className="card-img" />
                    <Card.Body>
                        <h5>Title: <small>{title}</small></h5>
                        <h5>Name: <small>{name}</small></h5>
                        <Card.Text className='text-justify'>
                            {desc.slice(0, 140) + "....."}
                        </Card.Text>
                        <Link to={`/singleCourse/${_id}`}><button className='btn btn-danger py-0'>Show Details</button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default SummaryCart;