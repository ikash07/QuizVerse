import Option from "./Option";
import "../styles/QuestionCard.css";

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOption,
  locked,
  onSelect,
  showResult = false,
}) {
  return (
    <div className="question-card">
      <p className="question-meta">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="question-text">{question.question}</h2>

      <div className="options-grid">
        {/* map() turns each option string into a clickable Option component */}
        {question.options.map((optionText) => (
          <Option
            key={optionText}
            label={optionText}
            isSelected={selectedOption === optionText}
            isCorrect={optionText === question.answer}
            showResult={showResult}
            disabled={showResult ? true : locked}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
