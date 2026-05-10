// kiểu dữ liệu
// 1. kiểu dữ liệu nguyên thủy (primitive data type)
//1. STRING // chuỗi bao quanh bởi dấu nháy đơn '' hoặc nháy kép "" hoặc dấu backtick nháy ngược ``
// nếu chuỗi bình thường k cần nhúng biến thì dùng ".." hoặc '' nếu có nhúng biến thì dùng ``"
// nhúng biến là j ? dùng backtick `` để nhúng biến vào chuỗi, cú pháp ${tên_biến} để nhúng biến vào chuỗi
// ví dụ 
let loiChao = 'John';
let loiChao2 = "John";
let loiChao3 = "Helle my name's John";

const tenHocVuen = "Jackie" 
// dùng backtick nhúng biến tên học viên vào chuỗi khác
const loiChao4 = `Helle my name's ${tenHocVuen}`
console.log(loiChao4); // chú cái value khi dùng console nhé bỏ dáu nháy đi nếu muôns in ra giá trị của biến, nếu để nguyên dấu nháy thì sẽ in ra cả chuỗi đó chứ không phải giá trị của biến đó

const productName = "iPhone 14 Pro Max";
const productSelector = `h2:has-text('${productName}')`; // cú pháp nhúng biến vào chuỗi trong JavaScript là ${tên_biến} chứ không phải '${tên_biến}' vì nếu để nguyên dấu nháy thì sẽ in ra cả chuỗi đó chứ không phải giá trị của biến đó
console.log(productSelector); // in ra h2:has-text('iPhone 14 Pro Max') vì đã nhúng biến productName vào chuỗi productSelector
// 2. kiểu dữ liệu số (number): có thể là số nguyên hoặc số thập phân
// NUMBER 
// JS k phân biệt số nguyên hay số thập phân, tất cả đều là kiểu dữ liệu number 
// quy tắc đóng gói là k có dấu nháy nhá nó k có j bao quanh cả, chỉ cần viết số đó ra là được
// Ví dụ 
let age = 20; // số nguyên
let price = 9.99; // số thập phân là dấu chấm k dùng dâu phẩy để phân cách phần nguyên và phần thập phân
console.log(age);
console.log(price);

let result = age + price; // phép toán số học
console.log(result); // kết quả là 29.99 vì age là 20 và price là 9.99 nên khi cộng lại sẽ ra 29.99

// 3. kiểu dữ liệu boolean: chỉ có 2 giá trị true hoặc false, thường dùng để lưu trữ trạng thái của một đối tượng hoặc một điều kiện nào đó
// BOOLEAN - cái công tắc 2 có trang thái on hoặc off, đúng hoặc sai, có hoặc không có, thường dùng để lưu trữ trạng thái của một đối tượng hoặc một điều kiện nào đó
// True or False
// quy tắc đóng gói giốg như kiểu NUmebr 
// ví dụ
let isON = true; // trạng thái công tắc là on
let isOFF = false; // trạng thái công tắc là off
console.log(isON);
console.log(isOFF);


// CÁCH XỬ LÝ CHUỖI TRONG JAVASCRIPT//

// 1. length - dung để đếm chuối có bn ký tự 
// cú pháp tên_biến.length để đếm số ký tự trong chuỗi đó (k có dấu nháy bao quanh vì là thuộc tính chứ k phải method)
// ví dụ
let myString = "Hello World";
console.log(myString.length); // kết quả là 11 vì chuỗi "Hello World" có 11 ký tự (bao gồm cả dấu cách)

// 2. TRIM - dùng để loại bỏ khoảng trắng ở đầu và cuối chuỗi
// cú pháp tên_biến.trim() để loại bỏ khoảng trắng ở đầu và cuối chuỗi đó (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let myString2 = "   Hello World   ";
console.log(myString2.trim()); // kết quả là "Hello World" vì đã loại bỏ khoảng trắng ở đầu và cuối chuỗi

