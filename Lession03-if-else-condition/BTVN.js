let rawProjectName = "   Neko CRM   ";									
let rawEnvName = "   ";									
let rawPassRate = "82";									
let rawHasReport = "true";									
let rawCriticalMessage = "   ";									
let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"

let rawProjectNameClean = rawProjectName.trim();
let rawEnvNameClean = rawEnvName.trim();
// condition ? valueIfTrue : valueIfFalse
let environment = rawEnvNameClean === "" ? "Development" : rawEnvNameClean; 
let passRate = Number(rawPassRate);	
let hasReport = rawHasReport.toLowerCase() === "true";


let hasCriticalBug;
if (rawCriticalMessage === null || rawCriticalMessage === undefined) {
    hasCriticalBug = false;
} else if (rawCriticalMessage.trim() === "") {
    hasCriticalBug = false;
} else {
    hasCriticalBug = true;
}

let grade;
if (passRate>=95){
    grade = "EXCELLENT";
}else if (passRate >=80){
    grade = "GOOD";
}else if (passRate >=60){
    grade = "NEEDS IMPROVEMENT";
}else {
    grade = "CRITICAL";
}

let engine;
switch (browserUsed) {
    case "chrome":
    case "edge":
        engine = "Chromium";
        break;
    case "firefox":
        engine = "Gecko";
        break;
    case "safari":
        engine = "WebKit";
        break;
    default:
        engine = "Unknown";
} 
let isCriticalBug = hasCriticalBug;
let isReadyToRelease = passRate >= 80 && !isCriticalBug && hasReport;
console.log('Project:         ' + rawProjectNameClean);
console.log('Environment:     ' + environment);
console.log('Browser:         ' + browserUsed);
console.log('Engine:          ' + engine);
console.log('Pass Rate:       ' + passRate.toFixed(2) + '%');
console.log('Grade:           ' + grade);
console.log('Report:          ' + (hasReport ? "Có report" : "Chưa có report"));
console.log('Critical Bug:    ' + (isCriticalBug ? "có" : "không có") + " bug nghiêm trọng");
console.log('Ready:           ' + (isReadyToRelease? "YES" : "NO"));
