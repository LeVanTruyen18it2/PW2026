// Hoisting là gì ? 
// Hoisting là một cơ chế trong JavaScript cho phép các khai báo biến và hàm được "nâng lên" (hoisted) lên đầu phạm vi của chúng trước khi mã được thực thi. 
// Điều này có nghĩa là bạn có thể sử dụng các biến và hàm trước khi chúng được khai báo trong mã của bạn mà không
// ví dụ 
// gọi hàm trước khi khai báo
xinCha0();


// tạo hàm sau
function xinCha0() {
    console.log("Xin chào");
}
// ứng dụng 
// viết kịch bản test ở đầu , và vứt hết các hỗ trợ (helpẻ , clean data) -> vắt hết các hàm hỗ trợ xún dứi cùng của file cho đỡ chật chỗ 
// hosting k áp dụng cho tất cả các loại hàm , nó phụ thuộc vào mình viết hàm kiểu gì ? 
// các môn phái viết hàm trong JS 
// 1. phái truyền thống (function declaration)
// cách viết truyền thống:
// bắt đầu bằng từ khóa function + sau đó là tên hàm + sau đó là cặp ngoặc tròn chứa tham số (nếu có) + sau đó là cặp ngoặc nhọn chứa thân hàm
// hỗ trợ hoisting 100%
function xinCha1() {
    console.log("Xin chào");
}

// ví dụ
let statuss = checkLoginStatus();
console.log(statuss);

function checkLoginStatus() {
    return "Đã đăng nhập";
}
// ưu điểm đc hoisting : có thể gọi hàm trước khi khai báo , giúp code dễ đọc hơn , dễ hiểu hơn
// có tên hàm rõ ràng , dễ debug hơn, lỗi sẽ hiện tên hàm ở trong stack trace , dễ dàng nhận biết lỗi hơn
// nhược điểm : có cú pháp dài hơn , phải viết nhiều hơn , tốn thời gian hơn , dễ bị nhầm lẫn với các biến khác nếu không đặt tên hàm rõ ràng
// có this riêng -> có thẻ ảnh hửng đến khi dùng call funtion 



// 2.  phái hàm ẩn danh (function expression)
// cú pháp : bắt đầu bằng từ khóa var/let/const + sau đó là tên biến + sau đó là dấu bằng + sau đó là từ khóa function + sau đó là cặp ngoặc tròn chứa tham số (nếu có) + sau đó là cặp ngoặc nhọn chứa thân hàm
// không hỗ trợ hoisting 
const xinCha2 = function() {
    console.log("Xin chào");
}
// ví dụ 
// gọi hàm trước khi khai báo
//xinCha2(); 
// lỗi : Uncaught ReferenceError: Cannot access 'xinCha2' before initialization
const checkLoginStatus2 = function() {
    return "Đã đăng nhập";
}

// uuw điểm : an toàn hơn nhờ const so vs declartion , tránh bị gán lại , dễ dàng nhận biết là một hàm ẩn danh , có thể sử dụng như một biểu thức , có thể truyền vào làm đối số cho các hàm khác
// ví dụ 
function tinh (a, b, callback) {
    let result = a + b;
    callback(result);
}

tinh(2, 3, function(result) {
    console.log("Kết quả là: " + result);
});
// uu điểm: linh hoạt hơn , có thể sử dụng như một biểu thức , có thể truyền vào làm đối số cho các hàm khác , có thể gán cho các biến khác nhau , có thể tạo ra các hàm ẩn danh nhanh chóng
// ví dụ : 
const utils = {
    lamSach: function(text) {
        return text.trim().toLowerCase();
    },
};
console.log(utils.lamSach("  Hello World!  ")); // Output: "hello world!"
// nhược điểm : không có tên hàm rõ ràng , khó debug hơn , lỗi sẽ không hiện tên hàm ở trong stack trace , khó nhận biết lỗi hơn
// có this riêng -> có thẻ ảnh hửng đến khi dùng call funtion
// ít gặp hơn trong code truyền thống , có thể gây nhầm lẫn với các biến khác nếu không đặt tên biến rõ ràng

// 2. phái hàm mũi tên (arrow function)
// phiên bản nâng cấp nhưng rut gọn hơn của hàm ẩn danh , 

