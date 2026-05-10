//method chaining là gì ? 
// có 1 chuối slug = " Playwwright Basic First test " 
// -> đầu ra là "playwwright-basic-first-test"
// trim toLowerCase replace
let slug = " Playwwright Basic First test ";
let slugClean = slug.trim().toLowerCase().replace(/\s+/g, "-"); // loại bỏ khoảng trắng ở đầu và cuối chuỗi, chuyển đổi chuỗi thành chữ thường, thay thế tất cả khoảng trắng giữa các từ bằng dấu gạch ngang
console.log(slugClean); // kết quả là "playwwright-basic-first-test" vì đã làm sạch chuỗi slug bằng cách loại bỏ khoảng trắng ở đầu và cuối chuỗi, chuyển đổi chuỗi thành chữ thường, thay thế tất cả khoảng trắng giữa các từ bằng dấu gạch ngang      
 //-> method chaning là gọi nhì method liên tiếp trên cùng 1 giá trih -> bươc sau lấu chính keết quả làm dầu vào method tiếp theo để xử lý tiếp mà k cần phải lưu kết quả của method trước đó vào một biến trung gian nào cả, giúp code ngắn gọn và dễ đọc hơn.
 // replace(/\s+/g, "-") là gì v ? sao k dùng là reaplaceAll(" ", "-") được ? 
 // ->  replace(/\s+/g, "-") sẽ thay thế tất cả khoảng trắng giữa các từ bằng dấu gạch ngang, 
 // -> còn replaceAll(" ", "-") sẽ thay thế tất cả ký tự khoảng trắng bằng dấu gạch ngang, 
 // nếu chuỗi slug có chứa nhiều khoảng trắng liên tiếp giữa các từ thì replaceAll(" ", "-") sẽ thay thế tất cả ký tự khoảng trắng đó bằng dấu gạch ngang nên sẽ không đạt được kết quả mong muốn là "playwwright-basic-first-test" mà sẽ ra "playwwright-basic-first-test" với nhiều dấu gạch ngang liên tiếp giữa các từ, 
 // còn replace(/\s+/g, "-") sẽ thay thế tất cả khoảng trắng liên tiếp giữa các từ bằng một dấu gạch ngang duy nhất nên sẽ đạt được kết quả mong muốn là "playwwright-basic-first-test". 

 //ví dụ về method chaining
 let text1 = "sale"
 text1.trim().includes("sale").toLowerCase(); // là đúng hay sai code này ?
 // -> sai vì method trim() sẽ trả về một chuỗi mới đã được loại bỏ khoảng trắng ở đầu và cuối chuỗi, nhưng method includes() sẽ trả về một giá trị boolean (true hoặc false) chứ không phải là một chuỗi, nên khi gọi method toLowerCase() trên giá trị boolean

 let amount = 9.5;
 // -> "009.50"
 // tạo ra 9.50 trước đã= toFixed(2)
 // rồi đệm = 2 số 0 đằng trc vì padstart nó đếm cái length và thêm đằng trc 
 let amountFormatted = amount.toFixed(2).padStart(6, "0");

 // toán tiwr (operators) là gì ?
 // phép +
 //phép toàn nguy hiểm vì cs tính lưỡng cực 
 // ếu có 1 số :nó làm toán (10+5+15)
 // neếu1 trong 2 là chuỗi (tring) -> keo án ("10"+5 = 105) -> kết quả là "105" vì khi có một trong hai toán hạng là chuỗi thì toán tử + sẽ thực hiện phép nối chuỗi (string concatenation) thay vì phép cộng số học, nên số 5 sẽ được chuyển thành chuỗi "5" và sau đó nối với chuỗi "10" để tạo thành chuỗi "105".
 // nếu cả 2 là chuỗi ("10"+"5" = "105") -> kết quả là "105" vì khi cả hai toán hạng là chuỗi thì toán tử + sẽ thực hiện phép nối chuỗi (string concatenation) thay vì phép cộng số học, nên chuỗi "10" sẽ được nối với chuỗi "5" để tạo thành chuỗi "105".
 // nếu cả 2 là số (10+5 = 15) -> kết quả là 15 vì khi cả hai toán hạng là số thì toán tử + sẽ thực hiện phép cộng số học, nên số 10 sẽ được cộng với số 5 để tạo thành số 15.
 // phép - * / % -> chỉ thực hiện phép toán số học nên nếu có một trong hai toán hạng là chuỗi thì sẽ
 // nếu 1 chuôic - 1 số thì -> NaN
 // nếu 1 số - 1 chuỗi thì -> NaN
 // nếu 1 chuỗi - 1 chuỗi thì -> NaN
 // nếu 1 số - 1 số thì -> kết quả là số đó
 // phếp chia lấy dư (%)
 // trả về phần dư của phép chia giữa 2 số
 // ví dụ: 10 % 3 = 1 vì khi chia 10 cho 3 thì thương là 3 và phần dư là 1, nên kết quả của phép chia lấy dư giữa 10 và 3 là 1.
