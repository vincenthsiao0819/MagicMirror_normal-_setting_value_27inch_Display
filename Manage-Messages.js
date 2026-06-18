const fs = require('fs');

const jsonPath = 'C:\\Users\\magic\\MagicMirror\\messages.json';
const mdPath = 'C:\\Users\\magic\\MagicMirror\\modules\\MMM-Markdown\\markdown\\message_board.md';
const retentionHours = 3;

let messages = [];
try {
    if (fs.existsSync(jsonPath)) {
        const data = fs.readFileSync(jsonPath, 'utf8');
        messages = JSON.parse(data);
        if (!Array.isArray(messages)) messages = [messages];
    }
} catch (e) {
    messages = [];
}

const args = process.argv.slice(2);
let newSender = null;
let newContent = null;
if (args.length >= 2) {
    newSender = args[0];
    newContent = args[1];
    messages.push({
        Id: Math.random().toString(36).substring(2, 15),
        Sender: newSender,
        Content: newContent,
        Timestamp: new Date().toISOString()
    });
}

const cutoffTime = new Date(Date.now() - retentionHours * 60 * 60 * 1000);
let validMessages = messages.filter(m => new Date(m.Timestamp) >= cutoffTime);
validMessages.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));

if (validMessages.length > 0) {
    fs.writeFileSync(jsonPath, JSON.stringify(validMessages, null, 2), 'utf8');
} else {
    if (fs.existsSync(jsonPath)) fs.unlinkSync(jsonPath);
}

const css = `<style>
@keyframes pulse-new {
    0% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px #FF5252; }
    50% { transform: scale(1.05); opacity: 0.8; box-shadow: 0 0 16px #FF5252; }
    100% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px #FF5252; }
}
.msg-board-container {
    background-color: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(165, 214, 167, 0.25);
    border-radius: 15px;
    padding: 15px 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
}
.msg-title-container {
    text-align: center;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding-bottom: 15px;
    margin-bottom: 15px;
}
.msg-title-container.empty {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
}
.new-tag {
    display: inline-block; background-color: #FF5252; color: white;
    font-size: 20px; font-weight: bold; padding: 4px 10px; border-radius: 6px;
    animation: pulse-new 1.5s infinite; vertical-align: middle; margin-left: 10px;
}
.msg-item {
    margin-bottom: 25px;
    border-bottom: 1px dashed rgba(255,255,255,0.2);
    padding-bottom: 15px;
}
.msg-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}
.msg-sender { color: #FF9800; font-size: 28px; font-weight: bold; }
.msg-body { color: #FFF59D; font-size: 46px; font-weight: bold; margin: 15px 0; line-height: 1.4; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); }
.msg-time { color: #9E9E9E; font-size: 20px; font-style: italic; }
</style>`;

let html = css + '\n<div class="msg-board-container">\n';

// Use base64 decoding for literal strings to 100% bypass Windows terminal encoding mangling
const titleStr = Buffer.from('8J+TjSDlrrbluq3nlZnoqIDmnb8=', 'base64').toString('utf8');
const userIcon = Buffer.from('8J+RoA==', 'base64').toString('utf8');
const bellIcon = Buffer.from('8J+SlA==', 'base64').toString('utf8');
const newMsgText = Buffer.from('5paw55WZ6KiA', 'base64').toString('utf8');
const publishTimeText = Buffer.from('55m85biD5pmC6ZaT77ya', 'base64').toString('utf8');

if (validMessages.length === 0) {
    html = `<style>.msg-board-container { display: none !important; }</style>`;
    // Empty content

    html += '</div>';
} else {
    html += `<div class="msg-title-container"><span style="font-size: 32px; font-weight: bold; color: #FFFFFF; text-shadow: 2px 2px 5px rgba(0,0,0,0.8);">${titleStr}</span></div>\n`;
    
    for (const msg of validMessages) {
        const d = new Date(msg.Timestamp);
        const timeStr = d.getFullYear() + '-' + 
            String(d.getMonth()+1).padStart(2, '0') + '-' + 
            String(d.getDate()).padStart(2, '0') + ' ' + 
            String(d.getHours()).padStart(2, '0') + ':' + 
            String(d.getMinutes()).padStart(2, '0');
            
        const isNew = (Date.now() - d.getTime()) <= 5 * 60 * 1000;
        const newTagHtml = isNew ? `<div class="new-tag">${bellIcon} ${newMsgText}</div>` : "";
        
        html += `<div class="msg-item">\n`;
        html += `  <div class="msg-sender">${userIcon} ${msg.Sender}： ${newTagHtml}</div>\n`;
        html += `  <div class="msg-body">${msg.Content}</div>\n`;
        html += `  <div class="msg-time">${publishTimeText}${timeStr}</div>\n`;
        html += `</div>\n`;
    }
    html += '</div>';
}

fs.writeFileSync(mdPath, html, 'utf8');
