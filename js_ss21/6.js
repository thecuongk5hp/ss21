
let diemToan = parseFloat(prompt("Nhập điểm môn Toán:"));
let diemVan = parseFloat(prompt("Nhập điểm môn Văn:"));
let diemAnh = parseFloat(prompt("Nhập điểm môn Anh:"));


let diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

let xepLoai;

if (diemTrungBinh >= 8.0 && diemTrungBinh <= 10) {
    xepLoai = "GIỎI";
} else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    xepLoai = "KHÁ";
} else if (diemTrungBinh >= 5.0 && diemTrungBinh <= 6.4) {
    xepLoai = "TRUNG BÌNH";
} else {
    xepLoai = "YẾU";
}

console.log("Điểm trung bình: " + diemTrungBinh.toFixed(2));
console.log("Xếp loại: " + xepLoai);
