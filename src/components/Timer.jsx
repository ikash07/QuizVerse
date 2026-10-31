import { useEffect, useState } from "react";
import "../styles/Timer.css";

export default function Timer({ duration, onTimeUp, resetKey }) {
  const [secondsLeft, setSecondsLeft] = useState(duration);


  useEffect(() => {
    setSecondsLeft(duration);
  }, [resetKey, duration]);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const isDanger = secondsLeft <= 5;

  return (
    <div className={`timer-pill ${isDanger ? "timer-danger" : ""}`}>
      ⏱ <span>{secondsLeft}s</span>
    </div>
  );
}