// 10 %2 = 5 dư 0 vì khi chia 10 cho 2 thì thương là 5 và phần dư là 0, nên kết quả của phép chia lấy dư giữa 10 và 2 là 0.
// -> dùng để check chẵn lẻ 
// vi dụ code 
let number = 10;
if (number % 2 === 0) {
    console.log(number + " là số chẵn");
} else {
    console.log(number + " là số lẻ");
}
// kết quả là "10 là số chẵn" vì khi chia 10 cho 2 thì phần dư là 0, nên số 10 được xác định là số chẵn.    

// toán tử gán (=) 
// quy tắc phải sang trái 
let diemSo = 10;
diemSo = diemSo + 5; // cách viết dài
// b1: tinh bên phải trước -> diemSo + 5 = 15
// b2: gán kết quả vào biến bên trái -> diemSo = 15
// cách viết ngắn gọn hơn là dùng toán tử cộng gán (+=)

// toán tử gán rút gọn  = , +=, -=, *=, /=, %=
// case x = x + 5 -> x += 5 rất hay gặp trong thực tế khi muốn cập nhật giá trị của một biến bằng cách lấy giá trị hiện tại của biến đó cộng thêm một số nào đó, thay vì phải viết x = x + 5 thì có thể viết ngắn gọn hơn là x += 5 để đạt được cùng một kết quả, giúp code ngắn gọn và dễ đọc hơn. Tương tự như vậy, các toán tử gán rút gọn khác như -=, *=, /=, %= cũng giúp viết code ngắn gọn hơn khi muốn cập nhật giá trị của một biến bằng cách thực hiện phép toán tương ứng với giá trị hiện tại của biến đó.
// case x = x - 5 -> x -= 5
// case x = x * 5 -> x *= 5
// case x = x / 5 -> x /= 5
// case x = x % 5 -> x %= 5
// 
let tongTien = 100000;
const giaAo = 200000;
 tongTien+= giaAo; // cách viết ngắn gọn hơn của tongTien = tongTien + giaAo
const soLuongAo = 3;
 tongTien*= soLuongAo;
tongTien = giaAo * soLuongAo * (100 - phanTramGiam) / 100;
console.log(tongTien); // kết quả là 540000 vì đã tính toán tổng tiền bằng cách lấy giá áo nhân với số lượng áo nhân với (100 - phần trăm giảm) chia cho 100 để áp dụng giảm giá.


 // toan tử so sánh (comparison operators) là gì ?  
