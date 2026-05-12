import { useCallback, useMemo, useState } from "react";
import type { AnswerIndex } from "@/quiz/questionTypes";
import { getNextQuestion } from "@/stub/getNextQuestion";

type Phase = "showing" | "answered";

export function QuizScreen() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("showing");
  const question = useMemo(() => getNextQuestion(step), [step]);
  const [picked, setPicked] = useState<AnswerIndex | null>(null);

  const locked = phase === "answered";

  const isCorrect = useMemo(() => {
    if (picked === null) return null;
    return picked === question.correctIndex;
  }, [picked, question.correctIndex]);

  const handlePick = useCallback(
    (index: AnswerIndex) => {
      if (locked) return;
      setPicked(index);
      setPhase("answered");
    },
    [locked],
  );

  const handleNext = useCallback(() => {
    setStep((s) => s + 1);
    setPicked(null);
    setPhase("showing");
  }, []);

  return (
    <section className="quiz-card" aria-live="polite">
      <p className="quiz-prompt">{question.prompt}</p>
      <ul className="quiz-options">
        {question.choices.map((label, i) => {
          const idx = i as AnswerIndex;
          const selected = picked === idx;
          const isRightChoice = idx === question.correctIndex;
          let optionClass = "quiz-option";
          if (locked) {
            if (isRightChoice) optionClass += " quiz-option--correct";
            else if (selected) optionClass += " quiz-option--wrong";
          } else if (selected) {
            optionClass += " quiz-option--active";
          }
          return (
            <li key={`${question.id}-${idx}`}>
              <button
                type="button"
                className={optionClass}
                onClick={() => handlePick(idx)}
                disabled={locked}
                aria-pressed={selected}
              >
                <span className="quiz-option-label">{String.fromCharCode(65 + idx)}.</span>
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {locked && picked !== null && (
        <div className="quiz-feedback" role="status">
          <p className={isCorrect ? "feedback-line feedback-line--ok" : "feedback-line feedback-line--bad"}>
            {isCorrect ? "Correct — nice recall." : "Not quite — review the highlight below."}
          </p>
          <p className="feedback-answer">
            Correct answer: <strong>{question.choices[question.correctIndex]}</strong>
          </p>
          <button type="button" className="quiz-next" onClick={handleNext}>
            Next question
          </button>
        </div>
      )}
    </section>
  );
}
