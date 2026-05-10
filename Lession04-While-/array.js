// mảng 
// bản chất : let ten = "JK" chỉ đc 1 tên thôi 
// vd có nhìu tên thì sao? 
// -> giải pháp : mảng -> như cái tủ quần áo có thể chưa vô số đồ ... mỗi ngăn kéo đc đừng đc dồ có sắp xếp theo thứ tự -> có thể truy cập vào từng ngăn kéo đó để lấy đồ ra
// cú pháp : dùng dấu [] để tạo ra 1 mảng cách nhau = dấu phẩy
// vd: let names = ["JK", "Tom", "Anna", "Bob"];
// array chứa toàn string (account test)
let danhSachUsser = ["admin", "manager", "tester", "dev"];
// array chứa toàn số (số lần click)
let soLanClick = [1, 2, 3, 4, 5];
// mãng rỗng 
let danhSachRong = []; // là truthy
 // LUU Ý: JS có thể chưa nhiều kiểu dữ liệu khác nhau trong cùng 1 mảng

 let tongHop = ["admin", 1, true, null, undefined, ["nested", "array"], {key: "value"}]; // nhưng cấm dùng như này nhé, nên đồng nhất kiểu dữ liệu trong cùng 1 mảng để dễ quản lý và tránh lỗi
 // Cú pháp để lấy phần tử trong mảng : tênMang[vi tri] index bắt đầu từ 0
 let sanPham = ["iphone", "samsung", "xiaomi"];
 console.log(sanPham[0]); // "iphone"
 console.log(sanPham[1]); // "samsung"
 console.log(sanPham[2]); // "xiaomi"
 // nếu truy cập vào vị trí mà k có phần tử nào thì sẽ trả về undefined
 console.log(sanPham[3]); // undefined

 // bộ đồ nghề xử lý mảng : array method
 // 1. length : trả về độ dài của mảng (số phần tử trong mảng)
 // tenMang.length -> trả ra số phần tử trong mảng
 let ketQuaSearch = ["iphone", "samsung"];
 console.log(ketQuaSearch.length); // 2
 // vì index = 0 nên phần tử cuối cùng sẽ có index = length - 1
 console.log(ketQuaSearch[ketQuaSearch.length - 1]);
 // 2. push : thêm phần tử vào cuối mảng
    // tenMang.push(gia tri) -> thêm giá trị vào cuối mảng -> mãng gốc sẽ thay đổi
    ketQuaSearch.push("xiaomi");
    console.log(ketQuaSearch); // ["iphone", "samsung", "xiaomi"]
// 3. pop : xóa phần tử cuối cùng của mảng và trả về phần tử đó
    // tenMang.pop() -> xóa phần tử cuối cùng của mảng và trả về phần tử đó -> mãng gốc sẽ thay đổi
    let sanPhamCuoi = ketQuaSearch.pop();
    console.log(sanPhamCuoi);   // "xiaomi"
    console.log(ketQuaSearch);
// 4. includes : kiểm tra xem mảng có chứa phần tử nào đó hay không, trả về true hoặc false
    // tenMang.includes(gia tri) -> kiểm tra xem mảng có chứa giá trị đó hay không, trả về true hoặc false
    console.log(ketQuaSearch.includes("iphone")); // true
    console.log(ketQuaSearch.includes("nokia")); // false
    // case sensitive : phân biệt chữ hoa chữ thường
    console.log(ketQuaSearch.includes("Iphone"));
// 5. shift : xóa phần tử đầu tiên của mảng và trả về phần tử đó
    // tenMang.shift() -> xóa phần tử đầu tiên của mảng và trả về phần tử đó -> mãng gốc sẽ thay đổi
    let sanPhamDau = ketQuaSearch.shift();
    console.log(sanPhamDau); // "iphone"
    console.log(ketQuaSearch); // ["samsung"]
// 6. unshift : thêm phần tử vào đầu mảng
    // tenMang.unshift(gia tri) -> thêm giá trị vào đầu mảng -> mãng gốc sẽ thay đổi
    ketQuaSearch.unshift("iphone");
    console.log(ketQuaSearch); // ["iphone", "samsung"]
// join : nối các phần tử trong mảng thành 1 chuỗi, có thể chỉ định ký tự phân cách giữa các phần tử
    // tenMang.join(ky tu phan cach) -> nối các phần tử trong mảng thành 1 chuỗi, có thể chỉ định ký tự phân cách giữa các phần tử
    let chuoiSanPham = ketQuaSearch.join(", ");
    console.log(chuoiSanPham); // "iphone, samsung"
// indexOf : trả về vị trí của phần tử đầu tiên trong mảng, nếu không tìm thấy thì trả về -1
    // tenMang.indexOf(gia tri) -> trả về vị trí của phần tử đầu tiên trong mảng, nếu không tìm thấy thì trả về -1
    console.log(ketQuaSearch.indexOf("samsung")); // 1
    console.log(ketQuaSearch.indexOf("nokia")); // -1

// BÀI TẬP 
let gioHang = [

  "Bàn phím cơ",

  "Chuột gamin",

  "Màn hình 27 inch",

  "Tai nghe bluetooth",

];

//1. In ra tổng số sản phẩm

// 2. In ra sản phẩm đầu tiên

//3. In ra tên sản phẩm cuối cùng

//4. thêm 1 cái lót chuột vào cuối giỏ hàng

console.log(gioHang.length); // 4
console.log(gioHang[0]); // "Bàn phím cơ"
console.log(gioHang[gioHang.length - 1]); // "Tai nghe bluetooth"
gioHang.push("Lót chuột");
console.log(gioHang);
