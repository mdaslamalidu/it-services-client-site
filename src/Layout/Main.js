import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/pages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Container>
                <Row>
                    <Col xl={3} className="d-none d-lg-block">
                        <SideNavbar></SideNavbar>
                    </Col>
                    <Col xl={9}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
};

export default Main;