// dùng để so sánh 2 giá trị với nhau và trả về kết quả là true hoặc false
// toán tử so sánh bằng (==) -> so sánh giá trị của 2 toán hạng, nếu giá trị của 2 toán hạng bằng nhau thì trả về true, ngược lại trả về false. Ví dụ: 5 == "5" sẽ trả về true vì giá trị của số 5 và chuỗi "5" đều là 5 sau khi được chuyển đổi sang cùng một kiểu dữ liệu, nên chúng được coi là bằng nhau.
// toán tử so sánh bằng nghiêm ngặt (===) -> so sánh cả giá trị và kiểu dữ liệu của 2 toán hạng, nếu giá trị và kiểu dữ liệu của 2 toán hạng đều bằng nhau thì trả về true, ngược lại trả về false. Ví dụ: 5 === "5" sẽ trả về false vì mặc dù giá trị của số 5 và chuỗi "5" đều là 5 nhưng kiểu dữ liệu của chúng khác nhau (số và chuỗi), nên chúng không được coi là bằng nhau khi sử dụng toán tử so sánh bằng nghiêm ngặt (===).
// toán tử so sánh khác (!=) -> so sánh giá trị của 2 toán hạng, nếu giá trị của 2 toán hạng khác nhau thì trả về true, ngược lại trả về false. Ví dụ: 5 != "5" sẽ trả về false vì giá trị của số 5 và chuỗi "5" đều là 5 sau khi được chuyển đổi sang cùng một kiểu dữ liệu, nên chúng được coi là bằng nhau, nên kết quả của phép so sánh khác giữa 5 và "5" là false.
// toán tử so sánh khác nghiêm ngặt (!==) -> so sánh cả giá trị và kiểu dữ liệu của 2 toán hạng, nếu giá trị hoặc kiểu dữ liệu của 2 toán hạng khác nhau thì trả về true, ngược lại trả về false. Ví dụ: 5 !== "5" sẽ trả về true vì mặc dù giá trị của số 5 và chuỗi "5" đều là 5 nhưng kiểu dữ liệu của chúng khác nhau (số và chuỗi), nên chúng được coi là khác nhau khi sử dụng toán tử so sánh khác nghiêm ngặt (!==).
// ví dụ 
let passwordLength = 5;
let ispasswordValid = passwordLength >= 8; // kiểm tra xem độ dài mật khẩu có hợp lệ hay không bằng cách so sánh độ dài mật khẩu với 8, nếu độ dài mật khẩu lớn hơn hoặc bằng 8 thì trả về true, ngược lại trả về false.
console.log(ispasswordValid); // kết quả là false vì độ dài mật khẩu là 5, nên khi so sánh với 8 thì kết quả của phép so sánh lớn hơn hoặc bằng giữa 5 và 8 là false.   

// bằng nhau == vs bằng nhau tuyệt đối ===
// khẩu qyết : đồng nhất về cùng 1 kiểu dữ liệu 
//1. toán tử == ss bằng nhau lỏng lẻo (loose equality) k nên xử dụng vì nó có tính lưỡng cực (bipolar) -> có thể trả về true hoặc false tùy thuộc vào kiểu dữ liệu của các toán hạng, nếu có một trong hai toán hạng là chuỗi thì sẽ thực hiện phép nối chuỗi, nếu có một trong hai toán hạng là số thì sẽ thực hiện phép cộng số học, nếu có một trong hai toán hạng là boolean thì sẽ thực hiện phép so sánh boolean, nếu có một trong hai toán hạng là null hoặc undefined thì sẽ được coi là bằng nhau, nên kết quả của phép so sánh bằng giữa 0 và false là true, kết quả của phép so sánh bằng giữa "" và false là true, kết quả của phép so sánh bằng giữa null và undefined là true, nhưng kết quả của phép so sánh bằng giữa 0 và "" là false vì khi so sánh số 0 với chuỗi rỗng thì chúng không được coi là bằng nhau khi sử dụng toán tử ==. Do đó, việc sử dụng toán tử == có thể dẫn đến những kết quả không mong muốn và khó hiểu, nên tốt nhất nên tránh sử dụng toán tử == và thay vào đó nên sử dụng toán tử === để đảm bảo tính chính xác và rõ ràng trong việc so sánh giá trị.
// -> so sánh giá trị của 2 toán hạng sau khi đã thực hiện ép kiểu (type coercion) nếu cần thiết, nếu giá trị của 2 toán hạng bằng nhau sau khi đã được chuyển đổi sang cùng một kiểu dữ liệu thì trả về true, ngược lại trả về false. Ví dụ: 0 == false sẽ trả về true vì khi so sánh số 0 với boolean false thì số 0 sẽ được chuyển đổi thành boolean false, nên chúng được coi là bằng nhau khi sử dụng toán tử ==.
//2. toán tử === ss bằng nhau nghiêm ngặt (strict equality) -> so sánh cả giá trị và kiểu dữ liệu của 2 toán hạng mà không thực hiện ép kiểu, nếu giá trị và kiểu dữ liệu của 2 toán hạng đều bằng nhau thì trả về true, ngược lại trả về false. Ví dụ: 0 === false sẽ trả về false vì khi so sánh số 0 với boolean false thì chúng có kiểu dữ liệu khác nhau (số và boolean), nên chúng không được coi là bằng nhau khi sử dụng toán tử ===.
// ví dụ
console.log(0 == false); // kết quả là true vì khi so sánh số 0 với boolean false thì số 0 sẽ được chuyển đổi thành boolean false, nên chúng được coi là bằng nhau khi sử dụng toán tử ==.
console.log(0 === false); // kết quả là false vì khi so sánh số 0 với boolean false thì chúng có kiểu dữ liệu khác nhau (số và boolean), nên chúng không được coi là bằng nhau khi sử dụng toán tử ===. \


