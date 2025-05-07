import SingleGoal from "../components/SingleGoal";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";
import { useState, useEffect } from "react";
import { axiosInstance } from "../axiosInstance";


const Ongoing = () => {
 const [isLoading, setIsLoading] = useState(true);
 const [goals, setOngoing] = useState([]);

 const getOngoing = async () => {
   try {
     const { data } = await axiosInstance("/ongoing");
     setIsLoading(false);
     setOngoing(data.goals);
   } catch (error) {
     console.log(error);
   }
 };

 useEffect(() => {
   getOngoing();
 }, []);

 if (isLoading) {
   return <Loading />;
 }

 if (!isLoading && goals.length === 0) {
   return <Empty />;
 }

  const ongoingGoals = goals.filter((g) => g.progress < 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      <div>
        {goals &&
          ongoingGoals.map((g) => {
            return <SingleGoal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Ongoing;
