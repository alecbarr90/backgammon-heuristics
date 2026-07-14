# Backgammon Heuristics — To Hit or Not to Hit

An independent study aid presenting backgammon heuristics from Dirk Schiemann's book. The guide groups key decision-making principles into expandable sections for quick reference.

## Live site

Visit [backgammon-heuristics.vercel.app](https://backgammon-heuristics.vercel.app).

## Features

- Heuristics organised by game situation
- Responsive layout for desktop and mobile
- Expandable sections for focused study
- Static production output with no accounts or user data

## Local development

Install the pinned dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

Run the same checks used by GitHub Actions:

```bash
npm test
npm run lint
npm run build
npm audit --audit-level=high
```

## Deployment

The production site is deployed on Vercel from the `main` branch. Vercel detects the Next.js project and runs `npm run build`.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vitest

## Attribution and reuse

This repository is an independent reference project and is not affiliated with or endorsed by Dirk Schiemann or the book's publisher. The heuristic wording is book-derived material. No licence to reuse the book-derived content is granted by this repository; confirm the relevant rights before redistributing it.
