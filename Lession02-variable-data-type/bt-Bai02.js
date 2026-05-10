// Bài 1: 							
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."			
// lời giải 
let rawOriginalPrice = " 1.000.000 đ ";
let rawDiscountPercent = 20;
let rawDiscountedPrice = " 800.000 đ ";

let originalPriceClean = rawOriginalPrice.trim().replace(/[^0-9]/g, '');
let discountedPriceClean = rawDiscountedPrice.trim().replace(/[^0-9]/g, '');

let originalPrice = Number(originalPriceClean);
let discountedPrice = Number(discountedPriceClean);

let expectedDiscountedPrice = originalPrice * (100 - rawDiscountPercent) / 100;

console.log("Giá gốc: " + originalPrice);
console.log("Phần trăm giảm: " + rawDiscountPercent + "%");
console.log("Giá sau giảm (UI): " + discountedPrice);
console.log("Giá sau giảm (Tính toán): " + expectedDiscountedPrice);
console.log("Giảm giá đúng: " + (discountedPrice === expectedDiscountedPrice ? "Đúng" : "Sai"));

// Bài 2:							
// "Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, nhưng dữ liệu trả về rất “bẩn” (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
							
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
				
// giải bài 2. 
let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10  % OFF";

let tenSanPhamClean = tenSanPham.trim().toUpperCase();
// suytax của replace k dùng regrex nhé dùng replaceAll để thay thế tất cả các ký tự không phải là số
let giaGocClean = giaGoc.trim().replaceAll

let soLuongClean = soLuong.replace(/[^0-9]/g, '');
let maGiamGiaClean = maGiamGia.replace(/[^0-9%]/g, '');

let giaGocNumber = Number(giaGocClean);
let soLuongNumber = Number(soLuongClean);
let discountPercent = Number(maGiamGiaClean.replace('%', ''));

let tongTienGoc = giaGocNumber * soLuongNumber;
let giamGiaAmount = tongTienGoc * (discountPercent / 100);
let thanhTien = tongTienGoc - giamGiaAmount;

console.log("HÓA ĐƠN THANH TOÁN - ID: #0002");
console.log("Sản phẩm: " + tenSanPhamClean);
console.log("Đơn giá: " + giaGocNumber);
console.log("Số lượng: " + soLuongNumber);
console.log("Tổng tiền (Gốc): " + tongTienGoc);
console.log("Giảm giá: " + discountPercent + "%");
console.log("THÀNH TIỀN: " + thanhTien.toLocaleString('vi-VN') + " VNĐ");

							