// có cú pháp : bắt đầu bằng dấu ngoặc tròn chứa tham số (nếu có) + sau đó là dấu mũi tên => + sau đó là thân hàm (nếu có nhiều hơn một câu lệnh thì phải dùng cặp ngoặc nhọn)
// không hỗ trợ hoisting
const xinCha3 = () => {
    console.log("Xin chào");
}
// ví dụ 
// gọi hàm trước khi khai báo
xinCha3(); 
// lỗi : Uncaught ReferenceError: Cannot access 'xinCha3' before initialization
const checkLoginStatus3 = () => {
    return "Đã đăng nhập";
}

// vd :
// viết theo kiểu funtion expression cũ 
const tinhTongExpression = function(a, b) {
    return a + b;
};

// viết theo kiểu arrow function mới
const tinhTongArrow = (a, b) => {
    return a + b;
};

// rút gọn hơn nữa nếu chỉ có một biểu thức duy nhất trong thân hàm
const tinhTongArrowRutGon = (a, b) => a + b;

console.log(tinhTongExpression(2, 3));
console.log(tinhTongArrow(2, 3));
console.log(tinhTongArrowRutGon(2, 3));
// UU điểm : cú pháp ngắn gọn hơn , dễ viết hơn , dễ đọc hơn , có thể sử dụng như một biểu thức , có thể truyền vào làm đối số cho các hàm khác , có thể gán cho các biến khác nhau , có thể tạo ra các hàm ẩn danh nhanh chóng
// rất hay sử dụng khi viết call back , promise , async/await , v.v.
// có this riêng -> có thẻ ảnh hửng đến khi dùng call funtion 
// nhược điểm : không có tên hàm rõ ràng ,
// khó debug hơn , 
// lỗi sẽ không hiện tên hàm ở trong stack trace , 
// khó nhận biết lỗi hơn
// ít gặp hơn trong code truyền thống


// cách sử dụng thực tế
// dùng loại nào khi nào ? 
// viết method bên trong object 
const sanPham ={
    ten: "iPhone17",
    gia: 20000000,
    // cáhc 1.  sử dụng function expression kiểu cô điển 
    hienThiExpression: function() {
        console.log(`Sản phẩm: ${this.ten}, Giá: ${this.gia}`);
    },
    // cách 2. để viết hàm .method shorthand mới hơn
    hienThiShorthand() {
        console.log(`Sản phẩm: ${this.ten}, Giá: ${this.gia}`);
    },
    // cách 3. sử dụng arrow function (không nên dùng trong trường hợp này vì this sẽ không trỏ đến đối tượng sanPham mà sẽ trỏ đến phạm vi bên ngoài)
    hienThiArrow: () => {
        console.log(`Sản phẩm: ${this.ten}, Giá: ${this.gia}`); // this ở đây không phải là sanPham
    },
};
sanPham.hienThiExpression(); // Output: Sản phẩm: iPhone17, Giá: 20000000
sanPham.hienThiShorthand(); // Output: Sản phẩm: iPhone17, Giá: 20000000
sanPham.hienThiArrow(); // Output: Sản phẩm: undefined, Giá: undefined (vì this không trỏ đến sanPham)


// method ở trong Object hay đc sử dụng nhất , vì nó có thể truy cập được vào các thuộc tính của đối tượng thông qua this , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// vd: 1 obj có cả data lẫn hành vi 
// obj có tên là cart có dữ liệu là danh sách sản phẩm và hành vi là tính tổng giá trị của giỏ hàng
const cart = {
    item: 3,
    getSummary() {
        return `Giỏ hàng có ${this.item} sản phẩm`;
    },
};
console.log(cart.getSummary()); // Output: Giỏ hàng có 3 sản phẩm

// Object config : Obj có cấu hình, timeout ,baseurl , v.v.-> có 1 method builUrl () để ghép link hoàn chỉnh 
// obj formatter có các method để format dữ liệu , vd: formatDate() , formatCurrency() , v.v. -> giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
const config = {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    buildUrl(endpoint) {
        return `${this.baseUrl}/${endpoint}`;
    }
};
console.log(config.buildUrl("users")); // Output: https://api.example.com/users

const formatter = {
    formatDate(date) {
        return date.toLocaleDateString("vi-VN");
    },
    formatCurrency(amount) {
        return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
    },
};
console.log(formatter.formatDate(new Date())); // Output: 28/6/2024
console.log(formatter.formatCurrency(1000000)); // Output: 1.000.000 ₫  

