import re

with open('/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/base_custom.css', 'r', encoding='utf-8', errors='ignore') as f:
    wed_css = f.read()

print("Wed CSS zoom:", re.search(r'zoom:\s*(.*?);', wed_css).group(1))
print("Wed CSS left max-width:", re.search(r'\.region\.left .*?max-width:\s*(.*?);', wed_css, re.DOTALL).group(1))