// 3. toUpperCase và toLowerCase - dùng để chuyển đổi chuỗi thành chữ hoa hoặc chữ thường
// cú pháp tên_biến.toUpperCase() để chuyển đổi chuỗi thành chữ hoa và tên_biến.toLowerCase() để chuyển đổi chuỗi thành chữ thường (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let myString3 = "Hello World";
console.log(myString3.toUpperCase()); // kết quả là "HELLO WORLD" vì đã chuyển đổi chuỗi thành chữ hoa
console.log(myString3.toLowerCase()); // kết quả là "hello world" vì đã chuyển đổi chuỗi thành chữ thường    
// 4. includes - kiểm tra xe 1 chuỗi con con nằm trong chuỗi lớn hay không, trả về true hoặc false
// cú pháp tên_biến.includes('chuỗi con') để kiểm tra xem chuỗi con có nằm trong chuỗi lớn hay không (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let myString4 = "Hello World";
console.log(myString4.includes("Hello")); // kết quả là true vì chuỗi "Hello" nằm trong chuỗi "Hello World"
console.log(myString4.includes("Hi")); // kết quả là false vì chuỗi "Hi" không nằm trong chuỗi "Hello World"
// có case sensitive hay không ? có, nếu chuỗi con có chữ hoa thì phải có chữ hoa trong chuỗi lớn mới trả về true, nếu chuỗi con có chữ thường thì phải có chữ thường trong chuỗi lớn mới trả về true
console.log(myString4.includes("hello")); // kết quả là false vì chuỗi "hello" không nằm trong chuỗi "Hello World" vì có chữ thường và chữ hoa khác nhau

// 5. Replace - xóa và sửa lỗi có thể dùng để thay thế một chuỗi con bằng một chuỗi mới trong một chuỗi lớn, trả về một chuỗi mới sau khi đã thay thế
// cú pháp tên_biến.replace('chuỗi con', 'chuỗi mới') để thay thế chuỗi con bằng chuỗi mới trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// Đặc điểm chỉ có thể thay thế chỗ đầu tiên nó tìm thấy 
// ví dụ
let myString5 = "Hello World";
console.log(myString5.replace("World", "JavaScript")); // kết quả là "Hello JavaScript" vì đã thay thế chuỗi "World" bằng chuỗi "JavaScript" trong chuỗi "Hello World"
// có case sensitive hay không ? có, nếu chuỗi con có chữ hoa thì phải có chữ hoa trong chuỗi lớn mới được thay thế, nếu chuỗi con có chữ thường thì phải có chữ thường trong chuỗi lớn mới được thay thế
console.log(myString5.replace("world", "JavaScript")); // kết quả là "Hello World" vì chuỗi "world" không nằm trong chuỗi "Hello World" vì có chữ thường và chữ hoa khác nhau nên không được thay thế

let myString6 = "Hello World Hello";
console.log(myString6.replace("Hello", "Hi")); // kết quả là "Hi World Hello" vì chỉ thay thế chỗ đầu tiên nó tìm thấy chuỗi "Hello" bằng chuỗi "Hi" trong chuỗi "Hello World Hello"
// nếu muốn thay thế tất cả chuỗi con thì phải dùng regex (regular expression) để thay thế tất cả chuỗi con trong chuỗi lớn, cú pháp tên_biến.replace(/chuỗi con/g, 'chuỗi mới') để thay thế tất cả chuỗi con bằng chuỗi mới trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính, có dấu g để thay thế tất cả chuỗi con trong chuỗi lớn)
console.log(myString6.replace(/Hello/g, "Hi")); // kết quả là "Hi World Hi" vì đã thay thế tất cả chuỗi "Hello" bằng chuỗi "Hi" trong chuỗi "Hello World Hello"
// or replace all method
console.log(myString6.replaceAll("Hello", "Hi")); // kết quả là "Hi World Hi" vì đã thay thế tất cả chuỗi "Hello" bằng chuỗi "Hi" trong chuỗi "Hello World Hello"

