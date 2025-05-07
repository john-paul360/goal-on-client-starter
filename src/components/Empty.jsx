import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div
      className="text-center d-flex justify-content-center align-items-center"
      style={{ height: `calc(100vh - 165px)` }}
    >
      <div>
        <h3 className="fw-light">No Goal to display, Create new Goals</h3>
        <button className="blue-bg p-2">
          <Link to="/create" className="text-decoration-none text-white">
            + Create New Goals
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Empty;
