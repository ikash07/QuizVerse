import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/Timer";
import QuestionCard from "../components/QuestionCard";
import "../styles/Quiz.css";

export default function Quiz() {
  const {
    questions,
    currentIndex,
    answers,
    timePerQuestion,
    selectOption,
    goToNext,
    goToPrev,
    skipCurrent,
    finishCurrent,
    getScoreSoFar,
  } = useContext(QuizContext);

  const navigate = useNavigate();

  // Guard: if someone lands on /quiz directly (e.g. refresh) without
  // starting a quiz first, send them back to the Start page.
  useEffect(() => {
    if (questions.length === 0) {
      navigate("/", { replace: true });
    }
  }, [questions, navigate]);

  // While the redirect above kicks in, render nothing to avoid errors.
  if (questions.length === 0) return null;

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentIndex] || { selected: null, locked: false };
  const isLastQuestion = currentIndex === questions.length - 1;
  const isFirstQuestion = currentIndex === 0;

  // The Next button is disabled until the user picks an option OR the
  // question was already answered/skipped before (e.g. after going back).
  const nextDisabled = currentAnswer.selected === null && !currentAnswer.locked;

  // --- Event handlers -----------------------------------------------------
  const handleSelect = (optionText) => {
    if (!currentAnswer.locked) {
      selectOption(currentIndex, optionText);
    }
  };

  const goToResult = () => navigate("/result");

  const handleNext = () => {
    if (isLastQuestion) {
      finishCurrent();
      goToResult();
    } else {
      goToNext();
    }
  };

  const handleSkip = () => {
    if (isLastQuestion) {
      finishCurrent(true);
      goToResult();
    } else {
      skipCurrent();
    }
  };

  const handlePrev = () => {
    if (!isFirstQuestion) goToPrev();
  };

  // Called automatically by the Timer when it hits 0 seconds.
  const handleTimeUp = () => {
    handleNext();
  };

  return (
    <>
      <Navbar
        rightSlot={
          <span className="score-badge">
            Score: {getScoreSoFar()} / {questions.length}
          </span>
        }
      />

      <main className="quiz-page">
        <div className="quiz-top-row">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
          <Timer
            duration={timePerQuestion}
            resetKey={currentQuestion.id}
            onTimeUp={handleTimeUp}
          />
        </div>

        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedOption={currentAnswer.selected}
          locked={currentAnswer.locked}
          onSelect={handleSelect}
        />

        <div className="quiz-actions">
          <button
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={isFirstQuestion}
          >
            ⬅ Previous
          </button>

          <button className="btn btn-ghost" onClick={handleSkip}>
            Skip ⏭
          </button>

          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={nextDisabled}
          >
            {isLastQuestion ? "Finish ✅" : "Next ➡"}
          </button>
        </div>
      </main>
    </>
  );
}
