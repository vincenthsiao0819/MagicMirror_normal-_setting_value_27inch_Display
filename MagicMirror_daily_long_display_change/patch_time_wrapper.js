const fs = require('fs');
const path = 'C:/Users/magic/MagicMirror/defaultmodules/calendar/calendar.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
    /timeWrapper\.className = `time light \$\{this\.timeClassForUrl\(event\.url\)\}`;[\s\n\r]*eventWrapper\.appendChild\(timeWrapper\);/g,
    'timeWrapper.className = `time light ${this.timeClassForUrl(event.url)}`;\n\t\t\t\ttitleWrapper.appendChild(timeWrapper);'
);

content = content.replace(
    /const timeWrapper = document\.createElement\("td"\);/g,
    'const timeWrapper = document.createElement("div");'
);

fs.writeFileSync(path, content, 'utf8');
console.log("calendar.js timeWrapper patched.");