// 6. indexOf - tìm vị trí của một chuỗi con trong một chuỗi lớn, trả về vị trí của chuỗi con trong chuỗi lớn, 
// // nếu không tìm thấy thì trả về -1
// cú pháp tên_biến.indexOf('chuỗi con') để tìm vị trí của chuỗi con trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// có case sensitive hay không ? có, nếu chuỗi con có chữ hoa thì phải có chữ hoa trong chuỗi lớn mới trả về vị trí, nếu chuỗi con có chữ thường thì phải có chữ thường trong chuỗi lớn mới trả về vị trí
// ví dụ
let myString7 = "Hello World";
console.log(myString7.indexOf("World")); // kết quả là 6 vì chuỗi "World" bắt đầu từ vị trí thứ 6 trong chuỗi "Hello World" (đếm từ 0)
console.log(myString7.indexOf("Hi")); // kết quả là -1 vì chuỗi "Hi" không nằm trong chuỗi "Hello World"
console.log(myString7.indexOf("hello")); // kết quả là -1 vì chuỗi "hello" không nằm trong chuỗi "Hello World" vì có chữ thường và chữ hoa khác nhau


// để cắt trong JS thì có 2 thèn 
// subString() và slice() đều có tác dụng cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn, nhưng có một số điểm khác nhau về cách hoạt động và cú pháp sử dụng
// subString() và slice() đều có tác dụng cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn, nhưng có một số điểm khác nhau về cách hoạt động và cú pháp sử dụng
// subString() không chấp nhận giá trị âm, nếu vị trí bắt đầu lớn hơn vị trí kết thúc thì sẽ tự động hoán đổi vị trí bắt đầu và vị trí kết thúc, nếu vị trí bắt đầu hoặc vị trí kết thúc vượt quá độ dài của chuỗi thì sẽ được coi là độ dài của chuỗi
// slice() chấp nhận giá trị âm, nếu vị trí bắt đầu lớn hơn vị trí kết thúc thì sẽ trả về chuỗi rỗng, nếu vị trí bắt đầu hoặc vị trí kết thúc vượt quá độ dài của chuỗi thì sẽ được coi là độ dài của chuỗi
// phải lấy đc điểm start và end của chuỗi con đó trong chuỗi lớn thì mới cắt được chuỗi con đó ra khỏi chuỗi lớn, nếu không lấy được điểm start và end của chuỗi con đó trong chuỗi lớn thì sẽ không cắt được chuỗi con đó ra khỏi chuỗi lớn

// cú pháp tên_biến.substring(vị trí bắt đầu, vị trí kết thúc) để cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// cú pháp tên_biến.slice(vị trí bắt đầu, vị trí kết thúc) để cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// slice thì có all số âm 
// ví dụ    
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.substring(0, 5)); // kết quả là "ABCDE" vì đã cắt chuỗi từ vị trí 0 đến vị trí 5 (không bao gồm vị trí 5) trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.slice(0, 5)); // kết quả là "ABCDE" vì đã cắt chuỗi từ vị trí 0 đến vị trí 5 (không bao gồm vị trí 5) trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.substring(5, 0)); // kết quả là "ABCDE" vì đã hoán đổi vị trí bắt đầu và vị trí kết thúc thành vị trí bắt đầu là 0 và vị trí kết thúc là 5 trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.slice(5, 0)); // kết quả là "" vì vị trí bắt đầu lớn hơn vị trí kết thúc nên trả về chuỗi rỗng trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.substring(-5, 5)); // kết quả là "ABCDE" vì đã coi vị trí bắt đầu là độ dài của chuỗi (26) và vị trí kết thúc là 5 trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(text.slice(-5, 5)); // kết quả là "" vì đã coi vị trí bắt đầu là độ dài của chuỗi (26) và vị trí kết thúc là 5 trong chuỗi "ABCDEFGHIJKLMNOPQRSTUVWXYZ" nên trả về chuỗi rỗng
 
