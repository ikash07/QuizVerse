import { createContext, useState } from "react";
import { questionsData } from "../data/questions";
import { shuffleArray } from "../utils/shuffle";

export const TIME_PER_QUESTION = 30;
export const PASS_PERCENTAGE = 50;
export const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // One entry per question: { selected: string|null, locked: bool, skipped: bool }
  const [answers, setAnswers] = useState([]);

  // ---------------------------------------------------------------------
  // startQuiz: called from the Start page's "Start Quiz" button.
  // It shuffles the question order AND shuffles the options inside every
  // question, then resets all quiz progress.
  // ---------------------------------------------------------------------
  const startQuiz = () => {
    const shuffledQuestions = shuffleArray(questionsData).map((question) => ({
      ...question,
      options: shuffleArray(question.options),
    }));

    setQuestions(shuffledQuestions);
    setAnswers(
      shuffledQuestions.map(() => ({
        selected: null,
        locked: false,
        skipped: false,
      }))
    );
    setCurrentIndex(0);
  };

  // ---------------------------------------------------------------------
  // selectOption: user clicked an option while the question is still
  // unlocked (i.e. they have not pressed Next/Skip yet for it).
  // ---------------------------------------------------------------------
  const selectOption = (index, optionText) => {
    setAnswers((prev) => {
      if (prev[index]?.locked) return prev; // Already locked -> ignore clicks
      const updated = [...prev];
      updated[index] = { ...updated[index], selected: optionText, skipped: false };
      return updated;
    });
  };

  // Locks the answer for a given question index so it can no longer change.
  const lockQuestion = (index, forceSkipped = false) => {
    setAnswers((prev) => {
      const updated = [...prev];
      const entry = updated[index];
      if (!entry) return prev;
      updated[index] = {
        ...entry,
        locked: true,
        skipped: forceSkipped || entry.selected === null,
      };
      return updated;
    });
  };

  // Move to the next question (locks the current one first).
  const goToNext = () => {
    lockQuestion(currentIndex);
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  };

  // Move back to review a previous question (answer stays locked/read-only).
  const goToPrev = () => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  };

  // Skip the current question on purpose (counts as skipped even if an
  // option had been selected) and move forward.
  const skipCurrent = () => {
    lockQuestion(currentIndex, true);
    setCurrentIndex((i) => Math.min(i + 1, questions.length - 1));
  };

  // Lock the current question WITHOUT changing the index -- used when the
  // user finishes the very last question.
  const finishCurrent = (forceSkipped = false) => {
    lockQuestion(currentIndex, forceSkipped);
  };

  // ---------------------------------------------------------------------
  // getScoreSoFar: used by the Quiz page to show a live score while the
  // user is still taking the quiz.
  // ---------------------------------------------------------------------
  const getScoreSoFar = () => {
    return answers.reduce((score, answer, index) => {
      const question = questions[index];
      if (question && answer.selected && answer.selected === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  // ---------------------------------------------------------------------
  // getResults: used by the Result page to build the final summary.
  // ---------------------------------------------------------------------
  const getResults = () => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    answers.forEach((answer, index) => {
      const question = questions[index];
      if (!answer.selected) {
        skipped += 1;
      } else if (question && answer.selected === question.answer) {
        correct += 1;
      } else {
        wrong += 1;
      }
    });

    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = percentage >= PASS_PERCENTAGE;

    return { total, correct, wrong, skipped, score: correct, percentage, passed };
  };

  // Clears everything so the user can take the quiz again from scratch.
  const resetQuiz = () => {
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
  };

  // Everything below is exposed to any component that calls useContext(QuizContext).
  const value = {
    questions,
    currentIndex,
    answers,
    timePerQuestion: TIME_PER_QUESTION,
    startQuiz,
    selectOption,
    goToNext,
    goToPrev,
    skipCurrent,
    finishCurrent,
    getScoreSoFar,
    getResults,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
