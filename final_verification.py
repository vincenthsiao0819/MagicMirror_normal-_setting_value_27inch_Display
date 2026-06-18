import re

def verify_file(filepath, expected_strings, unexpected_strings):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    missing = [s for s in expected_strings if s not in content]
    present = [s for s in unexpected_strings if s in content]
    
    if missing or present:
        print(f"Error in {filepath}:")
        if missing:
            print(f"  Missing: {missing}")
        if present:
            print(f"  Should not be present: {present}")
        return False
    return True

css_ok = verify_file(
    '/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/ready_custom.css',
    expected_strings=['zoom: 1.5;', 'max-width: 370px !important;', 'max-width: 340px !important;', 'height: 280px !important;'],
    unexpected_strings=['zoom: 1.6;', 'max-width: 550px !important;']
)

js_ok = verify_file(
    '/Users/vincenthsiao/.openclaw/tmp/MagicMirror_Sync/ready_config.js',
    expected_strings=['APH(成本$127.00)', 'displayMode: "vertical"'],
    unexpected_strings=['scroll: "none"']
)

if css_ok and js_ok:
    print("ALL FILES VERIFIED CORRECTLY.")
else:
    print("VERIFICATION FAILED.")
