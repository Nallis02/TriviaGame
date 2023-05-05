function AnswerButton({ value, onClick }) {
  return (
    <button value={value} onClick={onClick}>
      {value}
    </button>
  );
}

export default function Question({ question, index, onClick, totalQuestions }) {
  return (
    <div key={question.question}>
      <h2>{question.category}</h2>
      <p>{question.question}</p>
      <AnswerButton value="True" onClick={() => onClick("True")} />
      <AnswerButton value="False" onClick={() => onClick("False")} />
      <p>
        {index + 1} of {isNaN(totalQuestions) ? "10" : totalQuestions}
      </p>
    </div>
  );
}
