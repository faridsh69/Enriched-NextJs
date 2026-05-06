## What changed and why
<!-- 2-5 sentences: what this PR does and the business/technical reason. -->
<!-- BAD:  "Updated files" or "Fix bug" -->
<!-- GOOD: "Adds store ownership middleware to prevent vendor A from accessing vendor B's orders. Previously, any authenticated vendor could query any order by ID." -->


## Jira ticket
<!-- Paste the full URL, e.g. https://vinovoss.atlassian.net/browse/MB-1234 -->
<!-- If no ticket exists, explain why (e.g. hotfix, chore, dependency bump). -->


## Type of change
<!-- Check ALL that apply -->
- [ ] New feature
- [ ] Bug fix
- [ ] Security fix
- [ ] Refactor / code cleanup
- [ ] Performance improvement
- [ ] UI/UX change
- [ ] Infrastructure / DevOps
- [ ] Documentation
- [ ] Dependency update

## How to test
<!-- Step-by-step instructions for the reviewer to verify this works. -->
<!-- Be specific — assume they have never seen this code before. -->
<!-- Include URLs (staging, Vercel preview, etc.) if applicable. -->
1.
2.
3.

## What I tested
<!-- Evidence that YOU tested this before requesting review. Check all that apply and add details. -->
- [ ] Unit tests pass (`make test` / `yarn test` / `pytest`)
- [ ] Lint passes (`make lint` / `yarn lint` / `ruff check`)
- [ ] Type check passes (`yarn typecheck` / `pyright` / `mypy`)
- [ ] Manually tested on local/staging (describe what you verified below)
- [ ] Tested edge cases (list them below)
<!-- Paste test output, screenshots, or a brief description of manual testing: -->


## Risk & impact
<!-- What could this break? What other services/repos might be affected? -->
<!-- Consider: CRM ↔ wine-recommender ↔ frontend ↔ es_service interactions -->
- **Risk level:** Low / Medium / High
- **Affected services:** <!-- list any cross-repo dependencies -->
- **Rollback plan:** <!-- how to revert if something goes wrong -->
<!-- If this is a breaking change (env var, API contract, DB migration), say so explicitly. -->


## Checklist
<!-- All boxes must be checked before requesting review -->
- [ ] I have written a meaningful description above (not placeholders)
- [ ] Jira ticket is linked (or exception explained)
- [ ] Lint and type checks pass locally
- [ ] Tests pass locally
- [ ] I have self-reviewed my own diff
- [ ] I have considered security implications (no secrets in code/logs, input validation, auth checks)
- [ ] I have tagged a specific reviewer (not just @team)
- [ ] PR is under 400 lines where possible (if larger, explain why)

## Screenshots / recordings (if UI change)
<!-- Before/after screenshots or a short screen recording. Delete this section if not applicable. -->

## Related PRs
<!-- Link any companion PRs in other repos that should be merged together or reviewed in context. -->
<!-- Example: Backend companion → DrinkBetter-AI/wine-recommender-backend#1461 -->
