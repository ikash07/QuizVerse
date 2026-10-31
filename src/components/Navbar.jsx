import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ rightSlot }) {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo">🧠</span>
        <span>QuizVerse</span>
      </Link>

      {/* rightSlot is an optional prop -- pages can inject extra content
          (like a live score badge) into the navbar without changing this
          component's code. This shows component reusability + props. */}
      {rightSlot && <div className="navbar-right">{rightSlot}</div>}
    </header>
  );
}
