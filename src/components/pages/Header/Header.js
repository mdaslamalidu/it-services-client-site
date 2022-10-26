import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UseContext';


const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout().then(() => {
            alert("logout")
        })
        .catch(error => alert(error.message))
    }

    return (
        <Navbar bg="light" expand="lg" className='sticky-top'>
            <Container>
                <img style={{ height: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrt6dYZqH63buWQAacIJDXWO4KAt6-exrwg&usqp=CAU" alt="" />
                <Navbar.Brand href="#home">It Survices Institute</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav>
                        <Nav.Link href="#home">Courses</Nav.Link>
                        <Nav.Link href="#link">Faq</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        {
                            user?.email ? 
                            <p onClick={handleLogout}>Logout</p>
                            :
                            <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                            </>
                        }
                        
                            {
                                user?.photoURL ?
                                    <Image title={user?.displayName} roundedCircle src={user.photoURL} style={{height: "40px", width: "40px", cursor: "pointer"}}></Image>
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