// muốn lấy đuô chuõi thì dùng 2 thèn đều đc còn muốn lấy đầu chuỗi thì dùng subString() còn muốn lấy cuối chuỗi thì dùng slice() vì slice() có thể dùng số âm để đếm ngược từ cuối chuỗi về đầu chuỗi để cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn, còn subString() không thể dùng số âm để đếm ngược từ cuối chuỗi về đầu chuỗi để cắt chuỗi dựa trên vị trí của chuỗi con trong chuỗi lớn nên chỉ có thể dùng subString() để lấy đầu chuỗi, còn slice() có thể dùng để lấy cả đầu chuỗi và cuối chuỗi tùy vào cách sử dụng vị trí bắt đầu và vị trí kết thúc.
// nếu truyền vào k có end thì sao ? nếu truyền vào k có end thì sẽ cắt chuỗi từ vị trí bắt đầu đến hết chuỗi, ví dụ
let text2 = "Hello World";
console.log(text2.substring(6)); // kết quả là "World" vì đã cắt chuỗi từ vị trí 6 đến hết chuỗi trong chuỗi "Hello World"
console.log(text2.slice(6)); // kết quả là "World" vì đã cắt chuỗi từ vị trí 6 đến hết chuỗi trong chuỗi "Hello World"
 // ví dụ 
 let msg = " Error: Invalid input ";
 // dùng index để lấy : rồi cắt như nào để lấy msg lỗi là "Invalid input" ?
 let indexOfColon = msg.indexOf(":"); // tìm vị trí của dấu ":" trong chuỗi msg
 console.log(indexOfColon); // kết quả là 6 vì dấu ":" nằm ở vị trí thứ 6 trong chuỗi " Error: Invalid input "
 let errorMessage = msg.substring(indexOfColon + 1).trim(); // cắt chuỗi từ vị trí sau dấu ":" đến hết chuỗi và loại bỏ khoảng trắng ở đầu và cuối chuỗi con đó
 console.log(errorMessage); // kết quả là "Invalid input" vì đã cắt chuỗi từ vị trí sau dấu ":" đến hết chuỗi và loại bỏ khoảng trắng ở đầu và cuối chuỗi con đó trong chuỗi " Error: Invalid input "

 let errorMessage2 = msg.substring(indexOfColon + 2); // cắt chuỗi từ vị trí sau dấu ":" đến hết chuỗi và loại bỏ khoảng trắng ở đầu và cuối chuỗi con đó
 console.log(errorMessage2); // kết quả là "Invalid input " vì đã cắt chuỗi từ vị trí sau dấu ":" đến hết chuỗi trong chuỗi " Error: Invalid input " nhưng không loại bỏ khoảng trắng ở đầu và cuối chuỗi con đó    
// kết hợp vs sub string để lấy ra chuỗi con từ chuỗi lớn dựa trên vị trí của chuỗi con đó trong chuỗi lớn
// cú pháp tên_biến.substring(vị trí bắt đầu, vị trí kết thúc) để lấy ra chuỗi con từ chuỗi lớn dựa trên vị trí của chuỗi con đó trong chuỗi lớn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let myString8 = "Hello World";
let index = myString8.indexOf("World");
console.log(myString8.substring(index, index + "World".length)); // kết quả là "World" vì đã lấy ra chuỗi con "World" từ chuỗi lớn "Hello World" dựa trên vị trí của chuỗi con đó trong chuỗi lớn


 //bài tập về chuỗi
 let rawText = " Order ID: ORD-2026-123 | Status: Success    ";
 // yêu cầu lấy ra đc ORD-2026-123
 // dùng indexOF + length + slide để lấy 
    let orderIdIndex = rawText.indexOf("ORD-2026-123"); // tìm vị trí của chuỗi con "ORD-2026-123"
    console.log(orderIdIndex);
    let orderIdLength = "ORD-2026-123".length; // độ dài của chuỗi con "ORD-2026-123"
    // console.log(orderIdLength);
    let orderId = rawText.slice(orderIdIndex, orderIdIndex + orderIdLength); // cắt chuỗi từ vị trí của chuỗi con "ORD-2026-123" đến vị trí của chuỗi con "ORD-2026-123" + độ dài của chuỗi con "ORD-2026-123"
    console.log(orderId); // kết quả là "ORD-2026-123" vì đã lấy ra chuỗi con "ORD-2026-123" từ chuỗi lớn " Order ID: ORD-2026-123 | Status: Success    " dựa trên vị trí của chuỗi con đó trong chuỗi lớn và độ dài của chuỗi con đó   
    // nhưng vì sao dùng length v ạ ? vì nếu dùng length thì sẽ lấy được độ dài của chuỗi con "ORD-2026-123" để cắt chuỗi từ vị trí của chuỗi con "ORD-2026-123" đến vị trí của chuỗi con "ORD-2026-123" + độ dài của chuỗi con "ORD-2026-123" sẽ chính xác lấy được chuỗi con "ORD-2026-123" từ chuỗi lớn " Order ID: ORD-2026-123 | Status: Success    " dựa trên vị trí của chuỗi con đó trong chuỗi lớn và độ dài của chuỗi con đó, nếu không dùng length mà dùng số nguyên thì sẽ không chính xác vì có thể số nguyên đó không đúng với độ dài của chuỗi con "ORD-2026-123" nên sẽ không lấy được chuỗi con "ORD-2026-123" từ chuỗi lớn " Order ID: ORD-2026-123 | Status: Success    " dựa trên vị trí của chuỗi con đó trong chuỗi lớn và độ dài của chuỗi con đó.

    // let rawText = "   Order ID: ORD-2026-123 | Status: Success   ";

 
