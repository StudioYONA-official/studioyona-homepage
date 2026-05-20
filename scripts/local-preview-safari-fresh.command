#!/bin/zsh

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
for candidate in 8421 8422 8423 8424 8425 8426 8427 8428 8429; do
  if ! lsof -tiTCP:${candidate} -sTCP:LISTEN >/dev/null 2>&1; then
    PORT="${candidate}"
    break
  fi
done
if [ -z "$PORT" ]; then
  PORT=8499
fi

URL="http://localhost:${PORT}/?preview=$(date +%s)"
SERVER_COMMAND="cd '$PROJECT_DIR'; /usr/bin/python3 scripts/no_cache_server.py --port ${PORT} --directory '$PROJECT_DIR'"

osascript <<OSA
tell application "Terminal"
  activate
  do script "$SERVER_COMMAND"
end tell
OSA
sleep 2

osascript <<OSA
tell application "Safari"
  activate
  set newDoc to make new document
  set URL of newDoc to "$URL"
end tell
OSA