// default parameter : khi viết hàm , có thể đặt giá trị mặc định cho tham số , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// khi người gọi k truyền đủ tham số thì js sẽ lấy giá trị mặc định thay vì trả về undefined , giúp tránh lỗi khi sử dụng tham số đó trong hàm
function dangNhap(user, password, env = "production") {
    console.log(`${env} Đăng Nhập: ${user} - ${password}`);
}
dangNhap("admin", "12345"); // Output: production Đăng Nhập: admin - 12345
dangNhap("admin", "12345", "development"); // Output: development Đăng Nhập: admin - 12345  
// luuw ý : default parameter chỉ áp dụng khi tham số nằm cuối , nếu tham số giữa bị thiếu bạn bắt buột truyền undefined or null để kích hoạt giá trị mặc định
 // ví dụ :
 function taoTestUser(ten, tuoi, gioiTinh = "Nam") {
    console.log(`Tạo user: ${ten}, Tuổi: ${tuoi}, Giới tính: ${gioiTinh}`);
 }
taoTestUser("Trần Văn A"); // Output: Tạo user: Trần Văn A, Tuổi: 30, Giới tính: Nam
taoTestUser("Trần Văn A", 30); // Output: Tạo user: Trần Văn A, Tuổi: 30, Giới tính: Nam
taoTestUser("Trần Văn B", 25, "Nữ"); // Output: Tạo user: Trần Văn B, Tuổi: 25, Giới tính: Nữ
taoTestUser("Trần Văn C", 28, undefined); // Output: Tạo user: Trần Văn C, Tuổi: 28, Giới tính: Nam (vì undefined kích hoạt giá trị mặc định)   

// nhận bao nhiêu tham số cũng đc ... (rest parameter) : khi viết hàm , có thể sử dụng rest parameter để nhận một số lượng tham số không giới hạn dưới dạng một mảng , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// cú pháp : sử dụng dấu ba chấm ... trước tên tham số để chỉ định rằng đó là một rest parameter
function tinhTong(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(tinhTong(1, 2, 3)); // Output: 6
console.log(tinhTong(4, 5)); // Output: 9
console.log(tinhTong(6)); // Output: 6
console.log(tinhTong()); // Output: 0 (vì không có tham số nào nên numbers là một mảng rỗng)


// option object : khi viết hàm , có thể sử dụng option object để truyền nhiều tham số vào hàm dưới dạng một đối tượng , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// nếu 1 hàm có nhìu hơn 3 tham số thì thay vì truyền từng tham số một cách rối rắm thì có thể gói tất cả các tham số đó vào một đối tượng và truyền đối tượng đó vào hàm , giúp code dễ đọc hơn , dễ hiểu hơn , dễ bảo trì hơn
// ví dụ : 
function taoUser(options) {
    // bóc tách các thuộc tính từ đối tượng options để sử dụng trong hàm
    const { ten, tuoi, gioiTinh = "Nam" } = options;
    console.log(`Tạo user: ${ten}, Tuổi: ${tuoi}, Giới tính: ${gioiTinh}`);
}
taoUser({ ten: "Trần Văn A", tuoi: 30 }); // Output: Tạo user: Trần Văn A, Tuổi: 30, Giới tính: Nam
taoUser({ ten: "Trần Văn B", tuoi: 25, gioiTinh: "Nữ" }); // Output: Tạo user: Trần Văn B, Tuổi: 25, Giới tính: Nữ
taoUser({ ten: "Trần Văn C"}); // Output: Tạo user: Trần Văn C, Tuổi: undefined, Giới tính: Nam (vì tuổi không được truyền nên là undefined, còn giới tính thì có giá trị mặc định là Nam)

// cách 2. sử dụng destructuring trực tiếp trong phần tham số của hàm
function taoUser2({ ten, tuoi, gioiTinh = "Nam" }) {
    console.log(`Tạo user: ${ten}, Tuổi: ${tuoi}, Giới tính: ${gioiTinh}`);
}
taoUser2({ ten: "Trần Văn A", tuoi: 30 }); // Output: Tạo user: Trần Văn A, Tuổi: 30, Giới tính: Nam
taoUser2({ ten: "Trần Văn B", tuoi: 25, gioiTinh: "Nữ" }); // Output: Tạo user: Trần Văn B, Tuổi: 25, Giới tính: Nữ
taoUser2({ ten: "Trần Văn C"}); // Output: Tạo user: Trần Văn C, Tuổi: undefined, Giới tính: Nam (vì tuổi không được truyền nên là undefined, còn giới tính thì có giá trị mặc định là Nam) 


// destructuring và speard operator : khi viết hàm , có thể sử dụng destructuring để bóc tách các thuộc tính từ đối tượng hoặc phần tử từ mảng để sử dụng trong hàm , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// cú pháp : sử dụng dấu ngoặc nhọn {} để bóc tách các thuộc tính từ đối tượng , sử dụng dấu ngoặc vuông [] để bóc tách các phần tử từ mảng
// 1. array destructuring :
function tinhTongVaTich(a, b) {
    return [a + b, a * b];
}
const [tong, tich] = tinhTongVaTich(2, 3);
console.log(`Tổng: ${tong}, Tích: ${tich}`); // Output: Tổng: 5, Tích: 6

// bỏ qua một phần tử khi destructuring
function tinhTongVaTich2(a, b) {
    return [a + b, a * b];
}
const [tong2] = tinhTongVaTich2(4, 5);
console.log(`Tổng: ${tong2}`); // Output: Tổng: 9



// // Ví dụ dữ liệu đầu vào

// // Khi chạy automation test, ta nhận được một danh sách kết quả như sau:

const testRuns = [

  [

    " login smoke ",

    { browser: "   chromium   ", env: "  staging  " },

    "  PASS ",

  ],

  [

    " checkout payment ",

    { browser: "   firefox   ", env: "  prod  " },

    "  FAIL ",

  ],

  [

    " search product ",

    { browser: "   webkit   ", env: "  staging  " },

    "  PASS ",

  ],

  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],

];

