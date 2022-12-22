import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const checkout = useLoaderData();
  const { img, name } = checkout;
  return (
    <div className="checkout-bg-color">
      <div className="checkout-page text-center">
        <h1 className="checkout-title">Thank you for your course</h1>
        <h3 className="checkout-title">
          You Have Selected For{" "}
          <span className="bg-danger rounded text-white">{name}</span>
        </h3>
        <img src={img} alt="" className="rounded mt-5" />
        <Link to="/courses" className="d-block">
          <button className="btn btn-danger mt-5">Back to your courses</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
