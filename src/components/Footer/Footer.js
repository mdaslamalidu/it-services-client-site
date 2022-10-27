import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#ECE6E6", marginTop: "100px"
}}>
            <Container className='d-lg-flex flex-wrap justify-content-between align-items-center py-4'>
                <div>
                    <Link to="/" className='header-title fs-4'>
                        <img style={{ height: "50px", borderRadius: "50%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrt6dYZqH63buWQAacIJDXWO4KAt6-exrwg&usqp=CAU" alt="" />
                        It Survices Institute
                    </Link>
                </div>
                <div>
                    <h5 className='fs-6'>All Right Resarved by Md Aslam</h5>
                </div>
                <div>
                    <FaFacebook></FaFacebook>
                    <FaTwitter className='mx-4'></FaTwitter>
                    <FaGithub></FaGithub>
                </div>
            </Container>
        </div>
    );
};

export default Footer;