let giaUI = " 1.000.000 đ ";
let giaDB = 1000000;
console.log(giaUI == giaDB); // kết quả là false vì chuỗi " 1.000.000 đ " không thể được chuyển đổi thành số 1000000 khi sử dụng toán tử ==.
console.log(giaUI === giaDB); // kết quả là false vì chuỗi " 1.000.000 đ " và số 1000000 có kiểu dữ liệu khác nhau, nên chúng không được coi là bằng nhau khi sử dụng toán tử ===.


// toan tu logic (logical operators) là gì ?
// dùng để kết hợp nhiều biểu thức điều kiện với nhau và trả về kết quả là true hoặc false
// toán tử logic AND (&&) -> trả về true nếu cả hai biểu thức điều kiện đều đúng, ngược lại trả về false. Ví dụ: true && true sẽ trả về true vì cả hai biểu thức điều kiện đều đúng, true && false sẽ trả về false vì một trong hai biểu thức điều kiện là sai, false && true sẽ trả về false vì một trong hai biểu thức điều kiện là sai, false && false sẽ trả về false vì cả hai biểu thức điều kiện đều sai.
// toán tử logic OR (||) -> trả về true nếu ít nhất một trong hai biểu thức điều kiện đúng, ngược lại trả về false. Ví dụ: true || true sẽ trả về true vì ít nhất một trong hai biểu thức điều kiện là đúng, true || false sẽ trả về true vì ít nhất một trong hai biểu thức điều kiện là đúng, false ||
// toán tử logic NOT (!) -> trả về giá trị ngược lại của biểu thức điều kiện, nếu biểu thức điều kiện đúng thì trả về false, ngược lại nếu biểu thức điều kiện sai thì trả về true. Ví dụ: !true sẽ trả về false vì biểu thức điều kiện là đúng, !false sẽ trả về true vì biểu thức điều kiện là sai.

// ví dụ 
let isRaining = true;
let isSunny = false;
console.log(isRaining && isSunny); // kết quả là false vì một trong hai biểu thức điều kiện là sai, nên phép logic AND giữa true và false sẽ trả về false.
console.log(isRaining || isSunny); // kết quả là true vì ít nhất một trong hai biểu thức điều kiện là đúng, nên phép logic OR giữa true và false sẽ trả về true.
console.log(!isRaining); // kết quả là false vì biểu thức điều kiện là đúng, nên phép logic NOT sẽ trả về giá trị ngược lại là false.
console.log(!isSunny); // kết quả là true vì biểu thức điều kiện là sai, nên phép logic NOT sẽ trả về giá trị ngược lại là true.    




// bài tập về nhà  --- IGNORE ---
// test chức năng đăng kí tk , nút đăng kí chỉ enabled khi thỏa điều kiện 
// 1. tuổi phải >= 18
//2. mật khẩu phải = 8 ký tự
// 3. checkbox đồng ý điều khoản phải được chọn
 let userAge = 20;
 let passwordInput = "Neko1234";
 let isTermAccepted = true;
 // 1. tạo biến isAgeValid để kiểm tra xem tuổi có hợp lệ hay không bằng cách so sánh tuổi của người dùng với 18, nếu tuổi của người dùng lớn hơn hoặc bằng 18 thì trả về true, ngược lại trả về false.
 // 2. tạo biến isPasswordValid để kiểm tra xem mật khẩu có hợp lệ hay không bằng cách so sánh độ dài của mật khẩu với 8, nếu độ dài của mật khẩu lớn hơn hoặc bằng 8 thì trả về true, ngược lại trả về false.
 // kết hợp cả 3 điều kiện trên để kiểm tra xem nút đăng kí có nên được enabled hay không, nếu tất cả các điều kiện đều đúng thì trả về true, ngược lại trả về false.
 // in ra console , logs 
 // đáp án bài tập về nhà
    let isAgeValid = userAge >= 18;
    let isPasswordValid = passwordInput.length === 8;
    let isFormValid = isAgeValid && isPasswordValid && isTermAccepted;
    console.log(isFormValid); // kết quả là true vì tuổi của người dùng là 20, mật khẩu có độ dài là 8 ký tự, và checkbox đồng ý điều khoản đã được chọn, nên tất cả các điều kiện đều đúng, nên nút đăng kí sẽ được enabled.

