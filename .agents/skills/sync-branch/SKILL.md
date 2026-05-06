---
name: sync-branch
description: Sync protected branches via PR (develop→staging or staging→main): merge source into a branch from the target base with conflicts resolved in favor of the source, then open a PR with gh. Invoke when the user asks to sync develop to staging or staging to main.
disable-model-invocation: true
---

# Sync branches via PR (develop → staging or staging → main)

Sync changes between protected branches by creating a temporary sync branch, merging with conflicts auto-resolved in favor of the **source** branch, and then opening a PR via `gh`.

## When to use

- User invokes `/sync-branch` or asks to sync `develop`→`staging` or `staging`→`main` via a PR.

## Required Information

**IMPORTANT**: The following information is REQUIRED and must be provided:

1. **Source branch** - Either `develop` or `staging`
2. **Target base branch** - Either `staging` or `main`
3. **Direction constraint** - Only these combinations are allowed:
   - `develop` → `staging`
   - `staging` → `main`

## Usage

In Agent chat, invoke this skill from `/` and provide:

- **Source**: `develop` or `staging` - **REQUIRED**
- **Base**: `staging` or `main` - **REQUIRED**
- **Branch**: Optional custom sync branch name (auto-generated if not provided)
- **Title**: Optional PR title (auto-generated if not provided)
- **Body**: Optional PR body (optional, can use `--fill` as default)

## Examples

```
/sync-branch
Source: develop
Base: staging
```

```
/sync-branch
Source: staging
Base: main
Title: chore: sync staging into main
```

## Input Validation

If required information is missing or invalid, prompt:

1. **Missing Source**: "Please provide the source branch (develop or staging)"
2. **Missing Base**: "Please specify the target base branch (staging or main)"
3. **Invalid combination**: "Only develop→staging and staging→main syncs are supported"
4. **Missing gh**: "GitHub CLI (gh) is required for this command. Please install and authenticate with 'gh auth login'"

## Process

For a valid pair (e.g., `develop` → `staging` or `staging` → `main`):

1. **Prepare local branches**
   - `git fetch --all --prune`
   - `git checkout <Base>` (either `staging` or `main`)
   - `git pull origin <Base>`

2. **Create sync branch from the target base**
   - If no custom name is provided, auto-generate:
     - `chore/sync-<Source>-into-<Base>-<yyyyMMdd-HHmm>`
       - e.g., `chore/sync-develop-into-staging-20251210-1430`
   - Run:
     - `git checkout -b <sync-branch>`

3. **Merge source into the sync branch with conflicts resolved in favor of the source**
   - Ensure the source branch is up-to-date:
     - `git fetch origin <Source>:refs/remotes/origin/<Source>`
   - Merge with `-X theirs` (from the **target-derived** sync branch):
     - `git merge origin/<Source> -X theirs`
   - **Explanation**:
     - We are on the sync branch that started from `<Base>`
     - `theirs` refers to `<Source>` (the branch being merged in)
     - This guarantees that, for any conflicts, the **source branch's version wins**

4. **Handle failures**
   - If the merge command returns a non-zero exit code and there are remaining conflicts:
     - Stop and inform the user:
       - "Merge resulted in conflicts that could not be auto-resolved. Please resolve manually on the sync branch."
   - If merge succeeds:
     - `git status` should show no conflicts

5. **Push the sync branch**
   - `git push -u origin <sync-branch>`

6. **Create the PR using GitHub CLI**
   - Detect repo from `git remote get-url origin`
   - Run something like:
     - `gh pr create --base <Base> --head <sync-branch> --title "<auto-or-user-title>" --body "<optional-body-or-use--fill>"`
   - If `Title` not provided, auto-generate:
     - For `develop` → `staging`:
       - `chore: sync develop into staging (YYYY-MM-DD)`
     - For `staging` → `main`:
       - `chore: sync staging into main (YYYY-MM-DD)`
     - Where `YYYY-MM-DD` is the current date in ISO format (e.g., `2026-04-15`)
   - If `Body` not provided:
     - Use a simple default:
       - `Automated sync of <Source> into <Base> with conflicts auto-resolved in favor of <Source>.`
     - Or use `--fill` to let `gh` pre-fill from commits

7. **Output / Share the PR link**
   - Capture the URL from `gh pr create` output
   - Display the PR link as a **clickable link** in the chat response (not plain text)
   - Print a clear summary, for example:
     - `Created PR to merge <Source> into <Base>: <PR-URL>` (where `<PR-URL>` is displayed as a clickable link)

## Notes

- **Protected branches**: This flow never force-pushes to `staging` or `main`; it always works via a separate sync branch + PR, compatible with protected branch rules
- **Conflict strategy**: Using `-X theirs` from the sync branch ensures the resulting code in the sync branch matches the **source branch** in all conflicting regions
- **Consistency**:
  - For `develop → staging`:
    - Resulting sync branch should be functionally identical to `develop` where those files overlap
  - For `staging → main`:
    - Resulting sync branch should be functionally identical to `staging` where those files overlap
- **Prereqs**: Requires `git` and `gh` to be installed and authenticated
