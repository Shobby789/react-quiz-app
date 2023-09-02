import { Container } from "react-bootstrap";
import { ReactQuestions } from "../data";
import { useState } from "react";
import Result from "./Result";
import { useNavigate } from "react-router-dom";

export default function ReactQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < ReactQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === ReactQuestions[currentQuestion].right_answer) {
      setScore(score + 1);
    }
  };

  const handleBack = () => {
    // updateScore();
    if (currentQuestion < ReactQuestions.length - 1) {
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(null);
    } else {
      setShowResult(false);
    }
  };
  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    navigate("/");
  };
  return (
    <Container fluid className="min-vh-100 mx-0 py-5 pageDesign">
      <h5 className="mt-3 mb-5 text-light questionNo">
        QUESTION {currentQuestion + 1} / {ReactQuestions.length}
      </h5>
      <Container
        className=""
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "7rem 0rem",
        }}
      >
        {showResult ? (
          <Result
            totalScore={ReactQuestions.length}
            userScore={score}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <h4 className="text-light text-center mx-auto fw-bold questionBox">
              {ReactQuestions[currentQuestion].question}
            </h4>
            <Container className="pt-5 d-flex flex-column align-items-center justify-content-start">
              {ReactQuestions[currentQuestion].options.map((opt, i) => {
                return (
                  <button
                    className={`mb-3 border-0 fw-semibold option-btn ${
                      clickedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {opt}
                  </button>
                );
              })}
              <button
                className="mb-3 border-0 fw-semibold option-btn"
                id="next-btn"
                onClick={changeQuestion}
              >
                Next
              </button>
              <button
                className="mt-0 mb-3 border-0 fw-semibold option-btn"
                id="next-btn"
                onClick={handleBack}
              >
                Back
              </button>
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
}
