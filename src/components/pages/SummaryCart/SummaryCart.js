import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const SummaryCart = ({course}) => {
    console.log(course)
    const { desc, title, name, id, img, category_id } = course;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <h5>Course Title: <small>{title}</small></h5>
                    <h5>Course Name: <small>{name}</small></h5>
                    <Card.Text>
                        {desc.slice(0, 150) + "....."}
                    </Card.Text>
                    <Link><button className='btn btn-warning py-0'>Show Details</button></Link>
                </Card.Body>
                
            </Card>
        </div>
    );
};

export default SummaryCart;