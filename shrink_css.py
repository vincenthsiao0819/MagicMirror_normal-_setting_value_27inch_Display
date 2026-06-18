import re

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/ready_custom.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Forcibly shrink the zoom down to 1.0 to combat Windows OS scaling
css = re.sub(r'zoom:\s*1\.[56];', 'zoom: 1.0;', css)

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/shrunk_custom.css', 'w', encoding='utf-8') as f:
    f.write(css)