// cách 2
let textClean = rawText.trim();

let textStart = textClean.indexOf(":");

let textEnd = textClean.indexOf("|");

 

let result1 = textClean.slice(textStart + 2, textEnd - 1);

console.log(result1);



//  XỬ LÝ SỐ TRONG JAVASCRIPT
// 1. ép buộc kiểu dữ liệu số sang chuỗi và ngược lại
// A number()
// nó sẽ cố để biến toàn bôj chuôi thành số , nếu chuỗi có chưa dù chỉ 1 ký tư lạ thì ní cũng lỗi NaN
 let s1 = "123";
 console.log(Number(s1)); // kết quả là 123 vì đã ép buộc kiểu dữ liệu chuỗi "123" sang kiểu dữ liệu số 123
 let s2 = "123abc";
 console.log(Number(s2)); // kết quả là NaN vì đã cố ép buộc kiểu dữ liệu chuỗi "123abc" sang kiểu dữ liệu số nhưng chuỗi "123abc" có chứa ký tự lạ nên không thể ép buộc được và trả về NaN (Not a Number)

 // B parseInt() máy lọc số Nguyên đọc từ trái sang phải gặp số thì lấy gặp chữ thì bỏ qua và phần thập phân
 // C parseFloat() máy lọc số thập phân đọc từ trái sang phải gặp số thì lấy gặp chữ thì bỏ qua và phần thập phân thì lấy cả phần nguyên và phần thập phân
// parseInt() sẽ cố gắng biến phần đầu của chuỗi thành số nguyên, nếu phần đầu của chuỗi không phải là số nguyên thì sẽ trả về NaN, nếu phần đầu của chuỗi là số nguyên thì sẽ trả về số nguyên đó, nếu phần đầu của chuỗi là số thập phân thì sẽ trả về phần nguyên của số thập phân đó
let s3 = "123.45";
console.log(parseInt(s3)); // kết quả là 123 vì đã cố gắng biến phần đầu của chuỗi "123.45" thành số nguyên và phần đầu của chuỗi "123.45" là số thập phân nên đã trả về phần nguyên của số thập phân đó là 123
console.log(parseFloat(s3)); // kết quả là 123.45 vì đã cố gắng biến phần đầu của chuỗi "123.45" thành số thập phân và phần đầu của chu
 // trường hợp đăt biết nuế là chuỗi rỗng mà dùng number thì sẽ trả về 0 còn parseInt và parseFloat sẽ trả về NaN
