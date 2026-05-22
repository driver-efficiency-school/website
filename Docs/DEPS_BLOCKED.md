# Dependency upgrades blocked on upstream

This file tracks major-version dependency bumps that are intentionally
held back because an upstream peer-dependency hasn't published a
compatible release yet. Re-evaluate periodically (e.g. when
`npm-check-updates` reports new versions of the blocking package).

## zod 4

- **Current pinned:** `^3.25.76`
- **Latest available:** `^4.x` (released 2026-Q1)
- **Blocker:** `@vee-validate/zod@4.15.1` (latest at time of writing)
  peer-locks `zod ^3.24.0`. Upgrading zod to 4 produces an `ERESOLVE`
  conflict that resolves only with `--legacy-peer-deps` (unsafe — we
  don't ship validation with a zod version vee-validate doesn't
  understand).
- **History:** Group D of `chore/major-deps-upgrade` attempted the
  bump (commit `cbe0f76`) and was reverted (`57de76a`) the same
  session after the peer conflict surfaced.
- **Action when unblocked:** When `@vee-validate/zod` publishes a
  release with `zod ^4` in peers, redo the bump as a small standalone
  PR: `npm install zod@latest @vee-validate/zod@latest`, audit the
  form schemas in `src/components/` (Newsletter, Contact, etc.) for
  any zod-4 API changes (e.g. error-format renames), run CI + build,
  smoke on dev.

## Tracking

Periodically run:

```sh
npm view @vee-validate/zod peerDependencies
```

When the printed peer for `zod` includes `^4` (or drops zod entirely),
unblock and proceed.
