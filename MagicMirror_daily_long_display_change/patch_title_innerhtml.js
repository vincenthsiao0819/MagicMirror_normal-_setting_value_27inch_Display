const fs = require('fs');
const path = 'C:/Users/magic/MagicMirror/defaultmodules/calendar/calendar.js';
let content = fs.readFileSync(path, 'utf8');

// Wrap the innerHTML in a div with text-overflow ellipsis
content = content.replace(
    /titleWrapper\.innerHTML = CalendarUtils\.shorten\([^;]+;/,
    (match) => {
        return `titleWrapper.innerHTML = "<div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>" + ${match.replace("titleWrapper.innerHTML = ", "").slice(0, -1)} + "</div>";`;
    }
);

fs.writeFileSync(path, content, 'utf8');
console.log("calendar.js title string patched.");