// toán tử tăng giảm (prefix and postfix increment/decrement operators) là gì ?
// cú pháp 
// postfix (i++): trả về giá trị hiện tại của biến i trước khi tăng giá trị của i lên 1. 
//Ví dụ: 
let a = 5; 
let ketQua1 = a++; // gán giá trị hiện tại của a (5) cho ketQua1, sau đó tăng giá trị của a lên 1
console.log(ketQua1); // sẽ in ra 5, sau đó giá trị của a sẽ được tăng lên 6.
console.log(a); // sẽ in ra 6 vì giá trị của a đã được tăng lên 1 sau khi gán giá trị hiện tại của a cho ketQua1.
// prefix (++i): tăng giá trị của biến i lên 1 trước khi trả về giá trị mới của i. 
// Ví dụ:
let i = 5; console.log(++i); // sẽ tăng giá trị của i lên 6, sau đó in ra 6.

// tach ra 2 câu hỏi 
// 1. gía trị của i sau khi thực hiện i++ là bao nhiêu ?
// 2. gía trị của i sau khi thực hiện ++i là bao nhiêu ?   
// giá trị cuói cùng của biên i 
// NƠI DÙNG TOÀN TỦ ĐC NHÉT VÀO LÀ 1. PHÉP GIÁN LET Y = i++ 2. PHÉP GIÁN LET Z = ++i*2 
// hàm . console.log(i++); sẽ trả về giá trị hiện tại của i trước khi tăng giá trị của i lên 1, nên giá trị của i sau khi thực hiện i++ sẽ là giá trị hiện tại của i cộng thêm 1.
// hàm . console.log(++i); sẽ tăng giá trị của i lên 1 trước khi trả về giá trị mới của i, nên giá trị của i sau khi thực hiện ++i sẽ là giá trị hiện tại của i cộng thêm 1.
// điều kiện if(i++ > 5) sẽ trả về true nếu giá trị hiện tại của i trước khi tăng giá trị của i lên 1 lớn hơn 5, ngược lại trả về false. Điều kiện if(++i > 5) sẽ trả về true nếu giá trị mới của i sau khi tăng giá trị của i lên 1 lớn hơn 5, ngược lại trả về false. Do đó, kết quả của điều kiện if(i++ > 5) và if(++i > 5) sẽ phụ thuộc vào giá trị hiện tại của i trước khi thực hiện phép tăng và sau khi thực hiện phép tăng.   
//- > ĐIỂM MẤU CHỐT : NÔI DÙNG TOÀN TỬ TĂNG GIẢM THÌ NÊN DÙNG Ở PHÉP GÁN ĐỂ TRÁNH NHẦM LẪN VÀ ĐẢM BẢO TÍNH CHÍNH XÁC CỦA KẾT QUẢ, NÊU DÙNG TRONG CÁC BIỂU THỨC KHÁC NHƯ ĐIỀU KIỆN IF THÌ NÊN CÂN NHẮC KỸ VỀ GIÁ TRỊ TRẢ VỀ VÀ CÁCH THỨC HOẠT ĐỘNG CỦA TOÀN TỬ TĂNG GIẢM ĐỂ TRÁNH NHẦM LẪN VÀ ĐẢM BẢO TÍNH CHÍNH XÁC CỦA KẾT QUẢ.
 
let retries = 2;
let firstLog = retries++; // gán giá trị hiện tại của retries (2) cho firstLog, sau đó tăng giá trị của retries lên 1
let secondLog = ++retries; // tăng giá trị của retries lên 1 trước khi gán giá trị mới của retries (4) cho secondLog
let canRetry = retries -- > 3; // kiểm tra xem giá trị hiện tại của retries (4) có lớn hơn 3 hay không, nếu có thì trả về true, ngược lại trả về false

// đoán output 4 dòng: -> 2, 4, true, 3
console.log(firstLog); // sẽ in ra 2, sau đó giá trị của retries sẽ được tăng lên 1 thành 3.
console.log(secondLog); // sẽ in ra 4, sau đó giá trị của retries sẽ được tăng lên 1 thành 4.
console.log(canRetry); // sẽ in ra true vì giá trị hiện tại của retries là 4, nên khi so sánh với 3 thì kết quả của phép so sánh lớn hơn giữa 4 và 3 là true.
console.log(retries); // sẽ in ra 3 vì giá trị của retries đã được giảm đi 1 sau khi kiểm tra điều kiện canRetry.
// viết lại theo cáhc rõ ràng hơn 
let retries1 = 2;
let firstLog1 = retries1; // gán giá trị hiện tại của retries (2) cho firstLog
retries++; // tăng giá trị của retries lên 1 thành 3
let secondLog1 = retries + 1; // tăng giá trị của retries lên 1 trước khi gán giá trị mới của retries (4) cho secondLog
retries++; // tăng giá trị của retries lên 1 thành 4
let canRetry1 = retries > 3;1 // kiểm tra xem giá trị hiện tại của retries (4) có lớn hơn 3 hay không, nếu có thì trả về true, ngược lại trả về false
retries--; // giảm giá trị của retries đi 1 thành 3

