import { Button } from "antd";

// Reusable component for answer buttons
function AnswerButton({ value, onClick }) {
  return (
    <Button value={value} onClick={onClick} type="primary">
      {value}
    </Button>
  );
}

// Component for displaying a question and its possible answers
export default function Question({ question, index, onClick, totalQuestions }) {
  return (
    <section className="game-container" key={question.question}>
      <h2>{question.category}</h2>
      <p className="center">{question.question}</p>
      <div className="button-boolean">
        <AnswerButton value="True" onClick={() => onClick("True")} />
        <AnswerButton value="False" onClick={() => onClick("False")} />
      </div>
      <span>
        {index + 1} of {isNaN(totalQuestions) ? "10" : totalQuestions}
      </span>
    </section>
  );
}
