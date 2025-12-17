#!/bin/bash

# Simple script to open your portfolio website

echo "🚀 Opening your portfolio website..."
echo ""

# Start a local server
echo "Starting local server on port 8000..."
python3 -m http.server 8000 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Open in default browser
echo "Opening http://localhost:8000 in your browser..."
open http://localhost:8000

echo ""
echo "✨ Your portfolio is now live!"
echo "Press Ctrl+C to stop the server when you're done."

# Wait for Ctrl+C
trap "kill $SERVER_PID; echo ''; echo '👋 Server stopped. Goodbye!'; exit" INT
wait $SERVER_PID




