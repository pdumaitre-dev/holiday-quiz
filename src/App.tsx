import { QuizScreen } from "./components/QuizScreen";

export function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Holiday Quiz</h1>
        <p className="app-subtitle">Quick recall from past trips</p>
      </header>
      <main>
        <QuizScreen />
      </main>
    </div>
  );
}
