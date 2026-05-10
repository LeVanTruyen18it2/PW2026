// Tình huống: Bạn đang viết một bản kiểm tra trước khi release. Hệ thống trả về dữ liệu thô từ UI và config. Bạn cần xử lý thành báo cáo rõ ràng.									
									
// Dữ liệu đầu vào:									
									
// let rawProjectName = "   Neko CRM   ";									
// let rawEnvName = "   ";									
// let rawPassRate = "82";									
// let rawHasReport = "true";									
// let rawCriticalMessage = "   ";									
// let browserUsed = "chrome"; // "chrome", "firefox", "safari", "edge"									
									
									
// Yêu cầu:									
// Dùng .trim() để làm sạch rawProjectName và rawEnvName.									
// Nếu rawEnvName sau khi trim() là rỗng -> gán environment = "Development". Nếu không rỗng -> dùng chính giá trị đã làm sạch.									
// Ép rawPassRate sang Number.									
// Ép rawHasReport sang Boolean đúng cách.									
									
// Tạo hasCriticalBug theo quy tắc:									
// nếu message là null hoặc undefined -> false									
// nếu sau trim() là rỗng -> false									
// ngược lại -> true									
// Dùng if / else if để xếp hạng:									
// >= 95 -> "EXCELLENT"									
// >= 80 -> "GOOD"									
// >= 60 -> "NEEDS IMPROVEMENT"									
// còn lại -> "CRITICAL"									
									
// Dùng switch/case để gán tên engine cho browserUsed:									
// chrome -> "Chromium"									
// edge -> "Chromium"									
// firefox -> "Gecko"									
// safari -> "WebKit"									
// Nếu không khớp -> "Unknown"									
									
// Dùng toán tử 3 ngôi để tạo message cho report:									
// nếu hasReport là true -> "Có report"									
// ngược lại -> "Chưa có report"									
									
// Tạo isReadyToRelease theo quy tắc:									
// nếu pass rate dưới 80 -> false									
// nếu có critical bug -> false									
// nếu chưa có report -> false									
// còn lại -> true									
// In báo cáo ra console.									
									
// Expected output									
// Project:         Neko CRM									
// Environment:     Development									
// Browser:         chrome									
// Engine:          Chromium									
									
// Pass Rate:       82.00%									
// Grade:           GOOD									
// Report:          Có report									
// Critical Bug:    Không có bug nghiêm trọng									
									
// Ready:           YES			

// lời gỉai:
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
// syntax: Number(value) -> ép value sang kiểu Number, 
// nếu value không thể chuyển đổi thành số thì sẽ trả về NaN (Not a Number)
let passRate = Number(rawPassRate);
// Ép rawHasReport sang Boolean đúng cách. Boolean là sao ? 
// Boolean là kiểu dữ liệu chỉ có hai giá trị true hoặc false
// syntax: value.toLowerCase() === "true" 
// -> chuyển value thành chữ thường và so sánh với "true", 
// nếu khớp thì trả về true, ngược lại trả về false		
// let rawHasReport = "true"; này là boolean r mà nên không cần phải ép kiểu nữa, 
// nhưng nếu rawHasReport có thể là "true" hoặc "false" dưới dạng chuỗi thì mới cần phải ép kiểu như trên để đảm bảo rằng chúng ta đang làm việc với giá trị boolean thực sự.
//  Nếu rawHasReport đã là một giá trị boolean (true hoặc false), 
// thì bạn có thể sử dụng trực tiếp mà không cần phải ép kiểu. 
// Tuy nhiên, nếu rawHasReport có thể là một chuỗi chứa "true" hoặc "false",
//  thì việc ép kiểu như trên sẽ giúp bạn chuyển đổi chúng thành giá trị boolean thực sự để sử dụng trong các điều kiện và logic của chương trình.						
let hasReport = rawHasReport.toLowerCase() === "true";

// console.log('Project:         ' + rawProjectNameClean);
// console.log('Environment:     ' + environment);
// console.log('Browser:         ' + browserUsed);

// // syntax của toFixed() là number.toFixed(digits) 
// // -> trả về một chuỗi đại diện cho số đã được làm tròn đến số chữ số thập phân được chỉ định bởi digits.
// console.log('Pass Rate:       ' + passRate.toFixed(2) + '%');
// // 
// console.log('Report:          ' + (hasReport ? "Có report" : "Chưa có report"));

/// Tạo hasCriticalBug theo quy tắc:									
// nếu message là null hoặc undefined -> false									
// nếu sau trim() là rỗng -> false									
// ngược lại -> true									
// Dùng if / else if để xếp hạng:									
// >= 95 -> "EXCELLENT"									
// >= 80 -> "GOOD"									
// >= 60 -> "NEEDS IMPROVEMENT"									
// còn lại -> "CRITICAL"		
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
console.log('Grade:            ' + grade);

// Dùng switch/case để gán tên engine cho browserUsed:									
// chrome -> "Chromium"									
// edge -> "Chromium"									
// firefox -> "Gecko"									
// safari -> "WebKit"									
// Nếu không khớp -> "Unknown"
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
console.log('Project:         ' + rawProjectNameClean);
console.log('Environment:     ' + environment);
console.log('Browser:         ' + browserUsed);
console.log('Engine:          ' + engine);
// syntax của toFixed() là number.toFixed(digits) 
// -> trả về một chuỗi đại diện cho số đã được làm tròn đến số chữ số thập phân được chỉ định bởi digits.
console.log('Pass Rate:       ' + passRate.toFixed(2) + '%');
// 
console.log('Report:          ' + (hasReport ? "Có report" : "Chưa có report"));

// Dùng toán tử 3 ngôi để tạo message cho report:                                    
// nếu hasReport là true -> "Có report"									
// ngược lại -> "Chưa có report"	
let reportMessage = hasReport ? "Có report" : "Chưa có report";
console.log('Report:          ' + reportMessage); 
// Tạo isReadyToRelease theo quy tắc:                                    
// nếu pass rate dưới 80 -> false									
// nếu có critical bug -> false     
// nếu chưa có report -> false                                    
// còn lại -> true	
let isCriticalBug = hasCriticalBug; // đã được xác định ở trên
let isReadyToRelease = passRate >= 80 && !isCriticalBug && hasReport;
console.log('Critical Bug:    ' + (isCriticalBug ? "có" : "không có") + " bug nghiêm trọng");

// biết lại = if/else như sau:
let isReadyToRelease1;
if (passRate < 80) {
    isReadyToRelease1 = false;
} else if (isCriticalBug) {
    isReadyToRelease1 = false;
} else if (!hasReport) {
    isReadyToRelease1 = false;
} else {
    isReadyToRelease1 = true;
}
console.log('Ready:           ' + (isReadyToRelease1 ? "YES" : "NO"));

// có thể viết gọn hơn bằng toán tử 3 ngôi như sau:

// Expected output									
// Project:         Neko CRM									
// Environment:     Development									
// Browser:         chrome									
// Engine:          Chromium									
									
// Pass Rate:       82.00%									
// Grade:           GOOD									
// Report:          Có report	