// đoán output 4 dòng: -> 2, 4, true, 3
console.log(firstLog1); // sẽ in ra 2, sau đó giá trị của retries sẽ được tăng lên 1 thành 3.
console.log(secondLog1); // sẽ in ra 4, sau đó giá trị của retries sẽ được tăng lên 1 thành 4.
console.log(canRetry1); // sẽ in ra true vì giá trị hiện tại của retries là 4, nên khi so sánh với 3 thì kết quả của phép so sánh lớn hơn giữa 4 và 3 là true.
console.log(retries1); // sẽ in ra 3 vì giá trị của retries đã được giảm đi 1 sau khi kiểm tra điều kiện canRetry.

// bài tập về nhà : đoán output của đoạn code sau
// promotion rule : if user > 18 và VIP = true thì được giảm giá 30% otherwise keep as 
let rawAge = 25;
let isVIP = true;
let rawPrice = " 500.000 đ ";
//yêu cầu : 
//1. làm sạch và ép kiểu 
// 2, kiểm tra điều kiện để áp dụng khuyến mãi nếu thỏa điều kiện thì tính giá sau giảm, ngược lại giữ nguyên giá gốc
// 3. in ra console logs giá sau khi đã áp dụng khuyến mãi (nếu có) với định dạng có dấu phẩy phân cách hàng nghìn và đuôi "đ"
// đáp án bài tập về nhà    
const age = Number(rawAge); // chuyển đổi rawAge từ chuỗi thành số nguyên để có thể so sánh với 18
const price = Number(rawPrice.trim().replace(/\./g, "").replace("đ", "")); // làm sạch rawPrice bằng cách loại bỏ khoảng trắng ở đầu và cuối chuỗi, loại bỏ dấu chấm và chữ "đ" để chỉ còn lại số nguyên, sau đó chuyển đổi chuỗi thành số nguyên để có thể thực hiện phép tính toán học
let finalPrice; // tạo biến finalPrice để lưu giá sau khi đã áp dụng khuyến mãi (nếu có)
if (age > 18 && isVIP) { // kiểm tra điều kiện nếu tuổi lớn hơn 18 và là VIP thì áp dụng khuyến mãi
    finalPrice = price * 0.7; // tính giá sau khi đã áp dụng khuyến mãi bằng cách lấy giá gốc nhân với 0.7 (tương đương với giảm giá 30%)
} else { // nếu không thỏa điều kiện thì giữ nguyên giá gốc
    finalPrice = price; // gán giá gốc cho finalPrice
}
console.log("Giá sau khi áp dụng khuyến mãi: " + finalPrice.toLocaleString() + " đ"); // in ra console logs giá sau khi đã áp dụng khuyến mãi (nếu có) với định dạng có dấu phẩy phân cách hàng nghìn và đuôi "đ" bằng cách sử dụng phương thức toLocaleString() để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn, sau đó nối với chuỗi " đ" để thêm đơn vị tiền tệ.

// cách 2 k dùng if vì chưa học 
let finalPrice2 = (age > 18 && isVIP) ? price * 0.7 : price; // sử dụng toán tử điều kiện (ternary operator) để kiểm tra điều kiện nếu tuổi lớn hơn 18 và là VIP thì áp dụng khuyến mãi bằng cách lấy giá gốc nhân với 0.7, ngược lại giữ nguyên giá gốc, sau đó gán kết quả cho biến finalPrice2
console.log("Giá sau khi áp dụng khuyến mãi: " + finalPrice2.toLocaleString() + " đ"); // in ra console logs giá sau khi đã áp dụng khuyến mãi (nếu có) với định dạng có dấu phẩy phân cách hàng nghìn và đuôi "đ" bằng cách sử dụng phương thức toLocaleString() để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn, sau đó nối với chuỗi " đ" để thêm đơn vị tiền tệ.   
