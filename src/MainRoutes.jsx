import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TriviaGame from './component/TriviaGame';
import Results from './component/Results';

export default function MainRoutes() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/game" element={<TriviaGame/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
  );
}
