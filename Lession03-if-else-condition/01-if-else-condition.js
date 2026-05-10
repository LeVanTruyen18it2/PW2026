// rẽ nhánh kịch bản if/else 
    // cấu trúc if/else:
    // if (điều kiện) {
    //     // code thực thi nếu điều kiện đúng
    // } else {
    //     // code thực thi nếu điều kiện sai
    // }

// điệu kiện là 1 biểu thức trả về boolean (true hoặc false)
// ví dụ: age>18 scorre <5 statua === "active"
// nếu điều kiện true thì sẽ thực thi code trong khối if, 
// nếu điều kiện false thì sẽ thực thi code trong khối else
// ví dụ 
let password = "12345";
if (password.length >= 6) {
    console.log("Mật khẩu hợp lệ");
} else {
    console.log("Mật khẩu quá ngắn, phải có ít nhất 6 ký tự");
}
// 
let age = 2;
let hasTicket = true;
if (age>10 && hasTicket){ // khó hiểu vì có 2 điều kiện, nếu muốn dễ hiểu hơn thì có thể viết 2 điều kiện riêng biệt như sau: if (age > 10) { if (hasTicket) { console.log("Bạn được phép vào rạp chiếu phim"); } else { console.log("Bạn không được phép vào rạp chiếu phim"); } } else { console.log("Bạn không được phép vào rạp chiếu phim"); }
    console.log("Bạn được phép vào rạp chiếu phim");
} else {
    console.log("Bạn không được phép vào rạp chiếu phim");
}

// có nên viết điều kiện thành 1 biến riêng hay k ? 
// có thể viết điều kiện thành 1 biến riêng để dễ đọc hơn, 
// nhưng cũng có thể viết trực tiếp trong if/else để tiết kiệm code, 
// tùy vào độ phức tạp của điều kiện và sở thích cá nhân của mỗi người.
//  Ví dụ:

let age1 = 15;
let hasTicket1 = false;
let canGoToCinema = age1 > 10 && hasTicket1; // kết quả là false vì đã kiểm tra cả hai điều kiện age1 > 10 và hasTicket1 đều phải đúng để canGoToCinema là true, nhưng hasTicket1 là false nên canGoToCinema sẽ là false
if (canGoToCinema) {
    console.log("Bạn được phép vào rạp chiếu phim");
} else {
    console.log("Bạn không được phép vào rạp chiếu phim");
}
// úng dụng ví dụ trong AI 
// dữ liệu từ UI 
let successMessage = "Đăng nhập thành công";
if (successMessage === "Đăng nhập thành công") {
    console.log("Hiển thị trang chủ");
} else {
    console.log("Hiển thị thông báo lỗi");
}

// cố cô lậo các TCs ra thành các khối , tránh phụ thuộc vào nhau
// cấu trục if/else if/else ngã từ nhiều ngã rẽ 
// if (điều kiện 1) {
//     // code thực thi nếu điều kiện 1 đúng
// } else if (điều kiện 2) {
//     // code thực thi nếu điều kiện 2 đúng
// } else if (điều kiện 3) {
//     // code thực thi nếu điều kiện 3 đúng
// } else {
//     // code thực thi nếu tất cả các điều kiện trên đều sai
// }

// quy tắc : luôn bắt đầu = if có thể 0, 1 hoặc nhiều else if và kết thúc bằng else (không bắt buộc phải có else)
    // nếu có else thì nó luôn đứng cuối cùng, 
    // nếu có nhiều else if thì nó sẽ được kiểm tra lần lượt từ trên xuống dưới,
    //  nếu điều kiện nào đúng thì sẽ thực thi code trong khối đó và bỏ qua các điều kiện còn lại, 
    // nếu tất cả các điều kiện đều sai thì sẽ thực thi code trong khối else (nếu có)
    //

let score = 85;
if (score >=50)
    console.log ("Bạn đã đậu");
else if (score >=80)
    console.log("Bạn đạt loại khá");
else
    console.log("Bạn chưa đạt");

// ứng dụng ví dụ trong AI
let statusCode = 500;
if(statusCode === 200) {
    console.log("Hiển thị trang chủ");
} else if (statusCode === 400) {
    console.log("Hiển thị thông báo lỗi: Yêu cầu không hợp lệ");
} else if (statusCode === 404) {
    console.log("Hiển thị thông báo lỗi: Trang không tìm thấy");
} else {
    console.log("Hiển thị thông báo lỗi: Lỗi máy chủ");
}

