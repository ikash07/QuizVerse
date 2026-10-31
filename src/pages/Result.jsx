import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext, PASS_PERCENTAGE } from "../context/QuizContext";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";
import "../styles/Result.css";

export default function Result() {
  const { questions, answers, getResults, resetQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  // Guard: no quiz data means the user came here without finishing a quiz.
  useEffect(() => {
    if (questions.length === 0) {
      navigate("/", { replace: true });
    }
  }, [questions, navigate]);

  if (questions.length === 0) return null;

  const { total, correct, wrong, skipped, score, percentage, passed } = getResults();

  const handleRestart = () => {
    resetQuiz();
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="result-page">
        <section className="result-summary-card">
          <h1 className="result-title">Quiz Completed! 🎉</h1>

          {/* Conditional rendering: different message/style for pass vs fail */}
          <p className={`result-status ${passed ? "status-pass" : "status-fail"}`}>
            {passed ? "🎉 Congratulations, you PASSED!" : "😔 You did not pass. Try again!"}
          </p>

          <div className="score-circle">
            <span className="score-percentage">{percentage}%</span>
            <span className="score-caption">Final Score</span>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-value">{total}</span>
              <span className="stat-label">Total Questions</span>
            </div>
            <div className="stat-box stat-correct">
              <span className="stat-value">{correct}</span>
              <span className="stat-label">Correct</span>
            </div>
            <div className="stat-box stat-wrong">
              <span className="stat-value">{wrong}</span>
              <span className="stat-label">Wrong</span>
            </div>
            <div className="stat-box stat-skipped">
              <span className="stat-value">{skipped}</span>
              <span className="stat-label">Skipped</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{score}/{total}</span>
              <span className="stat-label">Score</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{PASS_PERCENTAGE}%</span>
              <span className="stat-label">Pass Mark</span>
            </div>
          </div>

          <button className="btn btn-primary restart-btn" onClick={handleRestart}>
            🔄 Restart Quiz
          </button>
        </section>

        <section className="review-section">
          <h2 className="review-heading">Review Your Answers</h2>

          {/* map() dynamically renders one review card per question */}
          {questions.map((question, index) => {
            const answer = answers[index];
            return (
              <div className="review-item" key={question.id}>
                <QuestionCard
                  question={question}
                  questionNumber={index + 1}
                  totalQuestions={questions.length}
                  selectedOption={answer?.selected ?? null}
                  locked
                  showResult
                />
                {!answer?.selected && (
                  <p className="review-skipped-note">⏭ You skipped this question.</p>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