let s4 = "";
console.log(Number(s4)); // kết quả là 0 vì đã ép buộc kiểu dữ liệu chuỗi rỗng "" sang kiểu dữ liệu số 0
console.log(parseInt(s4)); // kết quả là NaN vì đã cố ép buộc kiểu dữ liệu chuỗi rỗng "" sang kiểu dữ liệu số nguyên nhưng chuỗi rỗng "" không phải là số nguyên nên không thể ép buộc được và trả về NaN (Not a Number)
console.log(parseFloat(s4)); // kết quả là NaN vì đã cố ép buộc kiểu dữ liệu chuỗi rỗng "" sang kiểu dữ liệu số thập phân nhưng chuỗi rỗng "" không phải là số thập phân nên không thể ép buộc được và trả về NaN (Not a Number)
// 1 số phương thức khác để xử lý số trong JavaScript
// toFixed() chốt số thập phân, trả về một chuỗi đại diện cho số đã được làm tròn đến số lượng chữ số thập phân được chỉ định
// tự động làm tròn số nếu số thập phân cần chốt có nhiều hơn số lượng chữ số thập phân được chỉ định, nếu số thập phân cần chốt có ít hơn số lượng chữ số thập phân được chỉ định thì sẽ thêm vào đó các số 0 để đủ số lượng chữ số thập phân được chỉ định
// cú pháp tên_biến.toFixed(số lượng chữ số thập phân) để chốt số thập phân của số đó (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let num1 = 3.14159;
console.log(num1.toFixed(2)); 
// kết quả là "3.14" vì đã làm tròn số 3.14159 đến 2 chữ số thập phân và trả về một chuỗi đại diện cho số đã được làm tròn đó là "3.14"
 let num2 = 19.9;
    console.log(num2.toFixed(2)); 
    // kết quả là "3.20" vì đã làm tròn số 3.196 đến 2 chữ số thập phân và trả về một chuỗi đại diện cho số đã được làm tròn đó là "3.20" (thêm vào đó 1 số 0 để đủ số lượng chữ số thập phân được chỉ định là 2)

// đối tương toán học 
// Math object 
//Match.random() để tạo ra một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1) gần = 1
console.log(Math.random()); // kết quả là một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1) gần = 1
// Math.floor() để làm tròn xuống một số thập phân về số nguyên gần nhất
console.log(Math.floor(3.7)); // kết quả là 3 vì đã làm tròn xuống số thập phân 3.7 về số nguyên gần nhất là 3
// Math.ceil() để làm tròn lên một số thập phân về số nguyên gần nhất
console.log(Math.ceil(3.2)); // kết quả là 4 vì đã làm tròn lên số thập phân 3.2 về số nguyên gần nhất là 4
// Math.round() để làm tròn một số thập phân về số nguyên gần nhất, nếu phần thập phân của số đó lớn hơn hoặc bằng 0.5 thì sẽ làm tròn lên, nếu phần thập phân của số đó nhỏ hơn 0.5 thì sẽ làm tròn xuống
console.log(Math.round(3.5)); // kết quả là 4 vì đã làm tròn số thập phân 3.5 về số nguyên gần nhất và phần thập phân của số đó là 0.5 nên đã làm tròn lên về số nguyên gần nhất là 4
console.log(Math.round(3.2)); // kết quả là 3 vì đã làm tròn số thập phân 3.2 về số nguyên gần nhất và phần thập phân của số đó là 0.2 nên đã làm tròn xuống về số nguyên gần nhất là 3
// Math.max() để tìm số lớn nhất trong một tập hợp các số
console.log(Math.max(1, 5, 3)); // kết quả là 5 vì đã tìm số lớn nhất trong tập hợp các số 1, 5, 3 là số 5
// Math.min() để tìm số nhỏ nhất trong một tập hợp các số
console.log(Math.min(1, 5, 3)); // kết quả là 1 vì đã tìm số nhỏ nhất trong tập hợp các số 1, 5, 3 là số 1  

