# Holiday Quiz

Lightweight web quiz to revisit memories from past holidays — one multiple-choice question at a time, with instant feedback.

## Status

MVP scaffold in place (Vite + React + TypeScript) per the [PRD](https://www.notion.so/35dda74ef0458176a935ee7c25a0ad19) (Notion): stubbed questions, single quiz view, no runtime network calls.

## Principles

- **Public** — open source, no secrets in git.
- **No external APIs** in the app runtime (stubbed questions until a local LLM is wired in).
- **Design** — warm Spain / Andalusia–inspired palette; professional but fun.

## Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

`npm run build` produces static assets only (no external API calls for the quiz).

## License

MIT — see [LICENSE](LICENSE).
