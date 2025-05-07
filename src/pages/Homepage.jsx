import React from "react";
import bro from "../assets/bro.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Homepage = () => {
  const notify = () => {
    toast.success("You are signed in, Welcome to Goal On.");
  };
  notify();
  return (
    <div className="container d-block d-lg-flex justify-content-lg-between align-items-lg-center gap-2 mt-5 pb-4">
      <Toaster></Toaster>
      <div className="text-center">
        <img className="img-logo" src={bro} alt="main image" />
      </div>
      <div className="mt-3 mt-md-0 img-text">
        <h2 className="fw-bold">
          Improve Productivity By Managing{" "}
          <span className="blue-text">Your Goals</span>{" "}
        </h2>
        <p className="mt-4 lh-base">
          Managing one's goals is a critical aspect of personal and professional
          growth. It involves setting clear, specific objectives, creating a
          roadmap to achieve them, and monitoring progress along the way. To
          effectively manage goals, it's essential to prioritize and break them
          down into smaller, actionable steps. Regularly reviewing and adjusting
          these goals keeps them relevant and achievable.
        </p>
        <p className="mt-2 lh-base">
          {" "}
          <span className="blue-text fw-bold">Goal-On</span> is a personal goal
          manager that helps you do the aforementioned
        </p>
        <div className="d-flex align-items-center gap-2">
          <Link to="/all" className="text-decoration-none">
            <button className="blue-bg btn1 text-white p-2 d-block mt-2">
              Manage Goals
            </button>
          </Link>
          <Link to="/create" className="text-decoration-none blue-text fw-bold">
            <button className="blue-bg btn1 text-white p-2 d-block mt-2">
              + New Goal
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