// tạo số ngẫu nhiên từ min -> max 
//Math.floor(Math.random() * (max - min + 1)) + min;
 // kết quả là một số ngẫu nhiên từ min đến max (bao gồm cả min và max) vì đã tạo ra một số ngẫu nhiên từ 0 đến 1 (không bao gồm 1) gần = 1, 
 // sau đó nhân với (max - min + 1) để tạo ra một số ngẫu nhiên từ 0 đến (max - min + 1) (không bao gồm (max - min + 1)) gần = (max - min + 1), 
 // sau đó làm tròn xuống về số nguyên gần nhất để tạo ra một số ngẫu nhiên từ 0 đến (max - min) (bao gồm cả 0 và (max - min)), 
 // sau đó cộng với min để tạo ra một số ngẫu nhiên từ min đến max (bao gồm cả min và max)
    let min = 50;
    let max = 55;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum); 
    // kết quả là một số ngẫu nhiên từ 50 đến 55 (bao gồm cả 50 và 55) vì đã tạo ra một số ngẫu nhiên từ min đến max (bao gồm cả min và max) bằng cách sử dụng công thức Math.floor(Math.random() * (max - min + 1)) + min

// padStart() và padEnd() để thêm ký tự vào đầu hoặc cuối của một chuỗi cho đến khi chuỗi đạt được độ dài mong muốn
// cú pháp tên_biến.padStart(độ dài mong muốn, ký tự để thêm) để thêm ký tự vào đầu của chuỗi cho đến khi chuỗi đạt được độ dài mong muốn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// cú pháp tên_biến.padEnd(độ dài mong muốn, ký tự để thêm) để thêm ký tự vào cuối của chuỗi cho đến khi chuỗi đạt được độ dài mong muốn (có dấu ngoặc vì là method chứ k phải thuộc tính)
// ví dụ
let num3 = "5";
console.log(num3.padStart(2, "0")); // kết quả là "05" vì đã thêm ký tự "0" vào đầu của chuỗi "5" cho đến khi chuỗi đạt được độ dài mong muốn là 2
console.log(num3.padEnd(2, "0")); // kết quả là "50" vì đã thêm ký tự "0" vào cuối của chuỗi "5" cho đến khi chuỗi đạt được độ dài mong muốn là 2


// IN ra màn hình console log 
// dùng dấu + để nối chuỗi và biến lại với nhau

// bài tập về nhà 
// Bài 1: 								
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."			
// dùng các toàn mà đã học để apply cho bài giải nhá 

								
// đáp án bài1 
let giaGoc = " 1.000.000 đ ";
let phanTramGiam = 20;
let giaSauGiam = " 800.000 đ ";

// làm sạch và chuyển đổi Giá gốc về Number
let giaGocClean = Number(giaGoc.trim().replace(/[^0-9]/g, "")); // loại bỏ khoảng trắng ở đầu và cuối chuỗi, loại bỏ tất cả ký tự không phải là số để chỉ còn lại số nguyên , k dùng cấu trúc /g trong replace đc chứ vì chỉ có một số 0 trong chuỗi "1.000.000" nên chỉ cần loại bỏ ký tự "." là được, nếu có nhiều số 0 thì sẽ bị lỗi vì sẽ loại bỏ tất cả số 0 trong chuỗi "1.000.000" nên sẽ không còn số nào để làm sạch và chuyển đổi về Number nữa nên sẽ trả về NaN (Not a Number) nếu dùng cấu trúc /g trong replace để loại bỏ tất cả ký tự "." trong chuỗi "1.000.000" thì sẽ không còn số nào để làm sạch và chuyển đổi về Number nữa nên sẽ trả về N 
console.log(giaGocClean); // kết quả là 1000000 vì đã làm sạch và chuyển đổi Giá gốc về Number
// Bài 2:								
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).

// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh."								
// Dữ liệu đầu vào								
// "let tenSanPham = ""   macbook pro m3   "";
// let giaGoc = ""Price: 30,000,000 vnđ"";
// let soLuong = ""Sl: 2 máy"";
// let maGiamGia = ""DISCOUNT CODE: 10% OFF"";"								
// "Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:

// "								
								
// HÓA ĐƠN THANH TOÁN - ID: #0002								
// Sản phẩm: MACBOOK PRO M3								
// Đơn giá: 30000000								
// Số lượng: 2								
// Tổng tiền (Gốc): 60000000								
// Giảm giá: 10%								
// THÀNH TIỀN: 54.000.000 VNĐ								

// đáp án bài 2
let tenSanPham = "   macbook pro m3   ";
let giaGoc2 = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

