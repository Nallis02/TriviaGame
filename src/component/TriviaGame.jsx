import { useEffect, useState } from "react";
import getTriviaChallenge from "../services/getTriviaChallenge";
import Question from "./Question";
import Results from "./Results";

const TriviaGame = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    getTriviaChallenge()
      .then((data) => setQuestions(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isAnswerCorrect = answer === currentQuestion.correct_answer;

    if (isAnswerCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      { ...currentQuestion, isAnswerCorrect },
    ]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setAnsweredQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {questions.length > 0 && currentQuestion && (
  <Question
    key={currentQuestion.question}
    question={currentQuestion}
    onClick={handleAnswer}
    index={currentQuestionIndex}
    totalQuestionsCount={10} 
  />
)}


      {answeredQuestions.length === questions.length && (
        <Results
          score={score}
          answeredQuestions={answeredQuestions}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default TriviaGame;
