<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines

- Ask focused clarification questions before making changes whenever the request, requirements, or intended behavior is ambiguous. Do not guess at important product or design decisions.
- Follow the provided design precisely. Preserve layout, spacing, typography, colors, states, responsive behavior, interaction details, and content hierarchy.
- Build reusable components whenever a UI pattern is repeated or likely to be reused. Keep components focused, composable, and consistent with the existing project structure.
- Build one independently committable component or change at a time. Before starting new work, verify that the previous work is committed so unrelated changes are not mixed together.
- Follow the design system precisely. Reuse existing tokens, components, utilities, and patterns before introducing new ones; keep new primitives consistent with the established system.

## Implementation Expectations

- Inspect nearby code and existing components before adding new patterns.
- Keep changes focused and avoid unrelated refactors.
- Validate the affected behavior with the narrowest relevant lint, typecheck, build, or test command available.
- For Next.js work, read the relevant version-specific guidance in `node_modules/next/dist/docs/` before changing framework APIs or conventions.

## Commit Guidelines

- Use commit messages in the format `<type>(<scope>): <short description>`, where `<type>` is one of `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, or `build`.
- One commit must contain one understandable logical change.
