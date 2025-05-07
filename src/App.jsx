import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import {
  Homepage,
  Ongoing,
  Complete,
  Create,
  Allgoals,
  Update,
  Error,
} from "./pages";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all" element={<Allgoals />} />
            <Route path="/ongoing" element={<Ongoing />} />
            <Route path="/completed" element={<Complete />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:goalId" element={<Update />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
