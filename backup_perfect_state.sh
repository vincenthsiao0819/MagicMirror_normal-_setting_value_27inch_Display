#!/bin/bash
cd ~/.openclaw/tmp/MagicMirror_Sync
git add ready_config.js ready_custom.css shrunk_more_custom.css
git commit -m "chore(MagicMirror): save PERFECT 27-inch state (zoom: 0.85, width: 460px, marquee: 280px)"
git push origin main
