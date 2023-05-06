import { useEffect } from "react";
import Question from "./Question";
import Results from "./Results";
import { InfoContext } from "../contexts/InfoContexs";
import useTriviaGame from "../hooks/useTriviaGame";

const TriviaGame = () => {
  // Get questions and navigate function from the InfoContext
  const { questions, navigate } = InfoContext();

  // If there are no questions, redirect to the home page
  useEffect(() => {
    !questions && navigate("/");
  }, [questions, navigate]);

  // Call the useTriviaGame hook to manage game state
  const {
    handleAnswer,
    handleRestart,
    score,
    currentQuestion,
    currentQuestionIndex,
    answeredQuestions,
  } = useTriviaGame(questions);

  // Render the game container, question component and results component
  return (
    <section className="game-container">
      {questions?.length > 0 && currentQuestion && (
        <Question
          key={currentQuestion.question}
          question={currentQuestion}
          onClick={handleAnswer}
          index={currentQuestionIndex}
          totalQuestionsCount={10}
        />
      )}
      {questions?.length > 0 &&
        answeredQuestions.length === questions.length && (
          <Results
            score={score}
            answeredQuestions={answeredQuestions}
            onRestart={handleRestart}
          />
        )}
    </section>
  );
};

export default TriviaGame;
