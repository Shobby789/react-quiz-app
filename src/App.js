import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Quizes from "./pages/Quizes";
import HTMLQuiz from "./pages/HTMLQuiz";
import CSSQuiz from "./pages/CSSQuiz";
import ReactQuiz from "./pages/ReactQuiz";
import PageDesign from "./pages/JSQuiz";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Quizes />} />
        <Route path="/html-quiz" element={<HTMLQuiz />} />
        <Route path="/css-quiz" element={<CSSQuiz />} />
        <Route path="/javascript-quiz" element={<PageDesign />} />
        <Route path="/reactjs-quiz" element={<ReactQuiz />} />
      </Routes>
    </>
  );
}

export default App;
