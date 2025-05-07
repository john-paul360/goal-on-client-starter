import React from "react";

const Progress = ({ num }) => {
  return (
    <div className="parent-container">
      <div className="d-flex justify-content-between text-secondary">
        <p>Progress</p>
        <p>{num}% </p>
      </div>
      <div className="parent">
        <div
          className={num < 50 ? "red" : "green"}
          style={{
            width: `${num}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
