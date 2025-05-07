import SingleGoal from "../components/SingleGoal";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";
import Goals from "../data/goals";
import { useState, useEffect } from "react";
import { axiosInstance } from "../axiosInstance";

const Complete = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [complete, setComplete] = useState([]);

   const getComplete = async () => {
     try {
       const { data } = await axiosInstance("/completed");
       setIsLoading(false);
       setComplete(data.goals);
     } catch (error) {
       console.log(error);
     }
   };

   useEffect(() => {
     getComplete();
   }, []);

   if (isLoading) {
     return <Loading />;
   }

   if (!isLoading && complete.length === 0) {
     return <Empty />;
   }

  const completedGoals = Goals.filter((g) => g.progress === 100);
  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed" />

      <div>
        {Goals &&
          completedGoals.map((g) => {
            return <SingleGoal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Complete;
