// ---------------------------------------------------------------------------
// ProgressBar Component
// ---------------------------------------------------------------------------
// A reusable "dumb" component -- it just receives numbers as props and
// renders a filled bar. It has no state of its own.
// Props:
//   current -> the number of the question currently being shown (1-based)
//   total   -> total number of questions in the quiz
// ---------------------------------------------------------------------------
import "../styles/ProgressBar.css";

export default function ProgressBar({ current, total }) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-label">{percentage}%</span>
    </div>
  );
}