// làm sạch dữ liệu
let tenSanPhamClean = tenSanPham.trim().toUpperCase(); // loại bỏ khoảng trắng ở đầu và cuối chuỗi và chuyển đổi chuỗi thành chữ hoa
let giaGocClean2 = Number(giaGoc2.trim().replace(/[^0-9]/g, "")); // loại bỏ khoảng trắng ở đầu và cuối chuỗi, loại bỏ tất cả ký tự không phải là số để chỉ còn lại số nguyên
let soLuongClean = Number(soLuong.trim().replace(/[^0-9]/g, "")); // loại bỏ khoảng trắng ở đầu và cuối chuỗi, loại bỏ tất cả ký tự không phải là số để chỉ còn lại số nguyên
let maGiamGiaClean = maGiamGia.trim().match(/(\d+)%/)[1]; // loại bỏ khoảng trắng ở đầu và cuối chuỗi, sử dụng regex để tìm kiếm phần trăm giảm giá trong chuỗi và lấy ra số phần trăm đó

// tính toán tổng tiền
let tongTienGoc = giaGocClean2 * soLuongClean; // tính tổng tiền gốc bằng cách lấy giá gốc nhân với số lượng
let giamGia = tongTienGoc * (maGiamGiaClean / 100); // tính số tiền được giảm bằng cách lấy tổng tiền gốc nhân với phần trăm giảm giá chia cho 100
let thanhTien = tongTienGoc - giamGia; // tính thành tiền bằng cách lấy tổng tiền gốc trừ đi số tiền được giảm

// in ra hóa đơn
console.log("HÓA ĐƠN THANH TOÁN - ID: #0002");
console.log("Sản phẩm: " + tenSanPhamClean);
console.log("Đơn giá: " + giaGocClean2);
console.log("Số lượng: " + soLuongClean);
console.log("Tổng tiền (Gốc): " + tongTienGoc);
console.log("Giảm giá: " + maGiamGiaClean + "%");
console.log("THÀNH TIỀN: " + thanhTien.toLocaleString() + " VNĐ"); // sử dụng toLocaleString() để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn 

// 
let textab = "ABCDEFGH"
// start đc lấy 
// end k đc lấy 
// nếu là số amm thì đổi vị trí dương trc = lấy length + số âm)
// nếu chỉ là 1 tham số thì đó là start và end = đến hết chuối
// dùng slice 1 tham số .dùng số dương 
slice(3) // kết quả là "DEFGH" vì đã cắt chuỗi từ vị trí 3 đến hết chuỗi trong chuỗi "ABCDEFGH"
// lấy GH nhưng dùng tham số âm a
slice(-2) // kết quả là "GH" vì đã cắt chuỗi từ vị trí -2 đến hết chuỗi trong chuỗi "ABCDEFGH" (vị trí -2 là vị trí của ký tự G trong chuỗi "ABCDEFGH")
// lấy GH nhưng dùng tham số âm b
slice(-2, -1) // kết quả là "G" vì đã cắt chuỗi từ vị trí -2 đến vị trí -1 trong chuỗi "ABCDEFGH" (vị trí -2 là vị trí của ký tự G và vị trí -1 là vị trí của ký tự H trong chuỗi "ABCDEFGH")
//lấy BCDEF dùng 2 tham số strt là dương và end là âm 
slice(1, -2) // kết quả là "BCDEF" vì đã cắt chuỗi từ vị trí 1 đến vị trí -2 trong chuỗi "ABCDEFGH" (vị trí 1 là vị trí của ký tự B và vị trí -2 là vị trí của ký tự G trong chuỗi "ABCDEFGH")  

let tien ="54000000"
// to 54.000.000
slice(0, 2) + "." + slice(2, 5) + "." + slice(5) // kết quả là "54.000.000" vì đã cắt chuỗi từ vị trí 0 đến vị trí 2 để lấy phần "54", sau đó cắt chuỗi từ vị trí 2 đến vị trí 5 để lấy phần "000", sau đó cắt chuỗi từ vị trí 5 đến hết chuỗi để lấy phần "000" và kết hợp lại với dấu "." để tạo thành chuỗi "54.000.000"
