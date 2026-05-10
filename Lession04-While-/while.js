// vòng lập WHile 
// trong khi ... 
// logic : trong khi (bụng còn đói) {đi lấy thức ăn }
// cú pháp : 3 yếu tố cốt lõi 
// 1.biến đếm = giá trị khởi tạo ban đầu 
// let bienDem = "giá trị ban đầu";
// while ("điều kiên tạo" ("nằm trong ngoặc tròn")){
//     // kkoios lệnh thực thị 
//     thucthihafnhdong()
//     // bc nhảy cấp nhật biến đém 
//     capnhatbiendem 
// }
// yếu tố 1: biến khởi tạo -> vách xuất phát 
// ví dụ : let soLanClick = 1 ( bắt đầu từ 1 )
// yếu tố 2: điều kiện lặp 
// là người gác cổng -> đánh giá nếu truthy -> code bên trong đc chạy -> end 
// vd : (soLanClick < 5){ ...}

// yếu tố 3 : bước nhảy 
// cửa thoát 

// VÍ DỤ BÀI TẬP
let soLanCLick = 1;
while (soLanCLick <= 3) {
    console.log(`Dang click lần thứ ${soLanCLick}`);
    soLanCLick++;
}
console.log('đã click 3 lần và end while');
// phải có false nhá nếu k sẽ là vòng lập vô tận 
// let bungDoi = true;
// while (bungDoi === true) {
//     console.log('Đang đói, đi lấy thức ăn');
// }
let miengThit =5;
while (miengThit > 0) {
    console.log(`Đang ăn miếng thịt, còn ${miengThit} miếng`);
    miengThit--; // yếu tố 3 : bước nhảy -> cập nhật biến đếm để tiến gần hơn đến điều kiện dừng (false)
}
console.log('đã ăn hết thịt và end while');

// trong AT có cơ chế retry -> thử lại nếu thất bại
// ví dụ : thử lại 3 lần nếu thất bại 
let soLanRetry = 1;
while (soLanRetry <= 3) {
    console.log(`Đang thử lại lần thứ ${soLanRetry}`);
    // giả sử có cơ chế kiểm tra kết quả ở đây, nếu thành công thì break ra khỏi vòng lặp
    // if (kiemTraThanhCong()) {
    //     break;
    // }
    soLanRetry++;
}
console.log('đã thử lại 3 lần và end while');

// vd: tìm pay cứ 1s 1 lần, max = 5 lần -> over > 5 thì end 
let maxRetry = 5;
let currentRetry = 1;
let isFound = false; // giả sử ban đầu chưa tìm thấy
while (isFound === false && currentRetry <= maxRetry) {
    console.log(`Đang tìm kiếm, lần thứ ${currentRetry}`);
// giả lập tìm kiếen là có tỷ lệ tỷ lệ tìm < 0.8
let searchResult = Math.random() > 0.8; // trả về số ngẫu nhiên từ 0 đến 1
if (searchResult === true) {
    isFound = true;
    console.log('OK đã tìm thấy click ngay thôi');
    
} else {
    console.log('Chưa tìm thấy, thử lại sau 1s');
    currentRetry++;// tăng số lần thử lên 1 (bước nhảy)
}
}
// xử lý kết quả : 
if (isFound === false) {
    console.log('Failed over 5 lần r nên dừng nhá');
}
// QUY TẮC VÀ LƯU Ý KHI SỬ DỤNG VÒNG LẶP WHILE
// Dùng khi số lần lặp chưa xác định trước, hoặc khi muốn lặp cho đến khi một điều kiện nào đó trở thành false
// Luôn đảm bảo rằng điều kiện lặp sẽ trở thành false tại một thời điểm nào đó để tránh vòng lặp vô tận
// Có thể sử dụng break để thoát khỏi vòng lặp sớm nếu cần thiết
// Có thể sử dụng continue để bỏ qua phần còn lại của vòng lặp hiện tại và tiếp tục với lần lặp tiếp theo
// Ví dụ như là mình xem video v á mình cứ lướt đến khi mình mệt thì thôi -> end 

// bài tập nè 
// có hệ thống đăng nhập. rile max = 3 , đúng trc khi hết lượt 
// hiệm thị đăng nhập thành công -> sai thì khóa account 

// yều cầu :
//1 dùng while để mô phỏng quá trìngh nhập mậ khẩu (tối đa 3 lần)

//2. ở mỗi lần thử. giả lập người dùng nhập mật khẩu bàng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else if)

//Nếu nhập đúng in ra "Đăng nhập thành công"

//Nếu nhập sai in ra sai mật khẩu

// cheeck sau khi thoát vòng lặp. kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra Tài khoản bị khóa


let matKhauDung = "1234";
let maxLanThu = 3;
let lanThu = 1;
let matKhauNhap = "0000"; // giả lập lần 1 nhập sai
while (lanThu <= maxLanThu) {
    console.log(`Lần thử thứ ${lanThu}: Đang nhập mật khẩu...`);
    if (matKhauNhap === matKhauDung) {
        console.log("Đăng nhập thành công");
        break; // thoát khỏi vòng lặp nếu đăng nhập thành công
    } else {
        console.log("Sai mật khẩu");
        lanThu++;
        if (lanThu === 2) {
            matKhauNhap = "9999"; // giả lập lần 2 nhập sai
        } else if (lanThu === 3) {
            matKhauNhap = "1234"; // giả lập lần 3 nhập đúng
        }
    }
}
if (lanThu > maxLanThu) {
    console.log("Tài khoản bị khóa");
}     
 