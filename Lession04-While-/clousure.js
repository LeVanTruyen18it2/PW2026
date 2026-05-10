//Closure
// định nghĩa: giúp 1 hàm có thể ghi nhớ các biến xung quanh nó ngay cả khi hàm đó được gọi ở một phạm vi khác nó vẫn có thẻ dùng đc 
// cú pháp : k có từ khóa riêng nhận biết qua 3 yếu tố :
// 1. hàm cha 
// 2. hàm con
// 3. hàm con truy cập được biến của hàm cha 
// vd:
function hamCha() {
// có khía báo biến tr hàm cha 
let bienRiengTu = 0;

// hàm con ben tr - hàm này sd bienRiengTu của hàm cha
function hamCon() {
    bienRiengTu++;
    return bienRiengTu;
}
return hamCon; // trả về hàm con
}
// 3 dấu hiệu nhận biết closure :
// 1. hamCha trả về hamCon
// 2. hamCon truy cập được bienRiengTu của hamCha
// 3. hamCon vẫn có thể truy cập được bienRiengTu ngay cả khi hamCha đã kết thúc

// HÌNH THÁI 1 : RETURN RA 1 HÀM KHÁC - CỔ ĐIỂN

//vd
function Hello(ten) {
    function sayHello() {
        console.log("Hello " + `${ten}`);
    }
    return sayHello;

}
const sayHelloToNam = Hello("Nam");
sayHelloToNam(); // Output: Hello Nam

// + tao bien Nam
// + tao ham sayHello
// + return ham sayHello
// sayHelloToNam()
// sayHello vẫn nhớ tên của biến ten dù ham cha đã kết thúc

// HÌNH THÁI 2 : CALLBACK - hiện đại - K CÀN RETURN RA HÀM KHÁC
// HAY GẶP TRONG SETTIMEOUT , SETINTERVAL , EVENT LISTENER , PROMISE , ASYNC AWAIT ,...
// vd:
function demoHenGio() {
    let msg = "Đã đến giờ!";
    setTimeout(function() {
        console.log(msg); // Output: Đã đến giờ!
    }, 100);
}
demoHenGio();
// + tạo biến msg
// + tạo hàm callback trong setTimeout
// + hàm callback truy cập được biến msg dù ham demoHenGio đã kết thúc

const testContext = {
    env: "string",
    retry: 0,
};
function taoLoggerKetqua() {
    return function (testName){
        console.log(`Test ${testName} - Env: ${testContext.env} - Retry: ${testContext.retry}`);
        
    }
    const loggerKetqua = taoLoggerKetqua();
    loggerKetqua("Login"); // Output: Test Login - Env: string - Retry: 0
    testContext.retry = 2;
    loggerKetqua("Login"); // Output: Test Login - Env: string - Retry: 2
}

// vì sao đây là closure ?
// 1. taoLoggerKetqua trả về một hàm khác
// 2. hàm con truy cập được biến của hàm cha
// 3. hàm con vẫn có thể truy cập được biến của hàm cha ngay cả khi hàm cha đã kết thúc


// closure giải quyết đc vấn đề gì 
// global scope : nếu dùng biến trong global scope thì sẽ dễ bị sửa đổi bởi các hàm khác

let soThuTu = 0;
function taoIDtest() {
    soThuTu++;
    return `ID${soThuTu}`;
}
console.log(taoIDtest()); // Output: ID1
console.log(taoIDtest()); // Output: ID2

soThuTu = 999; // sửa biến soThuTu trong global scope
console.log(taoIDtest()); // Output: ID1000

function mayTaoID() {
    let soThuTu = 0;
    function tangID() {
        soThuTu++;
        return `ID${soThuTu}`;
    }
    return tangID;
}
const taoIDMoi = mayTaoID();
console.log(taoIDMoi()); // Output: ID1
console.log(taoIDMoi()); // Output: ID2
console.log(taoIDMoi()); // Output: ID3

// khi mayTaoID chạy xong -> theo quy tác scope , bien soThuTu sẽ chết 
// Nhưng !!! vì chúng ta đã tạo ra return tangID -> tangID vẫn có thể truy cập được biến soThuTu dù mayTaoID đã kết thúc
// biến soThuTu chỉ có thể truy cập được từ bên trong hàm tangID -> tránh được việc bị sửa đổi bởi các hàm khác
// gọi taoIDMoi() nhiều lần thì biến soThuTu vẫn được tăng lên theo đúng thứ tự mà không bị ảnh hưởng bởi các hàm khác vì nó đã được đóng gói trong closure của tangID.

// ứng dụng data factory : tạo ra các hàm có chức năng tương tự nhau nhưng có dữ liệu khác nhau mà không cần phải viết lại code nhiều lần
function taoNhaMayTaoEmail (domain) {
    let dem = 0;
    return function () {
        dem++;
        return `email${dem}@${domain}`;
    }
}
const taoEmailGmail = taoNhaMayTaoEmail("gmail.com");
console.log(taoEmailGmail()); // Output: email1@gmail.com
console.log(taoEmailGmail()); // Output: email2@gmail.com


// bài tập: viet hàm tạo bộ đếm ten nut , trả về 1 obj vs 2 method 
// 1. là click () để tăng số lần click lên 1 và trả về số lần click hiện tại
// 2. là reset() để reset số lần click về 0 và trả về số lần click hiện tại
// kết quả mong muốn :
//const nutLogin = taoBoDem(Login Button);
// console.log(nutLogin.click()); // Output: 1
// console.log(nutLogin.click()); // Output: 2
// console.log(nutLogin.reset()); // Output: 0
// console.log(nutLogin.click()); // Output: 1

function taoBoDem(tenNut) {
    let soLanClick = 0;
    return {
        click() {
            soLanClick++;
            console.log(`Button ${tenNut} clicked ${soLanClick} times`); // Output: số lần click hiện tại
        },
        reset() {
            soLanClick = 0;
            console.log(`Button ${tenNut} clicked ${soLanClick} times`); // Output: số lần click hiện tại
        }
    }
}
const nutLogin = taoBoDem("Login Button");
nutLogin.click(); // Output: 1
nutLogin.click(); // Output: 2
nutLogin.reset(); // Output: 0
nutLogin.click(); // Output: 1