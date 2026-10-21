# glint-fe

Frontend of **Glint**, a search engine and AI agent over ~126k Steam games. It is the UI for the API in [`glint-be`](../glint-be).

## Goal

A fast, simple interface that makes the search engine's behaviour visible: results, ranking mode and the steps the agent takes to answer.

## Planned capabilities

- Search page with results for the `/search` API
- Mode switcher: full-text (BM25), vector, hybrid
- Filters by price, tags and platform
- Agent chat with the answer and its tool calls streamed live over SSE

## Stack

Node 24, Next.js 16 (App Router), React 19, TypeScript 6, Vitest + Testing Library (happy-dom), ESLint + Prettier, Husky + lint-staged, Docker (standalone build), GitHub Actions.

## Repository notes

- Builds with `output: 'standalone'` for a small production image.
- Pre-commit runs ESLint and Prettier on staged files. CI runs lint, format check, tests and build on PRs and on pushes to `main`.

## Getting started

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

Scripts: `dev`, `build`, `start`, `test`, `lint`, `format:check`.
