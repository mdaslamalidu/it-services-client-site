import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCart from '../pages/SummaryCart/SummaryCart';
import { Container, Row, Col } from "react-bootstrap";
import SideNavbar from '../SideNavbar/SideNavbar';
import "./Courses.css";


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={3}>
                        <SideNavbar></SideNavbar>
                    </Col>
                    <Col xl={9}>
                        <div className='grid-style'>
                            {
                                courses.map(course => <SummaryCart key={course.id} course={course}></SummaryCart>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;