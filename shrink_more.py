import re

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/shrunk_custom.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change zoom to 0.85 to give much more breathing room
css = re.sub(r'zoom:\s*1\.0;', 'zoom: 0.85;', css)

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/shrunk_more_custom.css', 'w', encoding='utf-8') as f:
    f.write(css)
