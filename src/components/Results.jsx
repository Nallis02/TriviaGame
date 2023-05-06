/**
 * This code exports a React component called Results that receives two props: score and answeredQuestions.

The component renders a section element with a title displaying the user's score and a List component with the user's answered questions. The answered questions are mapped over and displayed as List items with the question text and an icon indicating whether the answer was correct or incorrect.

Finally, a Link component is used to navigate back to the home page, and a Button component is displayed for the user to click and restart the game.
 */
import { Button, List } from "antd";
import { Link } from "react-router-dom";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
export default function Results({ score, answeredQuestions }) {
  return (
    <div className="results-container">
      <h2 className="score-title">Your score {score} / 10</h2>
      <List className="answered-questions-list">
        {answeredQuestions &&
          answeredQuestions.map((q) => (
            <List.Item key={q.question} className="answered-question">
              <span className="question-resListt">
                {q.isAnswerCorrect ? (
                  <PlusOutlined className="anticon-plus" />
                ) : (
                  <MinusOutlined className="anticon-minus" />
                )}
              </span>
              <span className="question-text">{q.question}</span>
            </List.Item>
          ))}
      </List>
      <Link to="/" className="play-again-link">
        <Button type="primary" className="play-again-button">
          PLAY AGAIN
        </Button>
      </Link>
    </div>
  );
}
