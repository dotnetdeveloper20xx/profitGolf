# Profit Golf

Profit Golf is an Angular 20 and Tailwind CSS initial-product prototype for a golf-tipping, free-to-play competition, rewards and membership platform. It combines Andrew's approved concept content with realistic public, member and administrative journeys.

The current release is designed for stakeholder demonstrations and discovery. User actions, payment approvals, competition entries and administrative operations are simulated in the browser; no live payment, email, identity or database service is connected yet.

## Product capabilities

### Public website

- Responsive homepage with source-approved positioning, statistics and featured content
- Public tips with tipster, event, odds, confidence, analysis and profit information
- Competition catalogue with prizes, capacity, deadlines and statuses
- Rewards programme, earning rules, tiers, prize shop and leaderboard
- Membership comparison, news, tour schedule and course guides
- About, performance, team profiles, expandable FAQs, contact and draft legal content

### Registration and member experience

- Registration, email verification, login and forgotten-password journeys
- Member dashboard with current tips, entries, points and quick actions
- Detailed tip analysis and staking guidance
- Competition selection and submission form
- User profile, editable personal details and membership summary
- Notification preferences, referrals and referral history
- Reward balance, tier progress and redemptions
- Password and two-step-verification entry points

### Payments and billing

- Annual package checkout
- Card-payment form using safe test data
- PayPal and Apple Pay mock journeys
- Saved payment methods, billing history and receipts

No real funds are collected by this version.

### Administration

- Operations dashboard and headline metrics
- Tip creation, access assignment, scheduling, draft and publishing workflow
- User management with verification and account states
- Competition management and entry totals
- Reward-redemption fulfilment queue
- Membership, competition, tips, rewards, payment and audit reports
- CSV-export simulations
- Platform configuration and mock integration statuses

## Technology

- Angular 20 standalone components
- TypeScript 5.8
- Tailwind CSS 4 through PostCSS
- RxJS 7
- Angular CLI
- Jasmine and Karma test tooling

## Repository structure

```text
.
├── public/                    Static public assets
├── src/
│   ├── app/
│   │   ├── app.ts            Application state, content and interactions
│   │   ├── app.html          Public, member and admin views
│   │   ├── app.css           Component styles
│   │   ├── app.config.ts     Angular application configuration
│   │   └── app.routes.ts     Angular routing configuration
│   ├── index.html            Browser document
│   ├── main.ts               Angular bootstrap entry point
│   └── styles.css            Global styles and Tailwind imports
├── angular.json              Workspace and production-build settings
├── package.json              Scripts and dependencies
├── package-lock.json         Reproducible npm dependency lock
├── tsconfig*.json            TypeScript configurations
└── .postcssrc.json           Tailwind/PostCSS configuration
```

Generated folders such as `node_modules`, `dist`, Angular cache, coverage reports and local logs are excluded from Git. They can be recreated from the committed package and configuration files.

## Prerequisites

- Node.js 20 LTS or newer
- npm 10 or newer

```bash
node --version
npm --version
```

## Installation

```bash
git clone https://github.com/dotnetdeveloper20xx/profitGolf.git
cd profitGolf
npm ci
```

Use `npm install` instead of `npm ci` only when intentionally updating dependencies.

## Run locally

```bash
npm start
```

Open `http://localhost:4200/`. The development server reloads when source files change.

The visible **Product Demo** navigation strip links directly to the member dashboard, user profile, payments, notifications, referrals, admin dashboard, user management, competition management, rewards fulfilment, reports and platform settings.

## Production build

```bash
npm run build
```

Compiled files are generated in:

```text
dist/profit-golf-prototype/browser/
```

The production build currently uses `/profit-golf/` as its base path. This is configured in `angular.json` for deployment beneath an existing website. Change `baseHref` to `/` if deploying at the root of a dedicated domain.

## Tests

```bash
npm test
```

The prototype is currently focused on stakeholder validation. Automated coverage should grow as the application is split into feature components and connected to real services.

## Current implementation model

The app uses in-memory view state in the root Angular component. This makes the demonstration portable and allows it to be hosted as static files without a backend.

The following behaviour is intentionally mocked:

- Authentication, authorisation, email verification and password recovery
- Card, PayPal and wallet payments
- User, tip, competition and reward persistence
- Email and AWeber integration
- Prize fulfilment and reporting exports
- Monitoring and administrative audit storage

Mock actions return realistic confirmations but do not write to a server or contact third parties.

## Production roadmap

A production implementation should introduce:

1. Angular Router feature routes, route guards and lazy-loaded areas.
2. ASP.NET Core APIs and a persistent relational database.
3. ASP.NET Core Identity or an approved managed identity provider.
4. Server-side roles and permissions for members, editors and administrators.
5. Live payment integration using hosted/tokenised fields and webhooks.
6. Transactional email and the agreed AWeber marketing integration.
7. Competition validation, immutable entries, settlement and prize approval.
8. Auditing, structured logs, monitoring, backups and recovery procedures.
9. Unit, integration, accessibility, security and end-to-end tests.
10. Reviewed privacy, cookie, competition, rewards and responsible-gambling policies.

## Security notes

- Never commit API keys, passwords, connection strings or production tokens.
- Store local secrets in ignored `.env` files or an approved secrets manager.
- Treat all client-side values and permissions as untrusted in production.
- Handle payment information through compliant hosted/tokenised provider controls.
- Validate and authorise administrative operations on the server.
- Names, transactions, prizes and figures in this prototype are demonstration data.

## Content ownership and review

Andrew's shared concept is treated as the source of truth for Home, Tips, Competitions, Rewards and About. Additional copy completes realistic journeys and should be reviewed during discovery.

Before public launch, stakeholders must confirm:

- Whether the platform is free or includes paid memberships
- Package names, prices, renewals, cancellations and refunds
- Competition eligibility, scoring, prize funding and fulfilment
- Profit Point expiry, tiers and redemption rules
- Tipster identities, records and performance claims
- Legal entity, contact details, policies and compliance wording
- Payment, email, hosting and analytics providers

## Deployment

The compiled `browser` directory can be uploaded to static hosting matching the configured base path. For the existing website integration, deploy its contents beneath `/profit-golf/` and configure the server to return `index.html` for client-side navigation when required.

A likely Azure production architecture is:

- Angular frontend on Azure Static Web Apps or Azure App Service
- ASP.NET Core API on Azure App Service
- Azure SQL Database
- Azure Key Vault
- Application Insights
- Azure Storage for eligible files and media

The final architecture should be agreed after discovery and operational requirements are confirmed.

## Project status

This repository contains the complete editable Angular initial-product prototype. It is suitable for demonstrations, content review and requirements discovery. It is not yet a live transactional betting, payment or membership system.

## Licence

This is a private commercial project. No open-source licence is granted unless the project owner adds one explicitly.
