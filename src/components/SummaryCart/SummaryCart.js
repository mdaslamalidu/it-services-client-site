import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const SummaryCart = ({course}) => {
    const { desc, title, name, _id, img } = course;
    return (
                    <div>
                        <div>
                            <Card>
                                <Card.Img variant="top" src={img} className="card-img" />
                                <Card.Body>
                                    <h5>Course Title: <small>{title}</small></h5>
                                    <h5>Course Name: <small>{name}</small></h5>
                                    <Card.Text>
                                        {desc.slice(0, 150) + "....."}
                                    </Card.Text>
                                    <Link to={`/singleCourse/${_id}`}><button className='btn btn-warning py-0'>Show Details</button></Link>
                                </Card.Body>
                            </Card>
                        </div>
        </div>
    );
};

export default SummaryCart;