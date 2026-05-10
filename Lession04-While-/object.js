/// là 1 cái tủ dán nhãn -> khi muốn lấy trong ngăn kéo thì lấy qua tên ngăn kéo 
// quy tắc : dùng array khi bạn có 1 danh ấch nhì thứ giống nhau (user , giá ....)
// dùng object khi bạn có 1 danh sách các thuộc tính của 1 thứ gì đó (user : name, age, email ....)
// object : là 1 cái tủ dán nhãn -> khi muốn lấy trong ngăn kéo thì lấy qua tên ngăn kéo 
// cách tạo object : dùng cặp dấu ngoặc nhọn {}
// mỗi thuộc tính của object sẽ có 1 tên và 1 giá trị, cách nhau bởi dấu hai chấm :
// let tenObject = { tenThuocTinh: giaTri, tenThuocTinh2: giaTri2, ... }
// tên thuộc tính có thể là chuỗi hoặc số, nếu là chuỗi thì phải đặt trong dấu ngoặc kép ""
// giá trị của thuộc tính có thể là bất kỳ kiểu dữ liệu nào (string, number, boolean, array, object, function ...)
// mỗi thuộc tính cách nhau bởi dấu phẩy , nếu là thuộc tính cuối cùng thì không cần dấu phẩy
 let userTest = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isVip: true,
    role: ["admin", "editor"],
 }
 console.log(userTest); // {name: "John Doe", age: 30, email: "
 
 // quy tăc đặt tên Key 
 // key trong object có thể là chuỗi hoặc số, nếu là chuỗi thì phải đặt trong dấu ngoặc kép ""
 // nếu key là chuỗi thì có thể đặt trong dấu ngoặc kép hoặc không, nhưng nếu key có khoảng trắng hoặc ký tự đặc biệt thì phải đặt trong dấu ngoặc kép ""
 // khi k cần dấu nháy "" (90% trường hợp) thì sẽ được gọi là identifier key, còn khi cần dấu nháy "" thì sẽ được gọi là string key
 // nếu key có dấu cách hoặc ký tự đặc biệt thì phải đặt trong dấu ngoặc kép ""
 let userTest2 = {
    "full name": "John Doe",
    "age": 30,
    "email": "bcb @example.com",    
    "is vip": true,
    "role": ["admin", "editor"],
 }
 console.log(userTest2); // {full name: "John Doe", age: 30, email: "bcb @example.com", is vip: true, role: Array(2)}   
 // dynamic key : khi bạn muốn tạo key của object dựa trên giá trị của biến nào đó thì bạn có thể sử dụng dynamic key
 let keyName = "full name";
 let userTest3 = {
    [keyName]: "John Doe",
    age: 30,
    email: "bcb @example.com",    
    "is vip": true,
    role: ["admin", "editor"],
 }
 console.log(userTest3); // {full name: "John Doe", age: 30, email: "bcb @example.com", is vip: true, role: Array(2)}       
 // thêm sửa xóa thuộc tính của object
    // 1. thêm thuộc tính mới vào object : tenObject.tenThuocTinh = giaTri  
    let config = {
    theme: "dark",
    };
    config.mode = "light";
    console.log(config); // {theme: "dark", mode: "light"}  
    // 2. sửa thuộc tính của object : tenObject.tenThuocTinh = giaTriMoi
    config.theme = "light";
    console.log(config); // {theme: "light", mode: "light"}
    // 3. xóa thuộc tính của object : delete tenObject.tenThuocTinh
    delete config.mode;
    console.log(config); // {theme: "light"}       

// phuơng thức mà Object dùng : 
// 1. Object.keys(tenObject) : trả về mảng chứa tất cả các key của object
    let userTest4 = {
        name: "John Doe",
        age: 30,
        email: "    bcb @example.com",

    }
    console.log(Object.keys(userTest4)); // ["name", "age", "email"]
    // 2. Object.values(tenObject) : trả về mảng chứa tất cả các giá trị của object
    console.log(Object.values(userTest4)); // ["John Doe", 30, "    bcb @example.com"]
 // 3. Object.entries(tenObject) : trả về mảng chứa tất cả các cặp key-value của object dưới dạng mảng con
 console.log(Object.entries(userTest4)); // [["name", "John Doe"], ["age", 30], ["email", "    bcb @example.com"]]      
 // 4. Ọect.hasOwnProperty(tenObject, tenThuocTinh) : kiểm tra xem object có thuộc tính nào đó hay không, trả về true hoặc false
 console.log(userTest4.hasOwnProperty("name")); // true
 console.log(userTest4.hasOwnProperty("address")); // false
 // 5. Object.assign(tenObject1, tenObject2) : sao chép tất cả các thuộc tính của object2 vào object1, trả về object1 -> mãng gốc sẽ thay đổi
 let userTest5 = {
    name: "John Doe",
    age: 30,
 }
 let userTest6 = {
    email: "bcb @example.com",
    isVip: true,
 }
 Object.assign(userTest5, userTest6);
 console.log(userTest5); // {name: "John Doe", age: 30, email: "bcb @example.com", isVip: true}
 console.log(userTest6); // {email: "bcb @example.com", isVip: true} -> object2 sẽ không bị thay đổi

 // BÀI TẬP
 let apiResponse = {

  userId: 9999,

  userName: "neko_auto",

  role: "admin",

  isActive: "yes",

};
let soTruong = Object.keys(apiResponse).length;
console.log(soTruong); // 4
//Dùng Objet.keys để đếm xem API trả về bao nhiêu trường
//Dùng Objet.hasOwn() để kiểm tra 3 trường require "userId", "email", "role"
console.log(apiResponse.hasOwnProperty("userId")); // true
console.log(apiResponse.hasOwnProperty("email")); // false
console.log(apiResponse.hasOwnProperty("role")); // true

// kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof ) Nếu sai kiểu, in ra cảnh báo
if (typeof apiResponse.isActive !== "boolean") {
    console.warn("isActive should be a boolean");
}else {
    console.log("isActive is a boolean");
}       
// Dùng Object.values + includes đeer kieerm tra xem co gai tri nao la "admin"
let giaTriAdmin = Object.values(apiResponse).includes("admin");
console.log(giaTriAdmin); // true
