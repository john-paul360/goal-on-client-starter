import React from "react";
import GoalHeader from "../components/GoalHeader";

import SingleGoal from "../components/SingleGoal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";
import { useState, useEffect } from "react";
import { axiosInstance } from "../axiosInstance";

const Allgoals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [goals, setGoals] = useState([]);

  const getGoals = async () => {
    try {
      const { data } = await axiosInstance("/");
      setIsLoading(false);
      setGoals(data.goals);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGoals();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && goals.length === 0) {
    return <Empty />;
  }

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />

      <div>
        <div>
          {goals &&
            goals.map((g) => {
              return <SingleGoal key={g._id} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
