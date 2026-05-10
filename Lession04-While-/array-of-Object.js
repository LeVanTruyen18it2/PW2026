// array of object : mảng chứa các đối tượng
// cấu trục của 1 object : {key: value, key: value, ...}
// mỗi đối tượng trong mảng có thể có các thuộc tính khác nhau, nhưng nên đồng nhất cấu trúc của các đối tượng trong mảng để dễ quản lý và tránh lỗi
let danhSachSanPham = [
    {
        id: 1,
        tenSanPham: "Bàn phím cơ",
        gia: 1000000,
        soLuong: 10,
    },
    {
        id: 2,
        tenSanPham: "Chuột gaming",
        gia: 500000,
        soLuong: 20,
    },
    {
        id: 3,
        tenSanPham: "M  àn hình 27 inch",   
        gia: 5000000,
        soLuong: 5,
    },
]
console.log(danhSachSanPham); // [{id: 1, tenSanPham: "Bàn phím cơ", gia: 1000000, soLuong: 10}, {id: 2, tenSanPham: "Chuột gaming", gia: 500000, soLuong: 20}, {id: 3, tenSanPham: "M  àn hình 27 inch", gia: 5000000, soLuong: 5}]