// bài tập về nhà  --- IGNORE ---
let loginStatus = "locked";
// nếu loginStatus = Success thì in test pass Login thành công
// nếu loginStatus = locked thì in test fail Tài khoản bị khóa
// else thì faile login thất bại
if (loginStatus === "Success") {
    console.log("test pass Login thành công");
}else if (loginStatus === "locked") {
    console.log("test fail Tài khoản bị khóa");
}else {
    console.log("test fail Login thất bại");
}

// toán tử 3 ngôi - lối tắt của if/else
// nếu câu lệnh if/else đơn giản chỉ có một câu lệnh trong khối if và else thì có thể sử dụng toán tử 3 ngôi để viết gọn hơn,
// cú pháp: điều kiện ? giá trị nếu đúng : giá trị nếu sai
// ví dụ:
// có 3 thánh phần : 
 // syntax:  let result = điều kiện ? giá trị nếu đúng : giá trị nếu sai;
 // dấu ? mang ý nghĩa : hỏi xem dk đúng hay sai
 // dáia : mang ý nghĩa : ngăn cách giữa giá trị nếu đúng và giá trị nếu sai
 // nếu đk dúng thì lấu giá trị bên trái dấu : nếu đk sai thì lấy giá trị bên phải dấu :

let score1 = 85;
let result;
 if (score1 >= 50) {
    result = "Đậu";
}else {
    result = "Rớt";
}
console.log(result);

// có thể viết gọn hơn bằng toán tử 3 ngôi như sau:
let score2 = 45;
let result2 = score2 >= 50 ? "Đậu" : "Rớt"; // kết quả là "Rớt" vì đã kiểm tra điều kiện score2 >= 50 là false nên result2 sẽ được gán giá trị "Rớt"
console.log(result2);

// best practice : nên sử dụng if/else khi có nhiều câu lệnh trong khối if và else để dễ đọc hơn,
// khi nào dùng : 
// if/else dùng để quyét định khối code nào sẽ được thực thi dựa trên điều kiện,
// toán tử 3 ngôi là biểu thức dùng để tạo ra 1 giá trị mới dựa trên điều kiện, 
// thường được sử dụng để gán giá trị cho biến hoặc trả về giá trị từ một hàm,-> 
// ưu tiên toán tử 3 ngôi khi có một điều kiện đơn giản và chỉ cần gán giá trị cho một biến,
// 
let isSaved = true;
 let buttonTexxt = isSaved ? "Lưu thành công" : "Lưu thất bại"; // kết quả là "Lưu thành công" vì đã kiểm tra điều kiện isSaved là true nên buttonTexx sẽ được gán giá trị "Lưu thành công"
 console.log(buttonTexxt);

 let isCI = false;
 let reportMode = isCI ? "Báo cáo chi tiết" : "Báo cáo tóm tắt"; // kết quả là "Báo cáo tóm tắt" vì đã kiểm tra điều kiện isCI là false nên reportMode sẽ được gán giá trị "Báo cáo tóm tắt"
 console.log(reportMode);   

 // hiển thị nhãn đơn giản 
 let hasBug = true;
 let statusLabel = hasBug ? "Có lỗi" : "Không lỗi"; // kết quả là "Có lỗi" vì đã kiểm tra điều kiện hasBug là true nên statusLabel sẽ được gán giá trị "Có lỗi"
 console.log(statusLabel);  

 // khí nào uuw tiên if/else hơn toán tử 3 ngôi ?
 // trong mỗi nhánh có nhìu hành động bạn cần clg, click , screenshot ,,,
 // đọc code rõ ->có thể mở rộng thêm logic 

 // toán tử 3 ngôi lồng nhau (tuy nhiên nên hạn chế sử dụng vì sẽ khó đọc và dễ gây nhầm lẫn, nếu có nhiều điều kiện thì nên sử dụng if/else để dễ đọc hơn)
    let score3 = 85;   
    let results2 = score3 >= 80 ? "Giỏi" : score3 >= 50 ? "Đậu" : "Rớt"; // kết quả là "Giỏi" vì đã kiểm tra điều kiện score3 >= 80 là true nên results2 sẽ được gán giá trị "Giỏi" và bỏ qua các điều kiện còn lại
    console.log(results2);


