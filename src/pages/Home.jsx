import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <Link to="/game">
        <button>BEGIN</button>
      </Link>
    </div>
  );
}

