#!/usr/bin/env bash
set -euo pipefail

# Debounce seconds to avoid flooding commits/builds
DEBOUNCE_SECONDS=10

# Exclude noisy paths
EXCLUDES='(^|/)(\.git|node_modules|dist|build|.DS_Store|\.vscode)(/|$)'

echo "Watching for changes. Excluding .git, node_modules, dist, build, .vscode, .DS_Store"
echo "Debounce: ${DEBOUNCE_SECONDS}s. Will auto-commit and push to current branch."

last_run=0
fswatch -or --exclude="$EXCLUDES" . | while read _; do
  now=$(date +%s)
  if (( now - last_run < DEBOUNCE_SECONDS )); then
    continue
  fi
  last_run=$now

  # Skip if nothing changed
  if git diff --quiet && git diff --cached --quiet; then
    continue
  fi

  ts=$(date +"%F %T")
  git add -A
  git commit -m "chore: auto-commit ${ts}"
  git push

done
