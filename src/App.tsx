// ---------------------------------------------------------------------------
// App Component (application entry point)
// ---------------------------------------------------------------------------
// Sets up React Router with 3 routes:
//   "/"       -> Start page
//   "/quiz"   -> Quiz page
//   "/result" -> Result page
//
// The QuizProvider wraps everything so quiz progress survives navigation
// between routes (see src/context/QuizContext.jsx for details).
// ---------------------------------------------------------------------------
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            {/* Any unknown route falls back to the Start page */}
            <Route path="*" element={<Start />} />
          </Routes>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}
