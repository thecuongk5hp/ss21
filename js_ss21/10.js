// Sử dụng câu lệnh if/else để kiểm tra số chẵn/lẻ
let number = parseInt(prompt("Nhập một số nguyên:"));

if (number % 2 === 0) {
    console.log(number + " là số chẵn.");
} else {
    console.log(number + " là số lẻ.");
}



// Sử dụng câu lệnh switch/case để kiểm tra ngày trong tuần
let dayOfWeek = parseInt(prompt("Nhập số từ 1 đến 7 (1: Chủ nhật, 2: Thứ 2, ..., 7: Thứ 7):"));

switch (dayOfWeek) {
    case 1:
        console.log("Chủ nhật");
        break;
    case 2:
        console.log("Thứ 2");
        break;
    case 3:
        console.log("Thứ 3");
        break;
    case 4:
        console.log("Thứ 4");
        break;
    case 5:
        console.log("Thứ 5");
        break;
    case 6:
        console.log("Thứ 6");
        break;
    case 7:
        console.log("Thứ 7");
        break;
    default:
        console.log("Giá trị không hợp lệ.");
        break;
}



// Trong if/else, câu lệnh if kiểm tra điều kiện và thực hiện một khối mã nếu điều kiện đúng. Ngược lại, nếu điều kiện sai, câu lệnh else thực hiện một khối mã khác
// Trong switch/case, giá trị biểu thức được so sánh với từng case. Nếu giá trị trùng khớp, khối mã tương ứng với case đó được thực hiện. Nếu không có trùng khớp nào, khối mã trong default sẽ được thực hiện (nếu có).