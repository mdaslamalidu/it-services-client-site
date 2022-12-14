import React from "react";
import "./Home.css";
import banner from "../../Assests/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <h1 className="text-white">
          Build Your Carrier
          <br /> <span className="text-danger">With The Best One</span>
        </h1>
        <Link to="/courses">
          <button className="btn btn-danger px-5">Our Courses</button>
        </Link>
      </div>
      <div className="right-side">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Home;
