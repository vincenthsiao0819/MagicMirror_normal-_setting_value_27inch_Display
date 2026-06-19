const fs = require('fs');
const css = `
.calendar table {
    table-layout: fixed !important;
    width: 450px !important;
    border-collapse: collapse !important;
}
.calendar tr {
    /* normal table row */
}
.calendar td {
    border: none !important;
    padding: 0 !important;
    vertical-align: top !important;
}
.calendar .symbol {
    width: 35px !important;
    font-size: 28px !important;
    text-align: center !important;
    padding-top: 2px !important;
}
.calendar .title {
    width: 415px !important;
    text-align: left !important;
    font-size: 28px !important;
    padding-left: 5px !important;
}
.calendar .title-text {
    width: 410px !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: block !important;
}
.calendar .time {
    font-size: 24px !important;
    color: #ffeb3b !important;
    font-weight: bold !important;
    margin-top: -2px !important;
    padding-bottom: 12px !important;
    display: block !important;
}
`;
fs.writeFileSync('C:/Users/magic/MagicMirror/defaultmodules/calendar/calendar.css', css);
console.log("calendar.css final patch.");