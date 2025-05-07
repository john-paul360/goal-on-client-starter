import React from "react";
import { Link } from "react-router-dom";

const GoalHeader = ({ heading }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-1">
        <h2 className="fw-bold">{heading}</h2>
        {heading === "Progress" ? (
          ""
        ) : (
          <p className="blue-text">
            <Link
              className="text-decoration-none blue-text fw-bold create-link"
              to="/create"
            >
              {" "}
              + Create new goals
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default GoalHeader;
