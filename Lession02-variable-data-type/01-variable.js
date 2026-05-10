console.log('hello world');
// biến là để chứa cái giá trị để reuse lại sau này
// khai báo biến bằng từ khóa var, let, const
// var: có thể khai báo lại và gán lại giá trị
// let: có thể gán lại giá trị nhưng không thể khai báo lại
// const: không thể khai báo lại và không thể gán lại giá trị
// cú pháp khai báo biến: var/let/const tên_biến = giá_trị;
// let (dymanic variable): có thể chứa bất kỳ kiểu dữ liệu nào và có thể thay đổi kiểu dữ liệu sau khi đã gán giá trị, có thẻ thay đổi giá trị trong tương lai, nhưng không thể khai báo lại biến đó, có phạm vi trong block
// dùng console long để in ra giá trị của biến trên màn hình để debug code console.log(tên biến);
let diemSo = 10;
diemSo = 20;
console.log(diemSo);

// var (function scope variable): có thể khai báo lại và gán lại giá trị, nhưng có phạm vi trong function
// const (constant variable): hộp niêm phong, không thể khai báo lại và không thể gán lại giá trị,  không thể thay đổi giá trị của biến sau khi đã gán giá trị,有 phạm vi trong block
const ngaySinh = '01/01/2000';
console.log(ngaySinh);

ngaySinh = '02/02/2000'; // lỗi vì không thể gán lại giá trị cho biến const
console.log(ngaySinh);

// let name-acn= 'hello'; // lỗi vì tên biến không được chứa dấu gạch ngang
// let 12abc = 'hello'; // lỗi vì tên biến không được bắt đầu bằng số
// let if= 'hello'; // lỗi vì tên biến không được chứa từ khóa if
// camel case chuẩn đặt tên biến: tên biến bắt đầu bằng chữ thường, các từ tiếp theo viết hoa chữ cái đầu tiên, không có dấu cách
let myName = 'hello';
console.log(myName);
let myNameIsJackie = 'hello';// tên biến dài hơn nhưng dễ đọc hơn
console.log(myNameIsJackie); // naming convention: quy tắc đặt tên biến, thường sử dụng camel case để đặt tên biến trong JavaScript, giúp code dễ đọc và dễ hiểu hơn.   
// clean code: code sạch, dễ đọc, dễ hiểu, dễ bảo trì, tuân thủ các quy tắc đặt tên biến và cấu trúc code hợp lý. tránh đặt tên biên boolean là is, has, can, should để dễ hiểu hơn về ý nghĩa của biến đó. ví dụ: isStudent, hasLicense, canFly, shouldGo. tránh đặt tên biến quá ngắn hoặc quá dài, nên đặt tên biến có ý nghĩa và dễ hiểu. ví dụ: let a = 10; 
// không rõ ý nghĩa của biến a
let age = 10; // rõ ràng hơn vì tên biến age cho biết đây là tuổi
let openDoor = true; // rõ ràng hơn vì tên biến openDoor cho biết đây là trạng thái của cửa
let isOpen = true; // rõ ràng hơn vì tên biến isOpen cho biết đây là trạng thái của cửa