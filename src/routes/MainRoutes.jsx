import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import TriviaGame from "../components/TriviaGame";
import Results from "../components/Results";
import Loading from "../components/Loading";

export default function MainRoutes() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/game" element={<TriviaGame />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
