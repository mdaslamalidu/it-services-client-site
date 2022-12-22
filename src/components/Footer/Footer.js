import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerStyle">
      <Container className="d-lg-flex flex-wrap justify-content-between align-items-center py-4">
        <div>
          <Link to="/" className="header-title fs-4">
            <img
              style={{ height: "50px", borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrt6dYZqH63buWQAacIJDXWO4KAt6-exrwg&usqp=CAU"
              alt=""
            />
            It Survices Institute
          </Link>
        </div>
        <div>
          <h5 className="fs-6 footer-title">All Rights Reserved by Md Aslam</h5>
        </div>
        <div>
          <a href="https://www.facebook.com/mdaslamalidu">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://twitter.com/MdAslam19990">
            <FaTwitter className="mx-4"></FaTwitter>
          </a>
          <a href="https://github.com/mdaslamalidu">
            <FaGithub></FaGithub>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
