# Accessible artwork viewer

## Objective and rationale
Improve keyboard-accessible artwork browsing and modal interaction without changing
the existing artistic direction or introducing backend work.

## Authorized scope
- Add Radix Dialog to the artwork, inquiry, and workshop modals.
- Add Yet Another React Lightbox with Zoom to inspect artwork in the detail dialog.
- Make gallery artwork activation keyboard accessible with native buttons.
- Preserve existing Tailwind styling, Spanish product copy, forms, and room preview.
- Reconcile dependency lockfile entries with the declared manifest when installing.
- Exclude backend, additional UI kits, toast/form/animation packages, and unrelated fixes.
- Preserve pre-existing untracked `.agents/`, `.atl/`, `.claude/`, and `skills-lock.json`.

## Work unit
- [x] T1: Deliver accessible dialogs and artwork inspection as one coherent frontend unit.
  - Replace modal plumbing with controlled Radix primitives and accessible labels.
  - Preserve focus restoration and the artwork-to-inquiry handoff.
  - Embed the zoom viewer without a competing modal focus scope.
  - Preserve image aspect ratio and the existing room-scale view on mobile and desktop.
  - Verify keyboard activation, focus containment, Escape, close controls, and zoom.
  - Update user-facing documentation with the interaction changes.
  - Commit verified implementation and record its identity and review disposition.

## Routing
T1: delegated direct. Preparation requires focused source reading, and implementation
touches multiple non-trivial component files. One writer owns all implementation edits.

## Checks and test-first policy
- Source: orchestrator default test-first policy; no repository-specific mode found.
- Runner: no configured deterministic test runner or test/lint scripts currently exist.
- Exception: do not claim automated RED/GREEN or add a test framework solely for this unit.
- Writer runs baseline `npm run build`, then post-change `npm run build`,
  `npm ls --depth=0`, and `git diff --check` in the foreground.
- Runtime checks: local browser keyboard interaction, dialog handoff and restoration,
  zoom controls, room preview, and responsive overflow; record actual observations.
- Parent spot check: rerun `npm run build` after implementation.
- Normalize source before native review; check-only commands thereafter.

## Delivery and review
- Branch: `feat/accessible-artwork-viewer`.
- Branch point / initial review boundary: `855f79452989938c4a955a10045dcc896f9c13ba`.
- Strategy: `ask-on-risk`; forecast approximately 350 authored changed lines,
  excluding generated lockfile changes. Confirm actual count before the commit.
- Review mode observed: on, decided by global preference.
- Native risk and candidate consent remain provider-owned; no review approval inferred.
- Implementation diff: 252 authored changed lines, plus this tracking document;
  generated `package-lock.json` excluded from that count. No delivery split needed.
- Work-unit commit: `784e8c39e25387a4187a820301e15219e50827a1`.
- Running authored count: 356 including this tracking checkpoint; generated
  lockfile excluded. Source work-unit commit accounts for 332 authored changes.
- Slice: one source work-unit commit plus a passive tracking-only checkpoint.
- Native disposition: unavailable, not approved. Committed assessment returned
  high/unassessable (`review_due=true`); exact preflight STATUS stopped with
  `immutable_review_transport_unsupported`, `mutation_outcome=not_started`.
- No START binding, consent, receipt, or acknowledgement was created; review mode
  remains on. No retries, mode changes, alternate lineage, or substitute review.
- High/unassessable fallback proof: writer checks, parent build spot check, and
  independent functional verification recorded below. Delivery remains unmanaged.
- The reviewed boundary has not advanced; this source commit has no native receipt.
- Push, PR creation, and merge are not authorized.

## Progress and evidence
- Exploration complete: app owns dialog state; custom conditional dialogs require
  explicit focus restoration, including artwork-to-inquiry transitions.
- Lockfile drift found between declared Vite/plugin majors and locked resolutions;
  installation should honor the manifest, not silently upgrade its major versions.
- Implementation complete in the eight allowed files; inline lightbox avoids a
  competing focus scope, and dialog mounting survives close autofocus restoration.
- Writer observed baseline `npm run build`: pass (Vite 8.3.6); post-change build:
  pass (Vite 6.4.5), `npm ls --depth=0`: pass, `git diff --check`: pass.
- Parent reran `npm run build`: pass (2146 modules); `git diff --check`: pass.
- Install reconciled Vite/plugin lock drift to existing declared major ranges;
  Radix Dialog 1.3.1 and Yet Another React Lightbox 3.33.0 installed.
- Independent browser checks at 1280x800 and 390x844 passed keyboard activation,
  focus containment/restoration, repeated close/reopen, Escape, artwork-to-inquiry
  handoff, zoom, room preview, workshop/inquiry native required validation, and
  dialog viewport fit. No console errors or synthetic form records were observed.
- Known out-of-scope finding: mobile document width 438px at a 390px viewport,
  with overflow in hero text/glow. Baseline causality was not established; no
  unrelated layout fix is included. Runtime verification therefore reports partial.
- No automated suite exists; no RED/GREEN, screen-reader or WCAG-conformance claim.
- Initial current-worktree assessment was high/unassessable due unrelated untracked
  files. Committed assessment and one preflight confirmed unavailable immutable
  transport; no authority or repository mutation was started by review.
- Browser tooling created untracked `.playwright-mcp/`; it is excluded from commits.
- Engram mirror: `odd/accessible-artwork-viewer/tasks` (synchronized at this checkpoint).

## Rollback boundary and next step
The work unit can be reverted independently: dependency additions, the five affected
frontend files, and accompanying documentation. T1 implementation and its proportional
checks are complete with the explicit runtime/native limitations above. Next: user
visual acceptance; any page-wide overflow repair needs separate scope authorization.
