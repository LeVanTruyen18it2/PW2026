// vòng lặp for : được sử dụng khi bạn biết trước số lần lặp, hoặc khi bạn muốn lặp qua một mảng hoặc một chuỗi 
// cấu trúc của vòng lặp for :
// for (bienKhoiTao; dieuKienDung; buocNhay) {
// vòng lặp for cổ điển 
// giống như vòng lặp while nhưng được viết gọn hơn, tất cả các phần của vòng lặp đều được viết trong dấu ngoặc tròn sau từ khóa for    
// ví dụ : in ra các số từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10
}
// cú pháp 
// for (bienKhoiTao; dieuKienDung; buocNhay) {
//     // code cần lặp
// }
// 1. bienKhoiTao : được sử dụng để khởi tạo biến đếm, thường được đặt là i, j, k,... và thường được gán giá trị ban đầu là 0 hoặc 1 tùy vào mục đích của vòng lặp
// 2. dieuKienDung : là điều kiện để vòng lặp tiếp tục chạy, nếu điều kiện này trả về true thì vòng lặp sẽ tiếp tục chạy, nếu trả về false thì vòng lặp sẽ dừng lại
// 3. buocNhay : là phần được thực hiện sau mỗi lần lặp, thường được sử dụng để tăng hoặc giảm giá trị của biến đếm, ví dụ i++ (tăng i lên 1), i-- (giảm i xuống 1), i += 2 (tăng i lên 2), i -= 2 (giảm i xuống 2),...
// vòng lặp for có thể được sử dụng để lặp qua mảng hoặc chuỗi bằng cách sử dụng biến đếm làm chỉ số để truy cập vào phần tử của mảng hoặc ký tự của chuỗi
 let soLuongSanPham = 3;
 for (let i = 0; i < soLuongSanPham; i++) {
    let email = `nguoidung_${i}@example.com`;
    console.log(`đã tạo account ${email}`); // đã tạo account   
    }

// duyệt array = index 
let danhSachSanPham = [
    "Bàn phím cơ",
    "Chuột gaming",
    "Màn hình 27 inch",
]
for (let i = 0; i < danhSachSanPham.length; i++) {
    console.log(`Sản phẩm ${i + 1}: ${danhSachSanPham[i]}`); // Bàn phím cơ
    // Chuột gaming
    // M        àn hình 27 inch
}
// duyệt qua object 
let config = {
    theme: "dark",
    mode: "light", 
    layout: "grid",
}
let keys = Object.keys(config); // ["theme", "mode", "layout"]
for (let i = 0; i < keys.length; i++) {
    let key = keys[i]; // "theme", "mode", "layout"
    console.log(`Key: ${key}, Value: ${config[key]}`); // Key: theme, Value: dark
    // Key: mode, Value: light
    // Key: layout, Value: grid
}
// cách khác : for in : được sử dụng để lặp qua các thuộc tính của một object, mỗi lần lặp sẽ trả về tên của một thuộc tính trong object đó
// cấu trúc của vòng lặp for in :
// for (bien in tenObject) {
//     // code cần lặp
// }
// ví dụ : duyệt qua object config  
for (let key in config) {
    console.log(`Key: ${key}, Value: ${config[key]}`); // Key: theme, Value: dark
    // Key: mode, Value: light
    // Key: layout, Value: grid
}

// Trace thực thi:

// 1. Tạo object config2 với 3 thuộc tính:

//    - browser = "Firefox"

//    - timeout = 2000

//    - headless = true

// 2. Gọi Object.keys(config2) để lấy mảng tên thuộc tính:

//    keys = ["browser", "timeout", "headless"]

// 3. Vòng lặp for bắt đầu với i = 0, điều kiện i < keys.length (3).

//    - Lần 1: i = 0

//      key = "browser"

//      value = config2["browser"] = "Firefox"

//      In ra: browser: Firefox

//    - Lần 2: i = 1

//      key = "timeout"

//      value = config2["timeout"] = 2000

//      In ra: timeout: 2000

//    - Lần 3: i = 2

//      key = "headless"

//      value = config2["headless"] = true

//      In ra: headless: true

// 4. Sau lần lặp cuối, i tăng thành 3.

//    Điều kiện 3 < 3 là sai nên vòng lặp dừng.

let arr = ["A", "B", "C"]; // arr = ["A", "B", "C"]
for (let i = 0; i <= arr.length; i++) { // i = 0, 1, 2
    console.log(arr[i]); // In ra: A, B, C
}
// sao = lại in ra undefined khi i = 3 vì arr[3] không tồn tại, trả về undefined
// bắt đầu từ i = 0, in ra arr[0] = "A" nên k có i = 3 đúng chứ ? nên in ra = undefined là sao ?
// vì điều kiện là i <= arr.length nên khi i = 3 thì vẫn thỏang qua vòng lặp, nhưng arr[3] không tồn tại nên trả về undefined, nếu điều kiện là i < arr.length thì khi i = 3 sẽ không thỏa  điều kiện nên sẽ không thỏang qua vòng lặp và không in ra undefined 


// tạo nhanh 5 mã đơn hàng để test màn hình quản lý 
let soLuongDon = 5;
// yêu cầu: 
// 1. dùng for cổ điển lập từ 1-> 5 
// mỗi vòng tạo biến maDonhang theo mẫu ODER-1, ODER-2,...ODER-5
// 2. in ra mã đơn hàng vừa tạo
for (let i = 1; i <= soLuongDon; i++) {
    let maDonHang = `ORDER-${i}`;
    console.log(`Mã đơn hàng vừa tạo: ${maDonHang}`); // Mã đơn hàng vừa tạo: ORDER-1
    // Mã đơn hàng vừa tạo: ORDER-2
    // Mã đơn hàng vừa tạo: ORDER-3
    // Mã đơn hàng vừa tạo: ORDER-4
    // Mã đơn hàng vừa tạo: ORDER-5
}   