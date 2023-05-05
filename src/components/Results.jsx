import { Link } from 'react-router-dom';

export default function Results({ score, answeredQuestions }) {
  return (
    <div>
      <h2>Your score {score} / 10</h2>
      <ul>
        {answeredQuestions &&
          answeredQuestions.map((q) => (
            <li key={q.question}>
              <p>{q.question}</p>
              <p>{q.isAnswerCorrect ? 'Correct' : 'Incorrect'}</p>
            </li>
          ))}
      </ul>
      <Link to="/">
        <button>PLAY AGAIN</button>
      </Link>
    </div>
  );
}