// // Bài toán

// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu

// // - Dùng destructuring để bóc tách từng phần tử trong mảng.

// // - Gợi ý:

// //   const [rawTestName, { browser, env }, rawStatus] = item

// // - Tương ứng:

// //   + rawTestName: tên test thô

// //   + { browser, env }: thông tin môi trường chạy

// //   + rawStatus: trạng thái test thô

// // Rule xử lý

// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.

// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.

// // - Nếu dữ liệu hợp lệ:

// //   + Tạo chuỗi theo định dạng: testName - browser - env

// //   + Ví dụ: login smoke - chromium - staging

// //   + Nếu PASS thì đưa vào mảng passed.

// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi

// // Hàm cần trả về dữ liệu theo dạng:

// {

//   totalValid: 3,

//   invalid: 1,

//   passed: [

//     "login smoke - chromium - staging"

//   ],

//   failed: [

//     "checkout payment - firefox - prod"

//   ]

// }

// // Gợi ý giải pháp

// // - Sử dụng vòng lặp để duyệt qua từng phần tử trong testRuns. dùng for of để duyệt qua từng phần tử trong mảng testRuns, giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn

// // - Sử dụng destructuring để bóc tách dữ liệu từ mỗi phần tử. dạng const [rawTestName, { browser, env }, rawStatus] = item giúp bóc tách dữ liệu một cách rõ ràng và dễ hiểu hơn, giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn

// // - Sử dụng điều kiện để kiểm tra tính hợp lệ của dữ liệu và phân loại vào các mảng tương ứng.

// // - Trả về kết quả cuối cùng theo định dạng yêu cầu.

function taoBaoCaoTest(testRuns) {
    const report = {
        totalValid: 0,
        invalid: 0,
        passed: [],
        failed: [],
    };

    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const status = rawStatus.trim();

        if (!testName) {
            report.invalid++;
            continue;
        }
        
        if (status !== "PASS" && status !== "FAIL") {
            report.invalid++;   
            continue;
        }
        
        const formattedTest = `${testName} - ${browser.trim()} - ${env.trim()}`;
        report.totalValid++;    
        if (status === "PASS") {
            report.passed.push(formattedTest);
        } else {
            report.failed.push(formattedTest);
        }
    }

    return report;
}

console.log(taoBaoCaoTest(testRuns));   

// cách 2 : dùng truthy value để kiểm tra tính hợp lệ của testName và status, giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
function taoBaoCaoTest2(testRuns) {
    const report = {
        totalValid: 0,
        invalid: 0,
        passed: [],
        failed: [],
    };

    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const status = rawStatus.trim();

        if (!testName || (status !== "PASS" && status !== "FAIL")) {
            report.invalid++;
            continue;
        }
        
        const formattedTest = `${testName} - ${browser.trim()} - ${env.trim()}`;
        report.totalValid++;    
        if (status === "PASS") {
            report.passed.push(formattedTest); 
            // push ở đây là gì? 
            // push là phương thức của mảng trong JavaScript dùng để thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng sau khi đã thêm phần tử. 
            // ở đây report.passed là một mảng , formattedTest là một chuỗi , 
            // khi gọi report.passed.push(formattedTest) thì sẽ thêm chuỗi formattedTest vào cuối mảng report.passed , 
            // giúp lưu trữ các test đã pass vào mảng passed của báo cáo
        } else {
            report.failed.push(formattedTest); // tương tự như trên, nhưng lưu trữ các test đã fail vào mảng failed của báo cáo
        }
    }

    return report;
}

