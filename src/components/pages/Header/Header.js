import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UseContext';


const Header = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <Navbar bg="light" expand="lg" className='sticky-top'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home">Courses</Nav.Link>
                        <Nav.Link href="#link">Faq</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        {
                            user?.email ? 
                            <Button>Logout</Button>
                            :
                            <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                            </>
                        }
                        
                            {
                                user?.photoURL ?
                                    <p>{user.photoURL}</p>
                                    :
                                    <p>photo nai</p>
                            }

                        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_JMhOGTiIiNQt0WyWI5rhTA6Qlbi92BM0wbrkC7k&s */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;