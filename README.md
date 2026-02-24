# Perl Programming Guides — Complete Visual Reference

A comprehensive visual reference website covering key Perl programming topics, built with React, TypeScript, and Vite.

## About

This project provides five in-depth visual guides for Perl developers:

- **Data Structures** — Arrays, hashes, references, and complex data structures
- **DBI & PostgreSQL** — Database connectivity, queries, and transactions
- **File Handling** — Reading, writing, and manipulating files
- **OOP** — Object-oriented programming in Perl
- **Threading** — Concurrency and multi-threaded Perl programs

## Tech Stack

- [Vite](https://vitejs.dev/) — Fast build tooling
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [shadcn/ui](https://ui.shadcn.com/) — Component library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework

## Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed, then run:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate into the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Deployment

Build the project for production:

```sh
npm run build
```

The output will be in the `dist/` folder, which can be deployed to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Custom Domain

If deploying to a platform that supports it, configure your custom domain through your hosting provider's dashboard.