console.log(taoBaoCaoTest2(testRuns));      

// cách 3 : dùng switch case để phân loại status, giúp code dễ đọc hơn , dễ bảo trì hơn khi có nhiều trạng thái khác nhau nhưng mà nếu có 2 status thì dùng if else cũng đc , còn nếu có nhiều hơn 2 status thì dùng switch case sẽ tốt hơn
function taoBaoCaoTest3(testRuns) {
    const report = {
        totalValid: 0,
        invalid: 0,
        passed: [],
        failed: [],
    };

    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const status = rawStatus.trim();

        if (!testName || (status !== "PASS" && status !== "FAIL")) {
            report.invalid++;
            continue;
        }
        
        const formattedTest = `${testName} - ${browser.trim()} - ${env.trim()}`;
        report.totalValid++;    

        switch (status) {
            case "PASS":
                report.passed.push(formattedTest);
                break;
            case "FAIL":
                report.failed.push(formattedTest);
                break;
        }
    }

    return report;
}

console.log(taoBaoCaoTest3(testRuns));

// sao k đc dùng falsy để kiểm tra tính hợp lệ của testName và status ?
// vì nếu dùng falsy thì sẽ có trường hợp testName là "  " (chuỗi chỉ chứa khoảng trắng) thì sẽ bị coi là falsy và bị đánh dấu là invalid , trong khi đó theo yêu cầu của bài toán thì testName chỉ cần rỗng sau khi trim() thì mới bị đánh dấu là invalid , còn nếu testName chỉ chứa khoảng trắng thì vẫn được coi là hợp lệ và sẽ được xử lý tiếp tục , nên không thể dùng falsy để kiểm tra tính hợp lệ của testName được. Còn đối với status thì cũng tương tự, nếu status là "  " (chuỗi chỉ chứa khoảng trắng) thì sẽ bị coi là falsy và bị đánh dấu là invalid, trong khi đó theo yêu cầu của bài toán thì status chỉ cần không phải "PASS" hoặc "FAIL


// spead operator : khi viết hàm , có thể sử dụng spread operator để mở rộng một mảng hoặc một đối tượng thành các phần tử hoặc thuộc tính riêng lẻ , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
// rải đều ra 
// đặt tính có dấu ba chấm ... trước tên mảng hoặc đối tượng để chỉ định rằng đó là một spread operator
// vai trò :
// 1. sao chép và gộp mảng 
// vd :
const mangGoc = [1, 2, 3];
// clone mảng gốc = spead operator
const mangSaoChep = [...mangGoc];
console.log(mangSaoChep); // Output: [1, 2, 3]
mangSaoChep.push(9999); 
console.log(mangSaoChep); // Output: [1, 2, 3, 9999]
// gộp mảng
const mang1 = ['A', 'B', 'C'];
const mang2 = ['D', 'E', 'F'];
const mangGop = [...mang1, ...mang2];
console.log(mangGop); // Output: ['A', 'B', 'C', 'D', 'E', 'F']

// chèn phần tử vào giữa mảng
const mangMoi = ['X', ...mangGoc, 'Y'];
console.log(mangMoi); // Output: ['X', 1, 2, 3, 'Y']

// spead vs Object 
// sao cheps và ghi đè
const configDefault = {
    baseUrl: "https://api.example.com",
    timeout: 5000,
    headless: true,
    retries: 3,

};
const configProd  = {
    ...configDefault,
    headless: false, // ghi đè giá trị headless từ configDefault
    retries: 5, // ghi đè giá trị retries từ configDefault
};
console.log(configProd); 
// Output: { baseUrl: 'https://api.example.com', timeout: 5000, headless: false, retries: 5 }
// trong ví dụ trên , configProd được tạo ra bằng cách sao chép tất cả các thuộc tính từ configDefault và sau đó ghi đè giá trị của headless và retries , giúp tạo ra một cấu hình mới dựa trên cấu hình mặc định nhưng có thể tùy chỉnh một số thuộc tính mà không ảnh hưởng đến cấu hình gốc.
 const configDebug = {
    ...configDefault,
    headless: false, // ghi đè giá trị headless từ configDefault
    retries: 0, // ghi đè giá trị retries từ configDefault
};
console.log(configDebug);

