import { useState } from "react";

/**
 * Custom hook for handling a trivia game.
 * @param {Array} questions - Array of questions for the game.
 * @returns {Object} Object with game state and event handlers.
 */
export default function useTriviaGame(questions) {
  // Set up state variables for the current question index, score, and answered questions.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  /**
   * Handle a user's answer to a trivia question.
   * Updates the score, adds the answered question to the list of answered questions, and moves on to the next question.
   * @param {string} answer - The user's answer to the current question.
   */
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

  /**
   * Handle a request to restart the game.
   * Resets the game state to the beginning.
   */
  const handleRestart = () => {
    setAnsweredQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Determine the current question based on the current index, or set it to an empty array if there are no questions.
  const currentQuestion = questions ? questions[currentQuestionIndex] : [];

  // Return an object containing the state variables and event handlers.
  return {
    handleAnswer,
    handleRestart,
    score,
    currentQuestion,
    currentQuestionIndex,
    answeredQuestions,
  };
}
