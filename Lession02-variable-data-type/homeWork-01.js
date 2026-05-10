// bài tập về nhà hạn chế dùng regex vì chưa học đến biểu thức chính quy, có thể dùng cách khác để làm sạch dữ liệu như sau: và sai dó để maintain vì khó hiểu

// Bài 1: 								
// "Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): "" 1.000.000 đ ""
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): "" 800.000 đ ""
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100."								
								
// đáp án bài1 
let giaGoc = " 1.000.000 đ ";
let phanTramGiam = 20;
let giaSauGiam = " 800.000 đ ";

// làm sạch và chuyển đổi giá gốc về number
let giaGocClean = Number(giaGoc.trim().replace(/\./g, "").replace("đ", "")); // loại bỏ khoảng trắng ở đầu và cuối chuỗi, loại bỏ dấu chấm và chữ "đ" để chỉ còn lại số nguyên / my feedback là chỗ này k nên dùng ./g vì chưa học đến biểu thức chính quy, có thể dùng cách khác như sau: k dùng ./g nữa mà có cách khác là dùng split để tách chuỗi thành mảng và sau đó join lại mà không có dấu chấm như sau: giaGoc.trim().split('.').join('') để loại bỏ dấu chấm, sau đó replace("đ", "") để loại bỏ chữ "đ" và cuối cùng Number() để chuyển đổi chuỗi thành số nguyên. Cách này cũng sẽ đạt được kết quả tương tự mà không cần sử dụng biểu thức chính qu
console.log(giaGocClean); // kết quả là 1000000 vì đã làm sạch và chuyển đổi giá gốc về number chỗ này là s tôi chưa hỉu ./g là một biểu thức chính quy (regular expression) dùng để tìm tất cả dấu chấm trong chuỗi và thay thế chúng bằng chuỗi rỗng (loại bỏ chúng). Cụ thể: -> nhưng chưa đc học ơt trên mà có cáhc khác k ? 



// tính toán giá mong đợi
let giaMongDoi = giaGocClean * (100 - phanTramGiam) / 100; // tính toán giá mong đợi bằng cách lấy giá gốc nhân với (100 - phần trăm giảm) chia cho 100
console.log(giaMongDoi); // kết quả là 800000 vì đã tính toán giá mong đợi bằng cách lấy giá gốc nhân với (100 - phần trăm giảm) chia cho 100   

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
console.log("THÀNH TIỀN: " + thanhTien.toLocaleString() + " VNĐ"); // sử dụng toLocaleString() để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn, dùng slice để căt cx đc mà k cần dùng toLocaleString() vì chưa học đến method này, có thể dùng cách khác như sau: thanhTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") để định dạng số thành chuỗi có dấu phẩy phân cách hàng nghìn. Cách này sẽ đạt được kết quả tương tự mà không cần sử dụng toLocaleString().



// đáp án của mentor