// bài tập về nhà  --- IGNORE ---
let failedTests = 2;
let suiteStatus = failedTests === 0 ? "Pass" : failedTests <= 2? "Warning" : "Fail"; // kết quả là "Pass" vì đã kiểm tra điều kiện failedTests > 0 là true nên suiteStatus sẽ được gán giá trị "Pass" và bỏ qua các điều kiện còn lại
console.log(suiteStatus);
// biết lại = if/else như sau:
let failedTests1 = 2;
let suiteStatus1;
if (failedTests1 = 0) {
    suiteStatus1 = "Pass";
} else if (failedTests1 <= 2) {
    suiteStatus1 = "Warning";
} else {
    suiteStatus1 = "Fail";
}
console.log(suiteStatus1);  

// truethy và falsy
// Bình thưởng caia lệch if dòi hỏi cái đk bên trong phải là kiểu boolean, nhưng nếu bạn cung cấp một giá trị không phải boolean thì JavaScript sẽ tự động chuyển đổi nó thành boolean để đánh giá điều kiện đó,
// Trong js bạn đưa vào 1 String, Number, Object, Array, Function 
// -> thì nó sẽ được chuyển đổi thành true khi đánh giá trong if, 
// -> còn nếu bạn đưa vào 1 giá trị như false, 0, -0, 0n (BigInt), "", null, undefined, và NaN thì nó sẽ được chuyển đổi thành false khi đánh giá trong if.
// trong JavaScript, có một số giá trị được coi là "falsy" (giá trị giả) khi được đánh giá trong một ngữ cảnh boolean, 
// bao gồm: false, 0, -0, 0n (BigInt), "", null, undefined, và NaN. 
// Tất cả các giá trị khác được coi là "truthy" (giá trị thật).
// ví dụ:
// if (gía trị bất kì ){...}
// JS xử lý theo kiểu 
// 1.giá trị bất kì là true or false ?
// 2. nếu chưa -> tạm thời đòi hỏi sang boolean 
// 3. nếu kq true -> vào if và ngược lại 

let age3 = 18;
if (age3){
    console.log("đk đúng");  
}
console.log(typeof age3);

// thàng if k hỏi mày thuộc kiểu dữ liệu j ? 
// mà nó hỏi  trong ngữ cảhnh điều kiện xem đúng hay sai 
// lý do sinh ra 2 khái niệ 
//truthy : k phải boolean thật , nhưn khi đưa vào if ....
// falthy:

if ("0"){
    console.log('có chạy k ? vs if string nhá ?');
    
}
if (0){
    console.log('có chạy k ta ? ');
    
}

// Quy tắc:  nhưng giá trị mang năng lượng tiêu cực , rỗng , vô nghiwxa -> bị éothafnh false -> gọi là falthy 
// còn átta cả nhưng thứ có thật -> bị ép thành true -> Truthy 
// List 6 falthy : false , 0 só không ,"" rỗng , null , unđefined , 


// trò lữa. = String 
// "0" là 1 chuôic chưa số 0 là Truthy 
// "false"-> truthy 
// " " -> Truthy

// let soLuong = "0"

// if (soLuong){
//     console.log('có san pham');
    
// }// fix
// if (number(soLuong)){
//     console.log('co luon');
    
// } else
// {}


// Object , array
// []: 1 cái mãng rỗng : Truthy
//{}: 1 object rõng : truthy 

// ví dụ AT 
// dữ liệu lấy từ web ("", hoặc "htpps:.....")
let githubLink = "";
if (githubLink !== "" && githubLink !== null && githubLink !== undefined){
    console.log('user đã upload');
    
}else{
    console.log('chưa upload');
}

// viết lại theo truthy
if (githubLink) {
    console.log("đã");
}else {
    console.log('chưa má ');
    
}
    

let rawUserName = "   ";
// mình cần check xem là rawuserName có hợp lê hay. không và ngược lại 
// viết câu đk để check 
if (rawUserName.trim()){
    console.log('yes');
    
}else {
    console.log('no');
}


// Swich case 
 let denGiaoThong = "đỏ";
 switch (denGiaoThong) {
    case "đỏ":
        console.log('đứng lại mày');
        break;
    case "xanh":
        console.log('đi đi má');
        break;
 }
// khi nào dùng if/else và khi nào dùng switch 
// đk : dùng if khi đk đa dạng phức tako (>,< >=), đk lồng nhau , nhìu biến 
// còn switch khi có duy nhất 1 biến 

// bài tập về nhà --- IGNORE ---
