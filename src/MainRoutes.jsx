import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TriviaGame from './components/TriviaGame';
import Results from './components/Results';

export default function MainRoutes() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route path="/game" element={<TriviaGame/>} />
      <Route path="/results" element={<Results/>} />
    </Routes>
  );
}
