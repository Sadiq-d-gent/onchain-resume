# Sadiq Ahmad — Personal website

A personal website for Sadiq Ahmad (Gigabyte), introducing his work as a software developer and forex trader, Ziep, and the Mariana ventures being established.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Built with React, TypeScript, Vite, and Tailwind. The personal homepage lives in `src/pages/Index.tsx`, with scoped styles in `src/pages/personal.css`. The original Web3 components remain in the repository for reference but are not rendered or imported by the homepage. Wallet providers are no longer mounted.

## Content

- Public contact: sadiqahmadelif01@gmail.com
- Ziep: in development; brand artwork is explicitly a concept, not a product screenshot.
- Mariana Tech: phones and accessories venture in preparation.
- Mariana Technology: umbrella brand being established.
- No trading returns, fabricated metrics, verification claims, or placeholder project links.
- Portrait supplied by Sadiq; framing uses CSS, without retouching the source image.

Update project statuses when they change. No contact form, analytics, wallet connection, or backend is required for this website. Email links open the visitor's email app.

## Validation

```sh
npx tsc --noEmit -p tsconfig.app.json
npx eslint src/pages/Index.tsx src/App.tsx
npm run lint
```

The existing repository-wide lint check has pre-existing errors in `src/components/ui/command.tsx`, `src/components/ui/textarea.tsx`, and `tailwind.config.ts`. Homepage motion respects reduced-motion preferences. Mobile navigation and the Ziep project disclosure use native buttons and accessible state attributes.
