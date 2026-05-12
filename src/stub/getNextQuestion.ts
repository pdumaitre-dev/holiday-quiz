import type { QuizQuestion } from "@/quiz/questionTypes";

const STUB_BANK: QuizQuestion[] = [
  {
    id: "stub-granada-1",
    prompt: "In Granada, which monument did we visit first on the Alhambra ticket day?",
    choices: [
      "Generalife gardens",
      "Nasrid Palaces",
      "Alcazaba fortress",
      "Cathedral of Granada",
    ],
    correctIndex: 1,
  },
  {
    id: "stub-seville-1",
    prompt: "In Seville, what did we climb for the sunset view over the old town?",
    choices: [
      "Torre del Oro",
      "Giralda bell tower",
      "Metropol Parasol",
      "Triana bridge",
    ],
    correctIndex: 1,
  },
  {
    id: "stub-cadiz-1",
    prompt: "Near Cádiz, which beach town did we pick for tapas after the walk?",
    choices: ["Tarifa", "El Puerto de Santa María", "Conil de la Frontera", "Zahara de los Atunes"],
    correctIndex: 2,
  },
];

/**
 * Stubbed question source (no network). Pure function of `step` so React Strict Mode is safe.
 * Swap this module for a local generator later; keep the signature stable for the UI.
 */
export function getNextQuestion(step: number): QuizQuestion {
  return STUB_BANK[step % STUB_BANK.length]!;
}

export function stubQuestionCount(): number {
  return STUB_BANK.length;
}
