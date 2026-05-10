// scope và closure
// scope là phạm vi truy cập của biến , có 2 loại scope : global scope và local scope
// A. global scope: 
// là phạm vi truy cập của biến ở ngoài cùng của chương trình , có thể truy cập được từ bất kỳ đâu trong chương trình
// đặc điểm: k nằm trong một hàm nào , có thể truy cập được từ bất kỳ đâu trong chương trình
// vd: 
let tenMoiTruong = "global scope";
let baseUrl = "https://api.example.com";
function getData() {
    //hàm này bên trong có thể truy cập được biến tenMoiTruong và baseUrl vì chúng nằm trong global scope
    console.log(tenMoiTruong); // Output: "global scope"
    console.log(baseUrl); // Output: "https://api.example.com"
}
function getData2() {
    //hàm này cũng có thể truy cập được biến tenMoiTruong và baseUrl vì chúng nằm trong global scope
    console.log(tenMoiTruong); // Output: "global scope"
    console.log(baseUrl); // Output: "https://api.example.com"
}
getData();
getData2();

// nguy hiểm :nếu cả 2 đêu sửa biến tenMoiTruong và baseUrl thì sẽ gây ra lỗi
// vd:
let solanClick = 0;
function clickButton() {
    solanClick = 5; // sửa biến solanClick trong global scope
    console.log(solanClick); // Output: 5
}
function resetClick() {
    solanClick = 0; // sửa biến solanClick trong global scope
    console.log(solanClick); // Output: 0
}
clickButton();
resetClick();
// B. local scope: 
// là phạm vi truy cập của biến ở trong một hàm , chỉ có thể truy cập được từ bên trong hàm đó
// đặc điểm: nằm trong một hàm nào đó , chỉ có thể truy cập được từ bên trong hàm đó
// vd:
function myFunction() {
    let ten = "local scope";
    console.log(ten); // Output: "local scope"
}
myFunction();
// console.log(ten); // Error: ten is not defined 
function demSo(){
    let count = 0;
    count++;
    console.log(count); // Output: 1
}
// count mới đc tạo -> tăng lên 1 rồi end 
demSo ();
demSo (); // Output: 1
// C. block scope: 
// là phạm vi truy cập của biến ở trong một khối lệnh , chỉ có thể truy cập được từ bên trong khối lệnh đó
// đặc điểm: nằm trong một khối lệnh nào đó (if , for , while ,...) , chỉ có thể truy cập được từ bên trong khối lệnh đó

// vd:
if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}
// console.log(i); // Error: i is not defined

// Lưu ý : var không có block scope , nó có function scope , nên nếu dùng var trong một khối lệnh thì biến đó sẽ được tạo ra ở global scope
if (true) {
    var y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 20
for (var j = 0; j < 5; j++) {
    console.log(j); // Output: 0 1 2 3 4
}
console.log(j); // Output: 5

// D. OBJECT k phải là 2 scope trên mà nó là một kiểu dữ liệu , nhưng nó cũng có phạm vi truy cập của biến , đó là phạm vi truy cập của thuộc tính của đối tượng đó
// vd:
const person = {
    name: "John",
    age: 30,
    getName: function() {
        return this.name; // this ở đây là person , nên this.name sẽ trả về "John"
    }
};
console.log(person.getName()); // Output: "John"

