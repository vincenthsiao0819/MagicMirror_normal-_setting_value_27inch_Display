const fs = require('fs');
const path = 'C:/Users/magic/MagicMirror/defaultmodules/calendar/calendar.js';
let content = fs.readFileSync(path, 'utf8');

const searchStr = `titleWrapper.innerHTML = "<div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>" + CalendarUtils.shorten(transformedTitle, this.config.maxTitleLength, this.config.wrapEvents, this.config.maxTitleLines) + repeatingCountTitle + "</div>";`;

const replaceStr = `
            let shortTitle = CalendarUtils.shorten(transformedTitle, 40, this.config.wrapEvents, this.config.maxTitleLines) + repeatingCountTitle;
            if (shortTitle.includes("民權國中-")) {
                let parts = shortTitle.split("民權國中-");
                titleWrapper.innerHTML = "<div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 24px; color: #cccccc; line-height: 1.1; margin-bottom: 2px;'>" + parts[0] + "民權國中</div><div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>" + parts.slice(1).join("民權國中-") + "</div>";
            } else {
                titleWrapper.innerHTML = "<div class='title-text' style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>" + shortTitle + "</div>";
            }
`;

if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr.trim());
    fs.writeFileSync(path, content, 'utf8');
    console.log("calendar.js patched to split title.");
} else {
    console.log("Search string not found!");
}
