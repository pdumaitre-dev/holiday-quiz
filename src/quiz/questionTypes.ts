/**
 * Shared contract for question providers. Stub lives in `../stub/getNextQuestion`;
 * a future local LLM adapter can implement the same surface without UI changes.
 */
export type AnswerIndex = 0 | 1 | 2 | 3;

export type QuizQuestion = {
  id: string;
  prompt: string;
  /** Exactly four choices; index matches `correctIndex`. */
  choices: readonly [string, string, string, string];
  correctIndex: AnswerIndex;
};
