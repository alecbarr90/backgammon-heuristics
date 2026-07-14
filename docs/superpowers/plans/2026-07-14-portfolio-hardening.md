# Backgammon Heuristics Portfolio Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the public Backgammon Heuristics site reproducible, security-current, automatically verified, and accurately documented without changing its content or visual design.

**Architecture:** Keep the existing static Next.js application. Add a server-rendered UI smoke test around the real page component, update within Next.js 15 to avoid a migration, add repository automation, and configure conservative response headers at the Next.js layer.

**Tech Stack:** Next.js 15, React 19, TypeScript, Vitest, GitHub Actions, Dependabot.

## Global Constraints

- Preserve the current public UI and heuristic wording.
- Do not grant an open-source or content-reuse licence without the owner's explicit choice.
- Use Node.js 20 in CI and deterministic `npm ci` installs.
- Run test, lint, build, and dependency audit before publishing.

---

### Task 1: Add a real rendering smoke test

**Files:**
- Modify: `package.json`
- Create: `src/app/page.test.tsx`

**Interfaces:**
- Consumes: the default `Home(): JSX.Element` page component.
- Produces: `npm test`, which renders the real page and verifies its public title, author, category headings, and all nine expandable sections.

- [ ] **Step 1: Write the failing test**

```tsx
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Backgammon heuristics page", () => {
  it("renders the complete study-guide structure", () => {
    const html = renderToStaticMarkup(<Home />);
    expect(html).toContain("To Hit or Not to Hit");
    expect(html).toContain("by Dirk Schiemann");
    expect(html).toContain("Basic Concepts");
    expect(html).toContain("Hitting in the Inner Board");
    expect(html).toContain("Hitting in the Outer Board");
    expect((html.match(/<details/g) ?? [])).toHaveLength(9);
  });
});
```

- [ ] **Step 2: Run the test command and verify RED**

Run: `npm test`

Expected: FAIL because no `test` script or Vitest dependency exists.

- [ ] **Step 3: Add the test runner**

Add `"test": "vitest run"` to `scripts`, add `vitest` to `devDependencies`, and regenerate `package-lock.json` with npm.

- [ ] **Step 4: Run the test and verify GREEN**

Run: `npm test`

Expected: one test passes.

### Task 2: Update vulnerable dependencies and response headers

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `next.config.js`

**Interfaces:**
- Consumes: Next.js route configuration.
- Produces: Next.js 15.5.20 and response headers for framing, MIME sniffing, referrer leakage, and unnecessary browser capabilities.

- [ ] **Step 1: Update within the current major version**

Run: `npm install next@15.5.20 eslint-config-next@15.5.20 postcss@latest eslint@latest`

- [ ] **Step 2: Add response headers for every route**

Configure `headers()` to return:

```js
[
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]
```

- [ ] **Step 3: Verify**

Run: `npm audit --audit-level=high && npm test && npm run lint && npm run build`

Expected: no high/critical audit findings; test, lint, and build exit successfully.

### Task 3: Add GitHub quality automation and accurate documentation

**Files:**
- Create: `.github/workflows/ci.yml`
- Create: `.github/dependabot.yml`
- Modify: `README.md`

**Interfaces:**
- Produces: checks named `test`, `lint`, and `build` on pushes and pull requests; monthly npm update proposals.

- [ ] **Step 1: Add CI**

Use `actions/checkout@v4`, `actions/setup-node@v4` with Node 20 and npm caching, then run `npm ci`, `npm test`, `npm run lint`, and `npm run build` as separate jobs or named steps.

- [ ] **Step 2: Add monthly Dependabot updates**

Configure npm updates from `/`, interval `monthly`, with a limit of five open pull requests.

- [ ] **Step 3: Correct README ownership and deployment information**

Replace the placeholder URL with `https://backgammon-heuristics.vercel.app`, document the test/lint/build commands, identify the project as an independent study aid, and state that no reuse licence is granted for the book-derived material.

- [ ] **Step 4: Verify repository state**

Run: `git diff --check && npm test && npm run lint && npm run build && npm audit --audit-level=high`

Expected: all commands exit successfully.

### Task 4: Publish and harden repository settings

**Files:**
- No source files.

**Interfaces:**
- Produces: a reviewed GitHub pull request, protected `main`, automatic branch deletion, accurate repository metadata, and no superseded security PR.

- [ ] **Step 1: Commit and push the focused branch**

Review `git status -sb` and `git diff`, commit only the files above, and push `agent/portfolio-hardening`.

- [ ] **Step 2: Open and merge a pull request after checks pass**

Create a PR describing the dependency, CI, header, test, and documentation changes. Merge only after required checks succeed.

- [ ] **Step 3: Apply repository hygiene**

Set the description and homepage, enable automatic deletion of merged branches, protect `main` with pull-request and status-check requirements, and close superseded PR #1.

- [ ] **Step 4: Verify remotely**

Confirm `main` contains the merge, the PR is merged, branch protection is active, and the latest workflow run succeeds.
