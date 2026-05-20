#!/bin/zsh

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PORT=8123
URL="http://localhost:${PORT}/?preview=$(date +%s)"
SERVER_COMMAND="cd '$PROJECT_DIR'; /usr/bin/python3 scripts/no_cache_server.py --port ${PORT} --directory '$PROJECT_DIR'"

EXISTING_PID="$(lsof -tiTCP:${PORT} -sTCP:LISTEN 2>/dev/null | head -n 1)"
if [ -n "$EXISTING_PID" ]; then
  kill "$EXISTING_PID" >/dev/null 2>&1
  sleep 1
fi

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
