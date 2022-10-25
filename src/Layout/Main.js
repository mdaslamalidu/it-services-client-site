import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Header from '../components/pages/Header/Header';
import SideNavbar from '../components/pages/SideNavbar/SideNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xl={3} className="d-none d-lg-block">
                        <SideNavbar></SideNavbar>
                    </Col>
                    <Col xl={9}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;