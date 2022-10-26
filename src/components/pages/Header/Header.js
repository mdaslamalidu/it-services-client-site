import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UseContext';
import "./Header.css";
import { FaUser, IconName } from "react-icons/fa";


const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout().then(() => {
            alert("logout")
        })
        .catch(error => alert(error.message))
    }

    return (
        <Navbar expand="lg" className='sticky-top header-style'>
            <Container>
                <Link to="/" className='header-title'>
                    <img style={{ height: "50px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrt6dYZqH63buWQAacIJDXWO4KAt6-exrwg&usqp=CAU" alt="" />
                   It Survices Institute
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className='link-style align-items-center'>
                        <Link to="/courses">Courses</Link>
                        <Link to="/faq">Faq</Link>
                        <Link to="/blog">Blog</Link>
                        {
                            user?.email ? 
                            <Link onClick={handleLogout}>Logout</Link>
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
                                    <FaUser></FaUser>
                            }

                        {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_JMhOGTiIiNQt0WyWI5rhTA6Qlbi92BM0wbrkC7k&s */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;