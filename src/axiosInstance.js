import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://project-goal-plan.onrender.com/goals",
});