// spread trong tham số hàm 
const danhSachGia = [100000, 200000, 300000];
const giaMax = Math.max(...danhSachGia);
console.log(giaMax); // Output: 300000
// trong ví dụ trên , spread operator được sử dụng để mở rộng mảng danhSachGia thành các phần tử riêng lẻ khi truyền vào hàm Math.max() , giúp tìm ra giá trị lớn nhất trong mảng một cách dễ dàng và ngắn gọn hơn.};


// bài tập
/// Bài toán

// Cho dữ liệu đầu vào như sau:

// Cấu hình mặc định của bài tập

const configMacDinhBaiTap = {

  baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging

  timeout: 30000, // Thời gian chờ tối đa là 30 giây

  headless: true, // Chạy trình duyệt ở chế độ không hiển thị giao diện

  retries: 2, // Số lần thử lại khi có lỗi

};

// Cấu hình dùng để ghi đè một số giá trị mặc định

const configGhiDe = {

  timeout: 10000,

  headless: false,

};

// Danh sách tag mặc định

const tagsMacDinh = [" smoke  ", "  login "];

// Danh sách tag cần thêm

const tagsThem = ["  checkout  ", "  smoke  ", "  regression "];

// Mảng thời gian phản hồi

const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch

const tenSuiteRaw = "  Payment  Flow  ";

// Yêu cầu

// Viết hàm taoCauHinhChayTest().

// - Dùng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe.

// - Dùng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới.

// - Sau đó xử lý mảng mới bằng cách loại bỏ tag rỗng và chuyển về chữ thường.

// - Làm sạch tenSuiteRaw.

// - Nếu tenSuiteRaw rỗng thì dùng giá trị mặc định là "unknown-suite".

// - Tìm thời gian phản hồi lớn nhất bằng spread với Math.max.

// - Trả về object có dạng sau:

// Kết quả mong đợi

// {

//   suiteName: "Payment Flow",

//   config: {

//     baseUrl: "https://staging.neko.vn", // Địa chỉ mặc định đang trỏ tới môi trường staging

//     timeout: 10000, // Thời gian chờ tối đa là 30 giây

//     headless: false, // Chạy trình duyệt ở chế độ không hiển thị giao diện

//     retries: 2,

//   },

//   tags: ["smoke", "login", "checkout", "regression"],

//   slowestRespone: 3400

// }


// Gợi ý giải pháp

// - Sử dụng object spread để tạo configCuoi từ configMacDinhBaiTap và configGhiDe, giúp tạo ra một cấu hình mới dựa trên cấu hình mặc định nhưng có thể tùy chỉnh một số thuộc tính mà không ảnh hưởng đến cấu hình gốc.

// - Sử dụng array spread để gộp tagsMacDinh và tagsThem thành một mảng mới, giúp kết hợp các tag từ hai mảng một cách dễ dàng và ngắn gọn hơn.

// - Sử dụng phương thức filter để loại bỏ tag rỗng và phương thức map để chuyển về chữ thường, giúp làm sạch và chuẩn hóa dữ liệu trong mảng tag.

// - Sử dụng phương thức trim để làm sạch tenSuiteRaw và kiểm tra nếu sau khi trim mà tenSuiteRaw rỗng thì gán giá trị mặc định là "unknown-suite", giúp đảm bảo rằng suiteName luôn có một giá trị hợp lệ.

// - Sử dụng spread với Math.max để tìm thời gian phản hồi lớn nhất trong mảng tocDoPhanHoi, giúp xác định thời gian phản hồi chậm nhất một cách nhanh chóng và hiệu quả.

function taoCauHinhChayTest() {
    const configCuoi = { ...configMacDinhBaiTap, ...configGhiDe };
    const tagsGop = [...tagsMacDinh, ...tagsThem];
    // loại bỏ tag giống nhau , loại bỏ tag rỗng , chuyển về chữ thường
    // const tagsList = new Set(); // giải thích Set () là gì ? Set là một cấu trúc dữ liệu trong JavaScript, giống như một mảng nhưng không cho phép các giá trị trùng lặp. cách khác không dùng Set thì có thể dùng filter và indexOf để loại bỏ tag trùng lặp nhưng sẽ phức tạp hơn , còn dùng Set thì sẽ tự động loại bỏ các giá trị trùng lặp khi thêm vào , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
    // cách khác để loại bỏ tag trùng lặp mà không dùng Set , nhưng sẽ phức tạp hơn , cần phải kiểm tra xem tag đã tồn tại trong tagsList2 chưa trước khi thêm vào , giúp code dài hơn , khó đọc hơn , khó bảo trì hơn
    // cáhc 2 là dùng filter và indexOf để loại bỏ tag trùng lặp nhưng sẽ phức tạp hơn , còn dùng Set thì sẽ tự động loại bỏ các giá trị trùng lặp khi thêm vào , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn
    const tagsList2 = [];
    for (const tag of tagsGop) {
        const tagSach = tag.trim().toLowerCase();
        if (tagSach && !tagsList2.includes(tagSach)) {
            tagsList2.push(tagSach);
        }
    }
    //  for (const tag of tagsGop) {
    //     const tagSach = tag.trim().toLowerCase();
    //     if (tagSach) {   
    //         tagsList.add(tagSach);
    //     }
    // }
    const tagsSach = [...tagsList2];
    const tenSuite = tenSuiteRaw.trim() || "unknown-suite";
    const tocDoPhanHoiLonNhat = Math.max(...tocDoPhanHoi);

    return {
        suiteName: tenSuite,
        config: configCuoi,
        tags: tagsSach,
        slowestRespone: tocDoPhanHoiLonNhat,
    };
}

