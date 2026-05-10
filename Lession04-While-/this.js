// This: bản chất là giống như là "Tôi" , nó đại diện cho đối tượng mà hàm đang được gọi trên đó
// qquy tắc : This k mang giá trị cố định , nó sẽ được xác định tại thời điểm hàm được gọi , dựa trên cách hàm được gọi

const user = {
    hoTen: "Nguyen Van A",
    tuoi: 18,
    gioiThieu() {
        // có sd this . this pở đây là object user 
        console.log(`Xin chào, tôi là ${this.hoTen} và tôi ${this.tuoi} tuổi.`);
    }
}
// khi gọi user.gioiThieu() -> this sẽ trỏ đến object user -> có thể truy cập được thuộc tính hoTen và tuoi của object user
user.gioiThieu(); // Output: Xin chào, tôi là Nguyen Van A và tôi 18 tuổi.

const sanPham = {
    ten: "Laptop",
    gia: 1000,
    soLuong: 10,
    inThongTin() {
        console.log(`Sản phẩm: ${this.ten} - Giá: ${this.gia} - Số lượng: ${this.soLuong}`);
    },
    giamGia(phanTram) {
        this.gia = this.gia * (1 - phanTram / 100);
        console.log(`Giá sau khi giảm: ${this.gia}`);
    },
};
sanPham.inThongTin(); // Output: Sản phẩm: Laptop - Giá: 1000 - Số lượng: 10
sanPham.giamGia(10); // Output: Giá sau khi giảm: 900
sanPham.inThongTin(); // Output: Sản phẩm: Laptop - Giá: 900 - Số lượng: 10


// Quy tắc vàng. kẻ đứng trc dấu cấm = this 
//cách nhận dạng this : 
// 1. nếu this đứng trc dấu chấm của một object nào đó thì this sẽ trỏ đến object đó
// 2. nếu this đứng trc một hàm nào đó thì this sẽ trỏ đến object mà hàm đó được gọi trên đó
// 3. nếu this đứng trc một hàm nào đó mà hàm đó được gọi trong global scope thì this sẽ trỏ đến global object (window trong trình duyệt , global trong nodejs)
// 4. nếu this đứng trc một hàm nào đó mà hàm đó được gọi trong strict mode thì this sẽ là undefined
// 5. nếu this đứng trc một hàm nào đó mà hàm đó được gọi bằng cách sử dụng call , apply hoặc bind thì this sẽ trỏ đến object được truyền vào trong call , apply hoặc bind


const sanPham2 = {
    ten: "Điện thoại",
    gia: 500,
    soLuong: 20,
    inThongTin() {
        console.log(this.ten); // this trỏ đến sanPham2
    },
};
sanPham2.inThongTin(); // Output: Điện thoại
const inThongTinSanPham = sanPham2.inThongTin;
inThongTinSanPham(); // Output: undefined (this trỏ đến global object trong strict mode)


