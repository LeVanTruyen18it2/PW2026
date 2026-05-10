// vòng lăjp for of : được sử dụng để lặp qua các phần tử của một mảng, mỗi lần lặp sẽ trả về giá trị của một phần tử trong mảng đó
// cấu trúc của vòng lặp for of :
// for (bien of tenMang) {
//     // code cần lặp
// }

let products = [

  { ten: "iphone", gia: 200000 },

  { ten: "airpods", gia: 300000 },

  { ten: "macbook", gia: 10000 },

];
// dùng for of + for in để in ra tên và giá của từng sản phẩm trong mảng products
// mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm ở đầu ra 
for (let product of products) {
    for (let key in product) {
        console.log(`${key}: ${product[key]}`); // ten: iphone, gia: 200000
    }
    console.log("---");
}  