console.log(taoCauHinhChayTest());  

/// -----------------Quan Trọng-----------------///
// Hàm CallBack (gọi lại) : khi viết hàm , có thể sử dụng callback để truyền một hàm khác vào làm đối số và gọi hàm đó trong thân hàm khi cần thiết , giúp code linh hoạt hơn , dễ đọc hơn , dễ bảo trì hơn
// call back là 1 hàm A đc truyền tham số cho 1.  hàm B , và hàm B sẽ gọi lại hàm A đó vào một thời điểm nào đó trong quá trình thực thi của nó ,
//  giúp tạo ra sự kết nối giữa hai hàm và cho phép hàm A được thực thi sau khi hàm B hoàn thành một số công việc nhất định.
// vd:
// B1 : tạo callback
function quaylaiDeAn(){
    console.log("Đây là hàm callback được gọi lại sau khi hoàn thành công việc của hàm chính");

} 
// b2 : tạo hàm chính và truyền callback vào làm đối số
function coBan(callback) {
    console.log("Đây là hàm chính đang thực hiện công việc của nó");

    // B3: gọi lại hàm callback sau khi hoàn thành công việc của hàm chính
    callback();
}
// b4 : chạy -> k có dấu ngoạc tròn sau () quay lại ăn 
coBan(quaylaiDeAn);
// Output:
// Đây là hàm chính đang thực hiện công việc của nó
// Đây là hàm callback được gọi lại sau khi hoàn thành công việc của hàm chính


// callback có tham số : 
// callback có thể nhận tham số để truyền dữ liệu từ hàm chính sang hàm callback , giúp cho việc xử lý kết quả sau khi tính toán được linh hoạt hơn và có thể tùy chỉnh theo nhu cầu của người dùng.
// // ví dụ :
// function tinhTong(a, b, goiLai){
//     const sum = a + b;
//     goiLai(sum);
// }
// tinhTong(2, 3,
//     function(result) {
//     console.log("Kết quả là: " + result);
// });
//Output: Kết quả là: 5
// trong ví dụ trên , hàm tinhTong nhận vào hai số a và b , sau đó tính tổng của chúng và gọi lại hàm callback với kết quả tổng đó làm đối số , giúp cho việc xử lý kết quả sau khi tính toán được linh hoạt hơn và có thể tùy chỉnh theo nhu cầu của người dùng.

// callback trong thực tế : callback thường được sử dụng trong các tình huống bất đồng bộ như xử lý sự kiện , gọi API , v.v. để đảm bảo rằng một số công việc được thực hiện sau khi một công việc khác đã hoàn thành mà không làm gián đoạn luồng chính của chương trình.

// Array callback method 
// 1. map : tạo ra 1 mmản ms dựa trên mảng gốc nhưng có thể thay đổi giá trị của phần tử trong mảng mới , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn khi cần tạo ra một mảng mới từ một mảng đã có mà không làm thay đổi mảng gốc.
// cú pháp : mảngGốc.map(callback) , callback là một hàm nhận vào phần tử hiện tại , chỉ số của phần tử đó và mảng gốc (tùy chọn) và trả về giá trị mới cho phần tử đó trong mảng mới.
const soNguyen = [1, 2, 3, 4, 5];
const soBinhPhuong = soNguyen.map(function(num) {
    return num * num;
});
console.log(soBinhPhuong); // Output: [1, 4, 9, 16, 25]
// cách khác : dùng arrow function để viết ngắn gọn hơn
const soBinhPhuong2 = soNguyen.map(num => num * num);
console.log(soBinhPhuong2); // Output: [1, 4, 9, 16, 25]

