export default function Option({
  label,
  isSelected,
  isCorrect,
  showResult,
  disabled,
  onClick,
}) {
  // Build the CSS class list conditionally depending on the option's state.
  let className = "option-btn";

  if (isSelected) className += " option-selected";

  if (showResult) {
    if (isCorrect) className += " option-correct";
    else if (isSelected && !isCorrect) className += " option-wrong";
  }

  if (disabled) className += " option-disabled";

  return (
    <button
      type="button"
      className={className}
      onClick={() => !disabled && onClick && onClick(label)}
      disabled={disabled}
    >
      <span className="option-text">{label}</span>
      {showResult && isCorrect && <span className="option-icon">✔</span>}
      {showResult && isSelected && !isCorrect && <span className="option-icon">✘</span>}
    </button>
  );
}
