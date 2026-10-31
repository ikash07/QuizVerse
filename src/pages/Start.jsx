// ---------------------------------------------------------------------------
// Start Page ( / )
// ---------------------------------------------------------------------------
// Shows the app title, a short description and a "Start Quiz" button.
// React concepts: functional component, useContext, event handling,
// useNavigate (React Router) for programmatic navigation.
// ---------------------------------------------------------------------------
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext, TIME_PER_QUESTION } from "../context/QuizContext";
import { questionsData } from "../data/questions";
import "../styles/Start.css";

export default function Start() {
  const { startQuiz } = useContext(QuizContext);
  const navigate = useNavigate();

  // Event handler: prepares a fresh quiz then navigates to the Quiz page.
  const handleStart = () => {
    startQuiz();
    navigate("/quiz");
  };

  return (
    <main className="start-page">
      <div className="start-card">
        <div className="start-icon">🏆</div>
        <h1 className="start-title">Online Quiz Challenge</h1>
        <p className="start-description">
          Test your knowledge of web development and general trivia! Answer{" "}
          <strong>{questionsData.length} questions</strong>, one at a time.
          You'll have <strong>{TIME_PER_QUESTION} seconds</strong> per question,
          so think fast. Good luck!
        </p>

        <ul className="start-features">
          <li>✅ {questionsData.length} shuffled questions &amp; options</li>
          <li>⏱ {TIME_PER_QUESTION}s countdown timer per question</li>
          <li>📊 Live score &amp; progress tracking</li>
          <li>📝 Full answer review at the end</li>
        </ul>

        <button className="btn btn-primary start-btn" onClick={handleStart}>
          Start Quiz 🚀
        </button>
      </div>
    </main>
  );
}