const giaSanPham = [100000, 200000, 300000];
function giamGia(value, index, array) {
    console.log('value', value);
    console.log('index', index);
    console.log('array', array);
    return value * 0.9;
}
const giaSauGiam = giaSanPham.map(giamGia);
console.log(giaSauGiam); // Output: [90000, 180000, 270000]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
const tenNguoiDung = users.map((u) => {
    return `${u.name}`;
});
console.log(tenNguoiDung); // Output: ["Alice", "Bob", "Charlie"]

// 2. filter : tạo ra một mảng mới chứa các phần tử từ mảng gốc mà thỏa mãn đk nhất định do callback xác định , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn khi cần tạo ra một mảng mới từ một mảng đã có mà chỉ chứa các phần tử thỏa mãn một điều kiện nào đó mà không làm thay đổi mảng gốc.
// cú pháp : mảngGốc.filter(callback) , callback là một hàm nhận vào phần tử hiện tại , chỉ số của phần tử đó và mảng gốc (tùy chọn) và trả về true nếu phần tử đó thỏa
// vd:
const sanPhamPhone = [
    { ten: "iPhone", gia: 20000000 , tonkho:true},
    { ten: "Samsung", gia: 15000000 , tonkho:true},
    { ten: "Xiaomi", gia: 5000000 , tonkho:false},
];
const sanPhamGiaCao = sanPhamPhone.filter(function(sp) {
    return sp.gia > 10000000;
});
console.log(sanPhamGiaCao); // Output: [{ ten: "iPhone", gia: 20000000 }, { ten: "Samsung", gia: 15000000 }]
// cách khác : dùng arrow function để viết ngắn gọn hơn
const sanPhamGiaCao2 = sanPhamPhone.filter(sp => sp.gia > 10000000);
console.log(sanPhamGiaCao2); // Output: [{ ten: "iPhone", gia: 20000000 }, { ten: "Samsung", gia: 15000000 }]
// dùng for cũng đc nhưng sẽ dài hơn , khó đọc hơn , khó bảo trì hơn
const sanPhamGiaCao3 = [];
for (const sp of sanPhamPhone) {
    if (sp.gia > 10000000) {
        sanPhamGiaCao3.push(sp);
    }
}
console.log(sanPhamGiaCao3); // Output: [{ ten: "iPhone", gia: 20000000 }, { ten: "Samsung", gia: 15000000 }]

// lọc giá <2000000
const sanPhamGiaThap = sanPhamPhone.filter(sp => sp.gia < 2000000);
console.log(sanPhamGiaThap); // Output: [{ ten: "Xiaomi", gia: 5000000 }]
// dùng return
const sanPhamGiaThap2 = sanPhamPhone.filter((sp) => {
    return sp.gia < 2000000;
});
console.log(sanPhamGiaThap2); // Output: [{ ten: "Xiaomi", gia: 5000000 }]

// lọc 2 đk nè > 20000 và còn hàng
const sanPhamGiaVua = sanPhamPhone.filter(sp => sp.gia > 2000000 && sp.tonkho);
console.log(sanPhamGiaVua); // Output: [{ ten: "iPhone", gia: 20000000 , tonkho:true}, { ten: "Samsung", gia: 15000000 , tonkho:true}]
// dùng return
const sanPhamGiaVua2 = sanPhamPhone.filter((sp) => {
    return sp.gia > 2000000 && sp.tonkho;
});
console.log(sanPhamGiaVua2); // Output: [{ ten: "iPhone", gia: 20000000 , tonkho:true}, { ten: "Samsung", gia: 15000000 , tonkho:true}]

// find : tìm phần tử đầu tiên trong mảng thỏa mãn điều kiện do callback xác định và trả về phần tử đó , giúp code ngắn gọn hơn , dễ đọc hơn , dễ bảo trì hơn khi cần tìm một phần tử trong mảng đã có mà thỏa mãn một điều kiện nào đó mà không làm thay đổi mảng gốc.
// cú pháp : mảngGốc.find(callback) , callback là một hàm nhận vào phần tử hiện tại , chỉ số của phần tử đó và mảng gốc (tùy chọn) và trả về true nếu phần tử đó thỏa
// vd:
const users1 = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
    { id: 3, name: "Charlie", role: "user" },
];
const userRole = users1.find((user) => {
    return user.role === "admin";
});
console.log(userRole);

const userRole2 = users1.find(user => user.role === "user");
console.log(userRole2);


